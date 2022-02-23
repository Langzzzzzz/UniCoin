import { View, StyleSheet, Text, SafeAreaView, Pressable, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"

const styles = StyleSheet.create({
  buttonContainer: {
    width: '60%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 40,
  },
  button: {
    backgroundColor: "#5F84E8",
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems:'center'
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#5F84E8',
    borderWidth: 2
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#5F84E8',
    fontWeight: '700',
    fontSize: 16,
  }

});

const PortofolioScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <LottieView
        style={{ height: 200 }}
        source={require("../../assets/login_image_white.json")}
        autoPlay
        speed={1}
        loop={true}
      />
      <Text style={{fontSize: 18, fontWeight:'700', margin:14 }}>Start your Crypto Protofolio Now</Text>
      <Text style={{fontSize: 14, fontWeight:'400', marginBottom: 8}}>🚀 Set up customize watchlist</Text>
      <Text style={{fontSize: 14, fontWeight:'400', marginBottom: 4}}>🌕 Manage your crypto investments</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignupDetail')} >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={() => navigation.navigate('LoginDetail')} >
          <Text style={styles.buttonOutlineText}>Log In</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>

  )
}

export default PortofolioScreen