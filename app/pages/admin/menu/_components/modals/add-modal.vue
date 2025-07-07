<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'
import type { Menu } from '~~/types/menu.type'

const menu = reactive<Menu>({})

const validate = (state: Menu): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ name: 'name', message: 'Required' })
  if (!state.japaneseName) errors.push({ name: 'japaneseName', message: 'Required' })
  if (!state.price) errors.push({ name: 'price', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof menu>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
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
			<UForm :validate="validate" :state="menu" class="space-y-4" @submit="onSubmit">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<UFormField label="Name" name="name">
						<UInput v-model="menu.name" variant="subtle" class="w-full"/>
					</UFormField>
	
					<UFormField label="Japanese Name" name="japaneseName" >
						<UInput v-model="menu.japaneseName" variant="subtle" class="w-full"/>
					</UFormField>
				</div>

				<UFormField label="Price" name="price">
					<UInput icon="lucide:philippine-peso" v-model="menu.price" type="number" placeholder="00.00" variant="subtle"/>
				</UFormField>
				<UFormField label="Description" name="description">
					 <UTextarea color="neutral" variant="subtle" highlight placeholder="Type something..." class="w-full"/>
				</UFormField>
				<UFormField label="Menu Image" name="image">
					  <UInput type="file"  class="w-full"/>
				</UFormField>

				<div class="flex justify-end w-full">
					<UButton type="submit" color="error">
						Submit
					</UButton>
				</div>
			</UForm>
		</template>
	</UModal>
</template>
