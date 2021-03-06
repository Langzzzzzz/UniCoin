import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, SafeAreaView, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/Signup/CustomInput'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword, } from 'firebase/auth';

const LoginDetailScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [isSignedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('PortofolioDetail');
      }
    })

    return unsubscribe
  }, [])

  function onLoginPress() {
    console.log("Login button ; " + username + " ; " + password);
    signInWithEmailAndPassword(auth, username, password)
      .then((res) => { console.log(res); setSignedIn(true); })
      .catch((err) => { Alert.alert("Error", "Please try again", [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]); })
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => { navigation.goBack(); }}>
          <Feather name='arrow-left' size={30} color='#000' />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../../assets/Logo.png')} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <Text style={styles.title}>Welcome back!</Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.subtitle}>Email Address</Text>
        <CustomInput placeholder="email@example.com" value={username} setValue={setUsername} />
        <Text style={styles.subtitle}>Password</Text>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <TouchableOpacity
          style={[styles.button, { marginVertical: 8 }]}
          onPress={onLoginPress} >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginDetailScreen

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 4,
  },
  button: {
    backgroundColor: "#5F84E8",
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
  itemWrapper: {
    flexDirection: 'row',
  },
  navContainer: {
    alignItems: 'flex-start',
    marginLeft: 12,
    width: 30,
  },
})