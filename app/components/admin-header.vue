<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const isDark = ref(false);

	const props = defineProps({
		items: {
			type: Array as PropType<NavigationMenuItem[][]>,
			required: true,
		},
	});
</script>

<template>
	<div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
		<div class="flex items-center">
			<img
				src="/logo.png"
				alt="FOJI Logo"
				class="h-10 w-14"
			/>
			<span class="font-bold text-red-600 text-xl">FOJI</span>
		</div>
		<div class="flex gap-4 items-center">
			<UButton
				:icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
				color="neutral"
				variant="ghost"
				@click="isDark = !isDark"
			/>
			<div class="md:hidden">
				<USlideover title="FOJI">
					<UButton
						icon="heroicons:bars-3-bottom-right-solid"
						color="neutral"
						variant="subtle"
					/>

					<template #body>
						<div>
							<UNavigationMenu
								orientation="vertical"
								color="error"
								:items="props.items"
								class="w-full"
							/>
						</div>
					</template>
				</USlideover>
			</div>
		</div>
	</div>
</template>
