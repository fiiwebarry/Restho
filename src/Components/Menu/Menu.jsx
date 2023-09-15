import "./Menu.css";
import icon from "/src/assets/icon/sub-title-vec.svg";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { menuData } from "./menuData";
import { menuDatabox } from "./menuData";

const Menu = () => {

    return (

        <section className="Menu-page">

            <div className="Menu-into container">
                <div className="Menu-flex-tab">
                    <div>
                        <div className="Menu-flex">
                            <img src={icon} />
                            <h3 className="text-intro">Menu List</h3>
                            <img src={icon} />

                        </div>
                        <h2 className="Menu-item"> Find Your Food Item</h2>
                    </div>

                    <div>

                        <button className="btn-menu"><BsArrowUpRightCircle />Discover More</button>
                    </div>

                </div>


            </div>

            <div className="container menu-tabb">

                {menuData.map((menu) => {

                    const { id, Image, text, content } = menu;
                    return (
                        <div key={id}>
                            <img className="tab-image" src={Image} />
                            <div className="tab-text">
                                <h2 className="prawn">{text}</h2>
                                <p className="prawn-tab">{content}</p>
                            </div>

                        </div>
                    )

                })}




            </div>
            <div className="flex-box container">
                {menuDatabox.map((menu) => {

                    const { id, Image, text, content } = menu;
                    return (
                        <div key={id}>
                            <img className="tab-image" src={Image} />
                            <div className="tab-text">
                                <h2 className="prawn">{text}</h2>
                                <p className="prawn-tab">{content}</p>
                            </div>

                        </div>
                    )

                })}
            </div>



        </section>
    )
}

export default Menu;