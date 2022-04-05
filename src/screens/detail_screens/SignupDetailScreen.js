import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/Signup/CustomInput'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { auth } from '../../../firebase';
import { db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, setDoc, doc} from "firebase/firestore";

const SignupDetailScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSignUpPress() {
    console.log("Singup button ; " + username + " ; " + password);
    createUserWithEmailAndPassword(auth, username, password)
      .then((res) => {
        console.log(res);
        navigation.navigate('PortofolioDetail');
        setDoc(doc(db, "users", res.user.uid), {
          username: res.user.email,
        })
      })
      .catch((err) => {
        let title = '';
        let message = '';
        console.log(typeof (err.message));
        console.log(err.message);
        if (err.message=== "Firebase: Error (auth/email-already-in-use).") {
          title = "Email already in use";
          message = "The email address is already in use by another account.";
        }
        else if (err.message === "Firebase: Error (auth/invalid-email).") {
          title = "Invalid email";
          message = "Email address is badly formatted.";
        } else if (err.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
          title = "Weak password";
          message = "Password should be at least 6 characters.";
        } else if (err.message === "Firebase: Error (auth/operation-not-allowed).") {
          title = "Operation not allowed";
          message = "Please try again";
        } else{
          title = "Error";
          message = "Please try again";
        }
        Alert.alert(title, message, [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
       })
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
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.subtitle}>Email Address</Text>
        <View style={{ alignItems: 'center' }}>
          <CustomInput placeholder="email@example.com" value={username} setValue={setUsername} />
        </View>
        <Text style={styles.subtitle}>Password</Text>
        <View style={{ alignItems: 'center' }}>
          <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
          <TouchableOpacity
            style={[styles.button, { marginVertical: 8 }]}
            onPress={onSignUpPress} >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignupDetailScreen


const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 4,
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