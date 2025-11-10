<script lang="ts">
    interface Props {
        project: App.Project;
    }

    let { project }: Props = $props();
</script>

<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-6 flex flex-row gap-x-6">
    <div class="w-48 flex-shrink-0">
        <img
            src={project.screenshot}
            alt={`${project.name} screenshot`}
            class="w-full h-auto rounded border border-surface-300-700"
        />
    </div>
    <div class="flex-1 space-y-3 text-left">
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-primary-400 font-bold text-xl hover:text-primary-500 transition-colors">
            {project.name}
        </a>

        <p class="opacity-60">
            {project.description}
        </p>

        <div class="flex flex-row flex-wrap gap-2 pt-2">
            {#each project.technologies as technology (technology)}
                <div class="flex items-center rounded-full border border-primary-500 text-primary-400 px-3 py-1 text-sm">
                    {technology}
                </div>
            {/each}
        </div>
    </div>
</div>
