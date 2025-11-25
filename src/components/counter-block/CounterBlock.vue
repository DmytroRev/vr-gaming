<script setup lang="ts">
	import Counter from '../basic/Counter.vue';
</script>

<template>
	<div class="stats">
		<div class="stats__item">
			<Counter :target="300" />
			<span class="stats__label">Unique style</span>
		</div>

		<div class="stats__item">
			<Counter :target="200" class="colored-text" />
			<span class="stats__label">Project finished</span>
		</div>

		<div class="stats__item">
			<Counter :target="500" />
			<span class="stats__label">Happy customer</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.stats {
		display: flex;
		gap: 40px;

		&__item {
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 5px;
		}

		&__label {
			font-size: 18px;
			font-weight: 400;
		}
	}
</style>
