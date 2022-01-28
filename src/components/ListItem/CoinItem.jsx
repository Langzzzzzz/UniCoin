import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    fontSize: 16,
    fontWeight: "bold",
  },
  text:{
    marginRight:5,
  },
  coinContainer:{
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    padding: 12,
    justifyContent: 'space-between',
  },
  percentageChangeContainer:{
    flexDirection: 'row',
    backgroundColor: 'green',
    opacity: 0.5,
    paddingHorizontal: 5,
    borderRadius: 5,
  }
});

const CoinItem = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  return (
    <View style={styles.coinContainer}>
      <Image source={{uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'}} 
      style={{height:28, width:28, marginHorizontal: 10, alignSelf: "center"}} /> 
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.text}>BTC</Text>
        </View>
      </View>
        <AreaChart
                  style={{height:'100%', width: '40%', paddingLeft: 30}}
                  data={data}
                  curve={shape.curveNatural}
                  // green: rgba(128, 190, 60, 0.8)
                  // red: rgba(254, 80, 80, 0.8)
                  svg={{ fill: 'rgba(128, 190, 60, 0.8)' }}
              >
        </AreaChart>
      <View style={{marginLeft: 'auto'}}>
          <Text style={styles.title}>36,000</Text>
          <View style={styles.percentageChangeContainer}>
            <AntDesign name="caretdown" size={12} color="black" style={{alignSelf:'center',paddingRight: 3}}/>
            <Text style={styles.text}>0,63%</Text>
          </View>
      </View>
     </View>
  );
};

export default CoinItem;
