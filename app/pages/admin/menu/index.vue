<script setup lang="ts">
	import MenuTable from './_components/menu-table.vue';

	definePageMeta({
		layout: 'custom',
		middleware: 'auth',
	});

	// const { status, data, refresh } = await useLazyFetch('/api/v1/menus', {
	// 	key: 'admin-menu',
	// 	method: 'GET',
	// });
</script>

<template>
	<div>
		<div>
			<h1 class="text-3xl font-bold mb-4">Menu Management</h1>
			<p class="text-gray-600 mb-6">
				Manage your restaurant's menu items here.
			</p>
		</div>
		<div class="p-4 rounded-md border border-neutral-200">
			<MenuHeader />
			<MenuTable />
			<MenuPagination />
		</div>
	</div>
</template>
