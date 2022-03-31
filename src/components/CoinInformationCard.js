import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoinInformationCard = ({links, description}) => {

  return (
    <ScrollView>
        <Text style={{margin: 8, fontSize: 18, fontWeight: "600"}}>Description</Text>
      <Text style={{margin: 8, fontSize: 16}}>{description}</Text>
    </ScrollView>
  )
}

export default CoinInformationCard

const styles = StyleSheet.create({})