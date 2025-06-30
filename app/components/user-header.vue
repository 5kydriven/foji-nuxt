<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'FORI',
				icon: 'i-simple-icons-github',
				to: '/',
			},
		],
		[
			{
				label: 'Home',
				icon: 'i-lucide-book-open',
				to: '/',
				active: true,
			},
			{
				label: 'Menu',
				icon: 'i-lucide-database',
				to: '/maintenance',
			},
			{
				label: 'About',
				icon: 'i-lucide-box',
				to: '/maintenance',
			},
			{
				label: 'Recipe',
				icon: 'i-lucide-box',
				to: '/maintenance',
			},
		],
	]);
</script>

<template>
	<div class="flex items-center justify-between p-4 md:hidden">
		<h1 class="font-semibold">FORI</h1>
		<USlideover
			title="FORI"
			close-icon="i-lucide-arrow-right"
		>
			<UButton
				icon="heroicons:bars-3-bottom-right-solid"
				color="neutral"
				variant="subtle"
			/>

			<template #body>
				<UNavigationMenu
					orientation="vertical"
					color="neutral"
					:items="items"
					class="w-full"
				/>
			</template>
		</USlideover>
	</div>
	<UNavigationMenu
		color="neutral"
		:items="items"
		class="w-full hidden md:flex"
	>
		<template #default="{ item }: { item: NavigationMenuItem }">
			<div class="flex items-center space-x-2">
				<UIcon :name="item.icon as any" />
				<span>{{ item.label }}</span>
			</div>
		</template>
	</UNavigationMenu>
</template>
