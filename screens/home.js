import React from 'react'
import { View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
  function pressHandler() {
    navigation.navigate('ReviewDetails')
    // navigation.push('ReviewDetails')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Go to review details' onPress={pressHandler} />
    </View>
  )
}
