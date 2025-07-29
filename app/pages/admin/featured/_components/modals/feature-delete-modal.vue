<script setup lang="ts">
	const store = useMenuStore();
	const toast = useToast();

	async function onConfirm() {
		const response = await store.deleteMenu(props.id);
		toast.add(response);
		emit('close');
	}

	const props = defineProps<{
		id: string;
	}>();

	const emit = defineEmits<{ (e: 'close'): void }>();
</script>

<template>
	<UModal
		:close="{ onClick: () => emit('close') }"
		title="Delete Featured Menu"
	>
		<template #body>
			<div>Are you sure you want to delete this featured menu?</div>
		</template>
		<template #footer>
			<div class="flex justify-end gap-4 w-full">
				<UButton
					color="neutral"
					label="Cancel"
					variant="outline"
					@click="emit('close')"
				/>
				<UButton
					:loading="store.isLoading"
					label="Confirm"
					color="error"
					@click="onConfirm"
				/>
			</div>
		</template>
	</UModal>
</template>
