/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native'
import { AppStore } from './common/AppStore'

import { App1 } from './common/App1'
global.registerApp('app1', App1)

AppRegistry.registerComponent('AppStore', () => AppStore);
