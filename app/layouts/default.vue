<script setup lang="ts">
	import UserHeader from '~/components/user-header.vue';
	import UserFooter from '~/components/user-footer.vue';
</script>

<template>
	<div class="h-screen flex flex-col justify-between ">
		<UserHeader />

		<slot />

		<UserFooter />
	</div>
</template>
