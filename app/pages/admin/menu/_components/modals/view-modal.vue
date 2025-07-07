<script setup lang="ts">

const { openEditModal, openDeleteModal } = useMenuModal();
defineProps<{
  id: number
}>()

const emit = defineEmits<{ close: [boolean] }>()
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    title="View Menu Details"
  >
		<template #body>
			<p>This is a view modal for the item with ID: {{ id }}</p>
			<p>You can display any relevant information here.</p>
		</template>
    <template #footer>
      <div class="flex justify-end gap-2 w-full">
        <UButton color="error" label="Edit" @click="openEditModal(id)" />
        <UButton label="Delete" @click="openDeleteModal(id)" color="neutral"/>
      </div>
    </template>
  </UModal>
</template>
