import { FaTwitter, FaDiscord } from 'react-icons/fa';

import './Navigation.css';

const Navigation = () => {
    return (
        
        <nav className="navigation">
            <div className='f3'>
               COINHARBOR
            </div>
        <ul className='mr5'>
            <li>Home</li>
            <li>Market</li>
            <li>Choose Us</li>
            <li>Join</li>
        </ul>
        <div>
            <FaTwitter className='twitter f3 mr3' />
            <FaDiscord className='discord f3' />
        </div>
    </nav>
    )

}

export default Navigation;