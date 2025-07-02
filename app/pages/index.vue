<script setup lang="ts">
import { useAnimationFrame, animate, stagger, motion } from "motion-v"
import OrderModal from './components/modals/order-modal.vue'

	const menus = [
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
		}
	];

	const page = ref(1)
	const containerRef = ref<HTMLDivElement | null>(null)

	onMounted(() => {
			document.fonts.ready.then(() => {
					if (!containerRef.value) return

					const h1 = containerRef.value.querySelector(".h1")
					if (!h1) return

					// Hide the container until the fonts are loaded
					containerRef.value.style.visibility = "visible"

					// Split the text into words manually
					const text = h1.textContent || ""
					const words = text.split(" ").map((word, index) => {
							const span = document.createElement("span")
							span.textContent = word + " "
							span.classList.add("inline-block", "whitespace-pre", "will-change-[transform,opacity]")
							h1.appendChild(span)
							return span
					})

					h1.textContent = ""
					words.forEach((span) => h1.appendChild(span))

					animate(
							words,
							{ opacity: [0, 1], y: [10, 0] },
							{
									type: "spring",
									duration: 2,
									bounce: 0,
									delay: stagger(0.05),
							}
					)
			})
	})
	const cubeRef = ref<HTMLElement | null>(null)

	useAnimationFrame((t) => {
			if (!cubeRef.value) return

			const rotate = Math.sin(t / 10000) * 200
			const y = (1 + Math.sin(t / 1000)) * 10
			cubeRef.value.style.transform = `translateY(${y}px) `
	})
</script>

<template>
	<div class="flex flex-col gap-5">
		<div class="min-h-[60vh] md:h-screen flex flex-col justify-center gap-8 bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat p-5 rounded-md">
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-5 "
			>
				<div >
					<div class="invisible" ref="containerRef">
						<h1 class="font-bold text-3xl md:text-5xl text-dark h1 text-white">
							Welcome to FOJI Japanese Restaurant Authentic Flavors, Modern Vibes.
						</h1>
					</div>
					<br />
					<motion.div class="text-slate-200"
						:initial="{ opacity: 0, scale: 0.5 }"
						:animate="{ opacity: 1, scale: 1 }"
						:transition="{
								duration: 0.8,
								delay: 1,
								ease: [0, 0.71, 0.2, 1.01]
						}">
						Experience the taste of Japan with our signature sushi, ramen, and more. Enjoy a unique dining atmosphere at FOJI, where tradition meets innovation.
					</motion.div><br>
					<motion.div :initial="{ opacity: 0, scale: 0.5 }"
						:animate="{ opacity: 1, scale: 1 }"
						:transition="{
								duration: 0.8,
								delay: 1,
								ease: [0, 0.71, 0.2, 1.01]
						}">
							<OrderModal color="error" class="hidden lg:block"/>
						</motion.div>
				</div>
				<div>
					<div class="flex justify-center py-5 lg:py-0" ref="cubeRef">
						<img
							src="/menu.png"
							class="w-48 h-48 md:w-72 md:h-72  rounded-lg drop-shadow-2xl/50"
						/>
						
					</div>
					<div class="flex justify-center">
						<OrderModal color="error" class="block lg:hidden"/>
					</div>
				</div>
			</div>
			<div >
				<div class="grid grid-cols-1 md:grid-cols-3  gap-4 w-full">
					<motion.div class="p-4 rounded-md bg-black/40 text-white flex flex-col items-center"
						:initial="{ opacity: 0, scale: 0.5 }"
						:animate="{ opacity: 1, scale: 1 }"
						:transition="{
								duration: 0.8,
								delay: 1,
								ease: [0, 0.71, 0.2, 1.01]
						}">
						<img
							src="https://picsum.photos/468/468?random=3" width="100"
							class="rounded-lg max-w-xl max-h-xl object-cover "
						/>
						<h1 class="font-semibold">Lorem Epsom</h1>
						<span>Lorem ipsum dolor sit amet.</span>
					</motion.div>
					<motion.div class="p-4 rounded-md bg-black/40 text-white flex flex-col items-center"
						:initial="{ opacity: 0, scale: 0.5 }"
						:animate="{ opacity: 1, scale: 1 }"
						:transition="{
								duration: 0.8,
								delay: 0.5,
								ease: [0, 0.71, 0.2, 1.01]
						}">
						<img
							src="https://picsum.photos/468/468?random=4" width="100"
							class="rounded-lg max-w-xl max-h-xl object-cover "
						/>
						<h1 class="font-semibold">Lorem Epsom</h1>
						<span>Lorem ipsum dolor sit amet.</span>
					</motion.div>
					<motion.div class="p-4 rounded-md bg-black/40 text-white flex flex-col items-center"
						:initial="{ opacity: 0, scale: 0.5 }"
						:animate="{ opacity: 1, scale: 1 }"
						:transition="{
								duration: 0.8,
								delay: 1,
								ease: [0, 0.71, 0.2, 1.01]
						}">
						<img
							src="https://picsum.photos/468/468?random=5" width="100"
							class="rounded-lg max-w-xl max-h-xl object-cover "
						/>
						<h1 class="font-semibold">Lorem Epsom</h1>
						<span>Lorem ipsum dolor sit amet.</span>
					</motion.div>
				</div>
			</div>
		</div>
		<div class="space-y-2 w-full min-h-[60vh] bg-gray-50 					 px-4 py-10">
			<div class=" text-white bg-gradient-to-r from-black/100 to-black/10 w-full p-2 border-y border-orange-400">
				<span>ご飯セットには味噌汁、前菜、コーヒー／レモンティー／レモンウォーター／緑茶（冷／温）が含まれています。</span><br>
				<span>Rice set includes Miso Soup, Appetizer, Coffee / Lemon Tea / Lemon Water / Green Tea (Cold / Hot)</span>
			</div>
			<div class="flex flex-col lg:flex-row gap-4 w-full">
				<div class="flex-1 w-full">
					<div class="flex justify-between items-center p-4">
						<h1 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-white">Menu</h1>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full  px-0 md:px-4">
						<div v-for="(menu, index) in menus" :key="index" class="rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden bg-white p-2 px-4">
							<div class="flex flex-col md:flex-row items-start gap-4">
								<div class="flex justify-center items-center ">
									<img
										:src="menu.image"
										alt=""
										class="w-40 drop-shadow-lg"
									/>
									
								</div>
								<div>
										<span class="text-gray-800 dark:text-white font-semibold">{{ menu.japaneseName }}</span>
										<p class="text-gray-600 dark:text-gray-400">{{ menu.name }}</p>
										<span class="text-red-600 dark:text-red-500 font-bold">₱ {{menu.price}}</span>
										<div class="flex gap-4 items-center">
										<motion.div
											class="flex items-center justify-center rounded-lg  bg-gray-900 px-3 text-md text-white"
											:whileHover="{
												scale: [null, 1.1, 1.6],
												transition: {
													duration: 0.5,
													times: [0, 0.6, 1],
													ease: ['easeInOut', 'easeOut']
												}
											}"
											:transition="{
												duration: 0.3,
												ease: 'easeOut'
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
													ease: ['easeInOut', 'easeOut']
												}
											}"
											:transition="{
												duration: 0.3,
												ease: 'easeOut'
											}"
										>
											<UIcon name="heroicons:arrow-up-right-16-solid" class="size-7" />
										</motion.div>
									</div>
								</div>	
							</div>
						</div>
					</div>
					<div class="flex justify-center mt-4">
						<UPagination v-model:page="page" :items-per-page="20" :total="100"  active-color="error"/>
					</div>
				</div>
				<div class="flex flex-col items-start p-4 w-full lg:w-52 bg-white border border-orange-400 rounded-lg">
					<div class="flex justify-center items-center  bg-orange-950 text-orange-200 w-14 h-14 rounded-full">
						SOUP
					</div>
					<div class="flex flex-wrap justify-between lg:justify-start gap-4 lg:gap-0 lg:flex-col">
						<div class="flex items-center gap-4 mt-4">
							<div class="w-10 h-10 rounded-full bg-yellow-900">
							</div>
							<div class="text-red-950">
								<span class=" font-semibold">味噌汁</span>
								<p >Shoyu</p>
							</div>
						</div>
						<div class="flex items-center gap-4 mt-4">
							<div class="w-10 h-10 rounded-full bg-purple-700">
							</div>
							<div class="text-red-950 flex flex-col items-center">
								<span class=" font-semibold">味噌汁</span>
								<p >Pork</p>
							</div>
						</div>
						<div class="flex items-center gap-4 mt-4">
							<div class="w-10 h-10 rounded-full bg-red-600">
							</div>
							<div class="text-red-950 flex flex-col items-center">
								<span class=" font-semibold">味噌汁</span>
								<p >Mise</p>
							</div>
						</div>
						<div class="flex items-center gap-4 mt-4">
							<div class="w-10 h-10 rounded-full bg-orange-700">
							</div>
							<div class="text-red-950 flex flex-col items-center">
								<span class=" font-semibold">味噌汁</span>
								<p >Ship</p>
							</div>
						</div>
						<div class="flex items-center gap-4 mt-4">
							<div class="w-10 h-10 rounded-full bg-red-900">
							</div>
							<div class="text-red-950 flex flex-col items-center">
								<span class=" font-semibold">味噌汁</span>
								<p >Tomato</p>
							</div>
						</div>
						<div class="flex items-center gap-4 mt-4">
							<div class="w-10 h-10 rounded-full bg-yellow-900">
							</div>
							<div class="text-red-950 flex flex-col items-center">
								<span class=" font-semibold">味噌汁</span>
								<p >Ship</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="w-full min-h-[60vh] flex flex-col items-center justify-center gap-10  					dark:bg-gray-900 px-4 py-10">
			<h1 class="font-bold text-3xl md:text-4xl text-gray-800 dark:text-white">Featured Foods</h1>
			<div class=" text-white bg-gradient-to-r from-black/100 to-black/10 w-full p-2 ">
				<span>おすすめ料理をお楽しみください。</span><br>
				<span>Enjoy our featured dishes, specially selected for you!</span>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 md:gap-6 w-full  px-0 md:px-4">
				<div v-for="(menu, index) in menus" :key="index" class="rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden bg-white p-2 px-4">
					<div class="flex flex-col md:flex-row items-start gap-4" >
						<div class="flex justify-center items-center ">
							<img
								:src="menu.image"
								alt=""
								class="w-40 "
							/>
							
						</div>
						<div class="flex-1">
								<span class="text-gray-800 dark:text-white font-semibold">{{ menu.japaneseName }}</span>
								<p class="text-gray-600 dark:text-gray-400">{{ menu.name }}</p>
								<span class="text-red-600 dark:text-red-500 font-bold">₱ {{menu.price}}</span>
								<div class="flex gap-4 items-center">
								<motion.div
									class="flex items-center justify-center rounded-lg  bg-gray-900 px-3 text-md text-white"
									:whileHover="{
										scale: [null, 1.1, 1.6],
										transition: {
											duration: 0.5,
											times: [0, 0.6, 1],
											ease: ['easeInOut', 'easeOut']
										}
									}"
									:transition="{
										duration: 0.3,
										ease: 'easeOut'
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
											ease: ['easeInOut', 'easeOut']
										}
									}"
									:transition="{
										duration: 0.3,
										ease: 'easeOut'
									}"
								>
									<UIcon name="heroicons:arrow-up-right-16-solid" class="size-7" />
								</motion.div>
							</div>
						</div>	
					</div>
				</div>
			</div>

			<UPagination v-model:page="page" :items-per-page="20" :total="100" active-color="error"/>
		</div>

		</div>
</template>
