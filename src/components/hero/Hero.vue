<script lang="ts" setup>
	import { useIsMobile } from '@/utils/isMobile';
	import { computed } from 'vue';
	import BasicButton from '../basic/BasicButton.vue';
	import CounterBlock from '../counter-block/CounterBlock.vue';
	import CircleText from '../circleText/CircleText.vue';

	const { isMobile } = useIsMobile();
	const bghero = computed(() => {
		return isMobile.value
			? new URL('@/assets/img/hero/hero-bg-mob.png', import.meta.url).href
			: new URL('@/assets/img/hero/hero-bg.png', import.meta.url).href;
	});
</script>

<template>
	<div class="hero">
		<div class="hero__info-wrapper">
			<div class="hero__text-wrapper">
				<h2 class="hero__title">
					Let your <br />
					mind <span class="hero__title colored-text">explore</span><br />
					new world
				</h2>
				<div class="hero__description">
					Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether.
					Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.
				</div>
			</div>
			<div class="hero__bottom-block">
				<div class="hero__button-wrapper">
					<BasicButton label="Buy now" with-bg />
					<BasicButton label="Play now" colored-text with-border />
				</div>
				<CounterBlock />
			</div>
		</div>
		<div class="hero__img-wrapper"><img :src="bghero" alt="hero Image" /></div>
		<CircleText decoration-deg />
	</div>
</template>

<style lang="scss" scoped>
	.hero {
		position: relative;
		margin-top: 25px;
		min-height: 1120px;
		height: 100%;

		@include media(md, '>') {
			min-height: 1020px;
		}

		// @include media(lg, '<') {
		// 	min-height: 1185px;
		// }

		&__text-wrapper {
			display: flex;
			flex-direction: column;
			row-gap: 18px;

			@include media(md, '>') {
				margin: 100px 0 32px;
			}
		}

		&__title {
			font-family: 'Ondo', sans-serif;
			text-transform: uppercase;
			font-weight: 800;
			font-size: 40px;
			letter-spacing: 4%;

			@include media(md, '>') {
				font-size: 70px;
			}
		}

		&__description {
			font-weight: 400;
			font-size: 16px;
			letter-spacing: 4%;

			@include media(md, '>') {
				font-size: 18px;
				max-width: 600px;
			}
		}

		&__bottom-block {
			position: absolute;
			bottom: 0;
			display: flex;
			flex-direction: column;
			row-gap: 45px;

			@include media(md, '>') {
				row-gap: 65px;
				position: static;
				width: max-content;
			}
		}

		&__button-wrapper {
			display: flex;
			gap: 20px;
			align-items: center;
			justify-content: center;
		}

		.hero__img-wrapper {
			position: absolute;
			right: -15px;
			width: 100vw;
			bottom: 270px;
			height: 100%;
			max-height: 530px;
			pointer-events: none;

			@include media(md, '>') {
				min-height: 950px;
				width: 100%;
			}

			@include media(lg, '<') {
				width: 100vw;
				min-height: 720px;
			}

			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
				mix-blend-mode: color-dodge;
				filter: brightness(0.95) contrast(1.2);
				animation: shine 2.5s ease-in-out infinite alternate;

				@include media(md, '>') {
					width: 100%;

					-webkit-mask-image: linear-gradient(to left, transparent 0%, black 15%);
					-webkit-mask-repeat: no-repeat;
					-webkit-mask-size: 100% 100%;

					mask-image: linear-gradient(to left, transparent 0%, black 15%);
					mask-repeat: no-repeat;
					mask-size: 100% 100%;
				}
			}
		}

		:deep() {
			.marquee--with-deg {
				position: absolute;
				bottom: 240px;
				left: -15px;
				width: 102vw;

				-webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%);
				-webkit-mask-repeat: no-repeat;
				-webkit-mask-size: 100% 100%;

				mask-image: linear-gradient(to right, transparent 0%, black 5%);
				mask-repeat: no-repeat;
				mask-size: 100% 100%;

				&::after {
					position: absolute;
					content: '';
					width: 100%;
					height: 100%;
					background: linear-gradient(36deg, rgba(66, 39, 123, 0.8) 0%, rgba(66, 39, 123, 0.8) 100%);
					filter: blur(3px);
					z-index: -1;
				}

				&::before {
					position: absolute;
					content: '';
					width: 30px;
					height: 100%;
					right: 0;
					-webkit-mask-image: linear-gradient(to left, transparent 0%, black 5%);
					-webkit-mask-repeat: no-repeat;
					-webkit-mask-size: 100% 100%;

					mask-image: linear-gradient(to left, transparent 0%, black 5%);
					mask-repeat: no-repeat;
					mask-size: 100% 100%;
				}
			}
		}
	}

	@keyframes shine {
		from {
			opacity: 0.8;
		}
		to {
			opacity: 0.5;
		}
	}
</style>
