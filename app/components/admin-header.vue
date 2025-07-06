<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const isOpen = ref(false);
	const isDark = ref(false)
	const items = ref<NavigationMenuItem[][]>([
		[
			{ label: 'Dashboard', icon: 'heroicons:home-modern-solid', to: '/admin' },
			{ label: 'Featured', icon: 'heroicons:building-storefront-solid', to: '/admin/featured' },
			{ label: 'Menu', icon: 'heroicons:building-storefront-solid', to: '/admin/menu' },
			{ label: 'Settings', icon: 'heroicons:cog-6-tooth-20-solid', to: '/admin/setting' },
			{ label: 'Sign out', icon: 'heroicons:arrow-up-on-square-stack-solid', to: '/maintenance' },
		],
	]);
</script>

<template>
	<div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
		<div class="flex items-center ">
			<img
				src="/logo.png"
				alt="FOJI Logo"
				class="h-10 w-14 "
			/>
			<span class="font-bold text-red-600 text-xl">FOJI</span>
		</div>
		<div class="flex gap-4 items-center">
			<UButton icon="heroicons:sun" color="neutral" variant="subtle" @click="isDark = false" v-if="!isDark"/>
			<UButton icon="heroicons:moon-16-solid" color="neutral" variant="subtle" @click="isDark = true" v-else/>
			<UButton
				icon="heroicons:bars-3-bottom-right-solid"
				color="neutral"
				variant="subtle"
				class="md:hidden"
				@click="isOpen = true"
			/>
		</div>
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
</template>
