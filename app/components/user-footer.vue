<script setup lang="ts">
	const year = new Date().getFullYear();
	const localePath = useLocalePath();
</script>

<template>
	<footer class="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
		<div
			class="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-zinc-300"
		>
			<p>© {{ year }} FOJI Japanese Restaurant. All rights reserved.</p>
			<div class="flex items-center gap-4">
				<NuxtLink
					:to="`${localePath('/')}#faq`"
					class="hover:text-red-500"
				>
					FAQ
				</NuxtLink>
				<NuxtLink
					:to="`${localePath('/')}#contact`"
					class="hover:text-red-500"
				>
					Contact
				</NuxtLink>
				<NuxtLink
					:to="localePath('/menu')"
					class="hover:text-red-500"
				>
					Menu
				</NuxtLink>
			</div>
		</div>
	</footer>
</template>
