// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@nuxt/eslint',
		'motion-v/nuxt',
		'@nuxtjs/supabase',
		'@nuxt/image',
		'@pinia/nuxt',
	],
	pages: {
		pattern: ['**/*.vue', '!**/_components/**'],
	},
	components: [
		'~/components',
		{
			path: '~/pages',
			pattern: '**/_components/**',
			pathPrefix: false,
		},
	],
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	ui: {
		colorMode: false,
	},
	runtimeConfig: {
		public: {
			supabaseUrl: process.env.SUPABASE_URL,
			supabaseKey: process.env.SUPABASE_KEY,
		},
	},
	routeRules: {
		'/': { prerender: true },
		'/admin/**': { ssr: false },
	},
	future: {
		compatibilityVersion: 4,
	},
	compatibilityDate: '2025-05-15',
	typescript: {
		typeCheck: true,
		strict: true,
	},
	eslint: {
		config: {
			stylistic: true,
		},
	},
	supabase: {
		redirect: false,
	},
});
