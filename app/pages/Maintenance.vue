<script setup lang="ts">
	definePageMeta({
		layout: false,
	});

	const router = useRouter();
</script>

<template>
	<UContainer>
		<div class="min-h-screen flex flex-col items-center justify-center gap-8">
			<label class="font-semibold text-5xl">{{
				$t('underConstruction')
			}}</label>
			<UIcon
				name="i-heroicons-wrench-screwdriver-solid"
				class="h-40 w-40"
			/>
			<p class="text-2xl text-center">
				{{ $t('thisPageIsUnderConstruction') }}
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
