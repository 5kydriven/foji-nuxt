// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/ui', '@nuxt/eslint', 'motion-v/nuxt', '@nuxtjs/supabase'],
	pages: {
		pattern: ['**/*.vue', '!**/components/**'],
	},
	components: [
		'~/components',
		{
			path: '~/pages',
			pattern: '**/components/**',
			pathPrefix: false,
		},
	],
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			supabaseUrl: process.env.SUPABASE_URL,
			supabaseKey: process.env.SUPABASE_KEY,
		},
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
