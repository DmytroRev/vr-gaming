<script setup lang="ts">
	import { ref, onMounted } from 'vue';

	const props = defineProps({
		target: { type: Number, required: true },
		duration: { type: Number, default: 2500 },
	});

	const count = ref(0);

	onMounted(() => {
		const start = performance.now();

		function animate(now: number) {
			const progress = Math.min((now - start) / props.duration, 1);
			count.value = Math.floor(progress * props.target);

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		}

		requestAnimationFrame(animate);
	});
</script>

<template>
	<span class="counter">{{ count }}+</span>
</template>

<style scoped lang="scss">
	.counter {
		font-family: 'Ondo', sans-serif;
		font-size: 30px;
		font-weight: 800;
		color: white;
	}
</style>
