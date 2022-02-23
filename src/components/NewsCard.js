import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'

const NewsCard = ({ author, content, source, title, image, publishedAt }) => {
  return (
    <TouchableOpacity>
            <Card>
            <Card.Image
              style={{ marginBottom: 4 }}
              source={{ uri: image}}
            />
            <Text style={{ marginBottom: 4 }}>{title}</Text>
        
            
            </Card>
    </TouchableOpacity>
  )
}

export default NewsCard

const styles = StyleSheet.create({})