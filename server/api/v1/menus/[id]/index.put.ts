import z from 'zod';
import { serverSupabaseClient } from '#supabase/server';
import { convertKeysToSnakeCase } from '~~/server/utils/caseConverters';

const MenuSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	japanese_name: z.string().optional(),
	price: z.coerce.number().positive('Price must be positive'),
	description: z.string().optional(),
});

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const id = getRouterParam(event, 'id');
	const formData = await readFormData(event);

	const formObject = convertKeysToSnakeCase(
		Object.fromEntries(formData.entries()),
	);

	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
			message: 'ID is required',
		});
	}

	const image = formData.get('image');
	let imageUrl = '';

	// Handle image upload if image provided
	if (image && image instanceof File) {
		if (!image.type.startsWith('image/')) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Invalid file type',
			});
		}

		const arrayBuffer = await image.arrayBuffer();
		const fileExt = image.name.split('.').pop();
		const fileName = `${Date.now()}.${fileExt}`;
		const filePath = `menus/${fileName}`;

		const { error: uploadError } = await client.storage
			.from('images')
			.upload(filePath, arrayBuffer, {
				contentType: image.type,
				upsert: true,
			});

		if (uploadError) {
			throw createError({
				statusCode: 500,
				statusMessage: 'Image upload failed',
				message: uploadError.message,
			});
		}

		const { data } = client.storage.from('images').getPublicUrl(filePath);

		imageUrl = data.publicUrl;
	}

	const { image: _, ...fields } = formObject;
	const result = MenuSchema.safeParse(fields);

	if (!result.success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
			data: result.error.flatten().fieldErrors,
		});
	}

	// Prepare update data
	const menuData = {
		...result.data,
		...(imageUrl ? { image: imageUrl } : {}),
	};

	const { error } = await client.from('menus').update(menuData).eq('id', id);

	if (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
			message: error.message,
		});
	}

	return sendResponse({
		event,
		message: 'Successfully updated',
	});
});
