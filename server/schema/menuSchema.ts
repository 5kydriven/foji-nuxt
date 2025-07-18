import z from 'zod';

export const MenuSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	japaneseName: z.string().optional(),
	price: z.number().positive('Price must be positive'),
	description: z.string().optional(),
});
