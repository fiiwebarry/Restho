import "./Hero.css";
import { TfiEmail } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowUpRightCircle } from "react-icons/bs";
import logo from "/src/assets/logo/header2-logo.svg";
import icon from "/src/assets/icon/sub-title-vec.svg";
import dish1 from "/src/assets/Images/dish1.png";
import dish2 from "/src/assets/Images/dish2.png";
import dish3 from "/src/assets/Images/dish3.png";
import dish4 from "/src/assets/Images/dish4.png";


const Hero = () => {

    return (
        <section className="Hero-page-tab">
            <div className="container Hero-text flex">
                <div>
                    <h4 className="top-text"><span>Opening Hours:</span> 9.00 am to 10.00 pm</h4>
                </div>

                <div className="flex-position">
                    <div className="flex-dis">

                        <TfiEmail className="color-text" />

                        <h3 className="color">info@example.com</h3>

                    </div>

                    <div className="flex-dis">
                        <GrLocation className="color-text" />
                        <h3 className="color">Road-01, Block-B, West London City</h3>

                    </div>
                </div>


            </div>

            <div className="section-tab">
                <img src={logo} />
                <ul className="menu-tab">
                    <li>Home <RiArrowDropDownLine /></li>
                    <li>About</li>
                    <li>Menu <RiArrowDropDownLine /></li>
                    <li>Pages <RiArrowDropDownLine /></li>
                    <li>Blog <RiArrowDropDownLine /></li>
                    <li>Contact</li>

                </ul>
                <button className="reservebtn">Find Reservation</button>


            </div>

            <div className="layer-tab">

                <div className="layer-one">
                    <img src="" />
                    <img src="" />
                    <img src="" />
                </div>
                <div className="layer-two">
                    <div className="flex-text">
                        <img src={icon} />
                        <h3 className="text-into">Welcome To Restho</h3>
                        <img src={icon} />



                    </div>
                    <h1 className="text-header">Find Your Best Healthy & Tasty Food</h1>

                    <p className="p-tag">It is a long established fact that a reader will be distracted by the readable content of a page.</p>

                    <button className="btn-more"><BsArrowUpRightCircle />Discover More</button>

                </div>
                <div className="layer-three">
                    <img className="tab1" src={dish2} />
                    <img className="tab2" src={dish3} />
                    <img className="tab3" src={dish1} />
                    <img className="tab4" src={dish4} />
                </div>

            </div>


        </section>

    )
}
export default Hero;