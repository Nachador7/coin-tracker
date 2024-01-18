import Fetchdata from '../Fetchdata/Fetchdata';
import './Home.css'

const Home = () => {

    const data = Fetchdata();

    return (
        <div className="Home">
            <div className='home-container'>
            <h1>
              TRACK YOUR <br></br>
             <div className='cryptocurrencies'> 
             CYPTOCURRENCIES
             </div> 
            </h1>
            <div className='coin-container'>
            {data ? (
                data.slice(0, 3).map((coin) => (
                    <div key={coin.id} className="coin-row">
                        <h3>{coin.name} <span className={coin.price_change_percentage_24h < 0 ? 'price-decrease' : 'price-increase'}>{coin.price_change_percentage_24h.toFixed(2)}%</span></h3>
                        <p>Current Price: ${coin.current_price}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
            </div>
        </div>
    )
}

export default Home;