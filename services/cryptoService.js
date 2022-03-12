import axios from 'axios';
import moment from 'moment';
import { API_KEY, endpoint, country } from './newsConfig';


const formatSparkline = (numbers) => {
    const sevenDaysAgo = moment().subtract(7,'days').unix();
    let formattedSparkline = numbers.map((item, index) => {
        return {
            x: sevenDaysAgo + (index + 1) * 3,
            y: item,
        }
    })

    return formattedSparkline
}

const formatMarketData = (data) => {
    let formatData = [];
    data.forEach(item => {
        const formattedSparkline = formatSparkline(item.sparkline_in_7d.price);

        const formattedItem = {
            ...item,
            sparkline_in_7d:{
                price: formattedSparkline
            }
        }

        formatData.push(formattedItem);
    });

    return formatData;
}

const formatTrendCoinData = (data) => {
    let formatTrendData = [];
    data.forEach(item => {
        const coinData = {
            id: item.item.id,
            name: item.item.name,
            symbol: item.item.symbol,
            rank: item.item.market_cap_rank,
            small: item.item.small
        }
        formatTrendData.push(coinData)
    })
    return formatTrendData
}

export const getMarketData = async() => {
    //https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h
    try {
        // api call heres
        //await -> async
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=45&page=1&sparkline=true&price_change_percentage=24h");
        const data = response.data;
        const formattedResponds = formatMarketData(data);
        return formattedResponds;
    } catch (error) {
        console.log(error.message)
    }
}

export const getTrendCoin = async() => {
    try {
        // api call heres
        //await -> async
        const trendCoinsdResponse = await axios.get("https://api.coingecko.com/api/v3/search/trending");
        const trendCoinData = trendCoinsdResponse.data.coins;
        const formattedTrendCoinData = formatTrendCoinData(trendCoinData);
        return formattedTrendCoinData;
    } catch (error) {
        console.log(error.message)
    }
}

export async function getNews(category = 'business') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });
    let result = await articles.json();
    return result.articles;
}

const formatCoinData = (data) => {
    const coinData = {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        rank: data.market_cap_rank,
        image: data.image.small,
        description: data.description.en,
        links: data.links,
        currentPrice: data.market_data.current_price.cad,
        ath: data.market_data.ath.cad,
        athChangePercentage: data.market_data.ath_change_percentage.cad,
        athDate: data.market_data.ath_date.cad,
        atl: data.market_data.atl.cad,
        atlChangePercentage: data.market_data.atl_change_percentage.cad,
        atlDate: data.market_data.atl_date.cad,
        marketCap: data.market_data.market_cap.cad,
        fullyDilutedValuation: data.market_data.fully_diluted_valuation.cad,
        priceChangePercentage24h: data.market_data.price_change_percentage_24h,
        priceChangePercentage7d: data.market_data.price_change_percentage_7d,
        priceChangePercentage14d: data.market_data.price_change_percentage_14d,
        priceChangePercentage30d: data.market_data.price_change_percentage_30d,
        priceChangePercentage1y: data.market_data.price_change_percentage_1y,
        max_supply: data.market_data.max_supply,
    }
    return coinData
}


export const getSearchCoinData = async(coin) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
        const unformatedCoinData = response.data;
        const formatedCoinData = formatCoinData(unformatedCoinData);
        return formatedCoinData;
    } catch (error) {
        console.log(error.message)
    }
}

export const getCoinMarketChart = async (coinId, selectedRange) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${selectedRange}&interval=hourly`)
      return response.data;
    } catch (e) {
      console.log(e)
    }
    return "404"
  }
  