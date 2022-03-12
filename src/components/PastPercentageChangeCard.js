import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

const PastPercentageChangeCard = ({ priceChangePercentage24h, priceChangePercentage7d, priceChangePercentage14d, priceChangePercentage30d, priceChangePercentage1y }) => {
  
  const changeIcon24h = priceChangePercentage24h > 0 ? "caretup" : "caretdown"
  const priceChangeColor24h = priceChangePercentage24h > 0 ? "#80BF3D" : "#FE5050"
  const changeIcon7d = priceChangePercentage7d > 0 ? "caretup" : "caretdown"
  const priceChangeColor7d = priceChangePercentage7d > 0 ? "#80BF3D" : "#FE5050"
  const changeIcon14d = priceChangePercentage14d > 0 ? "caretup" : "caretdown"
  const priceChangeColor14d = priceChangePercentage14d > 0 ? "#80BF3D" : "#FE5050"
  const changeIcon30d = priceChangePercentage30d > 0 ? "caretup" : "caretdown"
  const priceChangeColor30d = priceChangePercentage30d > 0 ? "#80BF3D" : "#FE5050"
  const changeIcon1y = priceChangePercentage1y > 0 ? "caretup" : "caretdown"
  const priceChangeColor1y = priceChangePercentage1y > 0 ? "#80BF3D" : "#FE5050"
  
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>24H</Text>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>7D</Text>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>14D</Text>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>30D</Text>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>1Y</Text>
      </View>
      <Divider width={0.5} style={{ marginVertical: 8, marginHorizontal: 6 }} />
      <View style={[styles.upperContainer,{marginBottom: 4, paddingHorizontal: 4}]}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name={priceChangePercentage24h > 0 ? "caretup" : "caretdown"} size={8} color={priceChangePercentage24h > 0 ? "#80BF3D" : "#FE5050"} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
          <Text style={{color: priceChangePercentage24h > 0 ? "#80BF3D" : "#FE5050"}}>{Math.abs(priceChangePercentage24h?.toFixed(2))}%</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name={priceChangePercentage7d > 0 ? "caretup" : "caretdown"} size={8} color={priceChangePercentage7d > 0 ? "#80BF3D" : "#FE5050"} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
          <Text style={{color: priceChangePercentage7d > 0 ? "#80BF3D" : "#FE5050"}}>{Math.abs(priceChangePercentage7d?.toFixed(2))}%</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name={priceChangePercentage14d > 0 ? "caretup" : "caretdown"} size={8} color={priceChangePercentage14d > 0 ? "#80BF3D" : "#FE5050"} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
          <Text style={{color: priceChangePercentage14d > 0 ? "#80BF3D" : "#FE5050"}}>{Math.abs(priceChangePercentage14d?.toFixed(2))}%</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name={priceChangePercentage30d > 0 ? "caretup" : "caretdown"} size={8} color={priceChangePercentage30d > 0 ? "#80BF3D" : "#FE5050"} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
          <Text style={{color: priceChangePercentage30d > 0 ? "#80BF3D" : "#FE5050"}}>{Math.abs(priceChangePercentage30d?.toFixed(2))}%</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name={priceChangePercentage1y > 0 ? "caretup" : "caretdown"} size={8} color={priceChangePercentage1y > 0 ? "#80BF3D" : "#FE5050"} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
          <Text style={{color: priceChangePercentage1y > 0 ? "#80BF3D" : "#FE5050"}}>{Math.abs(priceChangePercentage1y?.toFixed(2))}%</Text>
        </View>
      </View>
    </View>

  )
}

export default PastPercentageChangeCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7F8',
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowOffset: {
      height: 4,
      width: 4
    }
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})