// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	modules: ['@nuxt/ui', '@nuxt/eslint'],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	future: {
		compatibilityVersion: 4,
	},
	typescript: {
		typeCheck: true,
		strict: true,
	},
	eslint: {
		config: {
			stylistic: true,
		},
	},
});
