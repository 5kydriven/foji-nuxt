import z from 'zod';

export const menuSchema = z.object({
	name: z.string({ required_error: "Field can't be empty" }),
	japaneseName: z.string().optional(),
	price: z.number().positive('Price must be positive'),
	description: z.string().optional(),
	image: z.any().optional(),
});
