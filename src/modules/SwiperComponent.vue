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
			return {
				modules: [EffectCoverflow],
			};
		},
	};
</script>

<style>
	.swiper {
		width: 100%;
		padding-top: 50px;
		padding-bottom: 50px;
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
