import React from 'react'
import { Text } from 'react-native'
import appRegister from '../services/app-register'

const App1 = () => <Text>This is App1, a sub-project.</Text>

appRegister.register('App1', App1)
