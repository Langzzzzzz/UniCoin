import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSearchCoinData } from '../../../services/cryptoService'
import { AntDesign } from '@expo/vector-icons';

const WatchlistItem = ({ coinID }) => {
    const [coinData, setCoinData] = useState("");
    const fetchCoinData = async () => {
        const data = await getSearchCoinData(coinID);
        setCoinData(data);
    }
    useEffect(() => {
        fetchCoinData();
    }, [])

    const priceChangeColor = coinData?.priceChangePercentage24h > 0 ? "#80BF3D" : "#FE5050"
    const chartColor = coinData?.priceChangePercentage24h > 0 ? 'rgba(128, 190, 60, 0.8)' : 'rgba(254, 80, 80, 0.8)'
    const changeIcon = coinData?.priceChangePercentage24h > 0 ? "caretup" : "caretdown"

    return (
        <TouchableOpacity >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 4}} >
                {/* LeftSide */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: coinData?.image }} style={styles.image} />
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{coinData?.name}</Text>
                        <Text style={styles.subtitle}>{coinData?.symbol?.toUpperCase()}</Text>
                    </View>
                </View>
                {/* rightSide */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${coinData?.currentPrice?.toLocaleString('en-Us', { currency: "USD" })}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <AntDesign name={changeIcon} size={12} color={priceChangeColor} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
                        <Text style={[styles.subtitle], { color: priceChangeColor }}>{coinData?.priceChangePercentage24h?.toFixed(2)}%</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default WatchlistItem

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
        flexDirection: "row",
    },
    image: {
        height: 48,
        width: 48,
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