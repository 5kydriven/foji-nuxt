<script setup lang="ts">
	import AdminHeader from '~/components/admin-header.vue';
	import AdminSidebar from '~/components/admin-sidebar.vue';
</script>

<template>
	<div class="h-screen fixed w-full flex flex-col">
		<AdminHeader />

		<div class="flex">
			<div class="hidden md:block">
				<AdminSidebar />
			</div>
			<div class="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-73px)]">
				<slot />
			</div>
		</div>
	</div>
</template>
