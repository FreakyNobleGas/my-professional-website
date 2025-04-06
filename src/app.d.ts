// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Card {
			years: string; // ex "2020 - 2025"
			company: string;
			title: string;
			description: string;
			technologies: string[];
		}
	}
}

export {};
