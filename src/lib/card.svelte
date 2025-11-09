<script lang="ts">
    interface Props {
        card: App.Card;
    }

    let { card }: Props = $props();
    
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-6 text-center flex flex-row">
    <div class="basis-1/3">
        <p class="pt-2">{card.years}</p>
    </div>
    <div class="basis-2/3 space-y-3">
        <!-- TODO: turn into link -->
        <h2>{card.company}</h2>

        <!-- Make font lighter -->
        <h3>{card.title}</h3>

        <p class="opacity-60">
            {card.description}
        </p>

        <div class="flex flex-row gap-2 pt-2">
            {#each card.technologies as technology (technology)}
                <div class="flex items-center rounded-full bg-primary-600 p-2">
                    {technology}
                </div>
            {/each}
        </div>

    </div>
</div>