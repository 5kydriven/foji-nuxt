import type { Menu } from '~~/types/menu.type';

export function useMenuStore() {
	const menus = ref<Menu[]>([
		{
			id: '1',
			japaneseName: '豚肉のカツ丼の煮卵セット',
			name: 'Stewed Egg with Pork Chop Rice Set',
			image: '/menu.png',
			price: 300,
			description: 'Delicious menu item 1',
		},
		{
			id: '2',
			japaneseName: '特製豚生姜ご飯セット',
			name: 'Special Pork Ginger Rice Set',
			image: '/menu-2.png',
			price: 300,
			description: 'Tasty menu item 2',
		},
		{
			id: '3',
			japaneseName: '豚肉チョップ天心飯セット',
			name: 'Pork Chop Tenshinhan Set',
			image: '/menu-3.png',
			price: 300,
			description: 'Yummy menu item 3',
		},
		{
			id: '4',
			japaneseName: 'チキンライスオムレツセット / 日本の味',
			name: 'Chicken Rice Omelet Set / Japanes Taste',
			image: '/menu-4.png',
			price: 300,
			description: 'Scrumptious menu item 4',
		},
		{
			id: '5',
			japaneseName: 'スチューズエッグとチキンライスセット',
			name: 'Stewes Egg with Chicken Rice Set',
			image: '/menu-5.png',
			price: 300,
			description: 'Savory menu item 5',
		},
		{
			id: '6',
			japaneseName: '海鮮チャーハンセット / 日本の味',
			name: 'Sea Food Fried Rice Set / Japanes Taste',
			image: '/menu-6.png',
			price: 300,
			description: 'Appetizing menu item 6',
		},
	]);

	return menus;
}
