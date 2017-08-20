import jsBundleProvider from './js-bundle-provider'
import React from 'react'
import ReactNative from 'react-native'

const apps = []

export default {
	async getAll() {
		const bundles = await jsBundleProvider.getAll()

		return bundles
			.map(({name, js}) => ({
				name: name,
				appRoot: () => eval(js)({ React, ReactNative })
			}))
	}
}