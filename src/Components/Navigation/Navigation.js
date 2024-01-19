import { FaTwitter, FaDiscord } from 'react-icons/fa';

import './Navigation.css';

const Navigation = () => {
    return (
        
        <nav className="navigation">
            <div className='f2'>
               COINHARBOR
            </div>
        <ul className='mr6 f4'>
            <li><a href='#hom'>Home</a></li>
            <li><a href='#markt'>Market</a></li>
            <li><a href='#choose'>Choose Us</a></li>
            <li><a href="#join">Join</a></li>
        </ul>
        <div className='social-media'>
            <FaTwitter className='twitter f3 mr3' />
            <FaDiscord className='discord f3' />
        </div>
    </nav>
    )

}

export default Navigation;