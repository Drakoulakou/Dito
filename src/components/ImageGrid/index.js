import './styles.css';
import { useContext } from "react";
import { Context } from '../../App';
import Image from './components/Image';

function ImageGrid() {
    const { images } = useContext(Context);

    function getContent() {
        return images.map(image => (
            <Image image={image} />
        ))
    }

    return (
        <div className="images-wrapper">
            {images ? getContent() : <div>Loading...</div>}
        </div>
    )
}
export default ImageGrid