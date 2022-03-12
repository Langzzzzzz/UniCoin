import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { getSearchCoinData, getCoinMarketChart } from '../../../services/cryptoService'
import { Divider } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import PastPercentageChangeCard from '../../components/PastPercentageChangeCard';
import FilterComponent from '../../components/FilterComponent';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import { useSharedValue } from 'react-native-reanimated';

const filterDaysArray = [
  { filterDay: "1", filterText: "24h" },
  { filterDay: "7", filterText: "7d" },
  { filterDay: "30", filterText: "30d" },
  { filterDay: "365", filterText: "1y" },
  { filterDay: "max", filterText: "All" },
];

const SearchDetailScreen = ({ navigation, route }) => {
  const coinID = route.params.searchPhrase.toLowerCase();
  const [coinData, setCoinData] = useState("");
  const [selectedRange, setSelectedRange] = useState("1")
  const [coinMarketData, setCoinMarketData] = useState(null);

  const { id,
    name,
    symbol,
    rank,
    image,
    description,
    links,
    currentPrice,
    ath,
    athChangePercentage,
    athDate,
    atl,
    atlChangePercentage,
    atlDate,
    marketCap,
    fullyDilutedValuation,
    priceChangePercentage24h,
    priceChangePercentage7d,
    priceChangePercentage14d,
    priceChangePercentage30d,
    priceChangePercentage1y,
    max_supply } = coinData

  const priceChangeColor = coinData.priceChangePercentage24h > 0 ? "#80BF3D" : "#FE5050"
  const changeIcon = coinData.priceChangePercentage24h > 0 ? "caretup" : "caretdown"
  

  const fetchCoinData = async () => {
    const data = await getSearchCoinData(coinID);
    setCoinData(data);
  }

  const fetchMarketCoinData = async (selectedRangeValue) => {
    const fetchedCoinMarketData = await getCoinMarketChart(
      coinID,
      selectedRangeValue
    );
    setCoinMarketData(fetchedCoinMarketData);
  };
  const latestCurrentPrice = useSharedValue(currentPrice);
  useEffect(() => {
    fetchCoinData();
    fetchMarketCoinData(1);
  }, [])

  useEffect(()=>{
    latestCurrentPrice.value = currentPrice;
}, [currentPrice]);

  // const prices= coinMarketData?.prices;
  const chartColor = currentPrice ? "#16c784" : "#ea3943";
  const screenWidth = Dimensions.get("window").width;


  const onSelectedRangeChange = (selectedRangeValue) => {
    setSelectedRange(selectedRangeValue);
    fetchMarketCoinData(selectedRangeValue);
  };

  const formatUSD = value => {
    'worklet';
    if (value === '') {
      const formattedValue = `$${latestCurrentPrice.value?.toLocaleString('en-US', { currency: 'USD' })}`
      return formattedValue;
    }

    const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    return formattedValue;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ChartPathProvider
        data={{
          points: coinMarketData?.prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: "bezier",
        }}
      >
        <View style={styles.itemWrapper}>
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => { navigation.goBack(); }}>
              <Feather name='arrow-left' size={30} color='#000' />
            </TouchableOpacity>
          </View>
          <View style={styles.middleWrapper}>
            <View style={styles.titleContainer}>
              <Image source={{ uri: coinData.image }} style={styles.image} />
              <Text style={styles.title}>{coinData.name} </Text>
              <Text style={{ color: "#808080", fontSize: 16, fontWeight: "600" }}>({symbol?.toUpperCase()})         </Text>
            </View>
          </View>
        </View>

        <Divider width={0.5} style={{ marginTop: 8, marginHorizontal: 6 }} />
        <View style={styles.currentPriceWrapper}>
         <ChartYLabel format={formatUSD} style={styles.price} />
          <AntDesign name={changeIcon} size={16} color={priceChangeColor} style={{ alignSelf: "center", paddingHorizontal: 4 }} />
          <Text style={{ color: priceChangeColor, alignSelf: 'center', fontSize: 16 }}>{priceChangePercentage24h?.toFixed(2)}%</Text>
        </View>

        {/* chart */}
        <View>
          <ChartPath
            strokeWidth={2}
            height={screenWidth / 2}
            stroke={chartColor}
            width={screenWidth}
          />
          <ChartDot style={{ backgroundColor: chartColor }} />
        </View>
        {/* chart time frame */}
        <View style={styles.chartTimeFrameContainer}>
        {filterDaysArray.map((day) => (
            <FilterComponent
              filterDay={day.filterDay}
              filterText={day.filterText}
              selectedRange={selectedRange}
              setSelectedRange={onSelectedRangeChange}
              key={day.filterText}
            />
          ))}
        </View>
        {/* past change percentage */}
        <PastPercentageChangeCard
          priceChangePercentage24h={priceChangePercentage24h}
          priceChangePercentage7d={priceChangePercentage7d}
          priceChangePercentage14d={priceChangePercentage14d}
          priceChangePercentage30d={priceChangePercentage30d}
          priceChangePercentage1y={priceChangePercentage1y} />
        {/* information card */}

      </ChartPathProvider>


    </SafeAreaView>
  )
}

export default SearchDetailScreen

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 8
  },
  navContainer: {
    alignItems: 'flex-start',
    marginLeft: 12,
    width: 30,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  middleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
  },
  price: {
    fontSize: 36,
    fontWeight: "600"
  },
  currentPriceWrapper: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 8
  },
  chartTimeFrameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F6F7F8',
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowOffset: {
      height: 4,
      width: 4
    }
  }

})