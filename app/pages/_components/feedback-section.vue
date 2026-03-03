<script setup lang="ts">
	import { motion } from 'motion-v';

	const feedbacks = [
		{
			name: 'Alyssa T.',
			role: 'Makati Office Professional',
			review: 'FOJI feels polished from the first greeting to dessert. Their pork ginger set is consistent even during peak dinner hours.',
			image: 'https://i.pravatar.cc/200?img=12',
		},
		{
			name: 'Marco R.',
			role: 'Weekend Dine-in Guest',
			review: 'The ambiance is exactly what we wanted for date night, and the reservation process was smooth and reliable.',
			image: 'https://i.pravatar.cc/200?img=15',
		},
		{
			name: 'Naomi C.',
			role: 'Food Content Creator',
			review: 'The plating is clean and premium. Every set feels complete and thoughtfully balanced, not rushed.',
			image: 'https://i.pravatar.cc/200?img=26',
		},
		{
			name: 'Kenji S.',
			role: 'Regular Lunch Guest',
			review: 'Fast service, great portions, and authentic Japanese flavor profile. It is my go-to spot for client lunches.',
			image: 'https://i.pravatar.cc/200?img=32',
		},
	];
</script>

<template>
	<section
		id="testimonials"
		class="relative overflow-hidden bg-[#f8efdf]"
	>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(157,39,35,0.13),_transparent_42%)]" />

		<motion.div
			:initial="{ opacity: 0, y: 16 }"
			:whileInView="{ opacity: 1, y: 0 }"
			:inViewOptions="{ once: true }"
			class="section-shell section-padding relative"
		>
			<div class="space-y-3 text-center">
				<p class="foji-title-eyebrow text-[#9a2a24]">Testimonials</p>
				<h2 class="text-4xl text-[#1a1512] sm:text-5xl">Trusted by Guests Who Expect Quality</h2>
				<p class="mx-auto max-w-3xl text-sm leading-relaxed text-[#665842] sm:text-base">
					Guest experiences that highlight what matters most: flavor consistency, smooth reservation flow,
					atmosphere, and service quality.
				</p>
			</div>

			<div class="mt-10">
				<UCarousel
					v-slot="{ item }"
					loop
					dots
					:autoplay="{ delay: 3800 }"
					:items="feedbacks"
					:ui="{ item: 'px-2 sm:basis-1/2 lg:basis-1/3' }"
				>
					<article class="h-full rounded-3xl border border-[#dcc8aa] bg-[#fff8ee] p-6 shadow-[0_10px_34px_rgba(40,32,23,0.09)]">
						<div class="flex gap-1 text-[#b98f51]">
							<UIcon
								v-for="star in 5"
								:key="star"
								name="i-heroicons-star-solid"
								class="size-4"
							/>
						</div>
						<p class="mt-4 text-sm leading-relaxed text-[#5d4f3b]">{{ item.review }}</p>
						<div class="mt-5 flex items-center gap-3 border-t border-[#e7d6bc] pt-4">
							<img
								:src="item.image"
								alt="Guest profile"
								class="size-11 rounded-full border border-[#d3b88f] object-cover"
							/>
							<div>
								<p class="text-sm font-semibold text-[#221a15]">{{ item.name }}</p>
								<p class="text-xs uppercase tracking-[0.11em] text-[#8a7760]">{{ item.role }}</p>
							</div>
						</div>
					</article>
				</UCarousel>
			</div>
		</motion.div>
	</section>
</template>
