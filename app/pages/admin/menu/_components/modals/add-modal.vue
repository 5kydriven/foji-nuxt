<script setup lang="ts">
	import type { FormSubmitEvent } from '@nuxt/ui';
	import z from 'zod';
	import { toFormData } from '~/utils/toFormData';

	const schema = z.object({
		name: z.string().min(5, 'Must be at least 5 characters'),
		japaneseName: z.string().optional(),
		price: z.number().positive('Must be positive number'),
		description: z.string().optional(),
	});

	type Schema = z.output<typeof schema>;

	const menu = reactive<Partial<Schema>>({
		name: undefined,
		japaneseName: undefined,
		price: 0,
		description: undefined,
	});

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<typeof menu>) {
		toast.add({
			title: 'Success',
			description: 'The form has been submitted.',
			color: 'success',
		});
		const formData = toFormData(event.data);
		console.log(event.data);
	}
</script>

<template>
	<UModal title="Add Menu">
		<UButton
			label="Add Menu"
			color="error"
			variant="solid"
			icon="i-lucide-plus"
			class="ml-2"
		/>

		<template #body>
			<UForm
				:state="menu"
				:schema="schema"
				class="space-y-4"
				@submit="onSubmit"
			>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
				</div>

				<UFormField
					label="Price"
					name="price"
				>
					<UInput
						v-model="menu.price"
						icon="lucide:philippine-peso"
						type="number"
						placeholder="00.00"
					/>
				</UFormField>
				<UFormField
					label="Description"
					name="description"
				>
					<UTextarea
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
						type="file"
						class="w-full"
					/>
				</UFormField>

				<div class="flex justify-end w-full">
					<UButton
						type="submit"
						color="error"
					>
						Submit
					</UButton>
				</div>
			</UForm>
		</template>
	</UModal>
</template>
