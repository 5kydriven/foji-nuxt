<script setup lang="ts">
	import { motion } from 'motion-v';

	const localePath = useLocalePath();
</script>

<template>
	<section class="bg-white">
		<div class="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
			<div class="grid items-center gap-8 rounded-3xl bg-red-50 p-6 lg:grid-cols-2 lg:p-10">
				<motion.div
					:initial="{ opacity: 0, x: -16 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
					class="space-y-4"
				>
					<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">The FOJI Experience</p>
					<h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">More than a meal</h2>
					<p class="text-sm text-zinc-600 sm:text-base">
						FOJI blends traditional Japanese flavors with warm hospitality and a modern dining atmosphere.
					</p>
					<div class="grid grid-cols-1 gap-3 text-sm text-zinc-700 sm:grid-cols-2">
						<div class="rounded-xl bg-white p-3 ring-1 ring-red-100">Fresh ingredients daily</div>
						<div class="rounded-xl bg-white p-3 ring-1 ring-red-100">Balanced set meals</div>
						<div class="rounded-xl bg-white p-3 ring-1 ring-red-100">Friendly table service</div>
						<div class="rounded-xl bg-white p-3 ring-1 ring-red-100">Cozy modern ambiance</div>
					</div>
					<UButton
						label="About FOJI"
						color="error"
						variant="soft"
						:to="localePath('/about')"
					/>
				</motion.div>

				<motion.div
					:initial="{ opacity: 0, x: 16 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
					class="flex items-center justify-center"
				>
					<div class="rounded-3xl bg-red-600 p-6 shadow-lg">
						<img
							src="/chef.png"
							alt="FOJI chef"
							class="h-56 w-56 rounded-2xl object-cover drop-shadow-2xl sm:h-72 sm:w-72"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	</section>
</template>
