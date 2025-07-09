<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const isDark = ref(false);
	const isOpen = ref(false);

	const items = ref<NavigationMenuItem[][]>([
		[
			{ label: 'Home', to: '/' },
			{ label: 'About', to: '/about' },
			{ label: 'Menu', to: '/menu' },
			{ label: 'Faq', to: '/maintenance' },
			{ label: 'Contact Us', to: '/maintenance' },
		],
	]);
</script>

<template>
	<div class="bg-gray-100">
		<div class="max-w-screen flex items-center justify-between  p-2 ">
			<div class="flex items-center justify-center">
				<img
					src="/logo.png"
					alt="FOJI Logo"
					class="h-14 w-14 "
				/>
				<span class="font-bold text-red-600 text-xl ">FOJI</span>
			</div>

			<UNavigationMenu
				color="error"
				:items="items"
				class="w-full justify-end hidden md:flex"
			>
				<template #default="{ item }: { item: NavigationMenuItem }">
					<div class="flex items-center space-x-2">
						<!-- <UIcon :name="item.icon as any" /> -->
						<span>{{ item.label }}</span>
					</div>
				</template>
			</UNavigationMenu>
			<div class="flex items-center space-x-2">
				<UButton
					:icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
					color="neutral"
					variant="ghost"
					@click="isDark = !isDark"
				/>
				<div class="md:hidden">
					<USlideover
						title="FOJI"
					>
						<UButton
						icon="heroicons:bars-3-bottom-right-solid"
						color="neutral"
						variant="subtle"
"
						/>

						<template #body>
							<div>
								<UNavigationMenu
									orientation="vertical"
									color="error"
									:items="items"
									class="w-full"
								/>
							</div>
						</template>
					</USlideover>
				</div>
			</div>
		</div>
	</div>
</template>
