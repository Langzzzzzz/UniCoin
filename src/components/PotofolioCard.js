import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'

const PotofolioCard = () => {
    return (
        <View>
            <Card containerStyle={{
                borderRadius: 10,
                //  "#80BF3D" : "#FE5050"
                borderLeftColor: '#80BF3D',
                borderLeftWidth: 6,
            }} >
                <View style={{

                }}>
                    <Text style={{ marginBottom: 2, fontSize: 18, fontWeight: '300' }}>My portofolio</Text>
                    <Text style={{ marginBottom: 2, fontSize: 32 }}>$42,061.63</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>24H change</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>+32.78 (</Text>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>0.08%)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>Total Profit/Loss</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>+32.78 (</Text>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>0.08%)</Text>
                        </View>

                    </View>
                </View>
            </Card>
        </View>
    )
}

export default PotofolioCard

const styles = StyleSheet.create({})