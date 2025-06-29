<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'FORI',
      icon: 'i-simple-icons-github',
      to: '/',
    }
  ],
  [
    {
      label: 'Home',
      icon: 'i-lucide-book-open',
      to: '/getting-started',
      active: true
    },
    {
      label: 'Menu',
      icon: 'i-lucide-database',
      to: '/composables'
    },
    {
      label: 'About',
      icon: 'i-lucide-box',
      to: '/components',
     
    },
    {
      label: 'Recipe',
      icon: 'i-lucide-box',
      to: '/components',
    }
  ],
])
</script>

<template>
  <UNavigationMenu color="neutral" :items="items" class="w-full" />
</template>
