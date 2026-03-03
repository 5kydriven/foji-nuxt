<script setup lang="ts">
	import OrderModal from './modals/order-modal.vue';

	const localePath = useLocalePath();
</script>

<template>
	<section class="relative overflow-hidden bg-gradient-to-r from-[#8f1f1f] via-[#a62724] to-[#7f1c1c] text-[#fff4e6]">
		<div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%,rgba(0,0,0,0.25))]" />
		<div class="section-shell relative py-12 sm:py-14">
			<div class="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
				<div class="space-y-2">
					<p class="foji-title-eyebrow text-[#f0d3a6]">Ready To Dine</p>
					<h2 class="text-4xl text-[#fff7ee] sm:text-5xl">Reserve your FOJI table and elevate tonight's meal</h2>
					<p class="max-w-2xl text-sm text-[#f8e3c4] sm:text-base">
						Move from browsing to booking in one step. Secure your preferred time slot and enjoy premium Japanese
						dining without the queue.
					</p>
				</div>

				<div class="flex flex-wrap gap-3">
					<OrderModal
						label="Reserve Table"
						color="neutral"
						size="lg"
						button-class="bg-[#1f1714] text-[#f7e7c9] hover:bg-[#2a1f1a]"
					/>
					<UButton
						label="View Full Menu"
						size="lg"
						color="neutral"
						:to="localePath('/menu')"
						class="border border-[#f3dcb8] bg-transparent text-[#fff1de] hover:bg-[#7f1c1c]"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
