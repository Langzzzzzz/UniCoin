import { ScrollView, FlatList, Text, SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import React, { useRef, useMemo, useState, useEffect } from 'react';
import CoinItem from '../components/ListItem/CoinItem';
import CardItem from '../components/ListItem/CardItem';
import Chart from '../components/Chart'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { getMarketData } from '../../services/cryptoService';

const styles = StyleSheet.create({
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  }
})
const MarketScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }
    fetchMarketData();
  }, [])

  // ref
  const bottomSheetModalRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  }

  const handleRefresh = async () => {
    setRefreshing(true);
    const marketData = await getMarketData();
    setData(marketData);
    setRefreshing(false);
  }

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <Text style={{ marginLeft: 16, fontSize: 32, fontWeight: '800' }}>Market</Text>
        <View style={{marginBottom: 80}}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            onRefresh={handleRefresh}
            refreshing={refreshing}
            renderItem={({ item }) => (
              <CoinItem
                name={item.name}
                symbol={item.symbol}
                current_price={item.current_price}
                price_change_percentage_24h={item.price_change_percentage_24h}
                sparkline_in_7d={item.sparkline_in_7d}
                image={item.image}
                onPress={() => openModal(item)}
              />
            )}
          />
        </View>

      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        {
          selectedCoinData ? (<Chart
            symbol={selectedCoinData.symbol}
            name={selectedCoinData.name}
            current_price={selectedCoinData.current_price}
            price_change_percentage_24h={selectedCoinData.price_change_percentage_24h}
            sparkline_in_7d={selectedCoinData.sparkline_in_7d}
            image={selectedCoinData.image}
          />) : null
        }

      </BottomSheetModal>
    </BottomSheetModalProvider>

  );
};

export default MarketScreen;
