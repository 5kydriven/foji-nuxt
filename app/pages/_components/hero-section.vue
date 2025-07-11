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
		class="min-h-screen w-full flex items-center justify-center gap-8 p-3 "
	>
		<video 
			class="absolute top-0 left-0 w-full h-full object-cover" 
			autoplay 
			muted 
			loop 
			playsinline
		>
			<source src="/ai-video-bg.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div
			class="max-w-screen-xl mx-auto relative z-10 flex  py-5 max-w-screen-xl mx-auto bg-black/30 rounded-md"
		>
			<div class="flex flex-col items-center justify-center ">
				<div
					ref="containerRef"
					class="invisible"
				>
					<h1
						class="font-bold text-2xl sm:text-3xl lg:text-5xl text-dark h1 text-white leading-tight break-words drop-shadow-2xl text-center"
					>
						Welcome to FOJI Japanese Restaurant Authentic Flavors, Modern Vibes.
					</h1>
				</div>
				<br />
				<motion.div
					class="text-gray-200 text-lg max-w-96 text-center"
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
		</div>
	</div>
</template>
