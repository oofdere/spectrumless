<script lang="ts">
	import { metadata, countup } from '$lib/GlobalStore';
	import { secondsToMinutes, formatDuration } from 'date-fns';
</script>

{#if $metadata}
	<div
		class="flex flex-col md:flex-row h-full w-full p-12 place-items-center justify-around mix-blend-dodge"
	>
		<img
			class="md:w-auto w-full md:p-2 max-h-full aspect-square object-contain"
			src={$metadata.albumart}
			alt="Album art"
		/>
		<div class="w-full md:w-auto md:max-w-full">
			<h1 class="font-bold text-3xl">{$metadata.title}</h1>
			<h2 class="text-xl">{$metadata.artist}</h2>
			<h3>{$metadata.album} {$metadata.circle ? `/ ${$metadata.circle}` : ''}</h3>

			<div class="flex gap-2 items-center">
				{#if $countup}
					<span class="font-mono">
						{Math.trunc($countup / 60) +
							':' +
							($countup % 60).toLocaleString('en-US', {
								minimumIntegerDigits: 2
							})}
					</span>
					<progress class="w-full md:w-72 h-2" max={$metadata.duration} value={$countup} />
					<span class="font-mono">
						{Math.trunc(($metadata.duration - $countup) / 60) +
							':' +
							(($metadata.duration - $countup) % 60).toLocaleString('en-US', {
								minimumIntegerDigits: 2
							})}
					</span>
				{:else}
					<span class="font-mono">0:00</span>
					<progress class="w-72" />
					<span class="font-mono">0:00</span>
				{/if}
			</div>
		</div>
	</div>
	<img
		src={$metadata.albumart}
		alt="Album art"
		class="w-screen h-screen fixed top-0 left-0 -z-50 blur-3xl scale-125"
	/>
{/if}
