<script setup lang="ts">
import { motion } from 'motion-v';
import OrderModal from './modals/order-modal.vue';

const localePath = useLocalePath();
</script>

<template>
	<section class="relative isolate overflow-hidden bg-[#120f0e] text-[#f8ecd6]">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,_rgba(199,164,106,0.25),_transparent_34%)]"
		/>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,_rgba(146,31,31,0.35),_transparent_38%)]"
		/>
		<div
			class="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-[0.13]"
		/>
		<div
			class="absolute inset-0 bg-gradient-to-b from-transparent via-[#120f0e]/40 to-[#120f0e]"
		/>

		<div
			class="section-shell section-padding relative grid items-center gap-10 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16"
		>
			<motion.div
				:initial="{ opacity: 0, y: 22 }"
				:whileInView="{ opacity: 1, y: 0 }"
				:inViewOptions="{ once: true }"
				class="space-y-7 lg:col-span-7"
			>
				<div class="space-y-3">
					<p class="foji-title-eyebrow text-[#c7a46a]">
						Authentic Japanese Restaurant in the Philippines
					</p>
					<h1
						class="max-w-2xl text-4xl leading-tight text-[#f9efdd] sm:text-5xl xl:text-6xl"
					>
						Refined Washoku Dining Inspired by Tokyo Craft and Makati
						Sophistication
					</h1>
					<p
						class="max-w-xl text-sm leading-relaxed text-[#d8c6a7] sm:text-base"
					>
						FOJI brings Japanese comfort classics and modern presentation
						together. Designed for date nights, client dinners, and guests who
						value premium flavor, ambiance, and seamless service.
					</p>
				</div>

				<div class="flex flex-wrap items-center gap-3">
					<OrderModal
						label="Reserve Now"
						size="lg"
						color="neutral"
						button-class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
					/>
					<UButton
						label="View Menu"
						size="lg"
						color="neutral"
						:to="localePath('/menu')"
						class="border border-[#3f3630] bg-[#1f1916] text-[#f8ecd6] hover:bg-[#2a221e]"
					/>
					<UButton
						label="Order Online"
						size="lg"
						color="neutral"
						variant="outline"
						to="https://foodpanda.ph/"
						target="_blank"
						class="border-[#6a5a4a] text-[#e8d3b0] hover:bg-[#1d1714]"
					/>
				</div>

				<div class="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
					<div class="foji-panel rounded-2xl p-4">
						<p class="text-xl font-semibold text-[#f5e7ce]">4.8</p>
						<p class="text-xs uppercase tracking-[0.14em] text-[#c5b296]">
							Guest Rating
						</p>
					</div>
					<div class="foji-panel rounded-2xl p-4">
						<p class="text-xl font-semibold text-[#f5e7ce]">1,200+</p>
						<p class="text-xs uppercase tracking-[0.14em] text-[#c5b296]">
							Reservations Served
						</p>
					</div>
					<div class="foji-panel rounded-2xl p-4">
						<p class="text-xl font-semibold text-[#f5e7ce]">11AM-10PM</p>
						<p class="text-xs uppercase tracking-[0.14em] text-[#c5b296]">
							Daily Service
						</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				:initial="{ opacity: 0, scale: 0.94 }"
				:whileInView="{ opacity: 1, scale: 1 }"
				:inViewOptions="{ once: true }"
				class="relative lg:col-span-5"
			>
				<div
					class="relative mx-auto max-w-md rounded-[2rem] border border-[#3f3630] bg-gradient-to-b from-[#231d19] to-[#181311] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.55)] sm:p-6"
				>
					<div
						class="absolute -right-6 -top-6 rounded-2xl border border-[#5b4732] bg-[#241a15] px-4 py-3 text-right shadow-xl"
					>
						<p class="text-xs uppercase tracking-[0.12em] text-[#bda47a]">
							Chef Choice
						</p>
						<p class="font-japanese text-sm text-[#f7ecd8]">Katsu Toji Don</p>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div
							class="overflow-hidden rounded-2xl bg-gradient-to-br from-[#f2dbc0] via-[#ead3b5] to-[#dcc09b] p-3"
						>
							<img
								src="/menu.png"
								alt="FOJI signature pork cutlet"
								class="mx-auto h-40 w-40 object-contain transition duration-500 hover:scale-110"
							/>
						</div>
						<div
							class="overflow-hidden rounded-2xl bg-gradient-to-br from-[#dac5a8] via-[#cfb192] to-[#c69d75] p-3"
						>
							<img
								src="/menu-2.png"
								alt="FOJI pork ginger set"
								class="mx-auto h-40 w-40 object-contain transition duration-500 hover:scale-110"
							/>
						</div>
					</div>
					<div
						class="mt-4 rounded-2xl border border-[#3f3630] bg-[#1a1512] p-4"
					>
						<p class="text-xs uppercase tracking-[0.12em] text-[#b8a483]">
							Signature Promise
						</p>
						<p class="mt-2 text-sm text-[#e4d5bc]">
							Fresh preparation, balanced portions, and warm Japanese
							hospitality from first bite to last.
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	</section>
</template>
