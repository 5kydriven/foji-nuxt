<script setup lang="ts">
import UserHeader from '~/components/user-header.vue';

</script>

<template>
	<div class="px-2 py-1 md:px-5 md:py-5 lg:px-10 lg:py-5">
		<div>
			<UserHeader />
		</div>
		<div class="bg-gray-50">
			<slot />
		</div>
	</div>
</template>
