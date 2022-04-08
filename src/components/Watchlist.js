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
import WatchlistItem from './ListItem/WatchlistItem'
import { Divider } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import { auth } from '../../firebase'
import { db } from '../../firebase';
import { collection, onSnapshot, getDoc, where, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const Watchlist = ({ WatchlistData }) => {
    const [listData, setListData] = useState();

    useEffect(() => {
        setListData(WatchlistData?.map((item, index) => ({ key: `${index}`, text: `${item}` })));
    }, [WatchlistData]);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        const docRef = doc(db, "users", auth.currentUser.uid);
        updateDoc(docRef, {
            watchlist: arrayRemove(newData[prevIndex].text)
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'white'}
        >
            <WatchlistItem coinID={data.item.text} />
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
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
            />
        </View>
    )
}

export default Watchlist

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
