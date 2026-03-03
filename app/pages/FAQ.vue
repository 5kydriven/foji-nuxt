<script setup lang="ts">
	import OrderModal from './_components/modals/order-modal.vue';

	const localePath = useLocalePath();

	const faqItems = [
		{
			question: 'What are your opening hours?',
			answer: 'FOJI is open daily from 11:00 AM to 10:00 PM.',
		},
		{
			question: 'How early should I reserve?',
			answer: 'For dinner and weekends, we recommend reserving at least 2 hours in advance.',
		},
		{
			question: 'Do you accept walk-ins?',
			answer: 'Yes, but confirmed reservations are prioritized for faster seating.',
		},
		{
			question: 'Can I request a table setup for celebrations?',
			answer: 'Yes. Add your special request when submitting your reservation form.',
		},
		{
			question: 'Are vegetarian options available?',
			answer: 'Yes, we offer selected dishes and can guide you to vegetarian-friendly choices.',
		},
	];
</script>

<template>
	<div class="min-h-screen bg-[#f6ecda]">
		<section class="relative overflow-hidden bg-[#171311] text-[#f7ecd8]">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_right_top,_rgba(199,164,106,0.2),_transparent_42%)]" />
			<div class="section-shell py-14 sm:py-16">
				<p class="foji-title-eyebrow text-[#c7a46a]">Frequently Asked Questions</p>
				<h1 class="mt-2 max-w-3xl text-5xl sm:text-6xl">Everything you need before your FOJI visit</h1>
				<p class="mt-4 max-w-2xl text-sm leading-relaxed text-[#d4c2a4] sm:text-base">
					Common questions about reservations, walk-ins, and dining details.
				</p>
			</div>
		</section>

		<section class="section-shell section-padding">
			<div class="grid gap-5 lg:grid-cols-2">
				<div class="rounded-[1.8rem] border border-[#dbc8aa] bg-[#fdf6e9] p-6 shadow-[0_12px_32px_rgba(44,34,25,0.08)] sm:p-8">
					<div class="space-y-3">
						<details
							v-for="item in faqItems"
							:key="item.question"
							class="rounded-2xl border border-[#e5d4bb] bg-[#f7ecdd] p-4"
						>
							<summary class="cursor-pointer text-sm font-semibold text-[#231b16]">{{ item.question }}</summary>
							<p class="mt-2 text-sm leading-relaxed text-[#5f513d]">{{ item.answer }}</p>
						</details>
					</div>
				</div>

				<div class="rounded-[1.8rem] border border-[#3b302a] bg-[#1d1714] p-6 text-[#f6e8cf] sm:p-8">
					<p class="foji-title-eyebrow text-[#c7a46a]">Need more help?</p>
					<h2 class="mt-2 text-4xl sm:text-5xl">Contact FOJI directly</h2>
					<p class="mt-3 text-sm leading-relaxed text-[#d7c5a6] sm:text-base">
						If your question is not listed, message us and our team will assist you quickly.
					</p>
					<div class="mt-5 space-y-2 rounded-2xl border border-[#4a3c34] bg-[#261f1b] p-4 text-sm text-[#d8c7a8]">
						<p><span class="font-semibold text-[#f4e3c6]">Phone:</span> +63 900 000 0000</p>
						<p><span class="font-semibold text-[#f4e3c6]">Email:</span> hello@foji-restaurant.com</p>
						<p><span class="font-semibold text-[#f4e3c6]">Address:</span> 7th Avenue District, Metro Manila</p>
					</div>
					<div class="mt-6 flex flex-wrap gap-3">
						<OrderModal
							label="Reserve Table"
							color="neutral"
							size="lg"
							button-class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
						/>
						<UButton
							label="Open Full Menu"
							color="neutral"
							size="lg"
							:to="localePath('/menu')"
							class="border border-[#66584a] bg-transparent text-[#f1e2c7] hover:bg-[#231b17]"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
