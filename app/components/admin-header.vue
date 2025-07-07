<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const client = useSupabaseClient();

  async function logout() {
    await client.auth.signOut();
    navigateTo('/auth');
  }

	const isDark = ref(false)
	const items = ref<NavigationMenuItem[][]>([
		[
			{ label: 'Dashboard', icon: 'heroicons:home-modern-solid', to: '/admin' },
			{ label: 'Featured', icon: 'heroicons:building-storefront-solid', to: '/admin/featured' },
			{ label: 'Menu', icon: 'heroicons:building-storefront-solid', to: '/admin/menu' },
			{ label: 'Settings', icon: 'heroicons:cog-6-tooth-20-solid', to: '/admin/setting' },
		],
		[
			{ label: 'Sign out', icon: 'heroicons:arrow-up-on-square-stack-solid', onSelect: logout },
		]
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
					variant="subtle""
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
</template>
