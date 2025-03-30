<script lang="ts">
	const sections = ['About', 'Experience', 'Projects'];

  // TODO REMOVE
  const times = Array.from({ length: 50 });
</script>

<!-- 
    items-start => Aligns text to the left
    space-y-4 => Spaces children vertically
    place-content-center => Aligns content vertically
    md:<some-property> => Only apply on larger screens
-->

<div class="flex flex-col md:flex-row font-mono gap-x-2">
	<!-- 
    Left Side 
  -->
	<div class="basis-1/3">
      <div class="static md:sticky top-32">
			<div class="space-y-4 items">
				<h2 class="h2">Nick Quinn</h2>
				<h4 class="h4">Full Stack Engineer</h4>
			</div>
      <!-- 
        Page Sections
      -->
			<div class="mt-8">
				{#each sections as section}
					<div class="flex flex-row gap-x-2 items-center">
						<hr class="bg-slate-600 w-12 border-t-1" />
						<p>{section}</p>
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
	<div class="basis-2/3 space-y-4 text-sm align-middle place-content-center font-thin">
		<p>
			Hi there! I’m a full stack software engineer with extensive experience working across the
			entire stack. Currently, I work at Fidelity Labs, a dynamic and fast-paced environment within
			Fidelity Investments that operates much like a startup. My professional toolkit includes a
			strong proficiency in Python and AWS, along with significant experience in Ruby on Rails and
			Web Components using TypeScript.
		</p>

		<p>
			Programming isn’t just my job—it’s also my hobby. I love automating tasks with Python and
			diving into projects that challenge my creativity. When I’m not coding, you’ll likely find me
			immersed in a video game with a captivating story or out running.
		</p>

		<p>
			I hold a Bachelor of Science in Computer Science with a minor in Bioinformatics. My approach
			to programming is driven by a passion for creativity and innovation. I enjoy thinking outside
			the box and crafting unique solutions before turning to existing ones. Above all, I believe in
			having fun and making the most out of every challenge.
		</p>
    <!-- TODO REMOVE -->
    {#each times as _, index}
        <p>Loop iteration {index + 1}</p>
    {/each}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
