<script setup lang="ts">
	import * as locales from '@nuxt/ui/locale';

	const { locale } = useI18n();

	const lang = computed(() => locales[locale.value].code);
	const dir = computed(() => locales[locale.value].dir);

	useHead({
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [{ rel: 'icon', href: '/logo.png' }],
		htmlAttrs: {
			lang,
			dir,
		},
	});

	const title = 'FOJI Japanese Restaurant | Premium Washoku Dining in the Philippines';
	const description =
		'Discover FOJI, a premium Japanese restaurant concept for modern Filipino diners. Explore signature set meals, reserve tables easily, and enjoy elevated hospitality.';

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
