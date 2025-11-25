<script setup lang="ts">
	interface CircleTextProps {
		repeat?: number;
		decorationBg?: boolean;
		decorationDeg?: boolean;
	}

	const props = defineProps<CircleTextProps>();

	const repeat = props.repeat ?? 6;
	const decorationBg = props.decorationBg ?? true;
	const decorationDeg = props.decorationDeg ?? false;
</script>

<template>
	<div class="marquee" :class="{ 'marquee--with-deg': decorationDeg }">
		<img
			v-if="decorationBg"
			class="marquee__decoration-bg"
			src="@/assets/img/line-decoration/line-decoration.png"
			alt="line decoration"
		/>
		<div class="marquee__track">
			<div class="marquee__inner" v-for="n in repeat" :key="n">
				<div class="marquee__text-wrapper">
					<img class="marquee__star" src="@/assets/img/line-decoration/star.png" alt="line decoration" />
					<div>Gaming spanning</div>
				</div>
				<div class="marquee__text-wrapper marquee__text-wrapper--second">
					<img class="marquee__star" src="@/assets/img/line-decoration/star.png" alt="line decoration" />
					<div>Action - packed</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.marquee {
		overflow: hidden;
		white-space: nowrap;
		height: 50px;
		position: relative;
		display: flex;
		align-items: center;
		font-family: 'Ondo', sans-serif;

		@include media(md, '>') {
			height: 90px;
		}

		&--with-deg {
			transform: rotate(-2deg);
		}

		&__decoration-bg {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__track {
			display: flex;
			flex-shrink: 0;
			white-space: nowrap;
			animation: marquee-scroll 50s linear infinite;
		}

		&__inner {
			display: flex;
			align-items: center;
			gap: 28px;

			@include media(md, '>') {
				gap: 50px;
			}
		}

		&__text-wrapper {
			display: flex;
			align-items: center;
			gap: 16px;
			font-size: 16px;
			font-weight: 800;

			@include media(md, '>') {
				font-size: 30px;
			}

			&--second {
				margin-right: 28px;

				@include media(md, '>') {
					margin-right: 50px;
				}
			}
		}

		&__star {
			width: 20px;
			height: 20px;

			@include media(md, '>') {
				width: 36px;
				height: 36px;
			}
		}
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
