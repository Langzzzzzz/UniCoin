import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from './Signup/CustomInput';
import { db } from '../../firebase'
import { collection, onSnapshot, getDoc, where, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { auth } from '../../firebase';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = 200;

const UpdateModal = (props) => {

    const [price, setPrice] = useState(props.item?.priceNumberPair[0]);
    const [number, setNumber] = useState(props.item?.priceNumberPair[1]);

    const closeModal = (bool, data) => {
        props.changeModalVisible(bool, data);
    }

    useEffect(() => {
        return () => {
            closeModal(false, "update");
        }
      }, []);

    const update = () => {
        const docRef = doc(db, "users", auth.currentUser.uid);
        updateDoc(docRef, {
            portfolio: arrayRemove(props.item)
        })
            .then(() => {
                updateDoc(docRef, {
                    portfolio: arrayUnion({ "coinID": props.item.coinID, "priceNumberPair": [Number(price), Number(number)] })
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}>Update {props.item?.coinID}</Text>
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <CustomInput placeholder="Price per Coin" value={price.toString()} setValue={setPrice} prefix={<Text style={{
                        paddingHorizontal: 5,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>$CAD</Text>} />
                    <CustomInput placeholder="Number" value={number.toString()} setValue={setNumber} />

                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={() => {update(); closeModal(false, "update");}} style={styles.touchableOpacity}>
                        <Text style={styles.buttonText}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => closeModal(false, "cancel")} style={styles.touchableOpacity}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </TouchableOpacity>
    )
}

export default UpdateModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        height: HEIGHT,
        width: WIDTH - 30,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textView: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        margin: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
    },
    touchableOpacity: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    }

})