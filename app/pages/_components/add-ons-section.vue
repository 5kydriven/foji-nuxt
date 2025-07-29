<script setup lang="ts">
import { motion } from 'motion-v'

</script>
<template>
	<div class="w-full h-screen flex justify-center bg-[url(/add-ons.png)] bg-cover bg-center bg-no-repeat">
		<div class="max-w-screen-xl mx-auto bg-none">
			<div class="flex justify-between items-center p-0 pb-4 md:p-4">
				<div class="text-white">
					<br />
					<motion.span 
						:initial="{ opacity: 0, scale: 0.5 }"
						:whileInView="{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] },
						}"
						:inViewOptions="{once: false}"
						class="text-2xl md:twxt-3xl lg:text-5xl"
					>
						ご飯セットには味噌汁、前菜、コーヒー／レモンティー／レモンウォーター／緑茶（冷／温）が含まれています。
					</motion.span>
					<br />
					<motion.span 
						:initial="{ opacity: 0, scale: 0.5 }"
						:whileInView="{
							opacity: 1,
							scale: 1,
							transition: { duration: 0.5, delay: 1, ease: [0, 0.71, 0.2, 1.01] },
						}"
						:inViewOptions="{once: false}"
						class="text-2xl md:twxt-3xl lg:text-5xl"
					>
						Rice set includes Miso Soup, Appetizer, Coffee / Lemon Tea / Lemon
						Water / Green Tea (Cold / Hot)
					</motion.span>
				</div>
			</div>
		</div>
	</div>

</template>