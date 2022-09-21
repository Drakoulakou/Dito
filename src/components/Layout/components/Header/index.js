import { Link } from 'react-router-dom';
import './styles.css';

function Header(){
    return(
        <header>
            <h1>Header</h1>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </header>
    )
}

export default Header