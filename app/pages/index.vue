<script setup lang="ts">
	import { motion } from 'motion-v';

	function onClick(e: any) {
		console.log('Hello');
	}
</script>

<template>
	<motion.button
		:whileHover="{ scale: 1.1 }"
		:whilePress="{ scale: 0.95 }"
		class="box"
		@hoverStart="() => console.log('hover started!')"
	/>
	<UButton
		label="click me"
		icon="i-lucide-sun"
		@click="onClick"
	/>
</template>

<style>
	.box {
		width: 100px;
		height: 100px;
		background-color: #0d63f8;
		border-radius: 10px;
	}
</style>
