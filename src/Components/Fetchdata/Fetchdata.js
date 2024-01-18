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
            });
    }, []);

    return data;
}

export default FetchData;