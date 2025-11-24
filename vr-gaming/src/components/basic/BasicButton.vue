<script lang="ts" setup>
	const props = defineProps({
		label: { type: String },
		withBg: { type: Boolean, default: false },
		coloredText: { type: Boolean, default: false },
		withBorder: { type: Boolean, default: false },
	});
</script>

<template>
	<button class="para-btn" :class="{ 'para-btn--with-bg': withBg, 'para-btn--with-border': withBorder }">
		<span class="para-btn__label" :class="{ 'para-btn__label--colored-text': coloredText }">{{ props.label }}</span>
	</button>
</template>

<style scoped lang="scss">
	.para-btn {
		padding: 15px 20px;
		border: none;
		cursor: pointer;
		transform: skew(-20deg);
		height: 44px;
		max-width: 150px;
		width: 100%;
		background: transparent;
		transition: transform 0.5s ease;

		@include media(md, '>') {
			height: 74px;
			max-width: 205px;
		}

		&:hover {
			transform: skew(-20deg) scale(1.03);
		}

		&--with-bg {
			background: linear-gradient(
				36deg,
				rgba(96, 66, 242, 0.92) 0%,
				rgba(157, 93, 255, 0.92) 25%,
				rgba(245, 123, 255, 0.92) 50%,
				rgba(255, 20, 222, 0.92) 75%,
				rgba(159, 0, 132, 0.92) 100%
			);
		}

		&--with-border {
			border: 2px solid transparent;
			border-image: linear-gradient(
					36deg,
					rgba(96, 66, 242, 0.92) 0%,
					rgba(157, 93, 255, 0.92) 25%,
					rgba(245, 123, 255, 0.92) 50%,
					rgba(255, 20, 222, 0.92) 75%,
					rgba(159, 0, 132, 0.92) 100%
				)
				1;
		}

		&__label {
			font-family: 'Ondo', sans-serif;
			font-weight: 800;
			text-transform: uppercase;
			transform: skew(20deg);
			display: inline-block;

			&--colored-text {
				background: linear-gradient(
					36deg,
					rgba(96, 66, 242, 0.92) 0%,
					rgba(157, 93, 255, 0.92) 25%,
					rgba(245, 123, 255, 0.92) 50%,
					rgba(255, 20, 222, 0.92) 75%,
					rgba(159, 0, 132, 0.92) 100%
				);
				background-size: 100% 100%;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
	}
</style>
