import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"

const LoadingComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <LottieView
                style={{ height: 800, width:800 }}
                source={require("../../assets/loading.json")}
                autoPlay
                speed={1}
                loop={true}
            /> */}
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
}

export default LoadingComponent

const styles = StyleSheet.create({})