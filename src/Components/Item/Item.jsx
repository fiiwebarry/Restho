
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
                <div>
                    <img src={image1} />
                    <div className="tab">
                        <h3>Soup with Egg</h3>
                        <p>It is a long established fact that a reader will be distracted.</p>
                    </div>

                </div>

                <div>
                    <img src={image2} />
                    <div className="tab">
                        <h3>Prawn Fried</h3>
                        <p>It is a long established fact that a reader will be distracted.</p>
                    </div>
                </div>
                <div>
                    <div className="tab">
                        <img src={image3} />
                        <h3>Prawn with Noodles</h3>
                        <p>It is a long established fact that a reader will be distracted.</p>
                    </div>

                </div>

            </div>









        </section >)

}
export default Item;