
import "./item.css";
import image1 from "/src/assets/Images/Regular1.png";
import image2 from "/src/assets/Images/Regular2.png";
import image3 from "/src/assets/Images/Regular3.png";

import icon from "/src/assets/icon/sub-title-vec.svg";

const Item = () => {


    return (

        <section className="items-tab">

            <div>
                <div className="text-flex">
                    <img src={icon} />
                    <h3 className="text-into">Our New Item</h3>
                    <img src={icon} />
                </div>
                <div className="res">
                    <h2 className="Restho">Restho New Item List</h2>
                </div>
                <div className="rest">
                    <p className="Restho-tab">Various versions have evolved over the years, sometimes on purpose.</p>
                </div>
            </div>

            <div className="container maper">

                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
            </div>




        </section>)

}
export default Item;