<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const props = defineProps({
		items: {
			type: Array as PropType<NavigationMenuItem[][]>,
			required: true,
		},
	});
</script>

<template>
	<div class="p-4 rounded-md h-screen border-r border-neutral-200">
		<UNavigationMenu
			orientation="vertical"
			:items="props.items"
			color="error"
			class="data-[orientation=vertical]:w-48 h-screen"
		/>
		<!-- <template #default="{ item }: { item: NavigationMenuItem }">
				<div class="flex items-center space-x-2 p-2 text-lg">
					<UIcon :name="item.icon as any" />
					<span>{{ item.label }}</span>
				</div>
			</template></UNavigationMenu> -->
	</div>
</template>
