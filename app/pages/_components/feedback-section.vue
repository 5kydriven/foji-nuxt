<script setup lang="ts">
	import { motion } from 'motion-v';

	const feedbacks = [
		{
			name: 'Alyssa Kim',
			review: 'The pork ginger set was excellent and serving time was fast even at dinner rush.',
			image: 'https://picsum.photos/640/640?random=11',
		},
		{
			name: 'Marco Santos',
			review: 'Great atmosphere and very friendly staff. The reservation process was straightforward.',
			image: 'https://picsum.photos/640/640?random=12',
		},
		{
			name: 'Naomi Cruz',
			review: 'Balanced flavors and good portions. FOJI feels premium without being overwhelming.',
			image: 'https://picsum.photos/640/640?random=13',
		},
		{
			name: 'Kenji Rivera',
			review: 'I keep coming back for the rice sets and miso soup. Consistent quality every visit.',
			image: 'https://picsum.photos/640/640?random=14',
		},
	];
</script>

<template>
	<section class="bg-white">
		<motion.div
			:initial="{ opacity: 0, y: 16 }"
			:whileInView="{ opacity: 1, y: 0 }"
			:inViewOptions="{ once: true }"
			class="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8"
		>
			<div class="space-y-2 text-center">
				<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">Testimonials</p>
				<h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">What our guests say</h2>
				<p class="mx-auto max-w-2xl text-sm text-zinc-600 sm:text-base">
					Real customer feedback that highlights taste, service, and overall dining experience.
				</p>
			</div>

			<div class="mt-8">
				<UCarousel
					v-slot="{ item }"
					loop
					dots
					:autoplay="{ delay: 3500 }"
					:items="feedbacks"
					:ui="{ item: 'px-2 sm:basis-1/2 lg:basis-1/3' }"
				>
					<article class="h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
						<div class="flex gap-1 text-red-500">
							<UIcon
								v-for="star in 5"
								:key="star"
								name="i-heroicons-star-solid"
								class="size-4"
							/>
						</div>
						<p class="mt-3 text-sm leading-relaxed text-zinc-700">{{ item.review }}</p>
						<div class="mt-4 flex items-center gap-3">
							<img
								:src="item.image"
								alt="Customer profile"
								class="size-10 rounded-full object-cover"
							/>
							<p class="text-sm font-semibold text-zinc-900">{{ item.name }}</p>
						</div>
					</article>
				</UCarousel>
			</div>
		</motion.div>
	</section>
</template>
