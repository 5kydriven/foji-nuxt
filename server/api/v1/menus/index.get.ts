import { serverSupabaseClient } from '#supabase/server';
import { sendResponse } from '~~/server/utils/sendResponse';
import { validateQueryParams } from '~~/server/utils/validateQueryParams';

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const { limit, page, search, offset } = validateQueryParams(event);

	let supabaseQuery = client.from('menus').select('*', { count: 'exact' });

	if (search) {
		supabaseQuery = supabaseQuery.ilike('name', `%${search}%`);
	}

	supabaseQuery = supabaseQuery.range(offset, offset + limit - 1);

	const { data, error, count } = await supabaseQuery;

	if (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
			message: error.message,
		});
	}

	return sendResponse({
		data,
		event,
		meta: {
			page,
			pageSize: limit,
			total: count || 0,
			totalPages: count ? Math.ceil(count / limit) : 1,
		},
	});
});
