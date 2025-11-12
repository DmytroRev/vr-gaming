import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../components/page/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
