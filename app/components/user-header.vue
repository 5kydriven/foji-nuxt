<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const isDark = ref(false);
	const isOpen = ref(false);
	const router = useRouter()
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
	<div class="z-10 " :class="router.currentRoute.value.path !== '/' ? 'bg-gray-100' : 'bg-black/30'">
		<div class="max-w-screen-xl mx-auto flex items-center justify-between p-2">
			<div class="flex items-center justify-center">
				<img
					src="/logo.png"
					alt="FOJI Logo"
					class="h-14 w-14"
				/>
				<span class="font-bold text-red-400 text-xl">FOJI</span>
			</div>

			<UNavigationMenu
				color="error"
				highlight
				highlight-color="error"
				:items="items"
				class="w-full justify-end hidden md:flex"
			>
				<template #default="{ item }: { item: NavigationMenuItem }">
					<div class="flex items-center space-x-2">
						<!-- <UIcon :name="item.icon as any" /> -->
						<span class="text-white">{{ item.label }}</span>
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
					<USlideover title="FOJI">
						<UButton
							icon="heroicons:bars-3-bottom-right-solid"
							color="neutral"
							variant="subtle"
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
