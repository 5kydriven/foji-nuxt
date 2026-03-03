<script setup lang="ts">
	import OrderModal from './_components/modals/order-modal.vue';

	const localePath = useLocalePath();

	const reviews = [
		{
			name: 'Alyssa T.',
			visit: 'Dinner Date',
			comment: 'Elegant ambiance and consistently good dishes. The reservation process is also very straightforward.',
		},
		{
			name: 'Dominic R.',
			visit: 'Business Lunch',
			comment: 'Service speed is excellent even during lunch rush. Great place for client meetings.',
		},
		{
			name: 'Naomi C.',
			visit: 'Weekend Family Meal',
			comment: 'Balanced flavors and beautiful plating. Everyone in the family found a dish they enjoyed.',
		},
		{
			name: 'Kenji S.',
			visit: 'Regular Guest',
			comment: 'Reliable quality every time. FOJI has become my top pick for Japanese set meals.',
		},
		{
			name: 'Maria L.',
			visit: 'Birthday Celebration',
			comment: 'Staff handled our special request smoothly and made the celebration feel premium.',
		},
		{
			name: 'Paolo M.',
			visit: 'After-work Dinner',
			comment: 'Great menu options and polished atmosphere. Worth reserving in advance.',
		},
	];
</script>

<template>
	<div class="min-h-screen bg-[#f7efdf]">
		<section class="relative overflow-hidden bg-[#171311] text-[#f8ecd7]">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_left_top,_rgba(199,164,106,0.22),_transparent_45%)]" />
			<div class="section-shell py-14 sm:py-16">
				<p class="foji-title-eyebrow text-[#c7a46a]">Guest Reviews</p>
				<h1 class="mt-2 max-w-3xl text-5xl sm:text-6xl">What guests say after dining at FOJI</h1>
				<p class="mt-4 max-w-2xl text-sm text-[#d6c3a6] sm:text-base">
					Feedback from guests who booked tables for dates, family dinners, and business meals.
				</p>
			</div>
		</section>

		<section class="section-shell section-padding">
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<article
					v-for="review in reviews"
					:key="review.name + review.visit"
					class="rounded-3xl border border-[#dcc9ab] bg-[#fff8eb] p-5 shadow-[0_10px_30px_rgba(40,33,23,0.08)]"
				>
					<div class="flex gap-1 text-[#b88e4f]">
						<UIcon
							v-for="star in 5"
							:key="star"
							name="i-heroicons-star-solid"
							class="size-4"
						/>
					</div>
					<p class="mt-3 text-sm leading-relaxed text-[#5f523e]">{{ review.comment }}</p>
					<div class="mt-4 border-t border-[#e9dcc5] pt-3">
						<p class="text-sm font-semibold text-[#231b16]">{{ review.name }}</p>
						<p class="text-xs uppercase tracking-[0.12em] text-[#8a7760]">{{ review.visit }}</p>
					</div>
				</article>
			</div>

			<div class="mt-10 rounded-3xl border border-[#3c302a] bg-[#1d1714] p-6 text-[#f6e8cf] sm:p-8">
				<div class="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
					<div>
						<p class="foji-title-eyebrow text-[#c7a46a]">Reserve Today</p>
						<h2 class="mt-1 text-4xl sm:text-5xl">Ready for your own FOJI experience?</h2>
					</div>
					<div class="flex flex-wrap gap-3">
						<OrderModal
							label="Reserve Now"
							color="neutral"
							size="lg"
							button-class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
						/>
						<UButton
							label="View Menu"
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
