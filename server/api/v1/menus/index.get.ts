import { serverSupabaseClient } from '#supabase/server';
import { convertKeysToCamelCase } from '~~/server/utils/caseConverters';
import { sendResponse } from '~~/server/utils/sendResponse';
import { validateQueryParams } from '~~/server/utils/validateQueryParams';

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const query = getQuery(event);

	const limit = Number(query.limit) || 10;
	const page = Number(query.page) || 1;
	const search = query.search || '';

	const offset = (page - 1) * limit;

	let supabaseQuery = client.from('menus').select('*', { count: 'exact' });

	if (search) {
		supabaseQuery = supabaseQuery.ilike('name', `%${search}%`);
	}

	supabaseQuery = supabaseQuery.range(offset, offset + Number(limit) - 1);

	const { data, error, count } = await supabaseQuery;

	const transformData = convertKeysToCamelCase(data);
	if (error) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
			message: error.message,
		});
	}

	return sendResponse({
		data: transformData,
		event,
		meta: {
			page,
			pageSize: limit,
			total: count || 0,
			totalPages: count ? Math.ceil(count / limit) : 1,
		},
	});
});
