import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native"

const LoadingComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#5F84E8" />
        </View>
    )
}

export default LoadingComponent

const styles = StyleSheet.create({})