import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoinInformationCard = ({links, description}) => {
    // for (let key in links) {
    //     if (links.hasOwnProperty(key)) {
    //         let value = links[key];
    //         console.log(key, value);
    //     }
    // }

  return (
    <View>
        <Text style={{margin: 8, fontSize: 18, fontWeight: "600"}}>Description</Text>
      <Text style={{margin: 8, fontSize: 16}}>{description}</Text>
    </View>
  )
}

export default CoinInformationCard

const styles = StyleSheet.create({})