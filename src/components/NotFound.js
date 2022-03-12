import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'

const NotFound = ({navigation}) => {
  return (
    <>
    <View style={styles.itemWrapper}>
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => { navigation.goBack(); }}>
              <Feather name='arrow-left' size={30} color='#000' />
            </TouchableOpacity>
          </View>
      </View>

    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Image source={require('../../assets/Page_not_found.png')} style={{height: 350, width: 350}} />
      <Text style={{fontSize: 18, fontWeight: "400"}}>Not Results</Text>
    </View>
    </>
  )
}

export default NotFound

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
  },

  navContainer: {
    alignItems: 'flex-start',
    marginLeft: 12,
    width: 30,
  },
})