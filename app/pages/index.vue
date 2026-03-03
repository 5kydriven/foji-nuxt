<script setup lang="ts">
	import HeroSection from './_components/hero-section.vue';
	import TrustStripSection from './_components/trust-strip-section.vue';
	import ServiceSection from './_components/service-section.vue';
	import BestSellerSection from './_components/best-seller-section.vue';
	import AddOnsSection from './_components/add-ons-section.vue';
	import ReservationSection from './_components/reservation-section.vue';
	import MenuSection from './_components/menu-section.vue';
	import FeedbackSection from './_components/feedback-section.vue';
	import FaqContactSection from './_components/faq-contact-section.vue';
	import FinalCtaSection from './_components/final-cta-section.vue';
	import type { Menu } from '~~/shared/types/menu.type';

	const menus = ref<Menu[]>([
		{
			japaneseName: 'Buta Katsu Toji Don Set',
			name: 'Stewed Egg with Pork Cutlet Rice Set',
			image: '/menu.png',
			price: 300,
			description: 'Delicious menu item 1',
		},
		{
			japaneseName: 'Tokusei Buta Shogayaki Set',
			name: 'Special Pork Ginger Rice Set',
			image: '/menu-2.png',
			price: 300,
			description: 'Tasty menu item 2',
		},
		{
			japaneseName: 'Pork Chop Tenshinhan Set',
			name: 'Pork Chop Tenshinhan Set',
			image: '/menu-3.png',
			price: 300,
			description: 'Yummy menu item 3',
		},
		{
			japaneseName: 'Chicken Rice Omelet Set',
			name: 'Chicken Rice Omelet Set',
			image: '/menu-4.png',
			price: 300,
			description: 'Scrumptious menu item 4',
		},
		{
			japaneseName: 'Stewed Egg and Chicken Rice Set',
			name: 'Stewed Egg with Chicken Rice Set',
			image: '/menu-5.png',
			price: 300,
			description: 'Savory menu item 5',
		},
		{
			japaneseName: 'Seafood Fried Rice Set',
			name: 'Seafood Fried Rice Set',
			image: '/menu-6.png',
			price: 300,
			description: 'Appetizing menu item 6',
		},
	]);

	const user = useSupabaseUser();
	const router = useRouter();

	onMounted(() => {
		if (user.value) {
			router.replace('/admin');
		}
	});
</script>

<template>
	<div class="flex flex-col">
		<HeroSection />
		<TrustStripSection />
		<BestSellerSection :menus="menus" />
		<ReservationSection />
		<MenuSection :menus="menus" />
		<ServiceSection />
		<AddOnsSection />
		<FeedbackSection />
		<FaqContactSection />
		<FinalCtaSection />
	</div>
</template>
