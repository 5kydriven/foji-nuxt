<script setup lang="ts">
	const store = useMenuStore();
</script>

<template>
	<div class="flex justify-center my-2">
		<UPagination
			v-model:page="store.page.value"
			:sibling-count="1"
			:total="100"
			active-color="error"
		/>
	</div>
</template>
