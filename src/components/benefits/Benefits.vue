<script setup lang="ts">
	import { SwiperSlide } from 'swiper/vue';
	import SwiperComponent from '@/modules/SwiperComponent.vue';
	import { ref } from 'vue';
	import BasicButton from '../basic/BasicButton.vue';

	const slideImg = ref(5);

	const images = import.meta.glob('@/assets/img/benefitsSlide/*.png', { eager: true, import: 'default' });
</script>

<template>
	<div class="benefits">
		<div class="benefits__heading-text">
			<h2 class="benefits__title">choose your <br /><span class="colored-text">favorite</span> games</h2>
			<p class="benefits__description">
				Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about
				release.
			</p>
		</div>
		<SwiperComponent>
			<SwiperSlide v-for="(img, index) in images" :key="index">
				<div class="card">
					<img :src="img" alt="slide" />
				</div>
			</SwiperSlide>
		</SwiperComponent>
		<div class="benefits__btns-wrapper">
			<BasicButton label="View All" with-bg />
			<BasicButton label="Play now" colored-text with-border />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.benefits {
		padding: 50px 0;

		&__heading-text {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			gap: 12px;
			margin-bottom: 25px;

			@include media(md, '>') {
				margin-bottom: 40px;
			}
		}

		&__title {
			font-weight: 800;
			font-size: 34px;
			text-align: center;
			text-transform: uppercase;

			@include media(md, '>') {
				font-size: 68px;
			}
		}

		&__description {
			font-weight: 400;
			font-size: 16px;
			text-align: center;
			color: #ffffffab;

			@include media(md, '>') {
				max-width: 520px;
			}
		}

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

		&__btns-wrapper {
			display: flex;
			gap: 20px;
			justify-content: center;
			margin-top: 30px;
			align-items: center;

			@include media(md, '>') {
				margin-top: 50px;
			}
		}
	}
</style>
