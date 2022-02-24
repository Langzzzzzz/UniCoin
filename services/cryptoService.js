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