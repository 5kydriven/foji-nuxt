import { useDebounceFn } from '@vueuse/core';
import type { Menu } from '~~/types/menu.type';
import type { StoreResponse } from '~~/types/storeResponse.type';

const apiUrl = '/v1/api/menus';

export function useMenuStore() {
	// State
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
	const menu = ref<Menu>();

	const isLoading = ref(false);
	const search = ref('');
	const page = ref(1);
	const limit = ref(10);
	const total = ref(0);

	// Actions
	async function getMenus() {
		isLoading.value = true;

		const payload = {
			search: search.value,
			page: page.value.toString(),
			limit: limit.value.toString(),
		};

		const queryString = new URLSearchParams(payload).toString();
		const url = `${apiUrl}${queryString ? '?' + queryString : ''}`;

		try {
			const response = await $fetch<ApiResponse<any>>(url);
			menus.value = response.data;
			total.value = response.meta?.total ?? 0;
			page.value = response.meta?.page ?? 1;
		} catch (error) {
			console.log(error);
			menus.value = [];
		} finally {
			isLoading.value = false;
		}
	}

	async function getMenu(id: string) {
		try {
			isLoading.value = true;
			const response = await $fetch<ApiResponse<any>>(`${apiUrl}/${id}`, {
				method: 'GET',
			});
			menu.value = response.data;
		} catch (error: any) {
			console.log(error);
			menu.value = {};
		} finally {
			isLoading.value = false;
		}
	}

	async function addMenu(payload: FormData): Promise<StoreResponse> {
		try {
			isLoading.value = true;
			const response = await $fetch<ApiResponse<any>>(apiUrl, {
				method: 'POST',
				body: payload,
			});
			return {
				title: 'Menu Added',
				description: response.message,
				color: 'success',
			};
		} catch (error: any) {
			console.log(error);
			return {
				title: error.statusMessage || 'Error',
				description: error.message || 'Please try again.',
				color: 'error',
			};
		} finally {
			isLoading.value = false;
		}
	}

	async function deleteMenu(id: string): Promise<StoreResponse> {
		try {
			isLoading.value = true;
			const response = await $fetch<ApiResponse<any>>(`${apiUrl}/${id}`, {
				method: 'DELETE',
			});
			return {
				title: 'Menu deleted',
				color: 'success',
				description: response.message,
			};
		} catch (error: any) {
			console.log(error);
			return {
				title: error.statusMessage || 'Error',
				description: error.message || 'Please try again.',
				color: 'error',
			};
		} finally {
			isLoading.value = false;
		}
	}

	async function updateMenu({
		id,
		payload,
	}: {
		id: string;
		payload: any;
	}): Promise<StoreResponse> {
		try {
			isLoading.value = true;
			const response = await $fetch<ApiResponse<any>>(`${apiUrl}/${id}`, {
				method: 'PUT',
				body: payload,
			});
			return {
				title: 'Menu updated',
				description: response.message,
				color: 'success',
			};
		} catch (error: any) {
			console.log(error);
			return {
				title: error.statusMessage || 'Error',
				description: error.message || 'Please try again.',
				color: 'error',
			};
		} finally {
			isLoading.value = false;
		}
	}

	const debouncedSearch = useDebounceFn(() => {
		page.value = 1;
		getMenus();
	}, 300);

	watch(search, debouncedSearch);

	watch(page, () => {
		getMenus();
	});

	return {
		menus,
		search,
		page,
		limit,
		isLoading,
		total,
		getMenus,
		getMenu,
		addMenu,
		deleteMenu,
		updateMenu,
	};
}
