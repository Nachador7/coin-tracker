import React from 'react';
import Fetchdata from '../Fetchdata/Fetchdata';
import { Circles } from 'react-loader-spinner';

import './Market.css';

const Market = () => {
    const data = Fetchdata();

    return (
        <div className='market w-100 pl6'>
            <h2>Market</h2>
            {data ? (
                <div className="overflow-auto">
                   <table className='f4 w-100 mw-100 center mr4' cellspacing='0'>
    <thead>
        <tr className='stripe-dark'>
            <th className='fw6 tl pa3 ' style={{ paddingLeft: '137px' }}>Coin</th>
            <th className='fw6 tl pa3'>Price</th>
            <th className='fw6 tl pa3'>24h Change</th>
            <th className='fw6 tl pa3'>Market Cap</th>
        </tr>
    </thead>
    <tbody className='lh-copy'>
        {data.slice(0, 30).map((coin, index) => (
            <tr className={index % 2 === 0 ? 'stripe-dark' : ''} key={index}>
                <td className='pa3'><img src={coin.image} alt={coin.name} className='h3 w3 dib mr4 v-mid' />{coin.name}</td>
                <td className='pa3'>${coin.current_price}</td>
                <td className='pa3'>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                <td className='pa3'>${coin.market_cap.toLocaleString()}</td>
            </tr>
        ))}
    </tbody>
</table>
                </div>
            ) : (
                <div className='spinner'>
                    <Circles
                        height="80"
                        width="80"
                        color="purple"
                        ariaLabel="circles-loading"
                    />
                </div>
            )}
        </div>
        
    );
}

export default Market;