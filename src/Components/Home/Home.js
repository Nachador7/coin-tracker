import Fetchdata from '../Fetchdata/Fetchdata';
import './Home.css'
import { Circles } from 'react-loader-spinner';

const Home = () => {

    const data = Fetchdata();

    return (
        <div className="Home">
            <div className='home-container'>
            <h1 className='h1-container'>
              TRACK YOUR 
             <div className='cryptocurrencies'> 
             CYPTOCURRENCIES
             </div> 
            </h1>
            <div className='coin-container'>
            {data ? (
                data.slice(0, 4).map((coin) => (
                    <div key={coin.id} className="ctc grow br3 pa3 ma3 dib bw2 shadow-5">
                        <img src={coin.image} alt={coin.name} className="w4 h4 mb3" />
                        <h3 className='white mb1'>{coin.name} <span className={coin.price_change_percentage_24h < 0 ? 'price-decrease' : 'price-increase'}>{coin.price_change_percentage_24h.toFixed(2)}%</span></h3>
                        <p className='white'>Current Price: ${coin.current_price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    </div>
                ))
            ) : ( <div className=''>
                <Circles
                height="80"
                width="80"
                color="purple"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
                </div>
            )}
            </div>
            </div>
        </div>
    )
}

export default Home;