import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSearchCoinData } from '../../../services/cryptoService'
import { AntDesign } from '@expo/vector-icons';

const PortofoliolistItem = ({ item, onPrice }) => {
    const [coinData, setCoinData] = useState("");
    const fetchCoinData = async () => {
        
        const data = await getSearchCoinData(item?.coinID);
        setCoinData(data);
    }
    
    useEffect(() => {
        console.log("ProtofolioList: useEffect", item?.coinID);
        fetchCoinData();
    }, [])

    useEffect(() => {
        onPrice(item?.coinID, coinData?.currentPrice, coinData?.priceChangeInCurrency, coinData?.priceChangePercentage24h);
    }, [coinData, item])

    const priceChangeColor = coinData?.priceChangePercentage24h > 0 ? "#80BF3D" : "#FE5050"
    const changeIcon = coinData?.priceChangePercentage24h > 0 ? "caretup" : "caretdown"
    
    return (
        <TouchableOpacity >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 4 }} >
                {/* LeftSide */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: coinData?.image }} style={styles.image} />
                    <Text style={[styles.subtitle], { color: "black" }}>{coinData?.name}</Text>
                </View>
                <View style={{justifyContent: "center", alignSelf: "center"}}>
                    <Text style={styles.title}>${coinData?.currentPrice?.toLocaleString('en-Us', { currency: "USD" })}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center"}}>
                    <AntDesign name={changeIcon} size={12} color={priceChangeColor} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
                    <Text style={[styles.subtitle], { color: priceChangeColor, fontSize: 16 }}>{coinData?.priceChangePercentage24h?.toFixed(2)}%</Text>
                </View>
                {/* rightSide */}
                <View style={{ flexDirection: "column", justifyContent: "flex-end", alignSelf: "center",}}>
                <Text style={[styles.title], {fontSize: 14}}>${(coinData?.currentPrice * item?.priceNumberPair[1]).toLocaleString('en-Us', { currency: "USD" })}</Text>
                    <Text>{item?.priceNumberPair[1]} {coinData?.symbol?.toUpperCase()}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

export default PortofoliolistItem

const styles = StyleSheet.create({

    itemWrapper: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftWrapper: {
        flexDirection: "column",
    },
    image: {
        height: 40,
        width: 40,
    },
    middleWrapper: {
        flex: 1,
        height: "70%",
        marginLeft: 30,
        paddingLeft: 8
    },
    rightWrapper: {
        flex: 1,
        alignItems: "flex-end"
    },
    titleWrapper: {
        marginLeft: 8,
    },

    title: {
        fontSize: 18
    },
    subtitle: {
        fontSize: 14,
        marginTop: 4,
        color: "#A9ABB1"
    },
})