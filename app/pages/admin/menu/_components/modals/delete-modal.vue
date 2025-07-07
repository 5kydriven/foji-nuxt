<script setup lang="ts">
defineProps<{
  id: number
}>()

const emit = defineEmits<{ close: [boolean] }>()
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    title="Are you sure you want to delete this menu?"
  >
    <template #footer>
      <div class="flex justify-end gap-2 w-full">
        <UButton color="neutral" label="Cancel" @click="emit('close', false)" />
        <UButton label="Yes" color="error" @click="emit('close', true)" />
      </div>
    </template>
  </UModal>
</template>
