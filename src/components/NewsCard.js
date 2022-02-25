import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

const NewsCard = ({ author, content, source, title, image, publishedAt, description, url }) => {
  const navigation = useNavigation();
  const [result, setResult] = useState(null);
  console.log(typeof author)
  
  const handleOnPress = async () => {
    let result = await WebBrowser.openBrowserAsync(url);
    setResult(result);
  };

  return (
    <TouchableOpacity onPress={() => handleOnPress()}>
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