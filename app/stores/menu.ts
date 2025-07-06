interface User {
	id: number;
	name: string;
	position: string;
	email: string;
	role: string;
}

export function useMenuStore() {
	const menu = ref<User[]>([
		{
			id: 1,
			name: 'Lindsay Walton',
			position: 'Front-end Developer',
			email: 'lindsay.walton@example.com',
			role: 'Member',
		},
		{
			id: 2,
			name: 'Courtney Henry',
			position: 'Designer',
			email: 'courtney.henry@example.com',
			role: 'Admin',
		},
		{
			id: 3,
			name: 'Tom Cook',
			position: 'Director of Product',
			email: 'tom.cook@example.com',
			role: 'Member',
		},
		{
			id: 4,
			name: 'Whitney Francis',
			position: 'Copywriter',
			email: 'whitney.francis@example.com',
			role: 'Admin',
		},
		{
			id: 5,
			name: 'Leonard Krasner',
			position: 'Senior Designer',
			email: 'leonard.krasner@example.com',
			role: 'Owner',
		},
		{
			id: 6,
			name: 'Floyd Miles',
			position: 'Principal Designer',
			email: 'floyd.miles@example.com',
			role: 'Member',
		},
	]);

	return menu;
}
