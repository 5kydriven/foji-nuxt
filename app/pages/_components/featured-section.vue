<script lang="ts" setup>
	import { motion } from 'motion-v';
	import type { Menu } from '~~/shared/types/menu.type';

	defineProps<{
		menus: Menu[];
	}>();

	const page = ref(1);
</script>

<template>
	<div
		id="featured"
		class="w-full min-h-[60vh] flex flex-col items-center justify-center gap-10 bg-[#f6ecda] px-4 py-10"
	>
		<div class="w-full p-2 text-center">
			<h1 class="text-3xl font-bold text-[#1f1812] md:text-4xl">
				Featured Foods
			</h1>
			<br>
			<span class="text-[#5f513d]">Enjoy our featured dishes, specially selected for you.</span>
		</div>
		<div class="grid w-full grid-cols-1 gap-2 px-0 md:grid-cols-2 md:gap-6 md:px-4 lg:grid-cols-3">
			<div
				v-for="(menu, index) in menus"
				:key="index"
				class="overflow-hidden rounded-lg bg-white p-2 px-4 shadow transition-all duration-300 hover:shadow-lg"
			>
				<div class="flex flex-col items-start gap-4 md:flex-row">
					<div class="flex items-center justify-center">
						<img
							:src="menu.image"
							alt=""
							class="w-40"
						>
					</div>
					<div class="flex-1">
						<span class="font-semibold text-[#1f1812]">
							{{ menu.japaneseName }}
						</span>
						<p class="text-[#5f513d]">{{ menu.name }}</p>
						<span class="font-bold text-[#9a2a24]">PHP {{ menu.price }}</span>
						<div class="flex items-center gap-4">
							<motion.div
								class="flex items-center justify-center rounded-lg bg-gray-900 px-3 text-md text-white"
								:whileHover="{
									scale: [null, 1.1, 1.6],
									transition: {
										duration: 0.5,
										times: [0, 0.6, 1],
										ease: ['easeInOut', 'easeOut'],
									},
								}"
								:transition="{
									duration: 0.3,
									ease: 'easeOut',
								}"
							>
								Details
							</motion.div>
							<motion.div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white"
								:whileHover="{
									scale: [null, 1.1, 1.6],
									transition: {
										duration: 0.5,
										times: [0, 0.6, 1],
										ease: ['easeInOut', 'easeOut'],
									},
								}"
								:transition="{
									duration: 0.3,
									ease: 'easeOut',
								}"
							>
								<UIcon
									name="heroicons:arrow-up-right-16-solid"
									class="size-7"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<UPagination
			v-model:page="page"
			:items-per-page="20"
			:total="100"
			active-color="error"
		/>
	</div>
</template>
