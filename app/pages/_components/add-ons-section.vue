<script setup lang="ts">
	import OrderModal from './modals/order-modal.vue';
</script>

<template>
	<section class="relative overflow-hidden bg-[#171311] text-[#f3e5cd]">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(199,164,106,0.2),_transparent_60%)]" />

		<div class="section-shell section-padding relative">
			<div class="grid gap-4 lg:grid-cols-3">
				<div class="rounded-3xl border border-[#392f29] bg-[#211a17] p-6 lg:col-span-2">
					<p class="foji-title-eyebrow text-[#c7a46a]">Japanese Dining Culture</p>
					<h2 class="mt-2 text-4xl text-[#f8edd8] sm:text-5xl">Intentional details behind every FOJI table</h2>
					<p class="mt-3 max-w-3xl text-sm leading-relaxed text-[#d6c4a7] sm:text-base">
						From tea pairing to plating symmetry, FOJI borrows from traditional Japanese dining etiquette so
						guests can enjoy a complete experience, not just a meal.
					</p>
					<div class="mt-6 grid gap-3 sm:grid-cols-3">
						<div class="rounded-2xl border border-[#463932] bg-[#261f1c] p-4">
							<p class="text-sm font-semibold text-[#f7e8d0]">Omotenashi Service</p>
							<p class="mt-1 text-xs leading-relaxed text-[#c9b795]">
								Warm, attentive hospitality with minimal waiting friction.
							</p>
						</div>
						<div class="rounded-2xl border border-[#463932] bg-[#261f1c] p-4">
							<p class="text-sm font-semibold text-[#f7e8d0]">Balanced Course Logic</p>
							<p class="mt-1 text-xs leading-relaxed text-[#c9b795]">
								Every set includes textures and side flavors that complement the main dish.
							</p>
						</div>
						<div class="rounded-2xl border border-[#463932] bg-[#261f1c] p-4">
							<p class="text-sm font-semibold text-[#f7e8d0]">Modern Metro Ambiance</p>
							<p class="mt-1 text-xs leading-relaxed text-[#c9b795]">
								Designed for elevated casual dining in Makati and BGC style neighborhoods.
							</p>
						</div>
					</div>
				</div>

				<div class="rounded-3xl border border-[#654f31] bg-gradient-to-b from-[#352518] to-[#241912] p-6">
					<p class="foji-title-eyebrow text-[#dfc292]">Limited Offer</p>
					<h3 class="mt-2 text-3xl text-[#f9efd9]">Weeknight Reserve and Enjoy a Complimentary Tea Pairing</h3>
					<p class="mt-3 text-sm leading-relaxed text-[#e4cfaa]">
						Reserve from Monday to Thursday and receive curated hot or iced green tea with your signature set.
					</p>
					<div class="mt-6 space-y-2 rounded-2xl border border-[#84623c] bg-[#2b1e16] p-4">
						<p class="text-xs uppercase tracking-[0.14em] text-[#cba770]">Promo Window</p>
						<p class="text-lg text-[#f7e8d0]">5:00 PM - 8:00 PM</p>
						<p class="text-sm text-[#d7be97]">Valid for dine-in reservations only.</p>
					</div>
					<div class="mt-5">
						<OrderModal
							label="Claim Via Reservation"
							color="neutral"
							size="lg"
							button-class="w-full bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
