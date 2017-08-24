import React from 'react'
import ReactNative from 'react-native'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import jsBundleCache from '../services/js-bundle-cache'

export default class AppContainer extends React.Component {
	state = {
		App: null
	}

	constructor({uri}) {
		super()
		this.uri = uri
	}

	async componentWillMount() {
		if(await jsBundleCache.isCached(this.uri)) {
			await this._fetchAndRunBundle()
		}
	}

	async _fetchAndRunBundle() {
		const js = await jsBundleCache.fetch(this.uri)
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
		return (
			<View style={styles.container}>
				<Text style={styles.prompt}>You have not downloaded this app yet.</Text>
				<Text style={styles.prompt}>Do you want to download it now?</Text>
				<TouchableOpacity
					onPress={this._fetchAndRunBundle.bind(this)}
					style={styles.download}>
					<Text>Download</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	prompt: {
		width: 300,
		textAlign: 'center',
	},
	download: {
		marginTop: 20,
		backgroundColor: 'whitesmoke',
		width: 120,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
	}
})
