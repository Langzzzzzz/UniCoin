import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CoinDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
       <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <Text>goBack Buton</Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CoinDetailScreen

const styles = StyleSheet.create({})