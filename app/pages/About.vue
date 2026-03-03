<script setup lang="ts">
	import { motion } from 'motion-v';
</script>

<template>
	<div class="min-h-screen bg-[#f6ecda]">
		<section class="relative overflow-hidden bg-[#181312] text-[#f6e9d0]">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(199,164,106,0.2),_transparent_40%)]" />
			<div class="section-shell py-14 sm:py-16">
				<p class="foji-title-eyebrow text-[#c7a46a]">About FOJI</p>
				<h1 class="mt-2 max-w-3xl text-5xl sm:text-6xl">A Japanese Restaurant Concept Rooted in Craft and Hospitality</h1>
				<p class="mt-4 max-w-2xl text-sm leading-relaxed text-[#d6c3a6] sm:text-base">
					FOJI was built to offer Metro Manila diners a premium Japanese experience that feels warm, polished, and
					easy to return to.
				</p>
			</div>
		</section>

		<section class="section-shell section-padding">
			<div class="grid items-center gap-7 rounded-[2rem] border border-[#dbc8a9] bg-[#fdf6e9] p-5 shadow-[0_16px_40px_rgba(40,32,23,0.09)] lg:grid-cols-2 lg:p-10">
				<motion.div
					:initial="{ opacity: 0, x: -16 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
				>
					<img
						src="/chef-about.png"
						alt="FOJI chef story"
						class="h-full w-full rounded-3xl object-cover shadow-2xl"
					/>
				</motion.div>
				<motion.div
					:initial="{ opacity: 0, x: 16 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
					class="space-y-4"
				>
					<p class="foji-title-eyebrow text-[#9a2a24]">Our Story</p>
					<h2 class="text-4xl text-[#1c1511] sm:text-5xl">Designed for diners who value both flavor and atmosphere</h2>
					<p class="text-sm leading-relaxed text-[#5d503d] sm:text-base">
						Our vision is simple: bring together authentic Japanese set meals, modern dining comfort, and service
						that respects the guest's time. FOJI combines the discipline of Japanese preparation with the warmth of
						Filipino hospitality.
					</p>
					<div class="grid gap-3 sm:grid-cols-2">
						<div class="rounded-2xl border border-[#e3d3bb] bg-[#f5e9d6] p-4 text-sm text-[#4f4334]">
							<p class="font-semibold text-[#271e19]">Quality first sourcing</p>
							<p class="mt-1">Ingredients are selected daily for freshness and flavor consistency.</p>
						</div>
						<div class="rounded-2xl border border-[#e3d3bb] bg-[#f5e9d6] p-4 text-sm text-[#4f4334]">
							<p class="font-semibold text-[#271e19]">Service with pace</p>
							<p class="mt-1">Every guest experience is optimized for comfort and efficiency.</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>

		<section class="section-shell pb-16">
			<div class="grid gap-4 md:grid-cols-3">
				<div class="rounded-3xl border border-[#d9c6a8] bg-[#fff7ea] p-6">
					<p class="foji-title-eyebrow text-[#9a2a24]">Mission</p>
					<p class="mt-3 text-sm leading-relaxed text-[#5b4d3a]">
						Deliver premium Japanese set meals with consistent quality and honest value.
					</p>
				</div>
				<div class="rounded-3xl border border-[#d9c6a8] bg-[#fff7ea] p-6">
					<p class="foji-title-eyebrow text-[#9a2a24]">Vision</p>
					<p class="mt-3 text-sm leading-relaxed text-[#5b4d3a]">
						Become the go-to Japanese fine-casual destination in Makati and BGC-inspired dining districts.
					</p>
				</div>
				<div class="rounded-3xl border border-[#d9c6a8] bg-[#fff7ea] p-6">
					<p class="foji-title-eyebrow text-[#9a2a24]">Promise</p>
					<p class="mt-3 text-sm leading-relaxed text-[#5b4d3a]">
						From first inquiry to final bill, guests receive thoughtful and reliable hospitality.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>
