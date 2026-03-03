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
		class="relative overflow-hidden bg-[#f5ecdc]"
	>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,164,106,0.2),_transparent_60%)]" />

		<div class="section-shell section-padding relative">
			<div class="space-y-4 text-center">
				<p class="foji-title-eyebrow text-[#9a2a24]">Menu Highlights</p>
				<h2 class="text-4xl text-[#191411] sm:text-5xl">Signature Dishes That Turn First Visits Into Regulars</h2>
				<p class="mx-auto max-w-3xl text-sm leading-relaxed text-[#645642] sm:text-base">
					Chef-led Japanese rice sets made for Philippine diners who want authentic umami, clean plating, and
					comfort without compromise.
				</p>
				<div class="flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.13em] text-[#7d6d55]">
					<span class="rounded-full border border-[#d9c5a8] bg-[#efe2ce] px-4 py-2">Rice Set Classics</span>
					<span class="rounded-full border border-[#d9c5a8] bg-[#efe2ce] px-4 py-2">Chef Recommendations</span>
					<span class="rounded-full border border-[#d9c5a8] bg-[#efe2ce] px-4 py-2">Available Daily</span>
				</div>
			</div>

			<div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<motion.article
					v-for="(menu, index) in previewMenus"
					:key="menu.name"
					:initial="{ opacity: 0, y: 20 }"
					:whileInView="{ opacity: 1, y: 0 }"
					:inViewOptions="{ once: true }"
					:transition="{ duration: 0.38, delay: index * 0.06 }"
					class="group overflow-hidden rounded-[1.5rem] border border-[#d8c6a8] bg-[#faf4e8] shadow-[0_8px_28px_rgba(31,26,19,0.08)]"
				>
					<div class="relative bg-gradient-to-br from-[#efddc3] to-[#d7b993] p-5">
						<div class="absolute right-4 top-4 rounded-full border border-[#8f6b3d] bg-[#fcf2dd] px-3 py-1 text-[11px] uppercase tracking-[0.13em] text-[#6f5634]">
							Best Seller
						</div>
						<img
							:src="menu.image"
							:alt="menu.name"
							class="mx-auto h-44 w-44 object-contain transition duration-500 group-hover:scale-110"
						/>
					</div>
					<div class="space-y-3 p-5">
						<p class="font-japanese text-sm text-[#7e6b52]">{{ menu.japaneseName }}</p>
						<h3 class="text-2xl leading-tight text-[#1b1512]">{{ menu.name }}</h3>
						<p class="text-sm leading-relaxed text-[#6a5a45]">
							{{ menu.description || 'A balanced Japanese set with hearty portions and refined flavor.' }}
						</p>
						<div class="flex items-center justify-between border-t border-[#e4d4bb] pt-3">
							<p class="text-lg font-semibold text-[#9a2a24]">PHP {{ menu.price }}</p>
							<UButton
								label="Reserve Dish"
								size="xs"
								color="neutral"
								class="border border-[#d5c2a1] bg-[#f4e5ce] text-[#3d2f23] hover:bg-[#e8d6bc]"
							/>
						</div>
					</div>
				</motion.article>
			</div>

			<div class="mt-10 flex flex-wrap justify-center gap-3">
				<UButton
					label="View Full Menu"
					size="lg"
					color="neutral"
					:to="localePath('/menu')"
					class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
				/>
				<UButton
					label="Reserve A Table"
					size="lg"
					color="neutral"
					:to="`${localePath('/')}#reservation`"
					class="border border-[#b89b74] bg-[#f4e5ce] text-[#3d2f23] hover:bg-[#ead8bb]"
				/>
			</div>
		</div>
	</section>
</template>
