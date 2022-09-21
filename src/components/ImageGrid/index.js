import { useContext } from "react";
import { Context } from '../../App';

function ImageGrid() {
    const { addItem, images } = useContext(Context);

    function getContent() {
        return images.map(image => (
            <div onClick={() => addItem(image)} className='image-wrapper' key={image.id}>
                <img className='image' src={image.url} />
            </div>
        ))
    }

    return (
        <div className="images-wrapper">
            {images ? getContent() : <div>Loading...</div>}
        </div>
    )
}
export default ImageGrid