<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'

  const client = useSupabaseClient();

  async function logout() {
    await client.auth.signOut();
    navigateTo('/auth');
  }
const items = ref<NavigationMenuItem[][]>([
		[
			{ label: 'Dashboard', icon: 'heroicons:home-modern-solid', to: '/admin' },
			{ label: 'Featured', icon: 'heroicons:building-storefront-solid', to: '/admin/featured' },
			{ label: 'Menu', icon: 'heroicons:building-storefront-solid', to: '/admin/menu' },
			{ label: 'Settings', icon: 'heroicons:cog-6-tooth-20-solid', to: '/admin/setting' },
			{ label: 'Sign out', icon: 'heroicons:arrow-up-on-square-stack-solid', onSelect: logout},
		],
	]);
</script>

<template>
  <div class="p-4 rounded-md h-screen border-r border-neutral-200">
    <UNavigationMenu
    orientation="vertical"
    :items="items"
    color="error"
    class="data-[orientation=vertical]:w-48"
    >
      <template #default="{ item }: { item: NavigationMenuItem }">
				<div class="flex items-center space-x-2 p-2 text-lg">
					<UIcon :name="item.icon as any" />
					<span>{{ item.label }}</span>
				</div>
			</template></UNavigationMenu>
  </div>
</template>
