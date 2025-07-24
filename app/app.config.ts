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
						link: 'text-black dark:text-white hover:text-red-500',
						childLink: [
							'hover:before:bg-elevated/50 text-default hover:text-highlighted',
							'transition-colors before:transition-colors',
						],
					},
				},
				highlight: {
					true: 'text-red-500',
				},
			},
		},
	},
});
