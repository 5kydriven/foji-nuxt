<script lang="ts" setup>
import { motion } from 'motion-v';
import type { Menu } from '~~/types/menu.type';

const props = defineProps<{
	menus: Menu[];
}>();

const page = ref(1);

</script>
<template>
	<div class="space-y-2 w-full min-h-[60vh] bg-gray-50 px-4 py-10">
		<div
			class="text-white bg-gradient-to-r from-black/100 to-black/10 w-full p-2 border-y border-orange-400"
		>
			<span>ご飯セットには味噌汁、前菜、コーヒー／レモンティー／レモンウォーター／緑茶（冷／温）が含まれています。</span><br />
			<span>Rice set includes Miso Soup, Appetizer, Coffee / Lemon Tea / Lemon
				Water / Green Tea (Cold / Hot)</span>
		</div>
		<div class="flex flex-col lg:flex-row gap-4 w-full">
			<div class="flex-1 w-full">
				<div class="flex justify-between items-center p-4">
					<h1
						class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-white"
					>
						Menu
					</h1>
				</div>
				<div
					class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full px-0 md:px-4"
				>
					<div
						v-for="(menu, index) in props.menus"
						:key="index"
						class="rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden bg-white p-2 px-4"
					>
						<div class="flex flex-col md:flex-row items-start gap-4">
							<div class="flex justify-center items-center">
								<img
									:src="menu.image"
									alt=""
									class="w-40 drop-shadow-lg"
								/>
							</div>
							<div>
								<span class="text-gray-800 dark:text-white font-semibold">{{
									menu.japaneseName
								}}</span>
								<p class="text-gray-600 dark:text-gray-400">
									{{ menu.name }}
								</p>
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
				<div class="flex justify-center mt-4">
					<UPagination
						v-model:page="page"
						:items-per-page="20"
						:total="100"
						active-color="error"
					/>
				</div>
			</div>
			<div
				class="flex flex-col items-start p-4 w-full lg:w-52 bg-white border border-orange-400 rounded-lg"
			>
				<div
					class="flex justify-center items-center bg-orange-950 text-orange-200 w-14 h-14 rounded-full"
				>
					SOUP
				</div>
				<div
					class="flex flex-wrap justify-between lg:justify-start gap-4 lg:gap-0 lg:flex-col"
				>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full bg-yellow-900"></div>
						<div class="text-red-950">
							<span class="font-semibold">味噌汁</span>
							<p>Shoyu</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full bg-purple-700"></div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Pork</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full bg-red-600"></div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Mise</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full bg-orange-700"></div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Ship</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full bg-red-900"></div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Tomato</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full bg-yellow-900"></div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Ship</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>