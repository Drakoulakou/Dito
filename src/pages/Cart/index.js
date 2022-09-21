import './styles.css'
import { useContext } from "react";
import { Context } from '../../App';

function CartPage() {
    const { cartItems, deleteItem } = useContext(Context);
    const total = (5.99 * cartItems.length)

    return (
        
        <section className='cart-images-wrapper'>
            {cartItems.map(item => (
                <div className='cart-image'>
                    <div className='first-column'>
                        <button onClick={()=> deleteItem(item.id)}>Delete</button>
                        <img className='image' src={item.url} />
                    </div>
                    <div><h4>$5,99</h4></div>
                </div>
            ))}
            <div className='total-price'><h4>Total: ${total}</h4></div>
            {cartItems.length > 0 && <button className='btn'>Place order</button>}
        </section>
    )
}

export default CartPage