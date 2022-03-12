import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PastPercentageChangeCard = ({priceChangePercentage24h,priceChangePercentage7d, priceChangePercentage14d, priceChangePercentage30d, priceChangePercentage1y}) => {
  return (
    <View>
      <Text>PastPercentageChangeCard</Text>
      <Text>{priceChangePercentage24h}</Text>
      <Text>{priceChangePercentage7d}</Text>
      <Text>{priceChangePercentage14d}</Text>
      <Text>{priceChangePercentage30d}</Text>
      <Text>{priceChangePercentage1y}</Text>

    </View>
  )
}

export default PastPercentageChangeCard

const styles = StyleSheet.create({})