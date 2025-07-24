<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';

	const colorMode = useColorMode();
	const isOpen = ref(false);
	const router = useRouter();
	const localePath = useLocalePath();

	const items = ref<NavigationMenuItem[][]>([
		[
			{ label: 'Home', to: localePath('/') },
			{ label: 'About', to: localePath('/about') },
			{ label: 'Menu', to: localePath('/menu') },
			{ label: 'Faq', to: localePath('/maintenance') },
			{ label: 'Contact Us', to: localePath('/maintenance') },
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
	<div class="z-10 bg-white dark:bg-gray-900">
		<div class="max-w-screen-xl mx-auto flex items-center justify-between p-2">
			<div class="flex items-center justify-center w-full">
				<img
					src="/logo.png"
					alt="FOJI Logo"
					class="h-14 w-14"
				/>
				<div class="flex flex-col items-start w-full">
					<span class="font-bold text-red-400 text-xl">FOJI</span>
					<span class="text-black text-sm dark:text-white">
						Japanese Restaurant
					</span>
				</div>
			</div>

			<UNavigationMenu
				color="error"
				variant="link"
				highlight
				highlight-color="error"
				:items="items"
				class="w-full justify-end hidden md:flex"
			/>

			<div class="flex items-center space-x-2">
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
									:items="items"
									class="w-full"
								/>
							</div>
						</template>
					</USlideover>
				</div>
			</div>
		</div>
	</div>
</template>
