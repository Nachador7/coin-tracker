import React from 'react';
import Fetchdata from '../Fetchdata/Fetchdata';
import { Circles } from 'react-loader-spinner';

import './Market.css';



const Market = () => {
    const data = Fetchdata();
    const [searchTerm, setSearchTerm] = React.useState('');


    return (
        <section id='markt' className='market w-100 pl6 pr6'>
            <h2 className='mb3'>Market Update</h2>
            <input
                type='text'
                placeholder='Search crypto...'
                className='input-reset ba b--white pa3 f4 shadow-1 center bg-transparent white hover-input outline-0 mb3'
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            {data ? (
                <div className="overflow-auto">
                   <table className='f4 w-100 mw-100 center mr4' cellSpacing='0'>
     <thead className='sticky-thead'>
        <tr className='stripe-dark'>
            <th className='fw6 tl pa3'>Coin</th>
            <th className='fw6 tl pa3'>Price</th>
            <th className='fw6 tl pa3'>24h Change</th>
            <th className='fw6 tl pa3'>Market Cap</th>
        </tr>
    </thead>
    <tbody className='lh-copy'>
    {data
            .filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((coin, index) => (
            <tr className={index % 2 === 0 ? 'stripe-dark' : ''} key={index}>
                <td className='pa3 bb b--white'><img src={coin.image} alt={coin.name} className='h3 w3 dib mr4 v-mid' />{coin.name}</td>
                <td className='pa3 bb b--white'>${coin.current_price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                <td className={`pa3 bb b--white ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                <td className='pa3 bb b--white'>${coin.market_cap.toLocaleString()}</td>
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
        </section>
        
    );
}

export default Market;