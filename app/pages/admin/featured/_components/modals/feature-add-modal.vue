<script setup lang="ts">
	import type { FormSubmitEvent } from '@nuxt/ui';
	import type z from 'zod';
	import { toFormData } from '~/utils/toFormData';
	import { featureSchema } from '~~/shared/schema/featureSchema';

	type Schema = z.output<typeof featureSchema>;

	const store = useFeatureStore();
	const toast = useToast();
	const form = useTemplateRef('form');
	const image = ref(null);

	const feature = reactive<Partial<Schema>>({
		name: undefined,
		japaneseName: undefined,
		price: undefined,
		description: undefined,
		image: null,
	});

	async function onSubmit(event: FormSubmitEvent<typeof feature>) {
		const formData = toFormData(event.data);
		if (feature.image) {
			formData.append('image', feature.image);
		}
		const response = await store.addFeature(formData);
		toast.add(response);
		emit('close');
	}

	function handleFileChange(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		feature.image = file || null;
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				image.value = event.target?.result as any;
			};
			reader.readAsDataURL(file);
		} else {
			image.value = null;
		}
	}

	const emit = defineEmits<{
		(e: 'close'): void;
	}>();
</script>

<template>
	<UModal
		title="Add Featured Menu"
		:close="{ onClick: () => emit('close') }"
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
			</UForm>
		</template>
		<template #footer>
			<div class="flex justify-end w-full">
				<UButton
					type="submit"
					color="error"
					:loading="store.isLoading"
					@click="form?.submit()"
				>
					Create
				</UButton>
			</div>
		</template>
	</UModal>
</template>
