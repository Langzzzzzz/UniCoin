import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { getSearchCoinData } from '../../../services/cryptoService'
import { Divider } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

const SearchDetailScreen = ({ navigation, route }) => {
  const searchPhrase = route.params.searchPhrase.toLowerCase();
  const [coinData, setCoinData] = useState("");

  useEffect(() => {
    const fetchCoinData = async () => {
      const data = await getSearchCoinData(searchPhrase);
      setCoinData(data);
      console.log(data)
    }
    fetchCoinData();
  }, [])

  const priceChangeColor = coinData.priceChangePercentage24h > 0 ? "#80BF3D"  : "#FE5050"
  const changeIcon = coinData.priceChangePercentage24h > 0 ? "caretup"  : "caretdown"

  const {id,
    name,
    symbol,
    rank,
    image,
    description,
    links,
    currentPrice,
    ath,
    athChangePercentage,
    athDate,
    atl,
    atlChangePercentage,
    atlDate,
    marketCap,
    fullyDilutedValuation,
    priceChangePercentage24h,
    priceChangePercentage7d,
    priceChangePercentage14d,
    priceChangePercentage30d,
    priceChangePercentage1y,
    max_supply} = coinData

  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <View style={styles.itemWrapper}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => { navigation.goBack(); }}>
            <Feather name='arrow-left' size={30} color='#000' />
          </TouchableOpacity>
        </View>
        <View style={styles.middleWrapper}>
          <View style={styles.titleContainer}>
            <Image source={{ uri: coinData.image }} style={styles.image} />
            <Text style={styles.title}>{coinData.name} </Text>
            <Text style={{ color: "#808080", fontSize: 16, fontWeight: "600" }}>({symbol?.toUpperCase()})</Text>
          </View>
        </View>
      </View>

      <Divider width={0.5} style={{marginTop: 8, marginHorizontal: 6}}/>
      <View style={styles.currentPriceWrapper}>
        <Text style={styles.price}>${currentPrice?.toLocaleString('en-Us', {currency: "USD"})}</Text>
        <AntDesign name={changeIcon} size={16} color={priceChangeColor} style={{alignSelf: "center", paddingHorizontal:4}}/>
        <Text style={{ color: priceChangeColor, alignSelf: 'center', fontSize: 16 }}>{priceChangePercentage24h?.toFixed(2)}%</Text>
      </View>

      {/* chart */}

      {/* chart time frame */}

      {/* past change percentage */}

      {/* information card */}

    </SafeAreaView>
  )
}

export default SearchDetailScreen

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 8
  },
  navContainer: {
    alignItems: 'flex-start',
    marginLeft: 12,
    width: 30,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  middleWrapper:{
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
  },
  price:{
    fontSize: 36,
    fontWeight: "600"
  },
  currentPriceWrapper:{
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 8
  }

})