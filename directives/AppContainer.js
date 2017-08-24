import React from 'react'
import ReactNative from 'react-native'
import { View } from 'react-native'
import jsBundleProvider from '../services/js-bundle-provider'

export default class AppContainer extends React.Component {
	state = {
		App: null
	}

	constructor({uri}) {
		super()
		this.uri = uri
	}

	async componentWillMount() {
		const js = await jsBundleProvider.getByUri(this.uri)
		const appRoot = eval(js)({ React, ReactNative })
		this.setState({
			App: () => appRoot
		})
	}

	render() {
		const { App } = this.state

		if (App) {
			return <App />
		}
		return <View />
	}
}
