<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const isOpen = ref(false);

	const items = ref<NavigationMenuItem[][]>([
		[
			{ label: 'Home', to: '/admin' },
			{ label: 'Featured', to: '/maintenance' },
			{ label: 'Menu', to: '/admin/menu' },
			{ label: 'Settings', to: '/maintenance' },
			{ label: 'Sign out', to: '/maintenance' },
		],
	]);
</script>

<template>
	<div class="bg-gray-100">
		<div class="max-w-screen-xl flex items-center justify-between mx-auto p-2">
			<div class="flex items-center justify-center">
				<img
					src="/logo.png"
					alt="FOJI Logo"
					class="h-14 w-14"
				/>
				<span class="font-bold text-red-600 text-xl">FOJI</span>
			</div>

			<UNavigationMenu
				color="error"
				:items="items"
				class="w-full justify-end hidden md:flex"
			>
				<template #default="{ item }: { item: NavigationMenuItem }">
					<div class="flex items-center space-x-2">
						<UIcon :name="item.icon as any" />
						<span>{{ item.label }}</span>
					</div>
				</template>
			</UNavigationMenu>
			<UButton
				icon="heroicons:bars-3-bottom-right-solid"
				color="neutral"
				variant="subtle"
				class="md:hidden"
				@click="isOpen = true"
			/>
			<USlideover
				v-model="isOpen"
				title="FOJI"
				close-icon="i-lucide-arrow-right"
			>
				<template #body>
					<div>
						<UNavigationMenu
							orientation="vertical"
							color="error"
							:items="items"
							class="w-full"
						/><br />
						<hr />
						<UButton
							label="Log in"
							color="error"
						/>
					</div>
				</template>
			</USlideover>
		</div>
	</div>
</template>
