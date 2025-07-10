import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const id = getRouterParam(event, 'id');

	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
			message: 'ID is required',
		});
	}

	const { data, error } = await client.from('menus').delete().eq('id', id);

	if (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
			message: error.message,
		});
	}

	return sendResponse({
		event,
		message: 'Successfully deleted menu',
		data,
	});
});
