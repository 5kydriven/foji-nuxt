<script setup lang="ts">
	const props = defineProps<{ items: any }>();

	const emit = defineEmits(['close']);
</script>

<template>
	<USlideover
		side="left"
		title="FOJI"
		:close="{ onClick: () => emit('close') }"
	>
		<template #body>
			<UNavigationMenu
				orientation="vertical"
				color="error"
				:items="props.items"
				class="w-full"
			/>
		</template>
	</USlideover>
</template>
