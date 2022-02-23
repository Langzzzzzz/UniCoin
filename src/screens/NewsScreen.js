import { StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getNews } from '../../services/cryptoService'
import NewsCard from '../components/NewsCard'

const NewsScreen = () => {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    getNews()
      .then(data => {
        setNewsData(data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  console.log("here ==>")
  console.log(newsData)

  return (
    <SafeAreaView style={{
      backgroundColor: 'white', flex: 1
    }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={newsData}
        renderItem={({ item }) => (
          <NewsCard
            author={item}
            content={item.content}
            source={item.source}
            title={item.title}
            image={item.urlToImage}
            publishedAt={item.publishedAt}
          />
        )}
      />
    </SafeAreaView>

  )
}

export default NewsScreen

const styles = StyleSheet.create({})