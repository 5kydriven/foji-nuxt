<script setup lang="ts">
	import { motion } from 'motion-v';
</script>

<template>
	<div
		ref="scrollRef"
		class="flex justify-center"
	>
		<div
			class="min-h-[60vh] max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-10 px-4 py-10"
		>
			<div
				class="flex flex-col md:flex-row items-center justify-between gap-10 p-4 rounded-md overflow-hidden"
			>
				<motion.div
					:initial="{ x: -250, opacity: 0 }"
					:whileInView="{
						x: 0,
						opacity: 1,
						transition: { ease: ['easeIn', 'easeOut'], duration: 0.5 },
					}"
					:inViewOptions="{ once: false }"
					class="flex-1 flex justify-center items-center"
				>
					<div class="p-8 rounded-full bg-red-600">
						<img
							src="/chef.png"
							class="w-48 h-48 md:w-72 md:h-72 rounded-lg drop-shadow-2xl/50"
						/>
					</div>
				</motion.div>

				<motion.div
					:initial="{ x: 250, opacity: 0 }"
					:whileInView="{
						x: 0,
						opacity: 1,
						transition: { ease: ['easeIn', 'easeOut'], duration: 0.5 },
					}"
					:inViewOptions="{ once: false }"
					class="flex-1 space-y-4"
				>
					<h1 class="text-3xl font-bold capitalize">
						{{ $t('service.title') }}
					</h1>
					<p class="text-gray-600">
						{{ $t('service.description') }}
					</p>
					<UButton
						label="About Us"
						color="error"
						@click="$router.push('/about')"
					/>
				</motion.div>
			</div>
		</div>
	</div>
</template>
