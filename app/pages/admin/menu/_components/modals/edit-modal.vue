<script setup lang="ts">
defineProps<{
  id: number
}>()

const emit = defineEmits<{ close: [boolean] }>()
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    :title="`This modal was opened with the id: ${id} `"
  >
    <template #footer>
      <div class="flex gap-2">
        <UButton
color="neutral"
label="Dismiss"
@click="emit('close', false)"
/>
        <UButton
label="Success"
@click="emit('close', true)"
/>
      </div>
    </template>
  </UModal>
</template>
