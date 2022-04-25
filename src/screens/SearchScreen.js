import { View, Text, SafeAreaView, SectionList, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { getTrendCoin } from '../../services/cryptoService';
import TrendCoinCard from '../components/TrendCoinCard';
import { Divider } from 'react-native-elements';

const SearchScreen = () => {
  const [trendCoinData, setTrendCoinData] = useState([]);

  useEffect(() => {
    const fetchTrendCoin = async () => {
      const trendCoins = await getTrendCoin();
      setTrendCoinData(trendCoins);
    }

    fetchTrendCoin();
  }, []);

  return (
    <SafeAreaView style={{
      backgroundColor: 'white', flex: 1
    }}>
      <SearchBar
      />

      <View style={{ marginTop: 36}}>
        <Text style={{
          fontSize: 24,
          backgroundColor: "#fff", marginBottom: 12, marginHorizontal: 18
        }}>🔥 Trending Search</Text>
      </View>

      <View style={{
        margin: 8,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#f3f3f3',
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 4
      }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={trendCoinData}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TrendCoinCard
              id={item.id}
              name={item.name}
              symbol={item.symbol}
              small={item.small}
              rank={item.rank}
            />
          )}
          ItemSeparatorComponent={() => <Divider  style={{marginHorizontal: 16}}/> }
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen