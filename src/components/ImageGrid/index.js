function ImageGrid({ images }) {

    return (

        <div className="images-wrapper">
            {images.map(image => (
                <div className='image-wrapper' key={image.id}>
                    <img className='image' src={image.url} />
                </div>
            )
            )}
        </div>
    )
}
export default ImageGrid