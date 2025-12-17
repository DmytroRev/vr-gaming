<script setup lang="ts">
	import { SwiperSlide } from 'swiper/vue';
	import SwiperComponent from '@/modules/SwiperComponent.vue';
	import { ref } from 'vue';

	const slideImg = ref(5);

	const images = import.meta.glob('@/assets/img/benefitsSlide/*.png', { eager: true, import: 'default' });
</script>

<template>
	<div class="benefits">
		<SwiperComponent>
			<SwiperSlide v-for="(img, index) in images" :key="index">
				<div class="card">
					<img :src="img" alt="slide" />
				</div>
			</SwiperSlide>
		</SwiperComponent>
	</div>
</template>

<style lang="scss" scoped>
	.benefits {
		margin-top: 120px;
		padding-bottom: 100px;
		min-height: 1000px;

		.card {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			background-color: #222;
			color: #fff;
			border-radius: 12px;
			overflow: hidden;
			font-size: 24px;

			img {
				object-fit: cover;
				height: 100%;
			}
		}

		:deep(.swiper-slide img) {
			filter: grayscale(85%);
			transition: filter 0.6s ease;
			will-change: filter;
		}

		:deep(.swiper-slide-active img) {
			filter: grayscale(0%);
		}
	}
</style>
