
import "./Gallery.css"
import icon from "/src/assets/icon/sub-title-vec.svg";
import image from "/src/assets/Images/2col-gallery-01.png";
import image1 from "/src/assets/Images/2col-gallery-02.png";
import image2 from "/src/assets/Images/2col-gallery-03.png";
import image6 from "/src/assets/Images/2col-gallery-06.png";

const Gallery = () => {

    return (
        <section className="Gallery">

            <div className="gallery-tab"><img src={icon} />
                <h3 className="text-intro4">Gallery Store</h3>
                <img src={icon} /></div>


            <h2>Our Special Gallery</h2>


            <div className="image-flex">
                <img className="image" src={image6} />
                <img className="image" src={image} />
                <img className="image" src={image} />
                <img className="image" src={image1} />
                <img className="image" src={image2} />



            </div>



        </section>
    )

}
export default Gallery;
