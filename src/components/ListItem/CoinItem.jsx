import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape'
import { AntDesign } from '@expo/vector-icons';

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
    flex:1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  middleWrapper: {
    flex:1,
    height:"100%",
    marginLeft: 30,
  },
  rightWrapper: {
    flex:1,
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

const CoinItem = ({name, symbol, current_price, price_change_percentage_24h, sparkline_in_7d , image, onPress }) => {

  const priceChangeColor = price_change_percentage_24h > 0 ? "#80BF3D"  : "#FE5050"
  const chartColor = price_change_percentage_24h > 0 ? 'rgba(128, 190, 60, 0.8)'  : 'rgba(254, 80, 80, 0.8)'
  const changeIcon = price_change_percentage_24h > 0 ? "caretup"  : "caretdown"
  const price = [5, 10, 30, 40, 50, 120, 80]
  function truncate(string, length){
    if (string.length > length)
        return string.substring(0,length)+'...';
    else
        return string;
  };
  return (
    <TouchableOpacity onPress={onPress}>
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
          <AreaChart
              style={{ height: '100%', width: "100%" }}
              data={price}
              curve={shape.curveNatural}
              // green: rgba(128, 190, 60, 0.8)
              // red: rgba(254, 80, 80, 0.8)
              svg={{ fill: chartColor }}
            >
            </AreaChart>
        </View>
        
        {/* rightSide */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${current_price.toLocaleString('en-Us', {currency: "USD"})}</Text>
          <View style={{flexDirection:"row"}}>
            <AntDesign name={changeIcon} size={12} color={priceChangeColor} style={{alignSelf: "center", paddingHorizontal:4}}/>
            <Text style={[styles.subtitle], { color: priceChangeColor }}>{price_change_percentage_24h.toFixed(2)}%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;