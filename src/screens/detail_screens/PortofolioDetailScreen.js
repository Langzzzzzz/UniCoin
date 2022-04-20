import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomSwitch from '../../components/CustomSwitch';
import PotofolioCard from '../../components/PotofolioCard';
import { db } from '../../../firebase';
import { collection, onSnapshot, getDoc, where, doc } from 'firebase/firestore';
import Watchlist from '../../components/Watchlist';
import Portofoliolist from '../../components/Portofoliolist';

const PortofolioDetailScreen = () => {
  const navigation = useNavigation();

  const [dataTab, setDataTab] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    // const fetchMarketData = async () => {
      // await getDoc(docRef)
      //   .then((doc) => {
      //     console.log(doc.data());
      //     setData(doc.data());
      //   })
      const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
        setData(querySnapshot.data());
      })
      return () => unsubscribe();
    // }
    // fetchMarketData();
  }, []);


  const onSelectSwitch = (value) => {
    setDataTab(value)
  }

  const handleSignout = () => {
    auth.signOut()
      .then(() => {
        Alert.alert('Sign out', 'Are you sure you want Sign Out?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Yes', onPress: () => { console.log('User signed out!'); navigation.navigate('PortofolioStack'); } },
        ]);
      })
      .catch(err => {
        console.log('Error signing out', err)
      })
  }

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.itemWrapper}>
        <View style={styles.middleWrapper}>
          <View style={styles.titleContainer}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>        {data?.username}'s Portfolio</Text>
          </View>
        </View>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={handleSignout}>
            <Ionicons name="exit-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <CustomSwitch selectionMode={1} option1="Watchlist" option2="Portfolio" onSelectSwitch={onSelectSwitch} />
      </View>
      {/* Watchlist */}
      {
        dataTab == 1 &&
        <>
          {/* watchlist coin list */}
          <Watchlist WatchlistData={data?.watchlist} />
          {/* add button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CoinDetail")} >
              <Text style={styles.buttonText}>Add Coin to Watchlist</Text>
            </TouchableOpacity>
          </View>
        </>}
      {/* Portofolio */}
      {
        dataTab == 2 &&
        <>
          <Portofoliolist PortofoliolistData={data?.portfolio}/>
          {/* add button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CoinDetail")}>
              <Text style={styles.buttonText}>Add Coin to Portofolio List</Text>
            </TouchableOpacity>
          </View>


        </>
      }
    </SafeAreaView>
  )
}

export default PortofolioDetailScreen

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
  },
  navContainer: {
    alignItems: 'flex-start',
    marginLeft: 12,
    width: 30,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  middleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  button: {
    backgroundColor: "#5F84E8",
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 8
  }
})