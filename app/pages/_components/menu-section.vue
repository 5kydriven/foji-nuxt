<script setup lang="ts">
	import { motion } from 'motion-v';
	import type { Menu } from '~~/shared/types/menu.type';

	const localePath = useLocalePath();

	const props = defineProps<{
		menus: Menu[];
	}>();

	const previewMenus = computed(() => props.menus.slice(0, 6));
</script>

<template>
	<section
		id="menu"
		class="bg-zinc-900"
	>
		<div class="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
			<div class="space-y-2 text-center">
				<p class="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">Menu Preview</p>
				<h2 class="text-3xl font-bold text-white sm:text-4xl">Our Regular Menu Pack</h2>
				<p class="mx-auto max-w-2xl text-sm text-zinc-300 sm:text-base">
					Explore our rice sets and chef-crafted comfort meals, then open the full menu for more options.
				</p>
			</div>

			<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<motion.article
					v-for="(menu, index) in previewMenus"
					:key="menu.name"
					:initial="{ opacity: 0, y: 20 }"
					:whileInView="{ opacity: 1, y: 0 }"
					:inViewOptions="{ once: true }"
					:transition="{ duration: 0.35, delay: index * 0.05 }"
					class="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
				>
					<div class="bg-gradient-to-b from-zinc-100 to-zinc-200 p-4">
						<img
							:src="menu.image"
							:alt="menu.name"
							class="mx-auto h-36 w-36 object-contain transition duration-300 group-hover:scale-105"
						/>
					</div>
					<div class="space-y-2 p-4">
						<p class="text-xs font-medium uppercase tracking-wide text-zinc-400">{{ menu.japaneseName }}</p>
						<h3 class="text-base font-semibold text-white">{{ menu.name }}</h3>
						<p class="text-lg font-bold text-red-300">PHP {{ menu.price }}</p>
					</div>
				</motion.article>
			</div>

			<div class="mt-8 flex justify-center">
				<UButton
					label="Open Full Menu"
					size="lg"
					color="error"
					:to="localePath('/menu')"
				/>
			</div>
		</div>
	</section>
</template>
