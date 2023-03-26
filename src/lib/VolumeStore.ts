import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export function getVolumeStore() {
	const storedVolume = browser ? Number(localStorage.getItem('volume')) : 50;
	const { subscribe, set, update } = writable(storedVolume);

	return {
		subscribe,
		set: (vol: number) => {
			localStorage.setItem('volume', `${vol}`);
			set(vol);
		}
	};
}
