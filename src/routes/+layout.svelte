<script>
	import '../app.postcss';
	import { PUBLIC_AUDIO_ENDPOINT } from '$env/static/public';

	let volume = 0.5;
	let paused = true;
	function togglePause() {
		paused = !paused;
	}
	let muted = false;
	function toggleMute() {
		muted = !muted;
	}
</script>

<div class="">
	<div class="flex w-full h-12 shadow-xl place-items-center justify-around">Station Name</div>

	<div class="container m-auto">
		<br />
		Audio endpoint: {PUBLIC_AUDIO_ENDPOINT}

		<audio controls bind:volume bind:paused bind:muted>
			<source src={PUBLIC_AUDIO_ENDPOINT} />
		</audio>

		<slot />
	</div>

	<div
		class="flex w-full flex-row flex-wrap h-12 shadow-xl bg-red-500 bottom-0 absolute place-items-center justify-around"
	>
		<button on:click={togglePause}>
			{paused ? 'Play' : 'Pause'}
		</button>
		<input type="range" min="0" max="1" step="0.01" bind:value={volume} />
		{volume}%
		<button on:click={toggleMute}>
			{muted ? 'Unmute' : 'Mute'}
		</button>
	</div>
</div>
