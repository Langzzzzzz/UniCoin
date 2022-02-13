import { ScrollView, FlatList, Text, SafeAreaView, View, StyleSheet } from 'react-native';
import React, { useRef, useMemo, useState } from 'react';
import CoinItem from '../components/ListItem/CoinItem';
import CardItem from '../components/ListItem/CardItem';
import Chart from '../components/Chart'
import DATA from '../../assets/data/cryptoCurrency.json'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const styles = StyleSheet.create ({
  bottomSheet:{
    shadowColor: '#000',
    shadowOffset:{
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

  const [selectedCoinData, setSelectedCoinData] = useState(null);
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '90%'], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current?.present();
  }
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <Text style={{ marginLeft: 8, fontSize: 36, }}>Welcome</Text>
        <ScrollView
          style={{ marginHorizontal: 8 }}
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
              onPress={() => openModal(item)}
            />
          )}
        />
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
            sparkline_in_7d={selectedCoinData.sparkline_in_7d.price}
            image={selectedCoinData.image}
            />) : null
        }
        
      </BottomSheetModal>
    </BottomSheetModalProvider>

  );
};

export default MarketScreen;
