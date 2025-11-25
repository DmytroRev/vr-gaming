declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
git add src/components/circleText/CircleText.vue src/components/circleText/CircleText.vue.d.ts src/shims-vue.d.ts