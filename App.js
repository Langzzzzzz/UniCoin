import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import CoinItem from './src/components/ListItem/CoinItem';
import data from './assets/data/cryptoCurrency.json';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
    <FlatList 
      keyExtractor={(item) => item.id}
      data={data}
      renderItem = {({item}) => (
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
}

const styles = StyleSheet.create({
  // whiteContainer: {
  //   backgroundColor: '#fff',
  //   flexDirection:"row"
  // },
  // nameContainer:{
  //   flexDirection: "column",
  // },
  // text:{
  //   fontSize: 16,
  //   fontWeight:"bold",
  // },

  container:{
    flex: 1,
  },
});