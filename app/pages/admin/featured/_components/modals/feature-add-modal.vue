<script setup lang="ts">
	import type { FormSubmitEvent } from '@nuxt/ui';
	import type z from 'zod';
	import { toFormData } from '~/utils/toFormData';
	import { menuSchema } from '~~/shared/schema/menuSchema';

	type Schema = z.output<typeof menuSchema>;

	const store = useMenuStore();
	const toast = useToast();
	const form = useTemplateRef('form');
	const image = ref(null);

	const menu = reactive<Partial<Schema>>({
		name: undefined,
		japaneseName: undefined,
		price: undefined,
		description: undefined,
		image: null,
	});

	async function onSubmit(event: FormSubmitEvent<typeof menu>) {
		const formData = toFormData(event.data);
		if (menu.image) {
			formData.append('image', menu.image);
		}
		const response = await store.addMenu(formData);
		toast.add(response);
		emit('close');
	}

	function handleFileChange(e: Event) {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		menu.image = file || null;
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
						<div class="space-y-2">
							<div>
								<img
									v-if="image"
									:src="image"
								/>
								<img
									v-else-if="menu.image"
									:src="menu.image"
								/>
							</div>
							<UInput
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
