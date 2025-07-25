<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';
	import AdminHeader from '~/components/admin-header.vue';
	import AdminSidebar from '~/components/admin-sidebar.vue';

	const client = useSupabaseClient();
	const localePath = useLocalePath();

	async function logout() {
		await client.auth.signOut();
		await navigateTo(localePath('/auth'));
	}

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Dashboard',
				icon: 'heroicons:home-modern-solid',
				to: localePath('/admin'),
			},
			{
				label: 'Featured',
				icon: 'heroicons:building-storefront-solid',
				to: localePath('/admin/featured'),
			},
			{
				label: 'Menu',
				icon: 'heroicons:building-storefront-solid',
				to: localePath('/admin/menu'),
			},
			{
				label: 'Settings',
				icon: 'heroicons:cog-6-tooth-20-solid',
				to: localePath('/admin/setting'),
			},
		],
		[
			{
				label: 'Sign out',
				icon: 'heroicons:arrow-up-on-square-stack-solid',
				onSelect: logout,
			},
		],
	]);
</script>

<template>
	<div class="h-screen fixed w-full">
		<AdminHeader :items="items" />
		<div class="flex">
			<div class="hidden md:block">
				<AdminSidebar :items="items" />
			</div>
			<div class="flex-1 p-4 h-screen overflow-y-auto pb-52">
				<slot />
			</div>
		</div>
	</div>
</template>
