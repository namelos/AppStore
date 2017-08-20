const apps = {}

export default {
	register(name, comp) {
		apps[name] = comp
	},
	get all() {
		return Object.keys(apps).map(name => ({
			name: name,
			nodeFactory: apps[name],
		}))
	}
}