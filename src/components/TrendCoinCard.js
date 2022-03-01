import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements/dist/card/Card'
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    itemWrapper: {
        flex: 1,
        paddingHorizontal: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 4,
    },
    leftWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 12
    },
    image: {
        height: 30,
        width: 30,
    },
    rightWrapper: {
        flex: 1,
        alignItems: "flex-end"
    },
    titleWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 16
    },
    subtitle: {
        fontSize: 12,
        marginTop: 4,
        color: "#A9ABB1"
    },
    rankStyle: {
        fontSize: 12,
        marginTop: 4,
        color: "#A9ABB1"
    }

});

const TrendCoinCard = ({ name, symbol, small, rank }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ marginHorizontal: 18 }} 
        onPress={()=> {navigation.navigate('SearchDetail',{
            searchPhrase:name
          })}}
          >
            <View style={styles.itemWrapper}>
                {/* LeftSide */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: small }} style={styles.image} />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol}</Text>
                    </View>
                </View>
                {/* rightSide */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.rankStyle}>#{rank}</Text>
                </View>
            </View>
            <Divider />
        </TouchableOpacity>
    )
}

export default TrendCoinCard