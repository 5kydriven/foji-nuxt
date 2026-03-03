<script setup lang="ts">
	import AddOnsSection from './_components/add-ons-section.vue';
	import BestSellerSection from './_components/best-seller-section.vue';
	import FaqContactSection from './_components/faq-contact-section.vue';
	import FeedbackSection from './_components/feedback-section.vue';
	import FinalCtaSection from './_components/final-cta-section.vue';
	import HeroSection from './_components/hero-section.vue';
	import MenuSection from './_components/menu-section.vue';
	import ReservationSection from './_components/reservation-section.vue';
	import ServiceSection from './_components/service-section.vue';
	import TrustStripSection from './_components/trust-strip-section.vue';
	import type { Menu } from '~~/shared/types/menu.type';

	const menus = ref<Menu[]>([
		{
			japaneseName: 'Buta Katsu Toji Don Set',
			name: 'Stewed Egg with Pork Cutlet Rice Set',
			image: '/menu.png',
			price: 300,
			description: 'Crisp pork cutlet simmered in house dashi with fluffy Japanese rice.',
		},
		{
			japaneseName: 'Tokusei Buta Shogayaki Set',
			name: 'Special Pork Ginger Rice Set',
			image: '/menu-2.png',
			price: 300,
			description: 'Tender pork and fragrant ginger glaze with balanced savory notes.',
		},
		{
			japaneseName: 'Pork Chop Tenshinhan Set',
			name: 'Pork Chop Tenshinhan Set',
			image: '/menu-3.png',
			price: 300,
			description: 'Golden omelet rice crowned with pork chop and silky signature sauce.',
		},
		{
			japaneseName: 'Chicken Rice Omelet Set',
			name: 'Chicken Rice Omelet Set',
			image: '/menu-4.png',
			price: 300,
			description: 'Classic comfort with juicy chicken, egg folds, and umami-rich seasoning.',
		},
		{
			japaneseName: 'Stewed Egg and Chicken Rice Set',
			name: 'Stewed Egg with Chicken Rice Set',
			image: '/menu-5.png',
			price: 300,
			description: 'Braised chicken and egg in delicate broth, served with warm rice.',
		},
		{
			japaneseName: 'Seafood Fried Rice Set',
			name: 'Seafood Fried Rice Set',
			image: '/menu-6.png',
			price: 300,
			description: 'Wok-fried rice with seafood aroma, layered texture, and depth.',
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
		<MenuSection :menus="menus" />
		<BestSellerSection :menus="menus" />
		<ServiceSection />
		<AddOnsSection />
		<FeedbackSection />
		<ReservationSection />
		<FaqContactSection />
		<FinalCtaSection />
	</div>
</template>
