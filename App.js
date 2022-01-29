import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import Market from './src/screens/Market';


export default function App() {
  return (
   <SafeAreaView style={styles.container}>
    <Market />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});