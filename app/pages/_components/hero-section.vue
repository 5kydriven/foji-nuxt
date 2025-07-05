<script setup lang="ts">
	import { useAnimationFrame, animate, stagger, motion } from 'motion-v';
	import OrderModal from './modals/order-modal.vue';

	const containerRef = ref<HTMLDivElement | null>(null);

	onMounted(() => {
		document.fonts.ready.then(() => {
			if (!containerRef.value) return;

			const h1 = containerRef.value.querySelector('.h1');
			if (!h1) return;
			containerRef.value.style.visibility = 'visible';

			const text = h1.textContent || '';
			const words = text.split(' ').map((word, index) => {
				const span = document.createElement('span');
				span.textContent = word + ' ';
				span.classList.add(
					'inline-block',
					'whitespace-pre',
					'will-change-[transform,opacity]',
				);
				h1.appendChild(span);
				return span;
			});

			h1.textContent = '';
			words.forEach((span: any) => h1.appendChild(span));

			animate(
				words,
				{ opacity: [0, 1], y: [10, 0] },
				{
					type: 'spring',
					duration: 2,
					bounce: 0,
					delay: stagger(0.05),
				},
			);
		});
	});
	const cubeRef = ref<HTMLElement | null>(null);

	useAnimationFrame((t) => {
		if (!cubeRef.value) return;

		const rotate = Math.sin(t / 10000) * 200;
		const y = (1 + Math.sin(t / 1000)) * 10;
		cubeRef.value.style.transform = `translateY(${y}px) `;
	});
</script>

<template>
	<div
		class="min-h-[60vh] flex flex-col justify-center gap-8 bg-[url(/bg.png)] bg-cover bg-center bg-no-repeat p-3 sm:p-5"
	>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-5">
			<div>
				<div
					ref="containerRef"
					class="invisible"
				>
					<h1
						class="font-bold text-2xl sm:text-3xl md:text-5xl text-dark h1 text-white leading-tight break-words"
					>
						Welcome to FOJI Japanese Restaurant Authentic Flavors, Modern Vibes.
					</h1>
				</div>
				<br />
				<motion.div
					class="text-slate-200 text-base sm:text-lg"
					:initial="{ opacity: 0, scale: 0.5 }"
					:animate="{ opacity: 1, scale: 1 }"
					:transition="{
						duration: 0.8,
						delay: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}"
				>
					Experience the taste of Japan with our signature sushi, ramen, and
					more. Enjoy a unique dining atmosphere at FOJI, where tradition meets
					innovation.
				</motion.div>
				<br />
				<motion.div
					:initial="{ opacity: 0, scale: 0.5 }"
					:animate="{ opacity: 1, scale: 1 }"
					:transition="{
						duration: 0.8,
						delay: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}"
				>
					<OrderModal
						color="error"
						class="hidden lg:block"
					/>
				</motion.div>
			</div>
			<div>
				<div
					ref="cubeRef"
					class="flex justify-center py-5 lg:py-0"
				>
					<img
						src="/menu.png"
						class="w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-lg drop-shadow-2xl/50 object-cover"
					/>
				</div>
				<div class="flex justify-center">
					<OrderModal
						color="error"
						class="block lg:hidden"
					/>
				</div>
			</div>
		</div>
		<div>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
				<motion.div
					class="p-3 sm:p-4 rounded-md bg-black/40 text-white flex flex-col items-center"
					:initial="{ opacity: 0, scale: 0.5 }"
					:animate="{ opacity: 1, scale: 1 }"
					:transition="{
						duration: 0.8,
						delay: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}"
				>
					<img
						src="https://picsum.photos/468/468?random=3"
						width="80"
						class="rounded-lg max-w-full max-h-32 sm:max-h-40 object-cover"
					/>
					<h1 class="font-semibold text-base sm:text-lg">Lorem Epsom</h1>
					<span class="text-xs sm:text-sm text-center">
						Lorem ipsum dolor sit amet.
					</span>
				</motion.div>
				<motion.div
					class="p-3 sm:p-4 rounded-md bg-black/40 text-white flex flex-col items-center"
					:initial="{ opacity: 0, scale: 0.5 }"
					:animate="{ opacity: 1, scale: 1 }"
					:transition="{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}"
				>
					<img
						src="https://picsum.photos/468/468?random=4"
						width="80"
						class="rounded-lg max-w-full max-h-32 sm:max-h-40 object-cover"
					/>
					<h1 class="font-semibold text-base sm:text-lg">Lorem Epsom</h1>
					<span class="text-xs sm:text-sm text-center">
						Lorem ipsum dolor sit amet.
					</span>
				</motion.div>
				<motion.div
					class="p-3 sm:p-4 rounded-md bg-black/40 text-white flex flex-col items-center"
					:initial="{ opacity: 0, scale: 0.5 }"
					:animate="{ opacity: 1, scale: 1 }"
					:transition="{
						duration: 0.8,
						delay: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}"
				>
					<img
						src="https://picsum.photos/468/468?random=5"
						width="80"
						class="rounded-lg max-w-full max-h-32 sm:max-h-40 object-cover"
					/>
					<h1 class="font-semibold text-base sm:text-lg">Lorem Epsom</h1>
					<span class="text-xs sm:text-sm text-center">
						Lorem ipsum dolor sit amet.
					</span>
				</motion.div>
			</div>
		</div>
	</div>
</template>
