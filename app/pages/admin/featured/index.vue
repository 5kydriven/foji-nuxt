<script setup lang="ts">
	definePageMeta({
		layout: 'custom',
		middleware: 'auth',
	});

	const store = useFeatureStore();

	onMounted(async () => {
		await callOnce(() => store.getFeatures());
	});
</script>

<template>
	<div>
		<div>
			<h1 class="text-3xl font-bold mb-4">Feature Management</h1>
			<p class="text-gray-600 mb-6">
				Manage your restaurant's featured items here.
			</p>
		</div>
		<FeaturedHeader />
		<FeaturedTable
			:features="store.features"
			:isLoading="store.isLoading"
		/>
		<FeaturedPagination />
	</div>
</template>
