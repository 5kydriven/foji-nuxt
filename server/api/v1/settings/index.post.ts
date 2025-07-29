import z from 'zod';
import { serverSupabaseClient } from '#supabase/server';

export const UserSchema = z.object({
	displayName: z.string().optional(),
	email: z.string().email(),
	password: z.string().optional(),
	phone: z.string().min(11),
});

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient<Database>(event);
	const body = await readBody(event);

	const result = UserSchema.safeParse(body);

	if (!result.success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Bad Request',
			data: result.error.flatten().fieldErrors,
		});
	}

	const { data, error } = await client.auth.updateUser({
		email: result.data.email,
		password: result.data.password,
		phone: result.data.phone,
	});

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
