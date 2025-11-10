<script lang="ts">
	import Card from '$lib/card.svelte';
	import ProjectCard from '$lib/project-card.svelte';
	import experience from '$lib/data/experience.json';
	import projects from '$lib/data/projects.json';

	const sections = ['About', 'Experience', 'Projects'];

	const cards: App.Card[] = experience;
	const projectCards: App.Project[] = projects;
</script>

<!-- 
    items-start => Aligns text to the left
    space-y-4 => Spaces children vertically
    place-content-center => Aligns content vertically
    md:<some-property> => Only apply on larger screens
-->

<div class="flex flex-col md:flex-row font-mono gap-x-8 mt-20 px-16">
	<!--
    Left Side
  -->
	<div class="basis-1/4">
		<div class="static md:sticky top-32">
			<!-- Headshot -->
			<div class="flex justify-start mb-6">
				<img
					src="/headshot.png"
					alt="Nick Quinn headshot"
					class="w-40 h-40 rounded-full object-cover border-2 border-surface-300-700 shadow-lg"
				/>
			</div>
			<div class="space-y-4 items">
				<h2 class="h2">Nick Quinn</h2>
				<h4 class="h4">Full Stack Engineer</h4>
			</div>
			<!--
        Page Sections
      -->
			<div class="mt-8 space-y-2">
				{#each sections as section (section)}
					<div>
						<a
							href={`#${section.toLowerCase()}`}
							class="text-lg font-medium hover:text-primary-500 transition-colors duration-200 block py-1"
						>
							{section}
						</a>
					</div>
				{/each}
			</div>
			<!-- 
        Profile Links 
      -->
			<div class="flex flex-row gap-x-4 mt-12 mb-8">
				<a href="https://github.com/FreakyNobleGas">
					<img
						src="/github-mark-white.svg"
						alt="My Github Profile"
						class="w-10 h-10 hover:opacity-80"
					/>
				</a>
				<a href="https://www.linkedin.com/in/nicholas-quinn/">
					<img
						src="/InBug-White.png"
						alt="My LinkedIn Profile"
						class="w-10 h-10 hover:opacity-80"
					/>
				</a>
			</div>
		</div>
	</div>
	<!--
    Right Side
  -->
	<div id="about" class="basis-3/4">
		<div class="text-center mb-6">
			<h1 class="text-3xl font-bold text-primary-400">About</h1>
			<hr class="bg-slate-600 border-t-1 m-2" />
		</div>
		<div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 space-y-4 text-sm align-middle place-content-center font-thin mt-4">
			<p>
				I’m a full stack software engineer with extensive experience working across the
				entire stack. My favorite language to work with is Python for it's ability to quickly 
				craft scripts and create APIs that solve complex business needs.
			</p>

			<p>
				Programming isn’t just my job—it’s also my hobby. I love automating tasks with Python and
				diving into projects that challenge my creativity. When I’m not coding, you’ll likely find
				me immersed in a video game with a captivating story or out running.
			</p>

			<p>
				I hold a Bachelor of Science in Computer Science with a minor in Bioinformatics. My approach
				to programming is driven by a passion for creativity and innovation. I enjoy thinking
				outside the box and crafting unique solutions before turning to existing ones. Above all, I
				believe in having fun and making the most out of every challenge.
			</p>
		</div>
		<div id="experience" class="mt-8">
			<div class="text-center mb-6">
				<h1 class="text-3xl font-bold text-primary-400">Experience</h1>
				<hr class="bg-slate-600 border-t-1 m-2" />
			</div>
			{#each cards as card (card.company)}
				<div class="w-full my-4">
					<Card {card} />
				</div>
			{/each}
		</div>

		<div id="projects" class="mt-8">
			<div class="text-center mb-6">
				<h1 class="text-3xl font-bold text-primary-400">Projects</h1>
				<hr class="bg-slate-600 border-t-1 m-2" />
			</div>
			{#each projectCards as project (project.name)}
				<div class="w-full my-4">
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
