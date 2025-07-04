<script setup lang="ts">
import { motion } from 'motion-v'

const items = [
		'https://picsum.photos/468/468?random=1',
		'https://picsum.photos/468/468?random=2',
		'https://picsum.photos/468/468?random=3',
		'https://picsum.photos/468/468?random=4',
		'https://picsum.photos/468/468?random=5',
		'https://picsum.photos/468/468?random=6',
	];
</script>

<template>
	<div
			class="w-full flex flex-col items-center justify-center gap-8"
		>
			<h1 class="font-bold text-2xl md:text-3xl">Menu's</h1>
			<div
				class="flex flex-wrap items-center justify-center py-4 md:py-8 gap-2"
			>
				<button
					type="button"
					class="text-red-700 hover:text-white border border-red-600 bg-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:bg-gray-900 dark:focus:ring-red-800"
				>
					All categories
				</button>
				<button
					type="button"
					class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800"
				>
					Shoes
				</button>
				<button
					type="button"
					class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800"
				>
					Bags
				</button>
				<button
					type="button"
					class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800"
				>
					Electronics
				</button>
				<button
					type="button"
					class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800"
				>
					Gaming
				</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
				<div
v-for="(item, index) in items"
:key="item"
>
					<motion.div
						:initial="{ opacity: 0, scale: 0.5 }"
							:animate="{ opacity: 1, scale: 1 }"
							:transition="{
									duration: 0.8,
									delay: 0.5 + index * 0.2,
									ease: [0, 0.71, 0.2, 1.01],
							}"
							>
						<img
							class="h-auto w-full rounded-lg object-cover"
							:src="item"
							alt=""
						/>
					</motion.div>
				</div>
			</div>
		</div>
</template>
