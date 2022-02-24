import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const NewsDetailScreen = ({ navigation, route }) => {

  const { author, content, source, title, image, publishedAt, description } = route.params;
  const { width, height } = Dimensions.get('window')

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ImageBackground
        source={{ url: image }}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text style={styles.Placename}>{title}</Text>
        <TouchableOpacity style={styles.goback} onPress={() => {navigation.goBack();}}>
          <Feather name='arrow-left' size={24} color='#fff' />
        </TouchableOpacity>
      </ImageBackground>
    <ScrollView style={{backgroundColor: 'white'}}>
      <Text style={styles.text}> {publishedAt}</Text>
      <Text style={styles.text}> {source.name} </Text>
      <Text style={styles.text}> {author == null ? 'unknown' : author} </Text>
      <Text style={styles.text}> {description} </Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>

    </View>

  )
}

export default NewsDetailScreen

const styles = StyleSheet.create({
  image: {
    height: 380,
    justifyContent: 'flex-end'
  },
  Tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginVertical: 6
  },
  Placename: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30
  },
  goback: {
    position: 'absolute',
    left: 20,
    top: 40,
    backgroundColor: "#5F84E8",
    padding: 10,
    borderRadius: 40
  },
  text:{
    padding: 14,
    fontSize: 20,
    fontWeight: 'bold',

  },
  content:{
    paddingHorizontal: 14,
    fontSize:14,
    fontWeight: 'normal',
    opacity: 0.3,
    justifyContent: 'flex-start',
    textAlign: 'justify',
    lineHeight: 26
  }
})