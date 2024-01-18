import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                // setTimeout(() => {
                //     alert('We are having trouble fetching data. Please try again later.');
                // }, 10000);
            });
    }, []);

    return data;
}

export default FetchData;