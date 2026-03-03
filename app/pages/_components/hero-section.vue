<script setup lang="ts">
	import { motion } from 'motion-v';
	import OrderModal from './modals/order-modal.vue';

	const localePath = useLocalePath();
</script>

<template>
	<section class="relative isolate overflow-hidden bg-zinc-950 text-white">
		<div class="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-15" />
		<div class="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/70 to-zinc-950" />

		<div
			class="relative mx-auto grid max-w-screen-xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8"
		>
			<motion.div
				:initial="{ opacity: 0, y: 20 }"
				:whileInView="{ opacity: 1, y: 0 }"
				:inViewOptions="{ once: true }"
				class="space-y-6 lg:col-span-6"
			>
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
					Authentic Japanese Dining
				</p>
				<h1 class="text-4xl font-bold leading-tight sm:text-5xl">
					{{ $t('hero.title') }}
				</h1>
				<p class="max-w-xl text-sm text-zinc-200 sm:text-base">
					{{ $t('hero.description') }}
				</p>

				<div class="flex flex-wrap gap-3">
					<OrderModal
						label="Reserve Table"
						size="lg"
						color="error"
					/>
					<UButton
						label="View Menu"
						size="lg"
						variant="outline"
						color="neutral"
						:to="localePath('/menu')"
					/>
				</div>

				<div class="grid max-w-md grid-cols-3 gap-3 pt-2">
					<div class="rounded-xl border border-white/20 bg-white/5 px-3 py-2">
						<p class="text-lg font-semibold">4.8</p>
						<p class="text-xs text-zinc-300">Guest Rating</p>
					</div>
					<div class="rounded-xl border border-white/20 bg-white/5 px-3 py-2">
						<p class="text-lg font-semibold">1.2k+</p>
						<p class="text-xs text-zinc-300">Reviews</p>
					</div>
					<div class="rounded-xl border border-white/20 bg-white/5 px-3 py-2">
						<p class="text-lg font-semibold">11-22</p>
						<p class="text-xs text-zinc-300">Open Daily</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				:initial="{ opacity: 0, scale: 0.95 }"
				:whileInView="{ opacity: 1, scale: 1 }"
				:inViewOptions="{ once: true }"
				class="relative lg:col-span-6"
			>
				<div class="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
					<div class="grid grid-cols-2 gap-4">
						<div class="rounded-2xl bg-gradient-to-b from-red-100 to-red-200 p-4">
							<img
								src="/menu.png"
								alt="FOJI pork cutlet rice set"
								class="mx-auto w-36 drop-shadow-xl"
							/>
						</div>
						<div class="rounded-2xl bg-gradient-to-b from-zinc-100 to-zinc-200 p-4">
							<img
								src="/menu-2.png"
								alt="FOJI pork ginger rice set"
								class="mx-auto w-36 drop-shadow-xl"
							/>
						</div>
					</div>
					<p class="mt-4 text-sm text-zinc-200">
						Signature rice sets with handcrafted sauces, premium cuts, and balanced side dishes.
					</p>
				</div>
			</motion.div>
		</div>
	</section>
</template>
