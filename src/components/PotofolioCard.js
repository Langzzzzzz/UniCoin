import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-native-elements'

const PotofolioCard = ({ tempData }) => {
    const [total, setTotal] = useState(0)
    const [totalProfit, setTotalProfit] = useState(0)
    const [totalProfitPercent, setTotalProfitPercent] = useState(0)
    const [changeIn24h, setChangeIn24h] = useState(0)
    const [changeIn24hPercent, setChangeIn24hPercent] = useState(0)


    calculate = () => {
        let total = 0
        let totalBuyPrice = 0
        let changeIn24h = 0
        tempData?.forEach(element => {
            if (element) {
                total += element?.currentPrice * element?.priceNumberPair[1];
                totalBuyPrice += element?.priceNumberPair[0] * element?.priceNumberPair[1];
                changeIn24h += element?.priceChangeInCurrency * element?.priceNumberPair[1];
            }
        });
        setTotalProfit(total - totalBuyPrice);
        setTotalProfitPercent((total - totalBuyPrice) / totalBuyPrice * 100);
        setTotal(total)
        setChangeIn24h(changeIn24h)
        setChangeIn24hPercent(changeIn24h / total * 100)
    }

    useEffect(() => {
        calculate();
    }, [tempData]);

    const priceChangeColor = totalProfit > 0 ? "#80BF3D" : "#FE5050"
    const priceSign = totalProfit > 0 ? '+' : ''
    const priceSign24H = changeIn24h > 0 ? '+' : ''
    const borderLeftColor = changeIn24h > 0 ? "#80BF3D" : "#FE5050"
    return (
        <View>
            <Card containerStyle={{
                borderRadius: 10,
                //  "#80BF3D" : "#FE5050"
                borderLeftColor: borderLeftColor,
                borderLeftWidth: 6,
            }} >
                <View style={{

                }}>
                    <Text style={{ marginBottom: 2, fontSize: 18, fontWeight: '300' }}>My portofolio</Text>
                    <Text style={{ marginBottom: 2, fontSize: 32 }}>${total?.toLocaleString('en-Us', { currency: "USD" })}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>24H change</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: borderLeftColor }}>{priceSign24H} {changeIn24h.toLocaleString('en-Us', { currency: "USD", maximumFractionDigits: 2 })}(</Text>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: borderLeftColor }}>{changeIn24hPercent.toFixed(2)}%)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginBottom: 2, fontSize: 16, color: "#a9a9a9" }}>Total Profit/Loss</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: priceChangeColor }}>{priceSign} {totalProfit?.toLocaleString('en-Us', { currency: "USD", maximumFractionDigits: 2 })} (</Text>
                            <Text style={{ marginBottom: 2, fontSize: 16, color: priceChangeColor }}>{totalProfitPercent.toFixed(2)}%)</Text>
                        </View>

                    </View>
                </View>
            </Card>
        </View>
    )
}

export default PotofolioCard

const styles = StyleSheet.create({})