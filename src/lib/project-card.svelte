<script lang="ts">
    interface Props {
        project: App.Project;
    }

    let { project }: Props = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-x-6">
    <div class="flex-1 md:flex-initial space-y-2 md:space-y-3 text-left order-1 md:order-2">
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-primary-400 font-bold text-lg md:text-xl hover:text-primary-500 transition-colors inline-flex items-center gap-2">
            {project.name}
            <span class="text-base md:text-lg">↗</span>
        </a>

        <p class="opacity-60 text-sm md:text-base">
            {project.description}
        </p>

        <div class="flex flex-row flex-wrap gap-2 pt-2">
            {#each project.technologies as technology (technology)}
                <div class="flex items-center rounded-full border border-primary-500 text-primary-400 px-3 py-1 text-xs md:text-sm">
                    {technology}
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full md:w-48 flex-shrink-0 flex items-center order-2 md:order-1">
        <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            class="w-full h-auto rounded"
        />
    </div>
</div>
