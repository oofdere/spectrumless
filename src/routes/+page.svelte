<script lang="ts">
	import { metadata, countup } from '$lib/GlobalStore';
	import { secondsToMinutes, formatDuration } from 'date-fns';
</script>

{#if $metadata}
	<div class="flex h-auto">
		<img src={$metadata.albumart} alt="Album art" />
		<div>
			<h1>{$metadata.title}</h1>
			<h2>{$metadata.artist}</h2>
			<h3>{$metadata.album} {$metadata.circle ? `/ ${$metadata.circle}` : ''}</h3>

			{#if $countup}
				{Math.trunc($countup / 60) +
					':' +
					($countup % 60).toLocaleString('en-US', {
						minimumIntegerDigits: 2
					})}
				<progress class="w-72" max={$metadata.duration} value={$countup} />
				{Math.trunc(($metadata.duration - $countup) / 60) +
					':' +
					(($metadata.duration - $countup) % 60).toLocaleString('en-US', {
						minimumIntegerDigits: 2
					})}
			{/if}
		</div>
	</div>
{/if}
