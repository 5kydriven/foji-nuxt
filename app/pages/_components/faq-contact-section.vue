<script setup lang="ts">
	const localePath = useLocalePath();

	const faqItems = [
		{
			question: 'Do I need a reservation for dinner?',
			answer: 'Reservations are strongly recommended after 6:00 PM and on weekends to avoid waiting.',
		},
		{
			question: 'Can FOJI host birthdays or small group gatherings?',
			answer: 'Yes. Share your guest count and schedule in advance so our team can prepare your seating layout.',
		},
		{
			question: 'Do you accept walk-ins?',
			answer: 'Yes, walk-ins are welcome, but priority is given to guests with confirmed reservations.',
		},
		{
			question: 'Are there vegetarian-friendly options?',
			answer: 'Yes. Our staff can guide you through vegetarian-friendly dishes and custom options when available.',
		},
	];
</script>

<template>
	<section class="relative overflow-hidden bg-[#f3e8d5]">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,_rgba(157,39,35,0.16),_transparent_42%)]" />

		<div class="section-shell section-padding relative grid gap-5 lg:grid-cols-2">
			<div
				id="faq"
				class="rounded-[1.9rem] border border-[#dac7aa] bg-[#fcf5e8] p-6 shadow-[0_12px_38px_rgba(37,28,20,0.08)] sm:p-8"
			>
				<p class="foji-title-eyebrow text-[#9a2a24]">FAQ</p>
				<h2 class="mt-2 text-4xl text-[#1a1411] sm:text-5xl">Answers that remove booking friction</h2>
				<p class="mt-3 text-sm text-[#62533f]">
					Clear details for guests deciding when and how to reserve with FOJI.
				</p>
				<div class="mt-5 space-y-3">
					<details
						v-for="item in faqItems"
						:key="item.question"
						class="rounded-2xl border border-[#e4d4bb] bg-[#f8eedf] p-4"
					>
						<summary class="cursor-pointer text-sm font-semibold text-[#231b16]">{{ item.question }}</summary>
						<p class="mt-2 text-sm leading-relaxed text-[#5e503c]">{{ item.answer }}</p>
					</details>
				</div>
			</div>

			<div
				id="contact"
				class="rounded-[1.9rem] border border-[#3b302b] bg-[#1d1714] p-6 text-[#f6e7ce] sm:p-8"
			>
				<p class="foji-title-eyebrow text-[#c7a46a]">Contact and Visit</p>
				<h2 class="mt-2 text-4xl text-[#f7edd9] sm:text-5xl">Plan your FOJI visit with confidence</h2>
				<p class="mt-3 text-sm leading-relaxed text-[#d7c5a6] sm:text-base">
					Reach us for reservations, private group inquiries, and menu recommendations tailored to your occasion.
				</p>

				<div class="mt-6 grid gap-3 sm:grid-cols-2">
					<div class="rounded-2xl border border-[#473a33] bg-[#261f1c] p-4">
						<p class="text-xs uppercase tracking-[0.12em] text-[#bca077]">Phone</p>
						<a
							href="tel:+639000000000"
							class="mt-1 block text-sm text-[#f3e2c5] transition hover:text-[#c7a46a]"
						>
							+63 900 000 0000
						</a>
					</div>
					<div class="rounded-2xl border border-[#473a33] bg-[#261f1c] p-4">
						<p class="text-xs uppercase tracking-[0.12em] text-[#bca077]">Email</p>
						<a
							href="mailto:hello@foji-restaurant.com"
							class="mt-1 block text-sm text-[#f3e2c5] transition hover:text-[#c7a46a]"
						>
							hello@foji-restaurant.com
						</a>
					</div>
				</div>

				<div class="mt-4 rounded-2xl border border-[#4a3b34] bg-[#231c18] p-4 text-sm text-[#d7c5a6]">
					<p><span class="font-semibold text-[#f2dfc1]">Address:</span> 7th Avenue District, Metro Manila, Philippines</p>
					<p class="mt-1"><span class="font-semibold text-[#f2dfc1]">Hours:</span> Open daily from 11:00 AM to 10:00 PM</p>
				</div>

				<div class="mt-6 flex flex-wrap gap-3">
					<UButton
						label="Open Full Menu"
						color="neutral"
						:to="localePath('/menu')"
						class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
					/>
					<UButton
						label="Reserve A Table"
						color="neutral"
						variant="outline"
						:to="`${localePath('/')}#reservation`"
						class="border-[#665849] text-[#edd9b9] hover:bg-[#201915]"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
