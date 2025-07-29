import z from 'zod';
import { getQuery } from 'h3';

const QuerySchema = z.object({
	search: z.string().optional(),
	page: z.preprocess(
		(val) => parseInt(val as string, 10),
		z.number().int().positive().default(1),
	),
	limit: z.preprocess(
		(val) => parseInt(val as string, 10),
		z.number().int().positive().max(100).default(10),
	),
});

export function validateQueryParams(event: any) {
	const query = getQuery(event);
	const result = QuerySchema.safeParse(query);

	if (!result.success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalid Query Parameters',
			data: result.error.flatten().fieldErrors,
		});
	}

	const { page, limit, search = '' } = result.data;

	const offset = (page - 1) * limit;

	return { page, limit, search, offset };
}
