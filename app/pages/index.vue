<script setup lang="ts">
	const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
	<UContainer>
		<div class="flex flex-col py-5">
			<div class="flex justify-between items-center flex-wrap w-full h-screen">
				<div class="flex-1">
					<h1 class="font-bold text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti!</h1><br>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nostrum. Necessitatibus rem natus distinctio blanditiis quibusdam repellat ullam a maxime.</p>
				</div>
				<div class="flex-1 flex justify-center ">
					<img src="https://picsum.photos/468/468?random=6" width="300"/>
				</div>
			</div>
			<div class="py-5">
				<UCarousel
						v-slot="{ item }"
						loop
						dots
						arrows
						auto-scroll
						:items="items"
						:ui="{ item: 'basis-1/3' }"
					>
						<img :src="item" width="234" height="234" class="rounded-lg">
				</UCarousel>
			</div>
		</div>
		<div class="w-full h-screen flex flex-col items-center justify-center  gap-8 bg-gray-50">
			<h1 class="font-bold text-3xl">Slow Cooker Comfort Food</h1>
			<div class="flex justify-center">
				<UCarousel
					v-slot="{ item }"
					loop
					arrows
					:items="items"
					:ui="{ item: 'basis-1/3' }"
					class="w-full mx-auto"
				>
				<div>
					<img :src="item"  class="rounded-lg">
					<div class="flex justify-between items-end p-2">
						<div>
							<h1 class="text-xl">Lorem</h1>
							<span>₱ 100.00</span>
						</div>
						<div class="flex items-center justify-center rounded-full h-10 w-10 bg-gray-800 text-white">
							<UIcon name="heroicons:arrow-up-right-16-solid" class="size-7" />
						</div>
					</div>
				</div>
				</UCarousel>
			</div>
		</div>
	</UContainer>
</template>

<style>
	.box {
		width: 100px;
		height: 100px;
		background-color: #0d63f8;
		border-radius: 10px;
	}
</style>
