<script setup lang="ts">
	const { openEditModal, openDeleteModal } = useMenuModal();

	const props = defineProps<{
		id: string;
		name: string;
		price: number;
		japaneseName: string;
		description: string;
		image: string;
	}>();

	const emit = defineEmits<{ close: [boolean] }>();
</script>

<template>
	<UModal
		:close="{ onClick: () => emit('close', false) }"
		title="View Menu Details"
	>
		<template #body>
			<div>
				<div>
					<img :src="props.image" alt="Menu Image"/>
				</div>
				<div>
					<div>
						<span>{{ props.japaneseName }}</span><br>
						<span class="font-bold text-xl">{{ props.name }}</span>
					</div>
					<span>{{ formatPeso(props.price) }}</span>
				</div>
				<div>
					<label>Description</label>
					<p>{{ props.description }}</p>
				</div>
			</div>
		</template>
		<template #footer>
			<div class="flex justify-end gap-2 w-full">
				<UButton
					color="error"
					label="Edit"
					@click="openEditModal(id)"
				/>
				<UButton
					label="Delete"
					color="neutral"
					@click="openDeleteModal(id)"
				/>
			</div>
		</template>
	</UModal>
</template>
