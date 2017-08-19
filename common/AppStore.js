import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { NativeRouter, Link, Route } from 'react-router-native'

const Home = () => <Text>Welcome to AppStore.</Text>
const App1 = () => <Text>This is App1, a sub-project.</Text>

const apps = {
  '/app1': App1
}

export const AppStore = () => <NativeRouter>
  <View style={styles.center}>
    <View>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/app1">
        <Text>App1</Text>
      </Link>
    </View>

    <View>
      <Route exact path="/" component={Home}/>
      { Object.keys(apps).map(key =>
        <Route path={key} component={apps[key]} key={key}/>) }
    </View>
  </View>
</NativeRouter>

const styles = StyleSheet.create({
  center: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})