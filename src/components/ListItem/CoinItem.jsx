import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AreaChart, LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, setDoc, doc} from "firebase/firestore";
import { db } from '../../../firebase'
const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },
  image: {
    height: 48,
    width: 48,
  },
  middleWrapper: {
    flex: 1,
    height: "70%",
    marginLeft: 30,
    paddingLeft: 8
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end"
  },
  titleWrapper: {
    marginLeft: 8,
  },

  title: {
    fontSize: 18
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: "#A9ABB1"
  },

});

const formatPriceData = (price, change) => {
  let formattedData = [];
  let interval = Math.floor(price.length / 7)
  let sum = 0;
  for (let i = 0; i < 7; i++) {
    formattedData.push(price[i * interval].y)
    sum += price[i * interval].y
  }
  let temp;
  if (change <= 0) {
    temp = Math.max.apply(Math, formattedData) - 1;
  } else {
    temp = Math.min.apply(Math, formattedData) + 1;
  }

  for (let i = 0; i < formattedData.length; i++) {
    formattedData[i] = formattedData[i] - temp;
  }


  return formattedData;
}

const CoinItem = ({ id, name, symbol, current_price, price_change_percentage_24h, sparkline_in_7d, image, onPress }) => {
  const navigation = useNavigation();

  const priceChangeColor = price_change_percentage_24h > 0 ? "#80BF3D" : "#FE5050"
  const chartColor = price_change_percentage_24h > 0 ? 'rgba(128, 190, 60, 0.8)' : 'rgba(254, 80, 80, 0.8)'
  const changeIcon = price_change_percentage_24h > 0 ? "caretup" : "caretdown"

  const formattedData = formatPriceData(sparkline_in_7d.price, price_change_percentage_24h);

  //console.log(formattedData)
  // useEffect(() => {
  //   setDoc(doc(db, "coins", name), {
  //     id: id,
  //     symbol: symbol,
  // })}, [])
  function truncate(string, length) {
    if (string.length > length)
      return string.substring(0, length) + '...';
    else
      return string;
  };
  function onLongPress() {
    console.log(id)
    navigation.navigate('MarketDetail',{
      searchPhrase:id
    });
  }
  
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.itemWrapper}>
        {/* LeftSide */}
        <View style={styles.leftWrapper}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{truncate(name, 8)}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.middleWrapper}>
          <LineChart
            style={{ height: '100%', width: "100%" }}
            data={formattedData}
            curve={shape.curveNatural}
            svg={{ stroke: chartColor, strokeWidth: 1.7 }}
            contentInset={{ top: 3, bottom: 3 }}
          >

          </LineChart>
        </View>

        {/* rightSide */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${current_price.toLocaleString('en-Us', { currency: "USD" })}</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name={changeIcon} size={12} color={priceChangeColor} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
            <Text style={[styles.subtitle], { color: priceChangeColor }}>{price_change_percentage_24h.toFixed(2)}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;