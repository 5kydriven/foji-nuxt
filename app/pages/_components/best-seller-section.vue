<script setup lang="ts">
	import { motion } from 'motion-v';
	import type { Menu } from '~~/shared/types/menu.type';

	const localePath = useLocalePath();

	const props = defineProps<{
		menus: Menu[];
	}>();

	const signatureMenus = computed(() => props.menus.slice(0, 3));
</script>

<template>
	<section class="relative overflow-hidden bg-[#181312] text-[#f5e7cf]">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_85%,_rgba(157,39,35,0.38),_transparent_45%)]" />
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,_rgba(199,164,106,0.2),_transparent_40%)]" />

		<div class="section-shell section-padding relative">
			<div class="grid items-start gap-8 lg:grid-cols-12">
				<div class="space-y-5 lg:col-span-5">
					<p class="foji-title-eyebrow text-[#c7a46a]">Chef Signatures</p>
					<h2 class="text-4xl text-[#f8edd8] sm:text-5xl">Crafted to Look Elegant and Taste Comforting</h2>
					<p class="text-sm leading-relaxed text-[#d6c4a7] sm:text-base">
						Each signature plate is finished with controlled heat, proper sauce balance, and carefully layered
						textures to keep every bite rich yet clean.
					</p>

					<div class="space-y-3 rounded-3xl border border-[#342b27] bg-[#211a17] p-5">
						<div class="flex items-start gap-3">
							<span class="mt-1 size-2.5 rounded-full bg-[#c7a46a]" />
							<p class="text-sm text-[#dfcfae]">Daily ingredient checks for freshness and consistency</p>
						</div>
						<div class="flex items-start gap-3">
							<span class="mt-1 size-2.5 rounded-full bg-[#c7a46a]" />
							<p class="text-sm text-[#dfcfae]">Sauces prepared in-house with Japanese-inspired seasoning</p>
						</div>
						<div class="flex items-start gap-3">
							<span class="mt-1 size-2.5 rounded-full bg-[#c7a46a]" />
							<p class="text-sm text-[#dfcfae]">Plating style designed for premium casual dining</p>
						</div>
					</div>

					<UButton
						label="Explore Complete Selection"
						size="lg"
						color="neutral"
						:to="localePath('/menu')"
						class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
					/>
				</div>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
					<motion.article
						v-for="(item, index) in signatureMenus"
						:key="item.name"
						:initial="{ opacity: 0, y: 18 }"
						:whileInView="{ opacity: 1, y: 0 }"
						:inViewOptions="{ once: true }"
						:transition="{ duration: 0.4, delay: index * 0.08 }"
						class="group overflow-hidden rounded-3xl border border-[#342b27] bg-[#211a17]"
					>
						<div class="border-b border-[#342b27] bg-gradient-to-b from-[#f1ddbe] to-[#d6ba92] p-4">
							<img
								:src="item.image"
								:alt="item.name"
								class="mx-auto h-36 w-36 object-contain transition duration-500 group-hover:scale-110"
							/>
						</div>
						<div class="space-y-2 p-4">
							<p class="font-japanese text-xs text-[#b79f78]">{{ item.japaneseName }}</p>
							<h3 class="text-2xl text-[#f8edd8]">{{ item.name }}</h3>
							<p class="text-sm text-[#cbb996]">Premium set menu crafted for satisfying lunch and dinner cravings.</p>
							<p class="text-lg font-semibold text-[#c7a46a]">PHP {{ item.price }}</p>
						</div>
					</motion.article>
				</div>
			</div>
		</div>
	</section>
</template>
