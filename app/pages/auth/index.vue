<script setup lang="ts">
definePageMeta({
	layout: false,
});

const state = reactive({
  email: '',
  password: '',
})

const toast = useToast()
async function onSubmit(event: any) {
  // toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  // console.log(event.data)
}
</script>

<template>
	<div class="w-full h-screen flex items-center justify-center ">
		<div class="flex flex-col items-center">
			<img
				src="/logo.png"
				alt="FOJI Logo"
				class="h-24 w-24 mb-4"
			/>
			<div>
				<h1 class="text-3xl font-bold text-center mb-4">Login</h1>
				<p class="text-center text-gray-600 mb-6">Please enter your credentials to continue.</p>
			</div>
			<UForm
:state="state"
class="space-y-4 w-full"
@submit="onSubmit"
>
				<UFormField
label="Email"
name="email"
>
					<UInput
v-model="state.email"
class="w-full"
color="error"
placeholder="Enter your email"
/>
				</UFormField>

				<UFormField
label="Password"
name="password"
>
					<UInput
v-model="state.password"
type="password"
class="w-full"
color="error"
placeholder="Enter your password"
/>
				</UFormField>

				<div class="flex items-center justify-between w-full">
					<UButton
type="submit"
class="w-full "
color="error"
>
						<span class="text-center w-full">Submit</span>
					</UButton>
				</div>
			</UForm>
		</div>
	</div>
</template>
