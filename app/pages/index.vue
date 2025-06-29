<script setup lang="ts">
	function onClick(e: any) {
		console.log('Hello');
	}
</script>

<template>
	<UButton
		label="click me"
		icon="i-lucide-sun"
		@click="onClick"
	/>
</template>
