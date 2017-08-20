import FileCache from 'react-native-filecache'

const App1 = require('../files/App1').App1

const apps = {
	App1
}

export default {
	async getAll() {
		return Object.keys(apps).map(name => ({
			name: name,
			nodeFactory: apps[name],
		}))
	}
}