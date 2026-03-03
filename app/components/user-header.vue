<script setup lang="ts">
	const localePath = useLocalePath();
	const route = useRoute();

	const homePath = localePath('/');
	const menuPath = localePath('/menu');
	const reviewPath = localePath('/review');
	const faqPath = localePath('/faq');

	const isMobileMenuOpen = ref(false);

	const sectionLinks = [
		{ label: 'Home', hash: '' },
		{ label: 'Menu', hash: '#menu' },
		{ label: 'About', hash: '#about' },
		{ label: 'Testimonials', hash: '#testimonials' },
		{ label: 'Reservation', hash: '#reservation' },
		{ label: 'Contact', hash: '#contact' },
	];

	const pageLinks = [
		{ label: 'Full Menu', to: menuPath },
		{ label: 'Reviews', to: reviewPath },
		{ label: 'FAQ', to: faqPath },
	];

	function sectionTo(hash: string) {
		return hash ? `${homePath}${hash}` : homePath;
	}

	function isSectionActive(hash: string) {
		if (route.path !== homePath) {
			return false;
		}

		if (!hash) {
			return !route.hash;
		}

		return route.hash === hash;
	}

	function isPageActive(path: string) {
		return route.path === path;
	}

	function navLinkClass(isActive: boolean) {
		return isActive
			? 'rounded-full border border-[#6f5d49] bg-[#2a221d] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d9ba86] transition'
			: 'rounded-full border border-transparent px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f7e8d0] transition hover:border-[#4c4036] hover:bg-[#211a16] hover:text-[#c7a46a]';
	}

	function closeMobileMenu() {
		isMobileMenuOpen.value = false;
	}
</script>

<template>
	<header class="sticky top-0 z-50 border-b border-[#2f2722] bg-[#161312]/95 text-[#f7e8d0] backdrop-blur">
		<div class="border-b border-[#2f2722]/80">
			<div class="section-shell flex items-center justify-between gap-3 py-2 text-[11px] uppercase tracking-[0.15em] text-[#d7c8ad] sm:text-xs">
				<div class="flex items-center gap-2">
					<UIcon
						name="i-heroicons-map-pin-solid"
						class="size-4 text-[#c7a46a]"
					/>
					<span>Makati and BGC inspired dining in the Philippines</span>
				</div>
				<a
					href="tel:+639000000000"
					class="hidden items-center gap-2 transition hover:text-[#c7a46a] sm:flex"
				>
					<UIcon
						name="i-heroicons-phone-solid"
						class="size-4 text-[#c7a46a]"
					/>
					+63 900 000 0000
				</a>
			</div>
		</div>

		<div class="section-shell flex items-center justify-between gap-4 py-3">
			<NuxtLink
				:to="homePath"
				class="flex items-center gap-3"
			>
				<img
					src="/logo.png"
					alt="FOJI Logo"
					class="h-11 w-11 sm:h-12 sm:w-12"
				/>
				<div class="leading-tight">
					<p class="text-2xl font-semibold text-[#f7e8d0]">FOJI</p>
					<p class="font-japanese text-[11px] text-[#c7a46a] sm:text-xs">Washoku Dining</p>
				</div>
			</NuxtLink>

			<nav class="hidden w-full items-center justify-center lg:flex">
				<div class="flex flex-wrap items-center gap-1">
					<NuxtLink
						v-for="item in sectionLinks"
						:key="item.label"
						:to="sectionTo(item.hash)"
						:class="navLinkClass(isSectionActive(item.hash))"
					>
						{{ item.label }}
					</NuxtLink>
					<NuxtLink
						v-for="item in pageLinks"
						:key="item.label"
						:to="item.to"
						:class="navLinkClass(isPageActive(item.to))"
					>
						{{ item.label }}
					</NuxtLink>
				</div>
			</nav>

			<div class="flex items-center gap-2 sm:gap-3">
				<UButton
					label="View Menu"
					color="neutral"
					variant="ghost"
					:to="menuPath"
					class="hidden border border-[#3d342e] bg-[#201a17] px-4 text-[#f7e8d0] hover:bg-[#2a211d] lg:inline-flex"
				/>
				<UButton
					label="Reserve Now"
					color="neutral"
					size="sm"
					:to="`${homePath}#reservation`"
					class="hidden bg-[#9d2723] px-4 text-[#fdf7ee] hover:bg-[#b12f2a] lg:inline-flex"
				/>

				<div class="lg:hidden">
					<USlideover
						v-model:open="isMobileMenuOpen"
						title="FOJI Navigation"
					>
						<UButton
							icon="heroicons:bars-3-bottom-right-solid"
							color="neutral"
							variant="subtle"
							class="border border-[#3d342e] bg-[#201a17] text-[#f7e8d0]"
						/>

						<template #body>
							<div class="space-y-4 bg-[#161312] p-1 text-[#f7e8d0]">
								<nav class="space-y-2">
									<NuxtLink
										v-for="item in sectionLinks"
										:key="`mobile-${item.label}`"
										:to="sectionTo(item.hash)"
										:class="`block ${navLinkClass(isSectionActive(item.hash))}`"
										@click="closeMobileMenu"
									>
										{{ item.label }}
									</NuxtLink>
									<NuxtLink
										v-for="item in pageLinks"
										:key="`mobile-page-${item.label}`"
										:to="item.to"
										:class="`block ${navLinkClass(isPageActive(item.to))}`"
										@click="closeMobileMenu"
									>
										{{ item.label }}
									</NuxtLink>
								</nav>
								<UButton
									label="View Full Menu"
									color="neutral"
									block
									:to="menuPath"
									class="border border-[#3d342e] bg-[#201a17] text-[#f7e8d0] hover:bg-[#2a211d]"
									@click="closeMobileMenu"
								/>
								<UButton
									label="Reserve Now"
									color="neutral"
									block
									:to="`${homePath}#reservation`"
									class="bg-[#9d2723] text-[#fdf7ee] hover:bg-[#b12f2a]"
									@click="closeMobileMenu"
								/>
							</div>
						</template>
					</USlideover>
				</div>
			</div>
		</div>
	</header>
</template>
