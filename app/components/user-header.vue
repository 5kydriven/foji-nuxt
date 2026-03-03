<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const colorMode = useColorMode();
	const localePath = useLocalePath();
	const homePath = localePath('/');

	const items = ref<NavigationMenuItem[][]>([
		[
			{ label: 'Home', to: homePath },
			{ label: 'About', to: localePath('/about') },
			{ label: 'Menu', to: `${homePath}#menu` },
			{ label: 'FAQ', to: `${homePath}#faq` },
			{ label: 'Contact', to: `${homePath}#contact` },
		],
	]);

	const isDark = computed({
		get() {
			return colorMode.value === 'dark';
		},
		set(_isDark) {
			colorMode.preference = _isDark ? 'dark' : 'light';
		},
	});
</script>

<template>
	<header class="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95">
		<div class="mx-auto flex max-w-screen-xl items-center justify-between px-3 py-2 sm:px-6 lg:px-8">
			<NuxtLink
				:to="homePath"
				class="flex items-center gap-2"
			>
				<img
					src="/logo.png"
					alt="FOJI Logo"
					class="h-10 w-10 sm:h-12 sm:w-12"
				/>
				<div class="leading-tight">
					<p class="text-lg font-bold text-red-500">FOJI</p>
					<p class="text-xs text-zinc-600 dark:text-zinc-300">Japanese Restaurant</p>
				</div>
			</NuxtLink>

			<UNavigationMenu
				color="error"
				variant="link"
				highlight
				highlight-color="error"
				:items="items"
				class="hidden w-full justify-center md:flex"
			/>

			<div class="flex items-center gap-2">
				<UButton
					label="Reserve"
					color="error"
					size="sm"
					:to="`${homePath}#reservation`"
					class="hidden lg:inline-flex"
				/>

				<ClientOnly v-if="!colorMode?.forced">
					<UButton
						:icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
						color="neutral"
						variant="ghost"
						@click="isDark = !isDark"
					/>

					<template #fallback>
						<div class="size-8" />
					</template>
				</ClientOnly>

				<div class="md:hidden">
					<USlideover title="FOJI Navigation">
						<UButton
							icon="heroicons:bars-3-bottom-right-solid"
							color="neutral"
							variant="subtle"
						/>

						<template #body>
							<div class="space-y-4">
								<UNavigationMenu
									orientation="vertical"
									color="error"
									:items="items"
									class="w-full"
								/>
								<UButton
									label="Reserve"
									color="error"
									block
									:to="`${homePath}#reservation`"
								/>
							</div>
						</template>
					</USlideover>
				</div>
			</div>
		</div>
	</header>
</template>
