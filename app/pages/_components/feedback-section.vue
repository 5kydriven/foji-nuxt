<script setup lang="ts">

const feedbacks = [
	{
		name: 'John Doe',
		review: 'This is the best restaurant I have ever been to! The food is amazing and the service is excellent.',
		image: 'https://picsum.photos/640/640?random=1',
	},
	{
		name: 'Jane Smith',
		review: 'I love the ambiance and the food is delicious. Highly recommend this place!',
		image: 'https://picsum.photos/640/640?random=2',
	},
	{
		name: 'Alice Johnson',
		review: 'A wonderful dining experience! The staff is friendly and the food is top-notch.',
		image: 'https://picsum.photos/640/640?random=3',
	},
	{
		name: 'Bob Brown',
		review: 'Great food and great service! I will definitely come back again.',
		image: 'https://picsum.photos/640/640?random=4',
	}
]

</script>
<template>
	<div
		id="faq"
		class="w-full min-h-[60vh] gap-10 dark:bg-gray-900 px-4 py-10 space-y-4"
	>
		<h1 class="text-3xl font-bold">What Our Customer Says?</h1>
		<div class="w-full">
			<UCarousel 
				v-slot="{ item }" 
				loop
				dots
				:autoplay="{ delay: 2000 }"
				:items="feedbacks" 
				:ui="{
					item: 'px-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
				}"
				class="w-full"
			>
				<div class="p-4 rounded-md bg-gray-50 space-y-2 flex flex-col items-center">
					<p class="text-gray-600 dark:text-gray-400 text-center">{{ item.review }}</p>
					<div class="flex flex-col items-center mt-2">
						<img :src="item.image" width="50" height="50" class="rounded-full mb-2">
						<h2 class="text-lg font-semibold">{{ item.name }}</h2>
					</div>
				</div>
			</UCarousel>
		</div>
	</div>
</template>