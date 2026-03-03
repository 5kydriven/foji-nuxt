export default defineAppConfig({
	ui: {
		button: {
			slots: { base: 'cursor-pointer font-medium tracking-wide' },
		},
		navigationMenu: {
			slots: {},
			variants: {
				active: {
					false: {
						link: 'text-[#f7e8d0] hover:text-[#c7a46a]',
						childLink: [
							'hover:before:bg-elevated/50 text-default hover:text-highlighted',
							'transition-colors before:transition-colors',
						],
					},
				},
				highlight: {
					true: 'text-[#c7a46a]',
				},
			},
		},
	},
});
