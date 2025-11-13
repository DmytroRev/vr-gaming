<script lang="ts" setup>
	import { useIsMobile } from '@/utils/isMobile';
	import { computed } from 'vue';

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
					mind <span class="hero__title--colored-text">explore</span><br />
					new world
				</h2>
				<div class="hero__description">
					Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether.
					Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.
				</div>
			</div>
		</div>
		<div class="hero__image-wrapper"><img :src="bghero" alt="hero Image" /></div>
	</div>
</template>

<style lang="scss" scoped>
	.hero {
		position: relative;
		margin-top: 25px;
		min-height: 760px;
		height: 100%;

		@include media(md, '>') {
			display: flex;
			min-height: 840px;
		}

		@include media(lg, '<') {
			min-height: 1185px;
		}

		&__info-wrapper {
		}

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

			&--colored-text {
				background: linear-gradient(270deg, #ff00c8, #ff7b00, #00eaff, #ff00c8);
				background-size: 800% 800%;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;

				animation: gradientLoop 10s ease-in-out infinite;
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

		.hero__image-wrapper {
			position: absolute;
			right: -15px;
			width: 100vw;
			bottom: 40px;
			height: 100%;
			max-height: 530px;

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
				opacity: 0.8;

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
	}

	@keyframes gradientLoop {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
