import {
    StyleSheet,
    FlatList,
    Animated,
    Dimensions,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import PortofoliolistItem from './ListItem/PortofoliolistItem'
import { Divider } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import PotofolioCard from './PotofolioCard';
import { db } from '../../firebase';
import { collection, onSnapshot, getDoc, where, doc, update, updateDoc, arrayUnion, arrayRemove} from 'firebase/firestore';
import { auth } from '../../firebase';

const Portofoliolist = ({ PortofoliolistData }) => {
    const [listData, setListData] = useState();
    const [tempData, setTempData] = useState();

    useEffect(() => {
        setListData(PortofoliolistData?.map((item, index) => ({ key: `${index}`, obj: item })));
        setTempData(PortofoliolistData?.map((item, index) => ({ key: index, name: item.coinID, currentPrice: 0, priceNumberPair: item.priceNumberPair })));
    }, [PortofoliolistData]);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };


    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        // console.log("=========before=================",newData);
        // newData.splice(prevIndex, 1);
        // console.log("============after==============",newData);
        // setListData(newData);
        // tempData.splice(prevIndex, 1);
        // console.log("==========================",newData);
        setListData([])
        const docRef = doc(db, "users", auth.currentUser.uid);
        updateDoc(docRef, {
            portfolio: arrayRemove(PortofoliolistData[prevIndex])
          })
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onPrice = (coinID, currentPrice, priceChangeInCurrency, priceChangePercentage24h) => {
        const nextTempData = [...tempData];
        console.log("asdasdas coinID", coinID);
        console.log("asdasdas currentPrice", currentPrice);
        console.log("asdasdas priceChangePercentage24h", priceChangeInCurrency);
        nextTempData.map((item, index) => {
            if (item.name == coinID) {
                item.currentPrice = currentPrice;
                item.priceChangeInCurrency = priceChangeInCurrency;
                item.priceChangePercentage24h = priceChangePercentage24h;
            }
        });
        setTempData(nextTempData);
        console.log("tempData", nextTempData);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'white'}
        >
            <PortofoliolistItem item={data.item.obj} onPrice={(coinID, price, priceChangeInCurrency, priceChangePercentage24h) => onPrice(coinID, price, priceChangeInCurrency, priceChangePercentage24h)}/>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
    
    return (
        <View>
            <PotofolioCard tempData={tempData} />

            {/* portofolio coin list */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginVertical: 8 }} >
                <Text style={{ fontSize: 12, fontWeight: '600', color: '#a9a9a9' }}>COIN</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', color: '#a9a9a9' }}>PRICE</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', color: '#a9a9a9' }}>24H</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', color: '#a9a9a9' }}>Holding</Text>
            </View>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75}
                previewRowKey={"0"}
                previewOpenValue={-0.01}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </View>
    )
}

export default Portofoliolist

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: 'white',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});