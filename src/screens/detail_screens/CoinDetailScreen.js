import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, addons } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/Signup/CustomInput';
import { auth } from '../../../firebase'
import { db } from '../../../firebase';
import { collection, onSnapshot, getDoc, where, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const CoinDetailScreen = () => {
  const navigation = useNavigation();

  const [coinID, setCoinID] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("0");
  const [totalSpent, setTotalSpent] = useState();

  useEffect(() => {
    setTotalSpent(Number(number) * Number(price));
  }, [price, number])

  const onAdd = () => {
    if (coinID) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      if (Number(number) > 0) {
        updateDoc(docRef, {
          portfolio: arrayUnion({ coinID: coinID, priceNumberPair: [Number(price), Number(number)] })
        })
      }
      updateDoc(docRef, {
        watchlist: arrayUnion(coinID)
      })
        .then(() => {
          navigation.goBack()
          console.log("success")
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
  const onCancel = () => {
    setCoinID("");
    setPrice("");
    setNumber("");
  }

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Text style={styles.subtitle}>Coin ID</Text>
      <CustomInput placeholder="Coin ID" value={coinID} setValue={setCoinID} />
      <Text style={styles.subtitle}>Price per Coin</Text>
      <CustomInput placeholder="Price per Coin" value={price} setValue={setPrice} prefix={<Text style={{
        paddingHorizontal: 5,
        fontWeight: 'bold',
        color: 'black'
      }}>$CAD</Text>} />
      <Text style={styles.subtitle}>Number</Text>
      <CustomInput placeholder="Number" value={number} setValue={setNumber} />
      <Text style={styles.subtitle}>Total Spent</Text>
      <Text style={styles.subtitle}>{totalSpent}</Text>
      <TouchableOpacity
        style={[styles.button, { marginVertical: 8 }]}
        onPress={() => onAdd()} >
        <Text style={[styles.buttonText]}>ADD to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { marginVertical: 8, backgroundColor: '#fff', borderColor: '#8b8c89', borderWidth: 1 }]}
        onPress={() => onCancel()} >
        <Text style={[styles.buttonText, { color: "black" }]}>CANCEL</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CoinDetailScreen

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#98c259",
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})