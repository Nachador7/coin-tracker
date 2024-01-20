import { FaWallet, FaPencilAlt, FaMobileAlt, FaMoneyBillAlt, FaStackExchange } from 'react-icons/fa';
import { TiClipboard } from 'react-icons/ti';

import './Choose-us.css';
import hand from '../../hand.png'

const ChooseUs = () => {
    return (
        <section id="choose" className="choose-us">
            <div className='container'>
                <div className='choose-container'>
                    <h2 className='why-container'>WHY <span className='gradient-font'>CHOOSE US</span></h2>
                    <div className='block-container'>
                        <div className='choose-container-content1'>
                            <div className='choose-box'>
                                <i><FaWallet /></i>
                                <div className='choose-box-content'>
                                    <h4>CONNECT YOUR WALLET</h4> 
                                    <p>Use Trust Wallet, Metamask or to connect to the app.</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><FaPencilAlt/></i>
                                <div className='choose-box-content'>
                                    <h4>SELECT YOUR QUANTITY</h4> 
                                    <p>Upload your crypto and set title,description and price.</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><TiClipboard /></i>
                                <div className='choose-box-content'>
                                    <h4>CONFIRM TRANSACTION</h4> 
                                    <p>Earn by selling your crypto on our marketplace.</p>
                                </div>
                            </div>
                        </div>
                        <div className='choose-container-content2'>
                            <img src={hand} alt='hand' />
                        </div>
                        <div className='choose-container-content3'>
                        <div className='choose-box'>
                                <i><FaMobileAlt /></i>
                                <div className='choose-box-content'>
                                    <h4>RECIVE YOUR OWN NFTS</h4> 
                                    <p>Invest all your crypto at one place on one platform.</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><FaMoneyBillAlt /></i>
                                <div className='choose-box-content'>
                                    <h4>TAKE A MARKET TO SELL</h4> 
                                    <p>Discover, collect the right crypto collections to buy or sell.</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><FaStackExchange /></i>
                                <div className='choose-box-content'>
                                    <h4>DRIVE YOUR COLLECTION</h4> 
                                    <p>We make it easy to Discover,Invest and manage,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ChooseUs;