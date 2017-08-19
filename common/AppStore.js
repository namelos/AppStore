import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { NativeRouter, Link, Route } from 'react-router-native'

const Home = () => <Text>Welcome to AppStore.</Text>

const apps = {}

export const registerApp = (name, comp) => apps[name] = comp

export const AppStore = () => <NativeRouter>
  <View style={styles.center}>
    <View>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      { Object.keys(apps).map(app =>
        <Link to={`/${app}`} key={app}>
          <Text>{app}</Text>
        </Link>) }
    </View>

    <View>
      <Route exact path="/" component={Home}/>
      { Object.keys(apps).map(app =>
        <Route path={`/${app}`} component={apps[app]} key={app}/>) }
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