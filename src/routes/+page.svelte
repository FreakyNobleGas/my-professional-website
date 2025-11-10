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

<div class="flex flex-col md:flex-row font-mono gap-x-8 mt-8 md:mt-20 px-4 md:px-16">
  <!--
    Left Side
  -->
  <div class="basis-full md:basis-1/4 mb-8 md:mb-0">
    <div
      class="static md:sticky top-32 flex flex-col items-center md:items-start text-center md:text-left"
    >
      <!-- Headshot -->
      <div class="flex justify-center md:justify-start mb-6">
        <img
          src="/headshot.png"
          alt="Nick Quinn headshot"
          class="w-40 h-40 rounded-full object-cover border-2 border-surface-300-700 shadow-lg"
          style="object-position: center 45%;"
        />
      </div>
      <div class="space-y-4 items">
        <h2 class="h2 text-2xl md:text-3xl">Nick Quinn</h2>
        <h4 class="h4 text-xl md:text-2xl">Full Stack Engineer</h4>
      </div>
      <!--
        Page Sections
      -->
      <div class="mt-8 space-y-2 w-full flex flex-col items-center md:items-start">
        {#each sections as section (section)}
          <div>
            <a
              href={`#${section.toLowerCase()}`}
              class="text-base md:text-lg font-medium hover:text-primary-500 hover:underline transition-all duration-200 block py-1 px-2 rounded hover:bg-surface-200-800 cursor-pointer inline-flex items-center gap-2"
            >
              <span class="text-primary-500">→</span>
              {section}
            </a>
          </div>
        {/each}
      </div>
      <!--
        Profile Links
      -->
      <div class="flex flex-row gap-x-4 mt-12 justify-center md:justify-start">
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
  <div id="about" class="basis-full md:basis-3/4">
    <div class="text-center mb-6">
      <h1 class="text-2xl md:text-3xl font-bold text-primary-400">About</h1>
      <hr class="bg-slate-600 border-t-1 m-2" />
    </div>
    <div
      class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full p-4 md:p-6 space-y-4 text-sm md:text-base align-middle place-content-center font-thin mt-4"
    >
      <p>
        I am a full-stack software engineer with experience across frontend, backend, and
        infrastructure domains. I use Python and TypeScript to develop APIs and automate solutions
        for complex challenges. My interest in programming extends beyond my professional
        responsibilities; I dedicate my free time to building tools and pursuing creative projects.
        Additionally, I am an avid DIY enthusiast and enjoy playing video games with friends.
      </p>
      <p>
        I hold a Bachelor of Science in Computer Science with a minor in Bioinformatics. I approach
        engineering challenges with curiosity and creativity, prioritizing novel solutions before
        adopting established patterns.
      </p>
    </div>
    <div id="experience" class="mt-8">
      <div class="text-center mb-6">
        <h1 class="text-2xl md:text-3xl font-bold text-primary-400">Experience</h1>
        <hr class="bg-slate-600 border-t-1 m-2" />
      </div>
      {#each cards as card (card.company)}
        <div class="w-full my-4">
          <Card {card} />
        </div>
      {/each}
      <div class="mt-6 text-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-base md:text-lg font-medium hover:text-primary-500 transition-colors duration-200 inline-block"
        >
          View Full Resume ↗
        </a>
      </div>
    </div>

    <div id="projects" class="mt-8">
      <div class="text-center mb-6">
        <h1 class="text-2xl md:text-3xl font-bold text-primary-400">Projects</h1>
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
