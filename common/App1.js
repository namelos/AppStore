import React from 'react'
import { Text } from 'react-native'

const App1 = () => <Text>This is App1, a sub-project.</Text>

global.registerApp('App1', App1)

