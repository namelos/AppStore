const App1 = require('../files/App1').App1

const apps = {
	App1
}

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