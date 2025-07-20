import z from 'zod';
import { serverSupabaseClient } from '#supabase/server';

const MenuSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	japaneseName: z.string().optional(),
	price: z.coerce.number().positive('Price must be positive'),
	description: z.string().optional(),
});

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const formData = await readFormData(event);
	const formObject = Object.fromEntries(formData.entries());

	const image = formData.get('image');
	let imageUrl = '';

	if (image && image instanceof File) {
		// if (image.size > 2 * 1024 * 1024) {
		// 	throw createError({ statusCode: 400, statusMessage: 'File too large' });
		// }
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
			.from('menu-images')
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

		const { data } = client.storage.from('menu-images').getPublicUrl(filePath);

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

	const menuData = {
		...result.data,
		image: imageUrl || '',
	};

	const { data, error } = await client.from('menus').insert(menuData).single();

	if (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
			message: error.message,
		});
	}

	return sendResponse({
		event,
		statusCode: 201,
		message: 'Successfully created',
		data,
	});
});
