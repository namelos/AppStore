import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const AppStore = () => <View style={styles.center}>
  <Text>Hello world!</Text>
</View>

const styles = StyleSheet.create({
  center: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})