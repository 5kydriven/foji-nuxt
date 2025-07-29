<script setup lang="ts">
	import { LazyEditModal, LazyDeleteModal } from '#components';

	const overlay = useOverlay();

	const deleteModal = overlay.create(LazyDeleteModal);
	const editModal = overlay.create(LazyEditModal);

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
			<div class="space-y-2">
				<div class="flex justify-center w-full p-5 bg-accented rounded-sm">
					<img :src="props.image" alt="Menu Image" class="w-40"/>
				</div>
				<div class="flex justify-between items-center ">
					<div>
						<span class="capitalize">{{ props.japaneseName }}</span><br>
						<span class="font-bold text-xl capitalize">{{ props.name }}</span>
					</div>
					<span>{{ formatPeso(props.price) }}</span>
				</div>
				<div class="mt-8">
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
					@click="editModal.open(props)"
				/>
				<UButton
					label="Delete"
					color="neutral"
					@click="deleteModal.open({id: props.id})"
				/>
			</div>
		</template>
	</UModal>
</template>
