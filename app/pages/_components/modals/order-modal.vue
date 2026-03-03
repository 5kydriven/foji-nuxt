<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			label?: string;
			color?: 'error' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'info';
			variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link';
			size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		}>(),
		{
			label: 'Order Now',
			color: 'error',
			variant: 'solid',
			size: 'md',
		},
	);

	const isOpen = ref(false);
	const isSubmitting = ref(false);
	const toast = useToast();

	const form = reactive({
		name: '',
		phone: '',
		guests: '2',
		date: '',
		time: '',
		note: '',
	});

	function resetForm() {
		form.name = '';
		form.phone = '';
		form.guests = '2';
		form.date = '';
		form.time = '';
		form.note = '';
	}

	async function onSubmit() {
		if (!form.name || !form.phone || !form.date || !form.time) {
			toast.add({
				title: 'Incomplete details',
				description: 'Please complete name, phone, date, and time.',
				color: 'error',
			});
			return;
		}

		isSubmitting.value = true;

		// Placeholder submit flow while reservation API is not wired.
		await new Promise((resolve) => setTimeout(resolve, 600));

		toast.add({
			title: 'Reservation request sent',
			description: 'Our team will confirm your booking shortly.',
			color: 'success',
		});

		isSubmitting.value = false;
		isOpen.value = false;
		resetForm();
	}
</script>

<template>
	<UModal
		v-model:open="isOpen"
		:dismissible="!isSubmitting"
		title="Reservation Details"
		description="Share your preferred schedule and we will confirm your table."
	>
		<UButton
			:label="props.label"
			:color="props.color"
			:variant="props.variant"
			:size="props.size"
		/>

		<template #body>
			<form
				class="space-y-4"
				@submit.prevent="onSubmit"
			>
				<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<div class="space-y-1">
						<label
							for="reserve-name"
							class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
						>
							Full Name
						</label>
						<input
							id="reserve-name"
							v-model="form.name"
							type="text"
							required
							class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-red-200 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
							placeholder="Juan Dela Cruz"
						/>
					</div>

					<div class="space-y-1">
						<label
							for="reserve-phone"
							class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
						>
							Phone Number
						</label>
						<input
							id="reserve-phone"
							v-model="form.phone"
							type="tel"
							required
							class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-red-200 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
							placeholder="+63 900 000 0000"
						/>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
					<div class="space-y-1">
						<label
							for="reserve-guests"
							class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
						>
							Guests
						</label>
						<select
							id="reserve-guests"
							v-model="form.guests"
							class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-red-200 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
						>
							<option
								v-for="count in 10"
								:key="count"
								:value="count.toString()"
							>
								{{ count }}
							</option>
						</select>
					</div>

					<div class="space-y-1 sm:col-span-2">
						<label
							for="reserve-date"
							class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
						>
							Date
						</label>
						<input
							id="reserve-date"
							v-model="form.date"
							type="date"
							required
							class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-red-200 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
						/>
					</div>
				</div>

				<div class="space-y-1">
					<label
						for="reserve-time"
						class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
					>
						Time
					</label>
					<input
						id="reserve-time"
						v-model="form.time"
						type="time"
						required
						class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-red-200 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
					/>
				</div>

				<div class="space-y-1">
					<label
						for="reserve-note"
						class="text-sm font-medium text-zinc-700 dark:text-zinc-200"
					>
						Special Request (Optional)
					</label>
					<textarea
						id="reserve-note"
						v-model="form.note"
						rows="3"
						class="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-red-200 transition focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
						placeholder="Window seat, birthday note, allergy details..."
					/>
				</div>

				<div class="flex justify-end">
					<UButton
						type="submit"
						label="Send Reservation Request"
						color="error"
						:loading="isSubmitting"
					/>
				</div>
			</form>
		</template>
	</UModal>
</template>
