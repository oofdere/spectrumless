<script lang="ts">
	import '../app.postcss';
	import { PUBLIC_AUDIO_ENDPOINT } from '$env/static/public';
	import { mutableMediaState, metadata, type MetadataState } from '../lib/GlobalStore';
	const state = mutableMediaState;

	$state.volume = 0.5;
	$state.paused = true;
	$state.currentTime = 0;
	let player;
	function togglePause() {
		$state.paused = !$state.paused;
		player.currentTime = $state.duration | 0;
	}
	let muted = false;
	function toggleMute() {
		$state.muted = !$state.muted;
	}

	$: $metadata, updateMeta();
	$: navigator.mediaSession.playbackState = $state.paused ? 'paused' : 'playing';
	function updateMeta() {
		if ($metadata && 'mediaSession' in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: $metadata.title,
				artist: $metadata.artist,
				album: $metadata.album,
				artwork: [{ src: $metadata.albumart }]
			});
			console.log(navigator.mediaSession.metadata);
		}
	}
</script>

<div class="">
	<div class="fixed flex top-0 w-full h-12 shadow-xl place-items-center justify-around">
		Station Name
	</div>

	<div class="container m-auto h-screen">
		<audio
			bind:this={player}
			bind:duration={$state.duration}
			bind:buffered={$state.buffered}
			bind:played={$state.played}
			bind:seekable={$state.seekable}
			bind:seeking={$state.seeking}
			bind:ended={$state.ended}
			bind:readyState={$state.readyState}
			bind:playbackRate={$state.playbackRate}
			bind:volume={$state.volume}
			bind:paused={$state.paused}
			bind:muted={$state.muted}
		>
			<source src={PUBLIC_AUDIO_ENDPOINT} />
		</audio>

		<slot />
	</div>

	<div
		class="flex w-full flex-row flex-wrap h-12 border-t-black border-t bottom-0 fixed place-items-center justify-around"
	>
		<button on:click={togglePause}>
			{$state.paused ? 'Play' : 'Pause'}
		</button>
		<input type="range" min="0" max="1" step="0.01" bind:value={$state.volume} />
		{Math.floor($state.volume * 100)}%
		<button on:click={toggleMute}>
			{muted ? 'Unmute' : 'Mute'}
		</button>
	</div>
</div>
