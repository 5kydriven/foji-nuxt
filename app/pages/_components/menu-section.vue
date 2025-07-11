<script setup lang="ts">
import { motion } from 'motion-v'
import type { Menu } from '~~/types/menu.type';

const menus = ref<Menu[]>([
		{
			japaneseName: '豚肉のカツ丼の煮卵セット',
			name: 'Stewed Egg with Pork Chop Rice Set',
			image: '/menu.png',
			price: 300,
			description: 'Delicious menu item 1',
		},
		{
			japaneseName: '特製豚生姜ご飯セット',
			name: 'Special Pork Ginger Rice Set',
			image: '/menu-2.png',
			price: 300,
			description: 'Tasty menu item 2',
		},
		{
			japaneseName: '豚肉チョップ天心飯セット',
			name: 'Pork Chop Tenshinhan Set',
			image: '/menu-3.png',
			price: 300,
			description: 'Yummy menu item 3',
		},
		{
			japaneseName: 'チキンライスオムレツセット / 日本の味',
			name: 'Chicken Rice Omelet Set / Japanes Taste',
			image: '/menu-4.png',
			price: 300,
			description: 'Scrumptious menu item 4',
		},
		{
			japaneseName: 'スチューズエッグとチキンライスセット',
			name: 'Stewes Egg with Chicken Rice Set',
			image: '/menu-5.png',
			price: 300,
			description: 'Savory menu item 5',
		},
		{
			japaneseName: '海鮮チャーハンセット / 日本の味',
			name: 'Sea Food Fried Rice Set / Japanes Taste',
			image: '/menu-6.png',
			price: 300,
			description: 'Appetizing menu item 6',
		},
	]);
</script>

<template>
	<div class="w-full flex justify-center bg-gray-50">
		<div
			class="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-4 py-4 xl:px-16"
		>
			<h1 class="font-bold text-2xl md:text-3xl">Our Regular Menu Pack</h1>
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
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full p-2">
				<div
				v-for="(menu, index) in menus"
				:key="menu.name"
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
					<div
						class="flex flex-col justify-between bg-white shadow rounded-lg  transition-all duration-300 overflow-hidden  my-2"
					>
						<div
							class="flex justify-center items-center w-full md:w-auto   min-w-40 min-h-40 bg-black/30"
						>
							<img
								:src="menu.image"
								alt=""
								class="w-40 hover:scale-150 transition-transform duration-300"
							/>
						</div>
						<div class="bg-red-700 p-2">
							<span class=" font-thin text-white text-xl">
								₱ {{ menu.price }}
							</span>
							<!-- <div class="hidden xl:block">
								<span class="text-white font-semibold ">{{
									menu.japaneseName?.length || 0 > 15 ? menu.japaneseName?.slice(0, 15) + '…' : menu.japaneseName
								}}</span>
								<p class="text-gray-200 dark:text-gray-400 ">
									{{ menu.name?.length || 0 > 30 ? menu.name?.slice(0, 30) + '…' : menu.name }}
								</p>
							</div> -->
							<div >
								<span class="text-white font-semibold ">{{ menu.japaneseName
								}}</span>
								<p class="text-gray-200 dark:text-gray-400 ">
									{{ menu.name }}
								</p>
							</div>
							<div class="flex  items-center justify-between w-full py-4 px-2 rounded-full">
								<div
									class="flex items-center justify-center rounded-full px-2 border border-white  text-white hover:bg-white hover:text-red-600"
								>
									Details
									<UIcon
										name="heroicons:arrow-up-right-16-solid"
										class="size-7"
									/>
								</div>
							</div>
						</div>
					</div>
					</motion.div>
				</div>
			</div>
		</div>
	</div>
</template>
