<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import AuthModal from './modals/auth-modal.vue'

const isOpen = ref(false)

const items = ref<NavigationMenuItem[][]>([
  [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'About', to: '/maintenance' },
    { label: 'Recipe', to: '/maintenance' },
  ],
])
</script>

<template>
  <div class="flex items-center justify-between md:hidden bg-gray-100 p-2 rounded-md">
		<div>
			<img
				src="/logo.png"
				alt="FOJI Logo"
				class="h-10 w-10 rounded-full"/>
			<h1 class="font-semibold text-red-600">FOJI</h1>

		</div>

    <UButton
      icon="heroicons:bars-3-bottom-right-solid"
      color="neutral"
      variant="subtle"
      @click="isOpen = true"
    />

    <USlideover v-model="isOpen" title="FOJI" close-icon="i-lucide-arrow-right">
      <template #body>
				<div>
					<UNavigationMenu
						orientation="vertical"
						color="error"
						:items="items"
						class="w-full"
					/><br>
					<hr>
					<UButton label="Log in" color="error"/>
				</div>

      </template>
    </USlideover>
  </div>

  <div class="hidden items-center justify-between md:flex bg-gray-100 px-2 rounded-md">
    <div class="flex items-center space-x-2 flex-1">
			<img
				src="/logo.png"
				alt="FOJI Logo"
				class="h-14 w-14"/>
					<span class="font-bold text-red-600 text-xl">FOJI</span>
					<span class="font-bold">Japanese Restaurant</span>
		</div>

		<div class="flex-1 flex justify-end">
			<UNavigationMenu
				color="error"
				:items="items"
				class="w-full"
			>
				<template #default="{ item }: { item: NavigationMenuItem }">
					<div class="flex items-center space-x-2" >
						<UIcon :name="item.icon as any" />
						<span>{{ item.label }}</span>
					</div>
				</template>
			</UNavigationMenu>
		</div>
		<div class="flex-1 flex justify-end">
			<AuthModal />
		</div>
  </div>
</template>
