<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			label?: string;
			color?: 'error' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'info';
			variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link';
			size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
			buttonClass?: string;
		}>(),
		{
			label: 'Order Now',
			color: 'error',
			variant: 'solid',
			size: 'md',
			buttonClass: '',
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
			:class="props.buttonClass"
		/>

		<template #body>
			<div class="rounded-2xl border border-[#e5d4bb] bg-[#fff8ec] p-4 sm:p-5">
				<form
					class="space-y-4"
					@submit.prevent="onSubmit"
				>
					<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<div class="space-y-1">
							<label
								for="reserve-name"
								class="text-sm font-medium text-[#43382c]"
							>
								Full Name
							</label>
							<input
								id="reserve-name"
								v-model="form.name"
								type="text"
								required
								class="w-full rounded-lg border border-[#d7c3a2] bg-[#fffdf8] px-3 py-2 text-sm text-[#1f1812] outline-none transition focus:border-[#a52b26] focus:ring-2 focus:ring-[#ebc3bf]"
								placeholder="Juan Dela Cruz"
							/>
						</div>

						<div class="space-y-1">
							<label
								for="reserve-phone"
								class="text-sm font-medium text-[#43382c]"
							>
								Phone Number
							</label>
							<input
								id="reserve-phone"
								v-model="form.phone"
								type="tel"
								required
								class="w-full rounded-lg border border-[#d7c3a2] bg-[#fffdf8] px-3 py-2 text-sm text-[#1f1812] outline-none transition focus:border-[#a52b26] focus:ring-2 focus:ring-[#ebc3bf]"
								placeholder="+63 900 000 0000"
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
						<div class="space-y-1">
							<label
								for="reserve-guests"
								class="text-sm font-medium text-[#43382c]"
							>
								Guests
							</label>
							<select
								id="reserve-guests"
								v-model="form.guests"
								class="w-full rounded-lg border border-[#d7c3a2] bg-[#fffdf8] px-3 py-2 text-sm text-[#1f1812] outline-none transition focus:border-[#a52b26] focus:ring-2 focus:ring-[#ebc3bf]"
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
								class="text-sm font-medium text-[#43382c]"
							>
								Date
							</label>
							<input
								id="reserve-date"
								v-model="form.date"
								type="date"
								required
								class="w-full rounded-lg border border-[#d7c3a2] bg-[#fffdf8] px-3 py-2 text-sm text-[#1f1812] outline-none transition focus:border-[#a52b26] focus:ring-2 focus:ring-[#ebc3bf]"
							/>
						</div>
					</div>

					<div class="space-y-1">
						<label
							for="reserve-time"
							class="text-sm font-medium text-[#43382c]"
						>
							Time
						</label>
						<input
							id="reserve-time"
							v-model="form.time"
							type="time"
							required
							class="w-full rounded-lg border border-[#d7c3a2] bg-[#fffdf8] px-3 py-2 text-sm text-[#1f1812] outline-none transition focus:border-[#a52b26] focus:ring-2 focus:ring-[#ebc3bf]"
						/>
					</div>

					<div class="space-y-1">
						<label
							for="reserve-note"
							class="text-sm font-medium text-[#43382c]"
						>
							Special Request (Optional)
						</label>
						<textarea
							id="reserve-note"
							v-model="form.note"
							rows="3"
							class="w-full rounded-lg border border-[#d7c3a2] bg-[#fffdf8] px-3 py-2 text-sm text-[#1f1812] outline-none transition focus:border-[#a52b26] focus:ring-2 focus:ring-[#ebc3bf]"
							placeholder="Window seat, birthday note, allergy details..."
						/>
					</div>

					<div class="flex justify-end">
						<UButton
							type="submit"
							label="Send Reservation Request"
							color="neutral"
							class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
							:loading="isSubmitting"
						/>
					</div>
				</form>
				</div>
		</template>
	</UModal>
</template>
