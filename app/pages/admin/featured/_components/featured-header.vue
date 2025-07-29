<script setup lang="ts">
	import { LazyAddModal } from '#components';

	const store = useMenuStore();
	const overlay = useOverlay();

	const modal = overlay.create(LazyAddModal);
</script>

<template>
	<div class="flex justify-between items-center py-2">
		<UInput
			v-model="store.search"
			icon="heroicons:magnifying-glass-solid"
			placeholder="Search..."
			:ui="{ trailing: 'pe-1' }"
			color="error"
		>
			<template
				v-if="store.search.length"
				#trailing
			>
				<UButton
					color="neutral"
					variant="link"
					size="sm"
					icon="i-lucide-circle-x"
					aria-label="Clear input"
					@click="store.search = ''"
				/>
			</template>
		</UInput>
		<UButton
			label="Featured"
			color="error"
			variant="solid"
			icon="i-lucide-plus"
			@click="modal.open()"
		/>
	</div>
</template>
