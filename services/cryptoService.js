import axios from 'axios';
import moment from 'moment';

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

export const getMarketData = async() => {
    //https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h
    try {
        // api call heres
        //await -> async
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=24h");
        const data = response.data;
        const formattedResponds = formatMarketData(data);
        return formattedResponds;

    } catch (error) {
        console.log(error.message)
    }
}