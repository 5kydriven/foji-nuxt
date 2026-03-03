<script setup lang="ts">
	import type { NavigationMenuItem } from '@nuxt/ui';
	import { LazyAdminSlideOver } from '#components';

	const colorMode = useColorMode();

	const isDark = computed({
		get() {
			return colorMode.value === 'dark';
		},
		set(_isDark) {
			colorMode.preference = _isDark ? 'dark' : 'light';
		},
	});

	const overlay = useOverlay();
	const localePath = useLocalePath();
	const client = useSupabaseClient();

	const slideover = overlay.create(LazyAdminSlideOver);

	const items = ref<NavigationMenuItem[][]>([
		[
			{
				label: 'Dashboard',
				icon: 'heroicons:home-modern-solid',
				onSelect: () => onNavigate('/admin'),
			},
			{
				label: 'Featured',
				icon: 'heroicons:building-storefront-solid',
				onSelect: () => onNavigate('/admin/featured'),
			},
			{
				label: 'Menu',
				icon: 'heroicons:building-storefront-solid',
				onSelect: () => onNavigate('/admin/menu'),
			},
			{
				label: 'Settings',
				icon: 'heroicons:cog-6-tooth-20-solid',
				onSelect: () => onNavigate('/admin'),
			},
		],
		[
			{
				label: 'Sign out',
				icon: 'heroicons:arrow-up-on-square-stack-solid',
				onSelect: logout,
			},
		],
	]);

	async function logout() {
		await client.auth.signOut();
		await navigateTo(localePath('/auth'));
	}

	function onNavigate(path: string) {
		navigateTo(localePath(path));
		slideover.close();
	}
</script>

<template>
	<div
		class="bg-gray-100 dark:bg-gray-900  px-4 py-2 flex justify-between items-center"
	>
		<div class="flex items-center gap-4">
			<UButton
				class="md:hidden"
				icon="heroicons:bars-3-solid"
				color="neutral"
				variant="subtle"
				@click="slideover.open({ items })"
			/>

			<div class="flex items-center">
				<img
					src="/logo.png"
					alt="FOJI Logo"
					class="h-10 w-14"
				/>
				<span class="font-bold text-red-500 text-xl">FOJI</span>
			</div>
		</div>
		<div class="flex gap-4 items-center">
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
		</div>
	</div>
</template>
