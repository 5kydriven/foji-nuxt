<script setup lang="ts">
	import UserHeader from '~/components/user-header.vue';
	import UserFooter from '~/components/user-footer.vue';
</script>

<template>
	<UCard :ui="{footer: 'bg-gray-900'}">
		<template #header>
			<UserHeader />
		</template>

		<slot />

		<template #footer>
			<div classt="pt-5">
				<UserFooter />
			</div>
		</template>
	</UCard>
</template>
