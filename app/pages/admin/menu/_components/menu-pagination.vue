<script setup lang="ts">
	const store = useMenuStore();
</script>

<template>
	<div class="flex justify-center my-2">
		<UPagination
			v-model:page="store.page"
			:sibling-count="1"
			:total="store.total"
			active-color="error"
		/>
	</div>
</template>
