<script setup lang="ts">
	import type { FormSubmitEvent } from '@nuxt/ui';
	import type z from 'zod';
	import { toFormData } from '~/utils/toFormData';
	import { featureSchema } from '~~/shared/schema/featureSchema';

	type Schema = z.output<typeof featureSchema>;

	const form = useTemplateRef('form');
	const store = useFeatureStore();
	const toast = useToast();
	const imageFile = ref(null);

	const props = defineProps<{
		id: string;
		name: string;
		price: number;
		japaneseName: string;
		description: string;
		image: any;
	}>();

	const feature = reactive<Partial<Schema>>({
		name: props.name,
		japaneseName: props.japaneseName,
		price: props.price,
		description: props.description,
		image: props.image,
	});

	async function onSubmit(event: FormSubmitEvent<typeof feature>) {
		const formData = toFormData(event.data);
		if (feature.image) {
			formData.append('image', feature.image);
		}
		const response = await store.updateFeature({
			id: props.id,
			payload: formData,
		});
		toast.add(response);
		emit('close');
	}

	function handleFileChange(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		if (file) {
			feature.image = file;
			const reader = new FileReader();
			reader.onload = (event) => {
				imageFile.value = event.target?.result as any;
			};
			reader.readAsDataURL(file);
		} else {
			imageFile.value = null;
			feature.image = props.image;
		}
	}

	const emit = defineEmits<{
		(e: 'close'): void;
	}>();
</script>

<template>
	<UModal
		:close="{ onClick: () => emit('close') }"
		title="Edit featured menu"
	>
		<template #body>
			<UForm
				ref="form"
				:state="feature"
				:schema="featureSchema"
				class="space-y-4"
				@submit="onSubmit"
			>
				<div class="grid grid-cols-1 gap-4">
					<UFormField
						label="Name"
						name="name"
					>
						<UInput
							color="neutral"
							v-model="feature.name"
							class="w-full"
						/>
					</UFormField>
					<UFormField
						label="Japanese Name"
						name="japaneseName"
					>
						<UInput
							color="neutral"
							v-model="feature.japaneseName"
							class="w-full"
						/>
					</UFormField>
					<UFormField
						label="Price"
						name="price"
					>
						<UInput
							color="neutral"
							v-model="feature.price"
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
							v-model="feature.description"
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
						<div class="space-y-2">
							<div>
								<img
									v-if="image"
									:src="image"
								/>
								<img
									v-else-if="feature.image"
									:src="feature.image"
								/>
							</div>
							<UInput
								color="neutral"
								accept="image/*"
								type="file"
								class="w-full"
								@change="handleFileChange"
							/>
						</div>
					</UFormField>
				</div>
				<div class="flex w-full justify-end gap-2">
					<UButton
						color="neutral"
						label="Cancel"
						@click="emit('close')"
					/>
					<UButton
						label="Update"
						type="submit"
						:loading="store.isLoading"
						color="error"
						@click="form?.submit()"
					/>
				</div>
			</UForm>
		</template>
	</UModal>
</template>
