<script setup lang="ts">
import { motion } from 'motion-v';

</script>
<template>
	<div class="w-full flex justify-center ">
		<div
			class="max-w-screen-xl mx-auto min-h-[60vh] flex flex-col items-center justify-center gap-10  px-4 py-10 xl:px-16 "
		>
			<div class="flex flex-col md:flex-row items-center justify-between gap-10 p-4 xl:p-8 rounded-md bg-red-50 dark:bg-gray-700">
				<motion.div
					:initial="{ x: -250, opacity: 0 }"
					:whileInView="{
						x: 0,
						opacity: 1,
						transition: { ease: ['easeIn', 'easeOut'], duration: 0.5 },
					}"
					:inViewOptions="{ once: false }" 
					class="flex-1 space-y-2">
					<h1 class="text-3xl font-bold ">
						Do you have any plan to eat at our restaurant? Reserve your table now!
					</h1>
					<p class="text-gray-600 dark:text-gray-400">
						We are excited to welcome you to our restaurant! To ensure a smooth dining experience, we recommend making a reservation in advance.
					</p>
					<UButton
					label="Reserve Now"
					color="error"
					/>
				</motion.div>
				<motion.div 
					:initial="{ x: 250, opacity: 0 }"
						:whileInView="{
							x: 0,
							opacity: 1,
							transition: { ease: ['easeIn', 'easeOut'], duration: 0.5 },
						}"
					:inViewOptions="{ once: false }"
				class="flex-1 flex justify-center items-center">
					<img
						src="/menu.png"
						class="w-48 h-48 md:w-72 md:h-72 rounded-lg drop-shadow-2xl/50"
					/>
				</motion.div>
			</div>
		</div>
	</div>
</template>
