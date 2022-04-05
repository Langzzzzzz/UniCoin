import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
	const [getSelectionMode, setSelectionMode] = useState(selectionMode);

	const updateSwitchData = value => {
		setSelectionMode(value);
		onSelectSwitch(value);
	};
	return (
		<View
			style={{
				height: 44,
				width: '100%',
				borderRadius: 10,
				flexDirection: 'row',
				justifyContent: 'center',
			}}>
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => updateSwitchData(1)}
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
				}}>
				<View style={{
					borderBottomColor: getSelectionMode == 1 ? '#AD40AF' : '',
					borderBottomWidth: getSelectionMode == 1 ? 2 : '',
					borderRadius: 10,
					width: '100%',
					alignItems: 'center',
				}}>
					<Text
						style={{
							color: getSelectionMode != 1 ? 'black' : '#AD40AF',
							fontSize: 14,
						}}>
						{option1}
					</Text>

				</View>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => updateSwitchData(2)}
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<View style={{
					borderBottomColor: getSelectionMode == 2 ? '#AD40AF' : '',
					borderBottomWidth: getSelectionMode == 2 ? 2 : '',
					borderRadius: 10,
					width: '100%',
					alignItems: 'center',
				}}>
					<Text
						style={{
							color: getSelectionMode != 2 ? 'black' : '#AD40AF',
							fontSize: 14,
						}}>
						{option2}
					</Text>

				</View>
			</TouchableOpacity>
		</View>
	)
}

export default CustomSwitch

const styles = StyleSheet.create({})