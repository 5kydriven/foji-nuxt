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
		id="menu"
		class="space-y-2 w-full min-h-[60vh] px-4 py-10"
	>
	<h1
		class="font-bold text-center w-full text-2xl md:text-3xl lg:text-4xl  dark:text-white"
	>
		Regular Menu Pack
	</h1>
		<div class=" w-full">
			<div class="flex-1 w-full">
				<div class="flex justify-between items-center p-0 pb-4 md:p-4">
					<div>
						<br />
						<span>
							ご飯セットには味噌汁、前菜、コーヒー／レモンティー／レモンウォーター／緑茶（冷／温）が含まれています。
						</span>
						<br />
						<span>
							Rice set includes Miso Soup, Appetizer, Coffee / Lemon Tea / Lemon
							Water / Green Tea (Cold / Hot)
						</span>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full px-0 md:px-4">
					<div
						v-for="(menu, index) in props.menus"
						:key="index"
						class="flex flex-col justify-between bg-white shadow gap-4 rounded-lg  transition-all duration-300 overflow-hidden  p-2 px-4"
					>
						<div
							class="flex justify-center items-center w-full md:w-auto  rounded-md min-w-40 min-h-40"
						>
							<img
								:src="menu.image"
								alt=""
								class="w-40 "
							/>
						</div>
						<div class="flex flex-col items-center">
		
							<span class="text-gray-800 dark:text-white font-semibold text-center">{{
								menu.japaneseName
							}}</span>
							<p class="text-gray-600 dark:text-gray-400 text-center">
								{{ menu.name }}
							</p>
						</div>
						<div class="flex  items-center justify-between w-full pb-4">
							<span class=" font-bold">
								₱ {{ menu.price }}
							</span>
							<div >
								<motion.div
									class="flex items-center justify-center rounded-full h-10 w-10 border border-red-600  text-red-600"
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
				<!-- <div class="flex justify-center mt-4">
					<UPagination
						v-model:page="page"
						:items-per-page="20"
						:total="100"
						active-color="error"
					/>
				</div> -->
			</div>
			<!-- <div
				class="flex flex-col items-start p-4 w-full  bg-white border border-gray-200 rounded-lg"
			>
				<div
					class="flex justify-center items-center bg-orange-950 text-orange-200 w-14 h-14 rounded-full"
				>
					SOUP
				</div>
				
				<div
					class="flex flex-wrap justify-evenly w-full "
				>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center text-white bg-yellow-900">味</div>
						<div class="text-red-950">
							<span class="font-semibold">味噌汁</span>
							<p>Shoyu</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center text-white bg-purple-700">味</div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Pork</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center text-white bg-red-600">味</div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Mise</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center text-white bg-orange-700">味</div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Ship</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center text-white bg-red-900">味</div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Tomato</p>
						</div>
					</div>
					<div class="flex items-center gap-4 mt-4">
						<div class="w-10 h-10 rounded-full flex items-center justify-center text-white bg-yellow-900">味</div>
						<div class="text-red-950 flex flex-col items-center">
							<span class="font-semibold">味噌汁</span>
							<p>Ship</p>
						</div>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>
