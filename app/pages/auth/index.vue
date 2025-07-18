<script setup lang="ts">
	import type { FormSubmitEvent } from '@nuxt/ui';

	definePageMeta({
		layout: false,
		middleware: 'auth',
	});

	interface User {
		email: string;
		password: string;
	}

	const supabase = useSupabaseClient();
	const router = useRouter();

	const state = reactive<User>({
		email: '',
		password: '',
	});
	const isLoading = ref(false);

	const toast = useToast();
	async function onSubmit(event: FormSubmitEvent<User>) {
		const { error } = await supabase.auth.signInWithPassword({
			email: event.data.email,
			password: event.data.password,
		});
		if (error) {
			displayError(error);
		} else {
			router.replace('/admin');
		}
		// toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
		// console.log(event.data)
	}

	const displayError = (error: any) => {
		toast.add({
			title: 'Error',
			description: error.message,
			icon: 'i-lucide-alert-circle',
			color: 'error',
		});
	};
</script>

<template>
	<div class="w-full h-screen flex items-center justify-center">
		<div class="flex flex-col items-center min-w-xs shadow-xl p-4 md:p-8 rounded-md">
			<img
				src="/logo.png"
				alt="FOJI Logo"
				class="h-24 w-24 mb-4"
			/>

			<UForm
				:state="state"
				class="space-y-4 w-full"
				@submit.prevent="onSubmit"
			>
				<UFormField
					label="Email"
					name="email"
				>
					<UInput
						v-model="state.email"
						class="w-full"
						color="error"
						size="xl"
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
						size="xl"
						placeholder="Enter your password"
					/>
				</UFormField>

				<UButton
					:loading="isLoading"
					type="submit"
					color="error"
					label="Sign in"
					block
				/>
			</UForm>
		</div>
	</div>
</template>
