export const state = () => ({
	tools: [
		{
			name: 'Travellya',
			image: 'travellya.png',
			description: 'A landing page for trip planner website.',
		},
		{
			name: 'Hellow',
			image: 'hellow.png',
			description: 'A landing page for horror escape room website.',
		},
		{
			name: 'Lovella',
			image: 'lovella.png',
			description: 'A landing page for wedding organizer website.',
		},
		{
			name: 'Dream House',
			image: 'dreamhouse.png',
			description: 'A landing page for real estate website.',
		},
		{
			name: 'Aurastyle',
			image: 'aurastyle.png',
			description: 'A landing page for fashion website.',
		},
	],
})

export const getters = {
	get(state) {
		return state.tools
	}
}