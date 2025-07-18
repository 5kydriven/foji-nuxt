<script lang="ts" setup>
	import { motion } from 'motion-v';
	import type { Menu } from '~~/types/menu.type';

	const props = defineProps<{
		menus: Menu[];
	}>();

	const page = ref(1);
</script>

<template>
	<div class="w-full flex justify-center">
		<div
			class="space-y-4 w-full max-w-screen-xl mx-auto  px-2 py-8 sm:px-4 sm:py-10 xl:px-16"
		>
			<h1
				class="font-bold text-center w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white"
			>
				Best Seller
			</h1>
			<div class="w-full">
				<div class="flex-1 w-full">
					<UCarousel
						v-slot="{ item }"
						loop
						dots
						:autoplay="{ delay: 2000 }"
						:items="props.menus"
						:ui="{
							item: 'px-1 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6',
						}"
						class="w-full"
					>
						<div
							class="flex flex-col justify-between bg-white gap-3 sm:gap-4 rounded-lg transition-all duration-300 overflow-hidden my-2 border border-gray-300"
						>
							<div
								class="flex justify-center items-center w-full min-w-16 min-h-16 sm:min-w-20 sm:min-h-20 md:w-auto bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat"
							>
								<img
									:src="item.image"
									alt=""
									class="w-16 sm:w-20"
								/>
							</div>
							<div class="flex flex-col items-center min-w-16 min-h-8 sm:min-w-20 sm:min-h-10">
								<p class="text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base">
									{{ item.name }}
								</p>
							</div>
						</div>
					</UCarousel>
				</div>
			</div>
		</div>
	</div>
</template>
