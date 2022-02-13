import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native'
import { ChartDot, ChartPath, ChartPathProvider } from '@rainbow-me/animated-charts';

const { width: SIZE } = Dimensions.get('window');

const Chart = ({ symbol, name, current_price, price_change_percentage_24h, sparkline_in_7d, image }) => {
    console.log(current_price)

    const priceChangeColor = price_change_percentage_24h > 0 ? '#34C759' : '#FF3B30';

    return (
        <ChartPathProvider data={{ points: sparkline_in_7d, smoothingStrategy: 'bezier' }}>
            <View style={styles.chartWrapper}>
                <View style={styles.titleWraper}>
                    <View style={styles.upperTitles}>
                        <View style={styles.upperLeftTitle}>
                            <Image source={{ uri: image }} style={styles.image} />
                            <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
                        </View>
                        <Text style={styles.subtitle}>7d</Text>
                    </View>
                    <View style={styles.lowerTitles}>
                        {/* <ChartYLabel
                        format={formatUSD}
                        style={styles.boldTitle}
                    /> */}
                        <Text style={styles.boldTitle}>${current_price.toLocaleString('en-Us', { currency: "USD" })}</Text>
                        <Text style={[styles.title, { color: priceChangeColor }]}>{price_change_percentage_24h.toFixed(2)}%</Text>
                    </View>
                </View>
                <View style={styles.chartLineWrapper}>
                    <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
                    <ChartDot style={{ backgroundColor: 'black' }} />
                </View>
            </View>
        </ChartPathProvider>

    )
}

export default Chart

const styles = StyleSheet.create({
    chartWrapper: {
        marginVertical: 16,
        marginHorizontal: 8
    },
    titlesWrapper: {
        marginHorizontal: 16
    },
    upperTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    upperLeftTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
    },
    lowerTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boldTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
    },
    chartLineWrapper: {
        marginTop: 40,
    },
});