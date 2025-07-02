<script setup lang="ts">
import { useAnimationFrame, animate, stagger, motion } from "motion-v"
import OrderModal from './components/modals/order-modal.vue'

	const items = [
		'/menu.png',
		'/menu.png',
		'/menu.png',
		'/menu.png',
		'/menu.png',
		'/menu.png',
	];

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
		<div class="min-h-[60vh] md:h-screen flex flex-col justify-center gap-8 bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat px-5 rounded-md">
			<div
				class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-5 "
			>
				<div >
					<div class="invisible" ref="containerRef">
						<h1 class="font-bold text-3xl md:text-5xl text-dark h1 text-white">
							Welcome to FOJI Japanese Restaurant – Authentic Flavors, Modern Vibes.
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
							<OrderModal color="error" class="hidden md:block"/>
						</motion.div>
				</div>
				<div>
					<div class="flex justify-center py-10 md:py-0" ref="cubeRef">
						<img
							src="/menu.png"
							class="w-48 h-48 md:w-72 md:h-72  rounded-lg drop-shadow-2xl/50"
						/>
						
					</div>
					<div class="flex justify-center">
						<OrderModal color="error" class="block md:hidden"/>
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
		<!-- <div
			class="w-full min-h-[60vh]  flex flex-col items-center  justify-center gap-8 my-5 p-3 md:p-5  rounded-md"
		>
			<h1 class="font-bold text-2xl md:text-3xl">Slow Cooker Comfort Food</h1>
			<div class="flex justify-center w-full">
				<UCarousel
					v-slot="{ item }"
					loop
					arrows
					:items="items"
					:ui="{ item: 'basis-2/3 sm:basis-1/2 md:basis-1/3' }"
					class="w-full mx-auto "
				>
					<div class=" p-2 rounded-md">
						<div class="flex justify-center  rounded-md  bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat">
							<img
								:src="item"
								class="rounded-lg h-40 sm:h-52 md:h-60 w-40 sm:w-52 md:w-60 drop-shadow-3xl"
							/>
						</div>
						<div class="flex justify-between items-end p-2">
							<div>
								<h1 class="text-lg md:text-xl">Lorem</h1>
								<span>₱ 100.00</span>
							</div>
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
								<UIcon
									name="heroicons:arrow-up-right-16-solid"
									class="size-7"
								/>
							</motion.div>
						</div>
					</div>
				</UCarousel>
			</div>
		</div> -->
		<div class="w-full min-h-[60vh] flex flex-col items-center justify-center gap-10 bg-gray-50 					dark:bg-gray-900 px-4 py-10">
			<h1 class="font-bold text-3xl md:text-4xl text-gray-800 dark:text-white">Feature Foods</h1>

			<!-- <div class="flex flex-wrap justify-center gap-3">
				<button
					v-for="category in ['All categories', 'Shoes', 'Bags', 'Electronics', 'Gaming']"
					:key="category"
					type="button"
					:class="[
						'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus:ring-4',
						category === 'All categories'
							? 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600'
							: 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700'
					]"
				>
					{{ category }}
				</button>
			</div> -->

			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full  px-4">
				<div v-for="(item, index) in items" :key="index" class="rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden bg-white p-2 px-4">
					<div class="flex items-start gap-4">
						<div>
							<img
								:src="item"
								alt=""
								class="h-40 "
							/>
							
						</div>
						<div>
								<span class="text-gray-800 dark:text-white font-semibold">鶏肉入り煮卵</span>
								<p class="text-gray-600 dark:text-gray-400">Stewed Wgg with Chicken set</p>
								<span class="text-red-600 dark:text-red-500 font-bold">₱ 100.00</span>
								<div class="flex gap-4 items-center">
								<motion.div
									class="flex items-center justify-center rounded-lg  bg-gray-900 px-3 text-lg text-white"
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

			<UButton label="View All" class="mt-8" color="error" size="lg" />
		</div>

		</div>
</template>
