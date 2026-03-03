<script setup lang="ts">
	import { motion } from 'motion-v';
	import OrderModal from './modals/order-modal.vue';

	const localePath = useLocalePath();
</script>

<template>
	<section
		id="reservation"
		class="bg-zinc-50"
	>
		<div class="mx-auto grid max-w-screen-xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
			<motion.div
				:initial="{ opacity: 0, x: -16 }"
				:whileInView="{ opacity: 1, x: 0 }"
				:inViewOptions="{ once: true }"
				class="space-y-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-8"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">Book A Table</p>
				<h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">
					Do you have plans to dine at FOJI?
				</h2>
				<p class="text-sm text-zinc-600 sm:text-base">
					Reserve early to secure your preferred schedule and avoid peak-hour waiting times.
				</p>
				<ul class="space-y-2 text-sm text-zinc-600">
					<li class="flex items-center gap-2">
						<UIcon
							name="i-heroicons-check-circle-solid"
							class="size-5 text-red-500"
						/>
						Fast confirmation by our staff
					</li>
					<li class="flex items-center gap-2">
						<UIcon
							name="i-heroicons-check-circle-solid"
							class="size-5 text-red-500"
						/>
						Flexible seating for small to medium groups
					</li>
					<li class="flex items-center gap-2">
						<UIcon
							name="i-heroicons-check-circle-solid"
							class="size-5 text-red-500"
						/>
						Special requests are accommodated when available
					</li>
				</ul>

				<div class="flex flex-wrap gap-3">
					<OrderModal
						label="Reserve Now"
						color="error"
						size="lg"
					/>
					<UButton
						label="Browse Full Menu"
						color="neutral"
						variant="outline"
						size="lg"
						:to="localePath('/menu')"
					/>
				</div>
			</motion.div>

			<motion.div
				:initial="{ opacity: 0, x: 16 }"
				:whileInView="{ opacity: 1, x: 0 }"
				:inViewOptions="{ once: true }"
				class="rounded-3xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white shadow-lg sm:p-8"
			>
				<p class="text-sm uppercase tracking-[0.14em] text-red-100">Quick Reservation Flow</p>
				<div class="mt-4 space-y-4">
					<div class="rounded-xl bg-white/10 p-4">
						<p class="text-xs uppercase tracking-wide text-red-100">Step 1</p>
						<p class="text-lg font-semibold">Share your date and time</p>
					</div>
					<div class="rounded-xl bg-white/10 p-4">
						<p class="text-xs uppercase tracking-wide text-red-100">Step 2</p>
						<p class="text-lg font-semibold">Tell us your group size</p>
					</div>
					<div class="rounded-xl bg-white/10 p-4">
						<p class="text-xs uppercase tracking-wide text-red-100">Step 3</p>
						<p class="text-lg font-semibold">Receive confirmation from FOJI</p>
					</div>
				</div>
			</motion.div>
		</div>
	</section>
</template>
