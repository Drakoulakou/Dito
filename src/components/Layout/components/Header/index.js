import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <header className='menu'>
            <div className='first-column'>
                <Link to="/" className='home-link'><h1>Pic Some</h1></Link>
            </div>
            <Link to="/cart" className='cart-link'><img className='cart-icon' src={process.env.PUBLIC_URL + '/cart.png'} /></Link>
        </header>
    )
}

export default Header