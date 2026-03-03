import type { Toast } from '@nuxt/ui/runtime/composables/useToast.js';
import { useDebounceFn } from '@vueuse/core';
import type { Feature } from '~~/shared/types/feature.type';
import type { StoreResponse } from '~~/shared/types/storeResponse.type';

const apiUrl = '/api/v1/features';

export const useFeatureStore = defineStore('feature', () => {
	// State
	const features = ref<Feature[]>([]);
	const feature = ref<Feature>();

	const isLoading = ref(false);
	const search = ref('');
	const page = ref(1);
	const limit = ref(10);
	const total = ref(0);

	// Actions
	async function getFeatures() {
		isLoading.value = true;

		const payload = {
			search: search.value,
			page: page.value.toString(),
			limit: limit.value.toString(),
		};

		const queryString = new URLSearchParams(payload).toString();
		const url = `${apiUrl}${queryString ? '?' + queryString : ''}`;

		try {
			const response = await $fetch<ApiResponse<Feature[]>>(url);
			features.value = response.data ?? [];
			console.log(features.value);
			total.value = response.meta?.total ?? 0;
			page.value = response.meta?.page ?? 1;
		} catch (error) {
			console.log('Featured menu error:', error);
			features.value = [];
		} finally {
			isLoading.value = false;
		}
	}

	async function getFeature(id: string) {
		try {
			isLoading.value = true;
			const response = await $fetch<ApiResponse<any>>(`${apiUrl}/${id}`, {
				method: 'GET',
			});
			feature.value = response.data;
		} catch (error: any) {
			console.log('Featured menu error:', error);
			feature.value = {};
		} finally {
			isLoading.value = false;
		}
	}

	async function addFeature(payload: FormData): Promise<Partial<Toast>> {
		isLoading.value = true;
		try {
			const response = await $fetch<ApiResponse<any>>(apiUrl, {
				method: 'POST',
				body: payload,
			});

			await getFeatures();

			return {
				title: 'Featured menu Added',
				description: response.message,
				color: 'success',
			};
		} catch (error: any) {
			console.log('Featured menu error:', error);
			return {
				title: error.statusMessage || 'Error',
				description: error.message || 'Please try again.',
				color: 'error',
			};
		} finally {
			isLoading.value = false;
		}
	}

	async function deleteFeature(id: string): Promise<Partial<Toast>> {
		isLoading.value = true;
		try {
			const response = await $fetch<ApiResponse<any>>(`${apiUrl}/${id}`, {
				method: 'DELETE',
			});

			await getFeatures();

			return {
				title: 'Featured menu deleted',
				color: 'success',
				description: response.message,
			};
		} catch (error: any) {
			console.log('Featured menu error:', error);
			return {
				title: error.statusMessage || 'Error',
				description: error.message || 'Please try again.',
				color: 'error',
			};
		} finally {
			isLoading.value = false;
		}
	}

	async function updateFeature({
		id,
		payload,
	}: {
		id: string;
		payload: FormData;
	}): Promise<Partial<Toast>> {
		try {
			console.log(payload);
			isLoading.value = true;
			const response = await $fetch<ApiResponse<any>>(`${apiUrl}/${id}`, {
				method: 'PUT',
				body: payload,
			});
			return {
				title: 'Featured menu updated',
				description: response.message,
				color: 'success',
			};
		} catch (error: any) {
			console.log('Featured menu error:', error);
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
		getFeatures();
	}, 300);

	watch(search, debouncedSearch);

	watch(page, () => {
		getFeatures();
	});

	return {
		features,
		search,
		page,
		limit,
		isLoading,
		total,
		getFeatures,
		getFeature,
		addFeature,
		deleteFeature,
		updateFeature,
	};
});
