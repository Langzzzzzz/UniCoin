import { ScrollView, FlatList, Text, SafeAreaView } from 'react-native';
import React from 'react';
import CoinItem from '../components/ListItem/CoinItem';
import CardItem from '../components/ListItem/CardItem';
import DATA from '../../assets/data/cryptoCurrency.json'

const MarketScreen = () => {
  return (
      <SafeAreaView style={{backgroundColor: 'white'}}>
      <Text style={{marginLeft: 8, fontSize: 36, }}>Welcome</Text>
        <ScrollView 
        style={{marginHorizontal: 8}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
          >
            <CardItem title="24h Volume" data="$1,931,180,572,622" />
            <CardItem title="24h Volume" data="$1,931,180,572,622" />
            <CardItem title="24h Volume" data="$1,931,180,572,622" />
        </ScrollView>

        <FlatList
          keyExtractor={(item) => item.id}
          data={DATA}
          renderItem={({ item }) => (
            <CoinItem
              name={item.name}
              symbol={item.symbol}
              current_price={item.current_price}
              price_change_percentage_24h={item.price_change_percentage_24h}
              sparkline_in_7d={item.sparkline_in_7d}
              image={item.image}
            />
          )}
        />
    </SafeAreaView>
  );
};

export default MarketScreen;
