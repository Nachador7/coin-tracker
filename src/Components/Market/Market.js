import React from 'react';
import Fetchdata from '../Fetchdata/Fetchdata';
import axios from 'axios';
import './Market.css';
import Modal from 'react-modal';
import parse from 'html-react-parser';

const Market = () => {
    const data = Fetchdata();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [currentCoin, setCurrentCoin] = React.useState(null);

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
        <section id='market' className='Market w-100 pl6 pr6'>
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
                                    <tr className={index % 2 === 0 ? 'stripe-dark' : ''} key={index} onClick={() => openModal(coin)}>
                                        <td className='pa3 bb b--white pointer dim'><img src={coin.image} alt={coin.name} className='h3 w3 dib mr4 v-mid' />{coin.name}</td>
                                        <td className='pa3 bb b--white'>${coin.current_price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                                        <td className={`pa3 bb b--white ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                                        <td className='pa3 bb b--white'>${coin.market_cap.toLocaleString()}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading...</p>
            )}
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
            >
                <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}>X</button>
                {currentCoin && typeof currentCoin.description === 'string' && <div>{parse(currentCoin.description)}</div>}
            </Modal>
        </section>
    );
};

export default Market;