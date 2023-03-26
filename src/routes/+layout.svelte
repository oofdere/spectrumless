<script lang="ts">
	import '../app.postcss';
	import { PUBLIC_AUDIO_ENDPOINT } from '$env/static/public';
	import { mutableMediaState } from '../lib/GlobalStore';
	import { noop } from 'svelte/internal';
	const state = mutableMediaState;

	$state.volume = 0.5;
	$state.paused = true;
	let player: Node;
	function togglePause() {
		player.currentTime = $state.duration;
		$state.paused = !$state.paused;
	}
	let muted = false;
	function toggleMute() {
		$state.muted = !$state.muted;
	}
</script>

<div class="">
	<div class="flex w-full h-12 shadow-xl place-items-center justify-around">Station Name</div>

	<div class="container m-auto">
		<audio
			controls
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
		class="flex w-full flex-row flex-wrap h-12 shadow-xl bg-red-500 bottom-0 fixed place-items-center justify-around"
	>
		<button on:click={togglePause}>
			{$state.paused ? 'Play' : 'Pause'}
		</button>
		<input type="range" min="0" max="1" step="0.01" bind:value={$state.volume} />
		{$state.volume}%
		<button on:click={toggleMute}>
			{muted ? 'Unmute' : 'Mute'}
		</button>
	</div>
</div>
