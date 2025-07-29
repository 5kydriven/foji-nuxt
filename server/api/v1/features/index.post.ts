import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const body = await readBody(event);

	const { data, error } = await client.from('features').insert(body);

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
		message: 'Successfully created feature',
	});
});
