import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeRouter, Link, Route } from 'react-router-native'
import appRegister from '../services/app-register'

const Home = () => <Text>Welcome to AppStore.</Text>

export const AppStore = () => <NativeRouter>
  <View style={styles.center}>
    <View>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      {
        appRegister.all.map(({name}) => 
          <Link to={`/${name}`} key={name}>
            <Text>{name}</Text>
          </Link>
        )
      }
    </View>

    <View>
      <Route exact path="/" component={Home}/>
      {
        appRegister.all.map(({name, nodeFactory}) =>
          <Route path={`/${name}`} component={nodeFactory} key={name}/> 
        )
      }
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