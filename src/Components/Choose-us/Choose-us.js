
import './Choose-us.css';

const ChooseUs = () => {
    return (
        <div className="choose-us">
            <h2>Choose Us</h2>
            <div className='choose-us-container'>
                <div className='choose-us-card'>
                    <h3>Easy to Use</h3>
                    <p>Our platform is easy to use and navigate. You can easily find the information you need. </p>
                </div>
                <div className='choose-us-card'>
                    <h3>Real Time Data</h3>
                    <p>Our data is updated every 5 seconds. You will always have the most up to date information. </p>
                </div>
                <div className='choose-us-card'>
                    <h3>Free to Use</h3>
                    <p>Our platform is free to use. You can use our platform to track your cryptocurrencies without any fees. </p>
                </div>
            </div>
        </div>
    )
}
export default ChooseUs;