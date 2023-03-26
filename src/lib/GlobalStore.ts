import { browser } from '$app/environment';
import { PUBLIC_WEBSOCKET_ENDPOINT } from '$env/static/public';
import { readable, readonly, writable } from 'svelte/store';

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
	title?: string;
	artist?: string;
	album?: string;
	artwork?: string;
};

if (browser) {
	const ws = new WebSocket(PUBLIC_WEBSOCKET_ENDPOINT);

	ws.send('grInitialConnection');
}
export const metadata = readable<any>('waiting', (set) => {
	const updateMeta = async () => {
		ws.onmessage = (e) => {
			set(e);
			console.log(e);
		};

		return ws.close();
	};

	if (browser) updateMeta();
});
