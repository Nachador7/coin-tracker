import React from 'react';
import Fetchdata from '../Fetchdata/Fetchdata';
import './Market.css';

const Market = () => {
    const data = Fetchdata();

    return (
        <div className='market'>
            <h2>Market</h2>
            {data ? (
                data.slice(0, 3).map((coin) => (
                    <div key={coin.id} className="coin-row">
                        <h3>{coin.name}</h3>
                        <p>Current Price: ${coin.current_price}</p>
                        <p>Market Cap: ${coin.market_cap}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Market;