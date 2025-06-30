<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const isOpen = ref(false)

const items = ref<NavigationMenuItem[][]>([
  [
    { label: 'Home', to: '/', active: true },
    { label: 'Menu', to: '/maintenance' },
    { label: 'About', to: '/maintenance' },
    { label: 'Recipe', to: '/maintenance' },
  ],
  [
    { label: 'Log in',  to: '/maintenance' },
  ],
])
</script>

<template>
  <div class="flex items-center justify-between md:hidden">
    <h1 class="font-semibold">FORI</h1>

    <UButton
      icon="heroicons:bars-3-bottom-right-solid"
      color="neutral"
      variant="subtle"
      @click="isOpen = true"
    />

    <USlideover v-model="isOpen" title="FORI" close-icon="i-lucide-arrow-right">
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

  <div class="hidden items-center justify-between md:flex">
    <h1 class="font-semibold flex-1 max-w-96">FORI</h1>

    <UNavigationMenu
      color="neutral"
      :items="items"
      class="w-full flex-1"
    >
      <template #default="{ item }: { item: NavigationMenuItem }">
        <div class="flex items-center space-x-2" :class="item.label === 'Log in' ? 'bg-neutral text-white' : ''" >
          <UIcon :name="item.icon as any" />
          <span>{{ item.label }}</span>
        </div>
      </template>
    </UNavigationMenu>
  </div>
</template>
