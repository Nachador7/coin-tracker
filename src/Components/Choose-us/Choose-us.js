import { IoIosThunderstorm } from 'react-icons/io';

import './Choose-us.css';
import hand from '../../hand.png'

const ChooseUs = () => {
    return (
        <div className="choose-us">
            <div className='container'>
                <div className='choose-container'>
                    <h2 className='why-container'>WHY <span className='gradient-font'>CHOOSE US</span></h2>
                    <div className='block-container'>
                        <div className='choose-container-content1'>
                            <div className='choose-box'>
                                <i><IoIosThunderstorm /></i>
                                <div className='choose-box-content'>
                                    <h4>Fast</h4> 
                                    <p>Fastest way to buy and sell cryptocurrencies</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><IoIosThunderstorm /></i>
                                <div className='choose-box-content'>
                                    <h4>Fast</h4> 
                                    <p>Fastest way to buy and sell cryptocurrencies</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><IoIosThunderstorm /></i>
                                <div className='choose-box-content'>
                                    <h4>Fast</h4> 
                                    <p>Fastest way to buy and sell cryptocurrencies</p>
                                </div>
                            </div>
                        </div>
                        <div className='choose-container-content2'>
                            <img src={hand} alt='hand' />
                        </div>
                        <div className='choose-container-content3'>
                        <div className='choose-box'>
                                <i><IoIosThunderstorm /></i>
                                <div className='choose-box-content'>
                                    <h4>Fast</h4> 
                                    <p>Fastest way to buy and sell cryptocurrencies</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><IoIosThunderstorm /></i>
                                <div className='choose-box-content'>
                                    <h4>Fast</h4> 
                                    <p>Fastest way to buy and sell cryptocurrencies</p>
                                </div>
                            </div>
                            <div className='choose-box'>
                                <i><IoIosThunderstorm /></i>
                                <div className='choose-box-content'>
                                    <h4>Fast</h4> 
                                    <p>Fastest way to buy and sell cryptocurrencies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChooseUs;