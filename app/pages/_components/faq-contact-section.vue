<script setup lang="ts">
	const localePath = useLocalePath();

	const faqItems = [
		{
			question: 'Do I need a reservation for dinner?',
			answer: 'Reservations are recommended for dinner and weekends to avoid wait times.',
		},
		{
			question: 'Do you offer group seating?',
			answer: 'Yes. Let us know your group size in advance so we can prepare your seating properly.',
		},
		{
			question: 'Are there vegetarian options?',
			answer: 'Yes, we offer selected vegetarian-friendly dishes. Ask our staff for recommendations.',
		},
	];
</script>

<template>
	<section class="bg-zinc-50">
		<div class="mx-auto grid max-w-screen-xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
			<div
				id="faq"
				class="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-8"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">FAQ</p>
				<h2 class="text-3xl font-bold text-zinc-900">Frequently Asked Questions</h2>
				<div class="space-y-3">
					<details
						v-for="item in faqItems"
						:key="item.question"
						class="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
					>
						<summary class="cursor-pointer text-sm font-semibold text-zinc-900">{{ item.question }}</summary>
						<p class="mt-2 text-sm text-zinc-600">{{ item.answer }}</p>
					</details>
				</div>
			</div>

			<div
				id="contact"
				class="space-y-4 rounded-3xl bg-zinc-950 p-6 text-white sm:p-8"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">Contact</p>
				<h2 class="text-3xl font-bold">Plan your visit with confidence</h2>
				<p class="text-sm text-zinc-300 sm:text-base">
					Need help with bookings, events, or menu recommendations? Reach out and our team will assist you.
				</p>
				<div class="space-y-2 text-sm text-zinc-200">
					<p><strong>Phone:</strong> +63 900 000 0000</p>
					<p><strong>Email:</strong> hello@foji-restaurant.com</p>
					<p><strong>Hours:</strong> Daily, 11:00 AM to 10:00 PM</p>
				</div>
				<div class="flex flex-wrap gap-3">
					<UButton
						label="View Menu"
						color="error"
						variant="soft"
						:to="localePath('/menu')"
					/>
					<UButton
						label="Call Now"
						color="neutral"
						variant="outline"
						to="tel:+639000000000"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
