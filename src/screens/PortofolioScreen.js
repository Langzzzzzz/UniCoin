import { View, Text, SafeAreaView, Button, Alert } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"

const PortofolioScreen = () => {
  return (
    <SafeAreaView style={{flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems:'center'}}
      >
      <LottieView 
        style={{height: 200 }} 
        source={require("../../assets/ login_image_white.json")}
        autoPlay
        speed={1}
        loop={true}
      />
        <Text>PortofolioScreen</Text>
        <Button 
          title="Sign Up"
          onPress={()=>Alert.alert("Sign Up button clicked")}
        />
        <Button 
          title="Log In"
          onPress={()=>Alert.alert("Log In button clicked")}
        />
    </SafeAreaView>
    
  )
}

export default PortofolioScreen