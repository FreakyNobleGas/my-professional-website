<script lang="ts">
    interface Props {
        card: App.Card;
    }

    let { card }: Props = $props();
    
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-x-4">
    <div class="size-auto">
        <p class="text-sm text-primary-400 font-medium">{card.years}</p>
    </div>
    <div class="flex-1 space-y-2 md:space-y-3 text-left">
        <h2 class="text-primary-400 font-bold text-lg md:text-xl">{card.company}</h2>

        <h3 class="font-semibold text-base md:text-lg">{card.title}</h3>

        <p class="opacity-60 text-sm md:text-base">
            {card.description}
        </p>

        <div class="flex flex-row flex-wrap gap-2 pt-2">
            {#each card.technologies as technology (technology)}
                <div class="flex items-center rounded-full border border-primary-500 text-primary-400 px-3 py-1 text-xs md:text-sm">
                    {technology}
                </div>
            {/each}
        </div>

    </div>
</div>