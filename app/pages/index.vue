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
		<div class="flex flex-col gap-5">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-5 min-h-[60vh] md:min-h-screen">
				<div>
					<h1 class="font-bold text-3xl md:text-5xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti!
					</h1>
					<br>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nostrum. Necessitatibus rem natus distinctio blanditiis quibusdam repellat ullam a maxime.
					</p>
					<UButton class="mt-4" color="neutral">Order Now</UButton>
				</div>
				<div class="flex justify-center">
					<img src="https://picsum.photos/468/468?random=6" class="w-48 h-48 md:w-72 md:h-72 object-cover rounded-lg" />
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
					:ui="{ item: 'basis-2/3 sm:basis-1/2 md:basis-1/3' }"
					class="w-full"
				>
					<img :src="item" class="rounded-lg w-full h-40 sm:h-52 md:h-60 object-cover" />
				</UCarousel>
			</div>
			<div class="w-full min-h-[60vh] md:h-screen flex flex-col items-center justify-center gap-8 py-5">
				<h1 class="font-bold text-2xl md:text-3xl">Slow Cooker Comfort Food</h1>
				<div class="flex justify-center w-full">
					<UCarousel
						v-slot="{ item }"
						loop
						arrows
						:items="items"
						:ui="{ item: 'basis-2/3 sm:basis-1/2 md:basis-1/3' }"
						class="w-full max-w-2xl mx-auto"
					>
						<div>
							<img :src="item" class="rounded-lg w-full h-40 sm:h-52 md:h-60 object-cover" />
							<div class="flex justify-between items-end p-2">
								<div>
									<h1 class="text-lg md:text-xl">Lorem</h1>
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
			<div class="w-full min-h-[60vh] md:h-screen flex flex-col items-center justify-center gap-8">
				<h1 class="font-bold text-2xl md:text-3xl">Shop By Category</h1>
				<div class="flex flex-wrap items-center justify-center py-4 md:py-8 gap-2">
					<button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
					<button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800">Shoes</button>
					<button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800">Bags</button>
					<button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800">Electronics</button>
					<button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800">Gaming</button>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
					<div>
						<img class="h-auto w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
					</div>
					<div>
						<img class="h-auto w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
					</div>
					<div>
						<img class="h-auto w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
					</div>
					<div>
						<img class="h-auto w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
					</div>
					<div>
						<img class="h-auto w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
					</div>
					<div>
						<img class="h-auto w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</UContainer>
</template>

