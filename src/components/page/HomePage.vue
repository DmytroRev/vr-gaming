<script lang="ts" setup>
	import Benefits from '../benefits/Benefits.vue';
	import Header from '../header/Header.vue';
	import Hero from '../hero/Hero.vue';
</script>

<template>
	<div class="shine-decoration" />
	<div class="container">
		<Header />
		<Hero />
		<Benefits />
	</div>
</template>

<style lang="scss" scoped>
	.shine-decoration {
		position: absolute;
		top: -300px;
		left: -300px;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(221, 0, 184, 0.64) 0%, rgba(221, 0, 184, 0) 65%);
		pointer-events: none;
		animation: shine 10s infinite alternate;
		z-index: 1;

		@include media(md, '>') {
			width: 1200px;
			height: 1200px;
			top: -400px;
			left: -400px;
		}
	}

	@keyframes shine {
		from {
			opacity: 1;
		}
		to {
			opacity: 0.6;
			width: 700px;
			height: 700px;

			@include media(md, '>') {
				width: 1000px;
				height: 1000px;
			}
		}
	}
</style>
