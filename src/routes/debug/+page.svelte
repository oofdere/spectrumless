<script lang="ts">
	import { stringify } from 'postcss';
	import { mediaState } from '../../lib/GlobalStore';

	const state = mediaState;
</script>

<p>{JSON.stringify($state.buffered)}</p>
<p>{$state.currentTime}</p>
<p>{$state.duration}</p>
<p>{$state.ended}</p>
<p>{$state.muted}</p>
<p>{$state.paused}</p>
<p>{$state.playbackRate}</p>
<p>{$state.played}</p>
<p>{$state.readyState}</p>
<p>{JSON.stringify($state.seekable)}</p>
<p>{$state.seeking}</p>
<p>{$state.volume}</p>
