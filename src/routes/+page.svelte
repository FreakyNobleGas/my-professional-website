<script lang="ts">
  const sections = ["About", "Experience", "Projects"];
</script>

<div class="flex flex-row font-mono h-screen gap-x-2">
    <div class="basis-1/2 place-content-center">
      <!-- 
        items-start => Aligns text to the left
        space-y-4 => Spaces children vertically
        place-content-center => Aligns content vertically
      -->
      <div class="flex flex-col space-y-4 items-start ml-6">
        <h1 class="text-3xl font-bold">Nick Quinn</h1>
        <h2>Full Stack Engineer</h2>
        <p class="text-sm">Dedicated and creative full stack software engineer, with experience working in a fast 
            paced Agile environment delivering on critical business requirements.</p>
        {#each sections as section}
          <div class="flex flex-row gap-x-2 items-center">
            <hr class="bg-slate-600 w-12 border-t-1"/>
            <p>{section}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="basis-1/2 space-y-4 text-sm align-middle place-content-center">
        <p>
            Hi there! I’m a full stack software engineer with extensive experience working across the 
            entire stack. Currently, I work at Fidelity Labs, a dynamic and fast-paced environment within 
            Fidelity Investments that operates much like a startup. My professional toolkit includes a 
            strong proficiency in Python and AWS, along with significant experience in Ruby on Rails and 
            Web Components using TypeScript.
        </p>

        <p>
            Programming isn’t just my job—it’s also my hobby. I love automating tasks with Python and diving
            into projects that challenge my creativity. When I’m not coding, you’ll likely find me immersed
            in a video game with a captivating story or out running.
        </p>

        <p>
            I hold a Bachelor of Science in Computer Science with a minor in Bioinformatics. My approach to 
            programming is driven by a passion for creativity and innovation. I enjoy thinking outside the 
            box and crafting unique solutions before turning to existing ones. Above all, I believe in 
            having fun and making the most out of every challenge.
        </p>
    </div>

</div>

<style lang="postcss">
  @reference "tailwindcss";
</style>