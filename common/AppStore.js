import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeRouter, Link, Route } from 'react-router-native'
import appRegister from '../services/app-register'
import { Home } from './Home'

export class AppStore extends React.Component {
  state = {
    apps: []
  }

  async componentWillMount() {
    const apps = await appRegister.getAll()
    this.setState({apps})
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.center}>
          <View>
            <Link to="/">
              <Text>Home</Text>
            </Link>
            {
              this.state.apps.map(({name}) => 
                <Link to={`/${name}`} key={name}>
                  <Text>{name}</Text>
                </Link>
              )
            }
          </View>

          <View>
            <Route exact path="/" component={Home}/>
            {
              this.state.apps.map(({name, nodeFactory}) =>
                <Route path={`/${name}`} component={nodeFactory} key={name}/> 
              )
            }
          </View>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})