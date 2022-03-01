import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchDetailScreen = ({route}) => {
  const {searchPhrase} = route.params;
  return (
    <View>
      <Text>SearchDetailScreen</Text>
      <Text>{searchPhrase}</Text>
    </View>
  )
}

export default SearchDetailScreen

const styles = StyleSheet.create({})