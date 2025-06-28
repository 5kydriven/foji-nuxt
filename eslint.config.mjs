// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	// Your custom configs here
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@stylistic/no-tabs': 'off',
			'vue/html-indent': 'off',
			'vue/no-multiple-template-root': 'off',
		},
	},
);
