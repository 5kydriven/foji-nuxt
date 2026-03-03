<script setup lang="ts">
	import OrderModal from './modals/order-modal.vue';

	const localePath = useLocalePath();
</script>

<template>
	<section class="bg-gradient-to-r from-red-600 via-red-700 to-red-800">
		<div
			class="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8"
		>
			<div class="space-y-2 text-white">
				<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-200">Ready To Dine?</p>
				<h2 class="text-3xl font-bold sm:text-4xl">Reserve your FOJI table today</h2>
				<p class="text-sm text-red-100 sm:text-base">
					Book now and let us prepare a smooth, flavorful dining experience for you.
				</p>
			</div>

			<div class="flex flex-wrap gap-3">
				<OrderModal
					label="Reserve Table"
					color="neutral"
					size="lg"
				/>
				<UButton
					label="Open Full Menu"
					size="lg"
					color="neutral"
					variant="outline"
					:to="localePath('/menu')"
				/>
			</div>
		</div>
	</section>
</template>
