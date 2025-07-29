import { serverSupabaseClient } from '#supabase/server';
import { convertKeysToCamelCase } from '~~/server/utils/caseConverters';

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

	const { data, error } = await client
		.from('menus')
		.select('*')
		.eq('id', id)
		.single();

	const tranformData = convertKeysToCamelCase(data);

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
		data: tranformData,
	});
});
