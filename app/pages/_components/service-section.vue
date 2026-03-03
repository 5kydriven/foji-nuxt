<script setup lang="ts">
	import { motion } from 'motion-v';
	import { useLocalePath } from '#imports';

	const localePath = useLocalePath();
</script>

<template>
	<section
		id="about"
		class="relative overflow-hidden bg-[#f4ead8]"
	>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(157,39,35,0.18),_transparent_45%)]" />

		<div class="section-shell section-padding relative">
			<div class="grid items-center gap-8 rounded-[2rem] border border-[#dbc8aa] bg-[#f9f1e2] p-5 shadow-[0_18px_60px_rgba(46,36,26,0.1)] md:p-8 lg:grid-cols-2 lg:p-10">
				<motion.div
					:initial="{ opacity: 0, x: -18 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
					class="space-y-5"
				>
					<p class="foji-title-eyebrow text-[#9a2a24]">About FOJI</p>
					<h2 class="text-4xl leading-tight text-[#191411] sm:text-5xl">
						A Japanese Dining Concept Built for the Metro Manila Fine-Casual Crowd
					</h2>
					<p class="text-sm leading-relaxed text-[#5f533f] sm:text-base">
						FOJI was created to deliver authentic Japanese comfort food in a setting that feels elevated but
						approachable. From clean interiors to attentive service, every touchpoint is designed to make guests
						stay longer and return often.
					</p>

					<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<div class="rounded-2xl border border-[#e1cfb1] bg-[#f4e8d4] p-4 text-sm text-[#4f4334]">
							<span class="font-semibold text-[#231b16]">Fresh Daily Prep</span>
							<p class="mt-1">Proteins and sides are prepared in controlled batches for peak quality.</p>
						</div>
						<div class="rounded-2xl border border-[#e1cfb1] bg-[#f4e8d4] p-4 text-sm text-[#4f4334]">
							<span class="font-semibold text-[#231b16]">Premium Service Rhythm</span>
							<p class="mt-1">Efficient handoff from greeting to billing for stress-free dining.</p>
						</div>
						<div class="rounded-2xl border border-[#e1cfb1] bg-[#f4e8d4] p-4 text-sm text-[#4f4334]">
							<span class="font-semibold text-[#231b16]">Authentic Flavor Base</span>
							<p class="mt-1">Japanese-inspired seasoning profile adjusted for local preference.</p>
						</div>
						<div class="rounded-2xl border border-[#e1cfb1] bg-[#f4e8d4] p-4 text-sm text-[#4f4334]">
							<span class="font-semibold text-[#231b16]">Business and Date Ready</span>
							<p class="mt-1">Atmosphere suitable for casual lunches and evening reservations.</p>
						</div>
					</div>

					<UButton
						label="Learn More About FOJI"
						color="neutral"
						:to="localePath('/about')"
						class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
					/>
				</motion.div>

				<motion.div
					:initial="{ opacity: 0, x: 18 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
					class="relative"
				>
					<div class="overflow-hidden rounded-[1.75rem] border border-[#4e3d2d] bg-gradient-to-b from-[#2c211a] to-[#17110f] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
						<img
							src="/chef.png"
							alt="FOJI chef preparing Japanese dishes"
							class="mx-auto h-72 w-full rounded-2xl object-cover"
						/>
						<div class="mt-4 rounded-2xl border border-[#514237] bg-[#1f1714] p-4 text-[#dfcead]">
							<p class="foji-title-eyebrow text-[#c7a46a]">Chef Highlight</p>
							<h3 class="mt-2 text-2xl text-[#f7ecd8]">Precision, warmth, and consistency in every plate</h3>
							<p class="mt-1 text-sm text-[#c9b795]">
								Our kitchen approach blends Japanese discipline with hospitality fit for modern Filipino diners.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	</section>
</template>
