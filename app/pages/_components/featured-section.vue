<script lang="ts" setup>
import { motion } from 'motion-v';
import type { Menu } from '~~/types/menu.type';

const props = defineProps<{
	menus: Menu[];
}>();

const page = ref(1);
</script>

<template>
	<div
		id="featured"
		class="w-full min-h-[60vh] flex flex-col items-center justify-center gap-10 dark:bg-gray-900 px-4 py-10"
	>
		<div
		class="text-center w-full p-2"
		>
			<h1 class="font-bold text-3xl md:text-4xl text-gray-800 dark:text-white">
				Featured Foods
			</h1><br>
			<span>おすすめ料理をお楽しみください。</span><br />
			<span>Enjoy our featured dishes, specially selected for you!</span>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 w-full px-0 md:px-4"
		>
			<div
				v-for="(menu, index) in menus"
				:key="index"
				class="rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden bg-white p-2 px-4"
			>
				<div class="flex flex-col md:flex-row items-start gap-4">
					<div class="flex justify-center items-center">
						<img
							:src="menu.image"
							alt=""
							class="w-40"
						/>
					</div>
					<div class="flex-1">
						<span class="text-gray-800 dark:text-white font-semibold">{{
							menu.japaneseName
						}}</span>
						<p class="text-gray-600 dark:text-gray-400">{{ menu.name }}</p>
						<span class="text-red-600 dark:text-red-500 font-bold">₱ {{ menu.price }}</span>
						<div class="flex gap-4 items-center">
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
								class="flex items-center justify-center rounded-full h-10 w-10 bg-red-600 text-white"
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
