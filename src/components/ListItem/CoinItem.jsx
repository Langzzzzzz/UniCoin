import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  middleWrapper: {
    height: 48,
    width: "40%",
    alignItems: "center",
  },
  rightWrapper: {
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

const CoinItem = ({name, symbol, current_price, price_change_percentage_24h, sparkline_in_7d , image  }) => {

  const priceChangeColor = price_change_percentage_24h > 0 ? "#80BF3D"  : "#FE5050"
  function truncate(string, length){
    if (string.length > length)
        return string.substring(0,length)+'...';
    else
        return string;
};
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* LeftSide */}
        <View style={styles.leftWrapper}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{truncate(name, 8)}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>
        {/* <AreaChart
            style={{ height: '100%', width: "100%" }}
            data={sparkline_in_7d.price}
            curve={shape.curveNatural}
            // green: rgba(128, 190, 60, 0.8)
            // red: rgba(254, 80, 80, 0.8)
            svg={{ fill: 'rgba(128, 190, 60, 0.8)' }}
          >
          </AreaChart> */}
        {/* rightSide */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${current_price.toLocaleString('en-Us', {currency: "USD"})}</Text>
          <Text style={[styles.subtitle], { color: priceChangeColor }}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;