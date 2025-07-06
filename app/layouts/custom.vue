<script setup lang="ts">
import AdminHeader from '~/components/admin-header.vue';
import AdminSidebar from '~/components/admin-sidebar.vue';
</script>

<template>
	<div class="h-screen fixed w-full">
		<AdminHeader />
		<div class="flex">
			<div class="hidden md:block">
				<AdminSidebar />
			</div>
			<div class="flex-1 p-4 h-screen overflow-y-auto pb-52">
				<slot />
			</div>
		</div>
	</div>
</template>
