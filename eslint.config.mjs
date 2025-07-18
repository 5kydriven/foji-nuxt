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
			'@stylistic/semi': 'off',
			'@stylistic/indent': 'off',
			'vue/attribute-hyphenation': 'off',
			'vue/v-on-event-hyphenation': 'off',
			'@stylistic/member-delimiter-style': 'off',
			'vue/html-self-closing': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'@stylistic/brace-style': 'off',
			'@stylistic/operator-linebreak': 'off',
			'@stylistic/indent-binary-ops': 'off',
		},
	},
);
