import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);

const checkIsMobile = () => {
	isMobile.value = window.matchMedia('(max-width: 768px)').matches;
};

export function useIsMobile() {
	onMounted(() => {
		checkIsMobile();
		window.addEventListener('resize', checkIsMobile);
	});

	onUnmounted(() => {
		window.removeEventListener('resize', checkIsMobile);
	});

	return { isMobile };
}
