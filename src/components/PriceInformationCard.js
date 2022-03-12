import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

const PriceInformationCard = ({ rank, ath, athChangePercentage, athDate, atl, atlChangePercentage, atlDate, marketCap, fullyDilutedValuation, max_supply }) => {
    const athpriceChangeColor = athChangePercentage > 0 ? "#80BF3D" : "#FE5050"
    const athchangeIcon = athChangePercentage > 0 ? "caretup" : "caretdown"
    const atlpriceChangeColor = atlChangePercentage > 0 ? "#80BF3D" : "#FE5050"
    const atlchangeIcon = atlChangePercentage > 0 ? "caretup" : "caretdown"

    const dateFormatter = (date) => {
        var day = moment(date).format('LL');
        return day;
    }

    const Datefromnow = (date) => {
        var dayfrom = moment(date).fromNow();
        return dayfrom;
    }
    return (
        <View style={styles.container}>
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>Market Cap Rank</Text>
                <Text style={styles.rightWrapper}>#{rank ? rank : "-"}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>marketCap</Text>
                <Text style={styles.rightWrapper}>{marketCap ? marketCap.toLocaleString('en-US', { style: 'currency', currency: 'USD', }) : "-"}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>Fully Diluted Valuation</Text>
                <Text style={styles.rightWrapper}>{fullyDilutedValuation ? fullyDilutedValuation.toLocaleString('en-US', { style: 'currency', currency: 'USD', }) : "-"}</Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>All-Time High</Text>
                <Text style={styles.rightWrapper}>
                    {ath ? ath.toLocaleString('en-US', { style: 'currency', currency: 'USD', }) : "-"}
                    <AntDesign name={athchangeIcon} size={12} color={athpriceChangeColor} style={{ alignSelf: "center", marginHorizontal: 4 }} />
                    <Text style={{ color: athpriceChangeColor, alignSelf: 'center', fontSize: 15 }}>{athChangePercentage?.toFixed(2)}%</Text>
                </Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>All-Tme High Date</Text>
                <View style={styles.rightWrapper}>
                    <Text style={[styles.rightWrapper, {marginBottom: 4}]}>{athDate ? dateFormatter(athDate) : "-"}</Text>
                    <Text>({athDate ? Datefromnow(athDate) : "-"})</Text>
                </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>All-Time Low</Text>
                <Text style={styles.rightWrapper}>{atl ? atl.toLocaleString('en-US', { style: 'currency', currency: 'USD', }) : "-"}
                    <AntDesign name={atlchangeIcon} size={12} color={atlpriceChangeColor} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
                    <Text style={{ color: atlpriceChangeColor, alignSelf: 'center', fontSize: 15 }}>{atlChangePercentage?.toFixed(2)}%</Text>
                </Text>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>All-Tme Low Date</Text>
                <View style={styles.rightWrapper}>
                    <Text style={[styles.rightWrapper, {marginBottom: 4}]}>{atlDate ? dateFormatter(atlDate) : "-"}</Text>
                    <Text>({atlDate ? Datefromnow(atlDate) : "-"})</Text>
                </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
            <View style={styles.itemWrapper}>
                <Text style={styles.leftWrapper}>Max Supply</Text>
                <Text style={styles.rightWrapper}>{max_supply ? max_supply.toLocaleString('en-US') : "-"}</Text>
            </View>
        </View>
    )
}

export default PriceInformationCard

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
        color: "#494A49",
        fontSize: 15,
        fontWeight: "500"
    },
    rightWrapper: {
        marginLeft: "auto",
        alignItems: "flex-end",
        color: "#494A49",
        fontWeight: "300"
    }

})