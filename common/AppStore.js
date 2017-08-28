import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeRouter, Link, Route } from 'react-router-native'
import appProvider from '../services/app-provider'
import { Home } from './Home'

export class AppStore extends React.Component {
  state = {
    apps: []
  }

  async componentWillMount() {
    const apps = await appProvider.getAll()
    this.setState({apps})
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.navigation}>
            <Link style={styles.navigation_link} to="/">
              <Text>Home</Text>
            </Link>
            {
              this.state.apps.map(({name}) =>
                <Link style={styles.navigation_link} to={`/${name}`} key={name}>
                  <Text>{name}</Text>
                </Link>
              )
            }
          </View>

          <View style={styles.center}>
            <Route exact path="/" component={Home}/>
            {
              this.state.apps.map(({name, appRoot}) =>
                <Route path={`/${name}`} component={appRoot} key={name}/>
              )
            }
          </View>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 20,
  },
  navigation_link: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    borderRightColor: 'lightgray',
    borderRightWidth: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
