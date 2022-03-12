import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'

const FilterComponent = (props) => {
    const { filterDay, filterText, selectedRange, setSelectedRange } = props;
    const isFilterSelected = (filter) => filter === selectedRange;
    console.log("pressed")
    return (
        <Pressable 
            style={{ 
                paddingHorizontal: 10, 
                paddingVertical: 5, 
                backgroundColor: isFilterSelected(filterDay) ? "#dcdcdc" : "transparent", 
                borderRadius: 5 
            }}
            onPress={()=>setSelectedRange(filterDay)}>
            <Text style={{ color: isFilterSelected(filterDay) ? "black" : "grey" }}>{filterText}</Text>
        </Pressable>
    )
}

export default memo(FilterComponent);

const styles = StyleSheet.create({})