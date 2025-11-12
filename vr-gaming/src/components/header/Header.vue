<script lang="ts" setup>
	import logo from '../../assets/img/logo.png';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const pages = ['Products', 'Apps & Games', 'Features', 'Support', 'About'];

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
	};
</script>

<template>
	<div class="header">
		<div @click="navigate('')" class="header__logo"><img :src="logo" alt="Logo" /><span>board</span></div>

		<ul class="header__nav">
			<li v-for="page in pages" :key="page" @click="navigate(page)">
				{{ page }}
			</li>
		</ul>
		<img class="header__bag" src="@/assets/icons/bag.svg" alt="Bag" />
	</div>
</template>

<style lang="scss" scoped>
	.header {
		padding: 20px 0;
		display: flex;
		justify-content: space-between;

		&__logo {
			display: flex;
			gap: 8px;
			align-items: center;
			font-family: 'Ondo', sans-serif;
			transition: transform 0.3s ease;
			font-weight: 800;
			font-size: 30px;
			cursor: pointer;

			&:hover {
				transform: scale(1.03);
			}

			img {
				width: 45px;
			}
		}

		&__nav {
			font-family: 'Lato', sans-serif;
			display: flex;
			gap: 40px;
			text-transform: uppercase;
			align-items: center;

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
			cursor: pointer;
			height: 22px;
			transition: transform 0.3s ease;

			&:hover {
				transform: scale(1.05);
			}
		}
	}
</style>
