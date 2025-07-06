<script setup lang="ts">
import AdminHeader from '~/components/admin-header.vue';
import AdminSidebar from '~/components/admin-sidebar.vue';
</script>

<template>
	<div class="h-screen">
		<AdminHeader />
		<div class="p-4 overflow-y-auto">
			<slot />
		</div>
	</div>
</template>
