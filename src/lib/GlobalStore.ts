import { browser } from '$app/environment';
import { PUBLIC_WEBSOCKET_ENDPOINT } from '$env/static/public';
import { derived, readable, readonly, writable } from 'svelte/store';

export type PlaybackState = {
	duration: number | undefined;
	buffered: any | undefined;
	played: any | undefined;
	seekable: any | undefined;
	seeking: boolean | undefined;
	ended: boolean | undefined;
	readyState: 0 | 1 | 2 | 3 | 4 | undefined;
	currentTime: number | undefined;
	playbackRate: number | undefined;
	paused: boolean | undefined;
	volume: number | undefined;
	muted: boolean | undefined;
};

export const mutableMediaState = writable<PlaybackState>({
	duration: undefined,
	buffered: undefined,
	played: undefined,
	seekable: undefined,
	seeking: undefined,
	ended: undefined,
	readyState: undefined,
	currentTime: undefined,
	playbackRate: undefined,
	paused: undefined,
	volume: undefined,
	muted: undefined
});

export const mediaState = readonly(mutableMediaState);

export type MetadataState = {
	songid?: number;
	title?: string;
	artist?: string;
	album?: string;
	circle?: string;
	duration?: number;
	albumart?: string;
	year?: string;
	played?: number;
	remaining?: number;
};

export const metadata = readable<MetadataState>(undefined, (set) => {
	const updateMeta = async () => {
		const ws = new WebSocket(PUBLIC_WEBSOCKET_ENDPOINT);

		let pong = 'pong';

		ws.onmessage = (d) => {
			const m = d.data;

			console.log(m, m.startsWith('welcome'));

			switch (m) {
				case 'ping':
					ws.send(pong);
					break;
				case m.startsWith('welcome') ? m : false:
					pong = 'pong:' + m.split(':')[1];
					break;
				default: {
					const j = JSON.parse(m);
					set(j);
					break;
				}
			}
		};

		await new Promise(() => {
			ws.onopen = () => {
				ws.send('grInitialConnection');
			};
		});

		return ws.close();
	};

	if (browser) updateMeta();
});

export const countup = derived(metadata, ($metadata, set) => {
	let t = $metadata ? $metadata.played : 0;

	const interval = setInterval(() => {
		t += 1;
		set(t);
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});
