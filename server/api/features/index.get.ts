import { serverSupabaseClient } from '#supabase/server';
import { sendResponse } from '~~/server/utils/sendResponse';

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);

	const query = getQuery(event);
	const search = query.search?.toString().trim() || '';
	const page = parseInt(query.page as string) || 1;
	const limit = parseInt(query.limit as string) || 10;
	const offset = (page - 1) * limit;

	let supabaseQuery = client.from('features').select('*', { count: 'exact' });

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
