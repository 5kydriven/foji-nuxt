<script setup lang="ts">
	import UserHeader from '~/components/user-header.vue';
	import UserFooter from '~/components/user-footer.vue';

	const colorMode = useColorMode();

	onMounted(() => {
		// Keep public pages visually consistent with the brand palette even if OS/browser is dark.
		if (colorMode.preference === 'system') {
			colorMode.preference = 'light';
		}
	});
</script>

<template>
	<div class="min-h-screen flex flex-col justify-between">
		<UserHeader />

		<slot />

		<UserFooter />
	</div>
</template>
