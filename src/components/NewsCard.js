import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const NewsCard = ({ author, content, source, title, image, publishedAt }) => {
  const navigation = useNavigation();
  console.log(typeof author)

  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsDetail', {
        title: title,
        image: image,
        content: content,
        publishedAt: publishedAt,
        source: source
      })
    }
      }>
      <Card containerStyle={{borderRadius: 10}} >
        <Card.Image
          style={{ marginBottom: 4 }}
          source={{ uri: image }}
        />
        <Text style={{ marginBottom: 8 }} numberOfLines={2}>{title}</Text>
        <Card.Divider />
        <Text style={{ marginBottom: 2 }}>{publishedAt.substring(11, publishedAt.length-1)} • {source.name}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default NewsCard

const styles = StyleSheet.create({})