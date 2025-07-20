<script setup lang="ts">
	import * as locales from '@nuxt/ui/locale';

	useHead({
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [{ rel: 'icon', href: '/logo.png' }],
		htmlAttrs: {
			lang: 'en',
		},
	});

	const { locale } = useI18n();

	const title = 'FOJI JAPANESE RESTAURANT';
	const description =
		'Experience the taste of Japan with our signature sushi, ramen, and more. Enjoy a unique dining atmosphere at FOJI, where tradition meets innovation.';

	useSeoMeta({
		title,
		ogTitle: title,
		description,
		ogDescription: description,
	});
</script>

<template>
	<UApp :locale="locales[locale]">
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
