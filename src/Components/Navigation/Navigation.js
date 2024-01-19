import { FaTwitter, FaDiscord } from 'react-icons/fa';

import './Navigation.css';

const Navigation = () => {
    return (
        
        <nav className="navigation">
            <div className='f2'>
               COINHARBOR
            </div>
        <ul className='mr6 f4'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#market'>Market</a></li>
            <li><a href='#choose'>Choose Us</a></li>
            <li><a href="#join">Join</a></li>
        </ul>
        <div className='social-media'>
        <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
    <FaTwitter className='twitter f3 mr3' />
</a>
<a href="https://discord.gg/your_discord_invite_link" target="_blank" rel="noopener noreferrer">
    <FaDiscord className='discord f3' />
</a>
        </div>
    </nav>
    )

}

export default Navigation;