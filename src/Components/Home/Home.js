import { useState } from 'react';
import axios from 'axios';
import Fetchdata from '../Fetchdata/Fetchdata';
import './Home.css'
import Modal from 'react-modal';
import parse from 'html-react-parser';

const Home = () => {
    const data = Fetchdata();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentCoin, setCurrentCoin] = useState(null);

    const openModal = (coin) => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}`)
            .then(response => {
                setCurrentCoin({...coin, description: response.data.description.en});
                setModalIsOpen(true);
            })
            .catch(error => {
                console.error('Error fetching coin details: ', error);
            });
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section id='home' className="Home">
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
                            <div onClick={() => openModal(coin)} key={coin.id} className="ctc grow br3 pa3 ma3 dib bw2 shadow-5">
                                <img src={coin.image} alt={coin.name} className="w4 h4 mb3" />
                                <h3 className='white mb1'>{coin.name} <span className={coin.price_change_percentage_24h < 0 ? 'price-decrease' : 'price-increase'}>{coin.price_change_percentage_24h.toFixed(2)}%</span></h3>
                                <p className='white'>Current Price: ${coin.current_price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                            </div>
                        ))
                    ) : null}
                </div>
            </div>
            <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Coin Description"
    style={{
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // This is an example, you can set your own color
            zIndex: '13300',
            padding: '140px'
        },
        content: {
            color: 'white', // This is an example, you can set your own color
            backgroundColor: 'rgba(0, 0, 0, 0.55)', // This is an example, you can set your own color
            width: '60%',
            height: 'auto',
            maxHeight: '350px',
            marginLeft: '20%',
            marginTop: '10%',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #fff',
            fontSize: '20px',
            lineHeight: '1.5',
        }
    }}
>   <button onClick={closeModal} style={{ float: 'right', cursor: 'pointer' }}>X</button>
    {currentCoin && <div>{parse(currentCoin.description)}</div>}
</Modal>
        </section>
    )
}

export default Home;