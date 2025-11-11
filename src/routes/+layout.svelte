<script lang="ts">
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import "../app.css";

    let { children } = $props();

    injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>
  {@render children()}