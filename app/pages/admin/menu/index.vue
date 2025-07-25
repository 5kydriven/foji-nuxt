<script setup lang="ts">
	import MenuTable from './_components/menu-table.vue';

	definePageMeta({
		layout: 'custom',
		middleware: 'auth',
	});

	const store = useMenuStore();

	onMounted(async () => {
		await callOnce(() => store.getMenus());
	});
</script>

<template>
	<div>
		<div>
			<h1 class="text-3xl font-bold mb-4">Menu Management</h1>
			<p class="text-gray-600 mb-6">
				Manage your restaurant's menu items here.
			</p>
		</div>
		<MenuHeader />
		<MenuTable
			:menus="store.menus"
			:isLoading="store.isLoading"
		/>
		<MenuPagination />
	</div>
</template>
