<script setup lang="ts">
	definePageMeta({
		layout: false,
	});

	const router = useRouter();
</script>

<template>
	<div class="relative min-h-screen bg-[#171311] text-[#f7ecd8]">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,164,106,0.25),_transparent_42%)]" />
		<div class="section-shell relative flex min-h-screen flex-col items-center justify-center gap-6 text-center">
			<p class="foji-title-eyebrow text-[#c7a46a]">FOJI Maintenance</p>
			<h1 class="max-w-3xl text-5xl sm:text-6xl">{{ $t('underConstruction') }}</h1>
			<p class="max-w-2xl text-sm leading-relaxed text-[#d7c5a6] sm:text-base">
				{{ $t('thisPageIsUnderConstruction') }}
			</p>
			<UIcon
				name="i-heroicons-wrench-screwdriver-solid"
				class="h-24 w-24 text-[#c7a46a]"
			/>
			<UButton
				label="Go Back"
				size="lg"
				color="neutral"
				class="bg-[#9d2723] text-[#fff7ee] hover:bg-[#b22f2a]"
				@click="router.back()"
			/>
		</div>
	</div>
</template>
