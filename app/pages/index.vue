<script setup lang="ts">
	import HeroSection from './_components/hero-section.vue';
	import ServiceSection from './_components/service-section.vue';
	import MenuSection from './_components/menu-section.vue';
	import ReservationSection from './_components/reservation-section.vue';
	import FeedbackSection from './_components/feedback-section.vue';
	import FaqSection from './_components/faq-section.vue';
	import ContactSection from './_components/contact-section.vue';
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
		// {
		// 	japaneseName: 'スチューズエッグとチキンライスセット',
		// 	name: 'Stewes Egg with Chicken Rice Set',
		// 	image: '/menu-5.png',
		// 	price: 300,
		// 	description: 'Savory menu item 5',
		// },
		// {
		// 	japaneseName: '海鮮チャーハンセット / 日本の味',
		// 	name: 'Sea Food Fried Rice Set / Japanes Taste',
		// 	image: '/menu-6.png',
		// 	price: 300,
		// 	description: 'Appetizing menu item 6',
		// },
	]);

</script>

<template>
	<div class="flex flex-col gap-5">
		<HeroSection />
		<ServiceSection />
		<MenuSection :menus="menus" />
		<ReservationSection />
		<FeedbackSection />
	</div>
</template>
