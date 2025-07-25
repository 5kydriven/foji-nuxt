<script setup lang="ts">
	import type z from 'zod';
	import { menuSchema } from '~~/shared/schema/menuSchema';

	type Schema = z.output<typeof menuSchema>;

	const props = defineProps<{
		id: string;
		name: string;
		price: number;
		japaneseName: string;
	}>();

	const menu = reactive<Partial<Schema>>({
		name: props.id,
		japaneseName: props.japaneseName,
		price: undefined,
		description: undefined,
		image: null,
	});

	const emit = defineEmits<{ close: [boolean] }>();
</script>

<template>
	<UModal
		:close="{ onClick: () => emit('close', false) }"
		title="Edit menu"
	>
		<template #body>
			<UForm
				ref="form"
				:state="menu"
				:schema="menuSchema"
				class="space-y-4"
				@submit="onSubmit"
			>
				<div class="grid grid-cols-1 gap-4">
					<UFormField
						label="Name"
						name="name"
					>
						<UInput
							v-model="menu.name"
							class="w-full"
						/>
					</UFormField>
					<UFormField
						label="Japanese Name"
						name="japaneseName"
					>
						<UInput
							v-model="menu.japaneseName"
							class="w-full"
						/>
					</UFormField>
					<UFormField
						label="Price"
						name="price"
					>
						<UInput
							v-model="menu.price"
							class="w-full"
							icon="lucide:philippine-peso"
							placeholder="00.00"
						/>
					</UFormField>
					<UFormField
						label="Description"
						name="description"
					>
						<UTextarea
							v-model="menu.description"
							color="neutral"
							highlight
							placeholder="Type something..."
							class="w-full"
						/>
					</UFormField>
					<UFormField
						label="Menu Image"
						name="image"
					>
						<UInput
							accept="image/*"
							type="file"
							class="w-full"
							@change="handleFileChange"
						/>
					</UFormField>
				</div>
			</UForm>
		</template>
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
