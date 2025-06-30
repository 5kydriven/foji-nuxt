<script setup lang="ts">
	definePageMeta({
		layout: false,
	});

	const router = useRouter();
</script>

<template>
	<UContainer>
		<div class="min-h-screen flex flex-col items-center justify-center gap-8">
			<label class="font-semibold text-5xl">Under Construction</label>
			<UIcon
				name="i-heroicons-wrench-screwdriver-solid"
				class="h-40 w-40"
			/>
			<p class="text-2xl text-center">
				This page is under construction. Thank you for your patience!
			</p>
			<UButton
				label="Go back"
				size="lg"
				variant="soft"
				color="neutral"
				icon="i-heroicons-arrow-left-solid"
				@click="router.back()"
			/>
		</div>
	</UContainer>
</template>
