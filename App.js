import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import CoinItem from './src/components/ListItem/CoinItem';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
    <CoinItem />

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