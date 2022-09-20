import './styles.css';
import useFetch from "../../hooks/useFetch";
import ImageGrid from '../../components/ImageGrid'

function HomePage() {

    const [data] = useFetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')

    return (
        <div className='home-page'>
            {data ? <ImageGrid images={data} /> : <div>Loading...</div>}
        </div>
    )
}

export default HomePage