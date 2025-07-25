import type { Toast } from '@nuxt/ui/runtime/composables/useToast.js';
import { useDebounceFn } from '@vueuse/core';
import type { Menu } from '~~/shared/types/menu.type';
import type { StoreResponse } from '~~/shared/types/storeResponse.type';

const apiUrl = '/api/v1/menus';

export function useMenuStore() {
	// State
	const menus = ref<Menu[]>([]);
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
			const response = await $fetch<ApiResponse<Menu[]>>(url);
			menus.value = response.data ?? [];
			console.log('menu fetch', menus.value);
			total.value = response.meta?.total ?? 0;
			page.value = response.meta?.page ?? 1;
		} catch (error) {
			console.log('Menu error:', error);
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
			console.log('Menu error:', error);
			menu.value = {};
		} finally {
			isLoading.value = false;
		}
	}

	async function addMenu(payload: FormData): Promise<Partial<Toast>> {
		isLoading.value = true;
		try {
			const response = await $fetch<ApiResponse<any>>(apiUrl, {
				method: 'POST',
				body: payload,
			});

			await getMenus();

			return {
				title: 'Menu Added',
				description: response.message,
				color: 'success',
			};
		} catch (error: any) {
			console.log('Menu error:', error);
			return {
				title: error.statusMessage || 'Error',
				description: error.message || 'Please try again.',
				color: 'error',
			};
		} finally {
			isLoading.value = false;
		}
	}

	async function deleteMenu(id: string): Promise<Partial<Toast>> {
		isLoading.value = true;
		try {
			const response = await $fetch<ApiResponse<any>>(`${apiUrl}/${id}`, {
				method: 'DELETE',
			});

			await getMenus();

			return {
				title: 'Menu deleted',
				color: 'success',
				description: response.message,
			};
		} catch (error: any) {
			console.log('Menu error:', error);
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
			console.log('Menu error:', error);
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
