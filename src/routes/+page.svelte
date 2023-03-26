<script lang="ts">
	import { metadata, countup } from '$lib/GlobalStore';
</script>

{#if $metadata}
	<div class="flex h-auto">
		<img src={$metadata.albumart} alt="Album art" />
		<div>
			<h1>{$metadata.title}</h1>
			<h2>{$metadata.artist}</h2>
			<h3>{$metadata.album} {$metadata.circle ? `/ ${$metadata.circle}` : ''}</h3>

			{$countup}
			<progress class="w-72" max={$metadata.duration} value={$countup} />
			{$metadata.duration - $countup}
		</div>
	</div>
{/if}
