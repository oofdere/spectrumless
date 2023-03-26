<script lang="ts">
	import { stringify } from 'postcss';
	import { onMount } from 'svelte';
	import { mediaState, metadata } from '../../lib/GlobalStore';

	const state = mediaState;
</script>

<p>buffered: {JSON.stringify($state.buffered)}</p>
<p>current time: {$state.currentTime}</p>
<p>duration: {$state.duration}</p>
<p>ended: {$state.ended}</p>
<p>muted: {$state.muted}</p>
<p>paused: {$state.paused}</p>
<p>playback rate: {$state.playbackRate}</p>
<p>played: {$state.played}</p>
<p>ready state: {JSON.stringify($state.readyState)}</p>
<p>seekable: {JSON.stringify($state.seekable)}</p>
<p>seeking: {$state.seeking}</p>
<p>volume: {$state.volume}</p>
<p>meta: {JSON.stringify($metadata)}</p>
