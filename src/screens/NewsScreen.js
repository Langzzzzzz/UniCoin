import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getNews } from '../../services/cryptoService'
import NewsCard from '../components/NewsCard'
import { Divider } from 'react-native-elements'
import LoadingComponent from '../components/LoadingComponent'

const NewsScreen = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    var selectedMonthName = months[month];
    return selectedMonthName + " " + date;
  }

  useEffect(() => {
    const fetchNewsData = async () => {
      const data = await getNews();
      const date = getCurrentDate();
      setCurrentDate(date);
      setNewsData(data);
    }
    setIsLoading(true);
    fetchNewsData();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

  }, [])

  // useEffect(() => {
  //   getNews()
  //     .then(data => {
  //       setNewsData(data)
  //     })
  //     .catch(error => {
  //       alert(error)
  //     })
  // }, [])


  console.log("here ==>")
  console.log(newsData)

  return (
    <SafeAreaView style={{
      backgroundColor: 'white', flex: 1
    }}>
      <View style={{marginHorizontal: 20}}>
        <Text style={{ marginLeft: 8, fontSize: 32, fontWeight:'800', color: '#fd2c4f' }}>Top Stories</Text>
        <Text style={{ marginLeft: 8, fontSize: 24, fontWeight:'600', color: "#808080", marginBottom: 4}}>{currentDate}</Text>
        <Divider width={0.5} style={{marginBottom: 12}}/>
      </View>
      
      {
        isLoading ? (<LoadingComponent />) : (<FlatList
          keyExtractor={(item, index) => index }
          data={newsData}
          renderItem={({ item }) => (
            <NewsCard
              author={item.author}
              content={item.content}
              source={item.source}
              title={item.title}
              image={item.urlToImage}
              publishedAt={item.publishedAt}
              description={item.description}
              url={item.url}
            />
          )}
        />)
      }
      
    </SafeAreaView>

  )
}

export default NewsScreen

const styles = StyleSheet.create({})