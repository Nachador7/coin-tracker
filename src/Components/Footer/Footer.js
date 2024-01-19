import { FaTwitter, FaDiscord, FaFacebookF, FaYoutube } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-content">
            <div className="footer-content__socials">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
            <div className="footer-content__text">
                <p>Privacy</p>
                <p>Terms of Use</p>
            </div>
        </div>
    )
}

export default Footer