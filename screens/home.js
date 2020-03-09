import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'Lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      raintg: 4,
      body: 'Lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'Lorem ipsum',
      key: '3',
    },
  ])

  function renderItem({ item }) {
    function pressHandler() {
      navigation.navigate('ReviewDetails', item)
    }

    return (
      <TouchableOpacity onPress={pressHandler}>
        <Text style={globalStyles.titleText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={globalStyles.container}>
      <FlatList data={reviews} renderItem={renderItem} />
    </View>
  )
}
