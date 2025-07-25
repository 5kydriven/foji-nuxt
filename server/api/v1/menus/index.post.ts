import { serverSupabaseClient } from '#supabase/server';
import { menuSchema } from '~~/schema/menuSchema';
import { convertKeysToSnakeCase } from '~~/server/utils/caseConverters';

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const formData = await readFormData(event);
	const formObject = convertKeysToSnakeCase(
		Object.fromEntries(formData.entries()),
	);

	const image = formData.get('image');
	let imageUrl = '';

	try {
		if (image && image instanceof File) {
			if (!image.type.startsWith('image/')) {
				throw createError({
					statusCode: 400,
					statusMessage: 'Bad Request',
					message: 'Invalid file type',
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
					statusMessage: 'Internal Server error',
					message: 'Image upload failed',
					data: uploadError.message,
				});
			}

			const { data } = client.storage.from('images').getPublicUrl(filePath);

			imageUrl = data.publicUrl;
		}

		const { image: _, ...fields } = formObject;
		const result = menuSchema.safeParse(fields);

		if (!result.success) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Bad Request',
				message: 'Invalid menu input',
				data: result.error.flatten().fieldErrors,
			});
		}

		const transformData = convertKeysToSnakeCase({
			...result.data,
			image: imageUrl || '',
		});

		const { error } = await client.from('menus').insert(transformData);

		if (error) {
			throw createError({
				statusCode: 500,
				statusMessage: 'Internal Server Error',
				message: 'Something went wrong',
				data: error.message,
			});
		}

		return sendResponse({
			event,
			statusCode: 201,
			message: 'Successfully created menu',
		});
	} catch (error: any) {
		console.log(error);
	}
});
