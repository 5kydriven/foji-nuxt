export default defineAppConfig({
	ui: {
		button: {
			slots: { base: 'cursor-pointer' },
		},
		navigationMenu: {
			slots: {},
			variants: {
				active: {
					false: {
						link: 'text-white',
					},
				},
			},
		},
	},
});
