<script lang="ts" setup>
	import { ref } from 'vue';
	import logo from '@/assets/img/logo.png';
	import bagIcon from '@/assets/icons/bag.svg';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const pages = ['Products', 'Apps & Games', 'Features', 'Support', 'About'];

	const menuOpen = ref(false);

	const navigate = (page: string) => {
		switch (page) {
			case 'Products':
				router.push('/products');
				break;
			case 'Apps & Games':
				router.push('/apps');
				break;
			case 'Features':
				router.push('/features');
				break;
			case 'Support':
				router.push('/support');
				break;
			case 'About':
				router.push('/about');
				break;
			default:
				router.push('/');
				break;
		}
		menuOpen.value = false;
	};
</script>

<template>
	<header class="header">
		<div @click="navigate('')" class="header__logo">
			<img :src="logo" alt="Logo" />
			<span>board</span>
		</div>

		<nav :class="['header__nav', { 'header__nav--open': menuOpen }]">
			<ul class="header__nav-list">
				<li v-for="page in pages" :key="page" @click="navigate(page)">
					{{ page }}
				</li>
			</ul>
		</nav>

		<img class="header__bag" :src="bagIcon" alt="Bag" @click="router.push('/cart')" />

		<div class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen">
			<span></span>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;
		position: relative;
		z-index: 100;

		&__logo {
			display: flex;
			gap: 8px;
			align-items: center;
			font-family: 'Ondo', sans-serif;
			font-weight: 800;
			font-size: 30px;
			cursor: pointer;
			transition: transform 0.3s ease;

			img {
				width: 45px;
			}

			&:hover {
				transform: scale(1.03);
			}
		}

		&__nav {
			@include media(lg, '<') {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;
				background: rgba(11, 11, 59, 0.98);
				display: flex;
				justify-content: center;
				align-items: center;
				transform: translateY(-100%);
				opacity: 0;
				pointer-events: none;
				flex-direction: column;
				gap: 30px;
				transition: all 0.4s ease;
				backdrop-filter: blur(4px);

				ul {
					display: flex;
					flex-direction: column;
					gap: 25px;
					align-items: center;
					padding: 0;
					margin: 0;
				}

				&--open {
					transform: translateY(0);
					opacity: 1;
					pointer-events: all;
				}
			}
		}

		&__nav-list {
			font-family: 'Lato', sans-serif;
			display: flex;
			gap: 40px;
			text-transform: uppercase;
			align-items: center;
			transition: all 0.3s ease;

			li {
				display: inline-block;
				transition: transform 0.3s ease;
				font-weight: 400;
				cursor: pointer;
				font-size: 18px;

				&:hover {
					transform: scale(1.05);
				}
			}
		}

		&__bag {
			width: 28px;
			cursor: pointer;
			transition: transform 0.3s ease;
			z-index: 101;

			&:hover {
				transform: scale(1.1);
			}

			@include media(lg, '<') {
				position: absolute;
				right: 60px;
			}
		}
	}

	.burger {
		display: none;
		width: 30px;
		height: 22px;
		position: relative;
		cursor: pointer;
		z-index: 102;

		span,
		span::before,
		span::after {
			content: '';
			position: absolute;
			left: 0;
			width: 100%;
			height: 3px;
			background: white;
			border-radius: 3px;
			transition: all 0.3s ease;
		}

		span {
			top: 50%;
			transform: translateY(-50%);

			&::before {
				top: -8px;
			}

			&::after {
				top: 8px;
			}
		}

		&.open {
			span {
				background: transparent;
				&::before {
					transform: rotate(45deg);
					top: 0;
				}
				&::after {
					transform: rotate(-45deg);
					top: 0;
				}
			}
		}

		@include media(lg, '<') {
			display: block;
		}
	}
</style>
