<script setup lang="ts">
	import { LazyAddModal } from '#components';

	const store = useMenuStore();
	const overlay = useOverlay();

	const modal = overlay.create(LazyAddModal);
</script>

<template>
	<div class="flex justify-between items-center p-2">
		<UInput
			v-model="store.search"
			icon="heroicons:magnifying-glass-solid"
			placeholder="Search..."
			:ui="{ trailing: 'pe-1' }"
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
			label="Add Menu"
			color="error"
			variant="solid"
			icon="i-lucide-plus"
			class="ml-2"
			@click="modal.open()"
		/>
	</div>
</template>
