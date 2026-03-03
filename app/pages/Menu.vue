<script setup lang="ts">
	import { motion } from 'motion-v';
	import type { Menu } from '~~/shared/types/menu.type';

	const store = useMenuStore();
	const localePath = useLocalePath();

	const fallbackMenus = ref<Menu[]>([
		{
			japaneseName: 'Buta Katsu Toji Don Set',
			name: 'Stewed Egg with Pork Cutlet Rice Set',
			image: '/menu.png',
			price: 300,
			description: 'Crisp pork cutlet simmered in house dashi with fluffy Japanese rice.',
		},
		{
			japaneseName: 'Tokusei Buta Shogayaki Set',
			name: 'Special Pork Ginger Rice Set',
			image: '/menu-2.png',
			price: 300,
			description: 'Tender pork and fragrant ginger glaze with balanced savory notes.',
		},
		{
			japaneseName: 'Pork Chop Tenshinhan Set',
			name: 'Pork Chop Tenshinhan Set',
			image: '/menu-3.png',
			price: 300,
			description: 'Golden omelet rice crowned with pork chop and silky signature sauce.',
		},
		{
			japaneseName: 'Chicken Rice Omelet Set',
			name: 'Chicken Rice Omelet Set',
			image: '/menu-4.png',
			price: 300,
			description: 'Classic comfort with juicy chicken and an umami-rich egg finish.',
		},
		{
			japaneseName: 'Stewed Egg and Chicken Rice Set',
			name: 'Stewed Egg with Chicken Rice Set',
			image: '/menu-5.png',
			price: 300,
			description: 'Braised chicken and egg in delicate broth, served with warm rice.',
		},
		{
			japaneseName: 'Seafood Fried Rice Set',
			name: 'Seafood Fried Rice Set',
			image: '/menu-6.png',
			price: 300,
			description: 'Wok-fried rice with seafood aroma and layered texture.',
		},
	]);

	const displayMenus = computed(() => (store.menus.length ? store.menus : fallbackMenus.value));

	function formatPrice(value?: number) {
		if (!value && value !== 0) {
			return 'PHP --';
		}

		return `PHP ${value.toFixed(2)}`;
	}

	onMounted(async () => {
		await callOnce(() => store.getMenus());
	});
</script>

<template>
	<div class="min-h-screen bg-[#f7efdf]">
		<section class="relative overflow-hidden bg-[#171311] text-[#f8ecd7]">
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_left_top,_rgba(199,164,106,0.23),_transparent_42%)]" />
			<div class="section-shell py-14 sm:py-16">
				<p class="foji-title-eyebrow text-[#c7a46a]">FOJI Full Menu</p>
				<h1 class="mt-2 max-w-3xl text-5xl leading-tight sm:text-6xl">Premium Japanese Set Meals Crafted for Everyday Luxury</h1>
				<p class="mt-4 max-w-2xl text-sm leading-relaxed text-[#d7c5a6] sm:text-base">
					Explore our complete lineup of signature rice sets and guest favorites. Designed for quick lunch comfort
					and elevated dinner moments.
				</p>
				<div class="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[#bea57f]">
					<span class="rounded-full border border-[#4f4033] bg-[#241d19] px-4 py-2">Chef-curated sets</span>
					<span class="rounded-full border border-[#4f4033] bg-[#241d19] px-4 py-2">Premium plating</span>
					<span class="rounded-full border border-[#4f4033] bg-[#241d19] px-4 py-2">Daily availability</span>
				</div>
			</div>
		</section>

		<section class="section-shell section-padding">
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				<motion.article
					v-for="(menu, index) in displayMenus"
					:key="menu.id ?? `${menu.name}-${index}`"
					:initial="{ opacity: 0, y: 18 }"
					:whileInView="{ opacity: 1, y: 0 }"
					:inViewOptions="{ once: true }"
					:transition="{ duration: 0.35, delay: index * 0.04 }"
					class="group overflow-hidden rounded-[1.6rem] border border-[#dcc9ab] bg-[#fff7ea] shadow-[0_10px_28px_rgba(42,33,24,0.09)]"
				>
					<div class="bg-gradient-to-br from-[#efddc3] to-[#d7b993] p-5">
						<img
							:src="menu.image || '/menu.png'"
							:alt="menu.name || 'FOJI menu item'"
							class="mx-auto h-44 w-44 object-contain transition duration-500 group-hover:scale-110"
						/>
					</div>
					<div class="space-y-3 p-5">
						<p class="font-japanese text-sm text-[#7d6c54]">{{ menu.japaneseName || 'FOJI Signature Dish' }}</p>
						<h2 class="text-3xl leading-tight text-[#1d1512]">{{ menu.name || 'Japanese Rice Set' }}</h2>
						<p class="text-sm leading-relaxed text-[#655743]">
							{{ menu.description || 'Balanced savory flavor with premium sides and carefully prepared rice.' }}
						</p>
						<div class="flex items-center justify-between border-t border-[#e6d7c0] pt-3">
							<p class="text-lg font-semibold text-[#9a2a24]">{{ formatPrice(menu.price) }}</p>
							<UButton
								label="Reserve This Dish"
								size="xs"
								color="neutral"
								:to="`${localePath('/')}#reservation`"
								class="border border-[#d8c5a6] bg-[#f4e5cf] text-[#3b2f23] hover:bg-[#e8d7bd]"
							/>
						</div>
					</div>
				</motion.article>
			</div>
		</section>
	</div>
</template>
