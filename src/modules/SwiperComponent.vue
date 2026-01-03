<template>
	<swiper
		:effect="'coverflow'"
		:grabCursor="true"
		:centeredSlides="true"
		:slidesPerView="3"
		:coverflowEffect="{
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		}"
		:modules="modules"
		class="mySwiper"
		loop
		:breakpoints="breakpoints"
	>
		<slot />
	</swiper>
</template>
<script>
	import { Swiper, SwiperSlide } from 'swiper/vue';

	import 'swiper/css';

	import 'swiper/css/effect-coverflow';

	import { EffectCoverflow } from 'swiper/modules';

	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			const breakpoints = {
				0: {
					slidesPerView: 1,
					centeredSlides: false,
				},
				768: {
					slidesPerView: 2,
					centeredSlides: true,
				},
				1024: {
					slidesPerView: 3,
					centeredSlides: true,
				},
			};
			const coverflowEffect = {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			};

			return {
				modules: [EffectCoverflow],
				breakpoints,
				coverflowEffect,
			};
		},
	};
</script>

<style>
	.swiper {
		width: 100%;
	}

	.swiper-slide {
		background-position: center;
		background-size: cover;
		width: 450px;
		height: 360px;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
	}

	.swiper-slide-shadow-right,
	.swiper-slide-shadow-left {
		display: none !important;
	}
</style>
