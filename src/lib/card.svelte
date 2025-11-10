<script lang="ts">
    interface Props {
        card: App.Card;
    }

    let { card }: Props = $props();
    
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-6 flex flex-row gap-x-4">
    <div class="size-auto">
        <p class="pt-1 text-sm">{card.years}</p>
    </div>
    <div class="flex-1 space-y-3 text-left">
        <h2 class="text-primary-400 font-bold text-xl">{card.company}</h2>

        <h3 class="font-semibold text-lg">{card.title}</h3>

        <p class="opacity-60">
            {card.description}
        </p>

        <div class="flex flex-row flex-wrap gap-2 pt-2">
            {#each card.technologies as technology (technology)}
                <div class="flex items-center rounded-full border border-primary-500 text-primary-400 px-3 py-1 text-sm">
                    {technology}
                </div>
            {/each}
        </div>

    </div>
</div>