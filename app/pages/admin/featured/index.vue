<script setup lang="ts">
	import FeaturedTable from './_components/featured-table.vue';

	definePageMeta({
		layout: 'custom',
		middleware: 'auth',
	});
</script>

<template>
	<div>
		<div>
			<h1 class="text-3xl font-bold mb-4">Featured Management</h1>
			<p class="text-gray-600 mb-6">
				Manage your restaurant's featured menu items here.
			</p>
		</div>
		<FeaturedTable />
	</div>
</template>
