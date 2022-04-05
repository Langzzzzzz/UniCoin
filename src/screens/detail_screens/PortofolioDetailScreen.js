import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomSwitch from '../../components/CustomSwitch';

const PortofolioDetailScreen = () => {
  const navigation = useNavigation();

  const [dataTab, setDataTab] = useState(1);

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
            <Text style={{ color: "#808080", fontSize: 16, fontWeight: "600" }}>        {auth.currentUser?.email}</Text>
          </View>
        </View>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={handleSignout}>
            <Ionicons name="exit-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <CustomSwitch selectionMode={1} option1="Watchlist" option2="Portofolio" onSelectSwitch={onSelectSwitch} />
      </View>
      {/* Watchlist */}
      {
        dataTab == 1 &&
        <ScrollView>
          <Text> tab 1</Text>
        </ScrollView>}
      {/* Portofolio */}
      {
        dataTab == 2 &&
        <Text>tab 2</Text>
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
})