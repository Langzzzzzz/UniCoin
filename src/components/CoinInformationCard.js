import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const CoinInformationCard = ({ rank, description, links, ath, athChangePercentage, athDate, atl, atlChangePercentage, atlDate, marketCap, fullyDilutedValuation, max_supply }) => {
    return (
        <View style={styles.container}>
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>Market Cap Rank</Text>
                <Text style={styles.rightWrapper}>#{rank}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>marketCap</Text>
                <Text style={styles.rightWrapper}>{marketCap?.toLocaleString('en-US', {   style: 'currency',   currency: 'USD', })}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>Fully Diluted Valuation</Text>
                <Text style={styles.rightWrapper}>{fullyDilutedValuation?.toLocaleString('en-US', {   style: 'currency',   currency: 'USD', })}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>All-Time High</Text>
                <Text style={styles.rightWrapper}>{ath?.toLocaleString('en-US', {   style: 'currency',   currency: 'USD', })}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>All-Time Low</Text>
                <Text style={styles.rightWrapper}>{atl?.toLocaleString('en-US', {   style: 'currency',   currency: 'USD', })}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>Max Supply</Text>
                <Text style={styles.rightWrapper}>{max_supply?.toLocaleString('en-US')}</Text>
            </View>
        </View>
    )
}

export default CoinInformationCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F7F8',
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowOffset: {
            height: 4,
            width: 4
        }
    },
    itemWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    leftWrapper: {
        alignSelf: 'flex-start',
        flex: 1,
        color:"#494A49",
        fontSize: 15,
        fontWeight: "500"
    },
    rightWrapper: {
        marginLeft: "auto",
        alignItems: "flex-end",
        color:"#494A49",
        fontWeight: "300"
    }

})