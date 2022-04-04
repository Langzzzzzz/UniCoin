import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../../../firebase'
import { useNavigation } from '@react-navigation/native';

const PortofolioDetailScreen = () => {
  const navigation  = useNavigation();
  const handleSignout = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out!')
        navigation.navigate('PortofolioStack')
      })
      .catch(err => {
        console.log('Error signing out', err)
      })
  }

  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignout}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PortofolioDetailScreen

const styles = StyleSheet.create({})