<script setup lang="ts">
	const year = new Date().getFullYear();
	const localePath = useLocalePath();
	const homePath = localePath('/');
</script>

<template>
	<footer class="relative overflow-hidden border-t border-[#2e2722] bg-[#120f0e] text-[#eadcc3]">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,164,106,0.16),_transparent_58%)]" />

		<div class="section-shell relative section-padding">
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div class="space-y-4">
					<div class="flex items-center gap-3">
						<img
							src="/logo.png"
							alt="FOJI logo"
							class="h-12 w-12"
						/>
						<div>
							<p class="text-2xl font-semibold text-[#f7e8d0]">FOJI</p>
							<p class="font-japanese text-xs text-[#c7a46a]">Washoku Dining</p>
						</div>
					</div>
					<p class="text-sm text-[#d3c2a6]">
						Premium Japanese dining designed for intimate dinners, business lunches, and special occasions.
					</p>
					<p class="text-xs uppercase tracking-[0.18em] text-[#a99573]">
						Open Daily - 11:00 AM to 10:00 PM
					</p>
				</div>

				<div>
					<p class="foji-title-eyebrow text-[#c7a46a]">Quick Links</p>
					<div class="mt-4 space-y-2 text-sm text-[#d9c7a8]">
						<NuxtLink
							:to="`${homePath}#menu`"
							class="block transition hover:text-[#c7a46a]"
						>
							Menu Highlights
						</NuxtLink>
						<NuxtLink
							:to="`${homePath}#about`"
							class="block transition hover:text-[#c7a46a]"
						>
							Our Story
						</NuxtLink>
						<NuxtLink
							:to="`${homePath}#reservation`"
							class="block transition hover:text-[#c7a46a]"
						>
							Reserve a Table
						</NuxtLink>
						<NuxtLink
							:to="`${homePath}#faq`"
							class="block transition hover:text-[#c7a46a]"
						>
							FAQ
						</NuxtLink>
					</div>
				</div>

				<div>
					<p class="foji-title-eyebrow text-[#c7a46a]">Contact</p>
					<div class="mt-4 space-y-2 text-sm text-[#d9c7a8]">
						<p>7th Avenue District, Metro Manila</p>
						<a
							href="tel:+639000000000"
							class="block transition hover:text-[#c7a46a]"
						>
							+63 900 000 0000
						</a>
						<a
							href="mailto:hello@foji-restaurant.com"
							class="block transition hover:text-[#c7a46a]"
						>
							hello@foji-restaurant.com
						</a>
					</div>
				</div>

				<div class="space-y-4">
					<p class="foji-title-eyebrow text-[#c7a46a]">Reservation</p>
					<p class="text-sm text-[#d9c7a8]">
						For smoother service during lunch and dinner rush, reserve at least 2 hours ahead.
					</p>
					<UButton
						label="Reserve Now"
						color="neutral"
						:to="`${homePath}#reservation`"
						class="bg-[#9d2723] text-[#fdf7ee] hover:bg-[#b12f2a]"
					/>
				</div>
			</div>

			<div class="mt-10 border-t border-[#2e2722] pt-5 text-xs text-[#a99573] sm:flex sm:items-center sm:justify-between">
				<p>Copyright {{ year }} FOJI Japanese Restaurant. All rights reserved.</p>
				<p class="mt-2 sm:mt-0">Crafted for a premium dining journey from menu discovery to reservation.</p>
			</div>
		</div>
	</footer>
</template>
