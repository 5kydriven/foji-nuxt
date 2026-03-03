<script setup lang="ts">
	import { motion } from 'motion-v';
	import type { Menu } from '~~/shared/types/menu.type';

	const localePath = useLocalePath();

	const props = defineProps<{
		menus: Menu[];
	}>();

	const featuredMenus = computed(() => props.menus.slice(0, 6));
</script>

<template>
	<section class="bg-white">
		<div class="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
			<div class="flex flex-wrap items-end justify-between gap-4">
				<div class="space-y-2">
					<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">Signature Picks</p>
					<h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">Best Seller Dishes</h2>
					<p class="max-w-2xl text-sm text-zinc-600 sm:text-base">
						Crowd favorites with balanced flavors and premium ingredients.
					</p>
				</div>
				<UButton
					label="See Full Menu"
					color="error"
					variant="soft"
					:to="localePath('/menu')"
				/>
			</div>

			<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<motion.article
					v-for="(item, index) in featuredMenus"
					:key="item.name"
					:initial="{ opacity: 0, y: 16 }"
					:whileInView="{ opacity: 1, y: 0 }"
					:inViewOptions="{ once: true }"
					:transition="{ duration: 0.35, delay: index * 0.06 }"
					class="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
				>
					<div class="relative bg-zinc-50 p-4">
						<img
							:src="item.image"
							:alt="item.name"
							class="mx-auto h-36 w-36 object-contain transition duration-300 group-hover:scale-105"
						/>
					</div>
					<div class="space-y-2 p-4">
						<p class="text-sm font-medium text-zinc-500">{{ item.japaneseName }}</p>
						<h3 class="text-base font-semibold text-zinc-900">{{ item.name }}</h3>
						<div class="flex items-center justify-between">
							<p class="text-lg font-bold text-red-600">PHP {{ item.price }}</p>
							<UButton
								label="Details"
								size="xs"
								variant="ghost"
								color="neutral"
							/>
						</div>
					</div>
				</motion.article>
			</div>
		</div>
	</section>
</template>
