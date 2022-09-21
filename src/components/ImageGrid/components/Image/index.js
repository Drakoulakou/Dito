import './styles.css'
import { useContext, useState } from "react";
import { Context } from '../../../../App';

function Image({ image }) {
    const { addItem, cartItems } = useContext(Context);
    const [favorite, setFavorite] = useState(false);
    const itemIsInCart = cartItems.find(item => item.id === image.id);

    return (
        <div className='image-wrapper' key={image.id}>
            <img className='image' src={image.url} />
            {favorite
            ? <div style={{ display: 'block' }} className='btn-heart' onClick={() => setFavorite(false)}><img src={process.env.PUBLIC_URL + '/heart.png'} /></div>
            : <div className='btn-heart' onClick={() => setFavorite(true)}><img src={process.env.PUBLIC_URL + '/empty-heart.png'} /></div>
            }
            {itemIsInCart
                ? <img style={{ display: 'block' }} className='btn' src={process.env.PUBLIC_URL + '/cart.png'} />
                : <button onClick={() => addItem(image)} className='btn'>+</button>
            }
        </div>
    )
}

export default Image