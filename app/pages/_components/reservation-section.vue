<script setup lang="ts">
	import { motion } from 'motion-v';
	import OrderModal from './modals/order-modal.vue';

	const localePath = useLocalePath();
</script>

<template>
	<section
		id="reservation"
		class="relative overflow-hidden bg-[#151110] text-[#f6e7ce]"
	>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,_rgba(157,39,35,0.3),_transparent_45%)]" />
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,_rgba(199,164,106,0.2),_transparent_42%)]" />

		<div class="section-shell section-padding relative">
			<div class="grid gap-5 lg:grid-cols-2">
				<motion.div
					:initial="{ opacity: 0, x: -16 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
					class="rounded-[1.9rem] border border-[#342b27] bg-[#211a17] p-6 sm:p-8"
				>
					<p class="foji-title-eyebrow text-[#c7a46a]">Reserve Your Visit</p>
					<h2 class="mt-2 text-4xl text-[#f8edd8] sm:text-5xl">Secure your preferred table before peak hours</h2>
					<p class="mt-3 text-sm leading-relaxed text-[#d2c0a1] sm:text-base">
						Whether it is a date night, business dinner, or celebration, reserving ahead ensures a smoother
						experience and faster seating.
					</p>

					<div class="mt-5 space-y-3">
						<div class="flex items-center gap-3 rounded-2xl border border-[#3f342e] bg-[#261f1c] p-4">
							<UIcon
								name="i-heroicons-check-circle-solid"
								class="size-5 text-[#c7a46a]"
							/>
							<p class="text-sm text-[#e2d3b8]">Confirmation from FOJI staff after request submission</p>
						</div>
						<div class="flex items-center gap-3 rounded-2xl border border-[#3f342e] bg-[#261f1c] p-4">
							<UIcon
								name="i-heroicons-check-circle-solid"
								class="size-5 text-[#c7a46a]"
							/>
							<p class="text-sm text-[#e2d3b8]">Flexible seating options for couples, families, and groups</p>
						</div>
						<div class="flex items-center gap-3 rounded-2xl border border-[#3f342e] bg-[#261f1c] p-4">
							<UIcon
								name="i-heroicons-check-circle-solid"
								class="size-5 text-[#c7a46a]"
							/>
							<p class="text-sm text-[#e2d3b8]">Support for special requests when available</p>
						</div>
					</div>

					<div class="mt-6 flex flex-wrap gap-3">
						<OrderModal
							label="Reserve Now"
							color="neutral"
							size="lg"
							button-class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
						/>
						<UButton
							label="Browse Full Menu"
							color="neutral"
							variant="outline"
							size="lg"
							:to="localePath('/menu')"
							class="border-[#5d5043] text-[#f2e2c6] hover:bg-[#201915]"
						/>
					</div>
				</motion.div>

				<motion.div
					:initial="{ opacity: 0, x: 16 }"
					:whileInView="{ opacity: 1, x: 0 }"
					:inViewOptions="{ once: true }"
					class="rounded-[1.9rem] border border-[#614725] bg-gradient-to-br from-[#4c3422] to-[#2f2117] p-6 sm:p-8"
				>
					<p class="foji-title-eyebrow text-[#e2c08e]">Simple Reservation Flow</p>
					<div class="mt-5 space-y-4">
						<div class="rounded-2xl border border-[#7b5b34] bg-[#3e2b1c] p-4">
							<p class="text-xs uppercase tracking-[0.14em] text-[#d4b488]">Step 1</p>
							<p class="mt-1 text-xl text-[#f8ecd8]">Choose date, time, and guest count</p>
						</div>
						<div class="rounded-2xl border border-[#7b5b34] bg-[#3e2b1c] p-4">
							<p class="text-xs uppercase tracking-[0.14em] text-[#d4b488]">Step 2</p>
							<p class="mt-1 text-xl text-[#f8ecd8]">Share your contact and special request details</p>
						</div>
						<div class="rounded-2xl border border-[#7b5b34] bg-[#3e2b1c] p-4">
							<p class="text-xs uppercase tracking-[0.14em] text-[#d4b488]">Step 3</p>
							<p class="mt-1 text-xl text-[#f8ecd8]">Receive confirmation and enjoy your FOJI experience</p>
						</div>
					</div>
					<div class="mt-5 rounded-2xl border border-[#7b5b34] bg-[#2d2017] p-4 text-sm text-[#d8bf96]">
						Tip: Reserve at least 2 hours ahead for faster seat availability during dinner rush.
					</div>
				</motion.div>
			</div>
		</div>
	</section>
</template>
