import React from 'react'
import Apps from './app-registry'
import AppContainer from './AppContainer'

export default {
	async getAll() {
		return Apps
			.map(({name, uri}) => ({
				name: name,
				appRoot: () => <AppContainer uri={uri} />
			}))
	}
}