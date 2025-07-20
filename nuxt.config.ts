// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@nuxt/eslint',
		'motion-v/nuxt',
		'@nuxtjs/supabase',
		'@nuxt/image',
		'@pinia/nuxt',
		'@nuxtjs/i18n',
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
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	ui: {},
	runtimeConfig: {
		public: {
			supabaseUrl: process.env.SUPABASE_URL,
			// supabaseKey: process.env.SUPABASE_KEY,
			supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
		},
	},
	routeRules: {
		'/': { prerender: true },
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
	i18n: {
		defaultLocale: 'en',
		locales: [
			{
				code: 'en',
				name: 'English',
				file: 'en.json',
			},
			{
				code: 'ja',
				name: '日本語',
			},
		],
	},
	supabase: {
		redirect: false,
	},
});
