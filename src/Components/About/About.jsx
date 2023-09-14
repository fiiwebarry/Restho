
import "./About.css";
import icon from "/src/assets/icon/sub-title-vec.svg";
import about1 from "/src/assets/Images/about1.png";
import about2 from "/src/assets/Images/about2.png";
import about3 from "/src/assets/Images/about3.png";
import about4 from "/src/assets/Images/about4.png";
import abouttab from "/src/assets/Images/about-tab.svg";
import abouttabb from "/src/assets/Images/about-tab2.svg";
import { BsArrowUpRightCircle } from "react-icons/bs";

const About = () => {

    return (

        <section className="">

            <div className="flex-tab-tab container">


                <div className="layer-three-tab">
                    <img className="tab5" src={about2} />
                    <img className="tab6" src={about3} />
                    <img className="tab7" src={about1} />
                    <img className="tab8" src={about4} />
                </div>



                <div className="layer-two-tab">
                    <div className="flex-text2">
                        <img src={icon} />
                        <h3 className="text-into">About To Restho</h3>
                        <img src={icon} />
                    </div>
                    <h1 className="intro-tabb">Come to Our Restaurant, Ready Your Food.</h1>


                    <p className="p-tag-tab">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <div className="flex-raw">
                        <div className="flexer">
                            <div className="tablet">
                                <img src={abouttab} />

                            </div>
                            <div>
                                <h3 className="texter-tab">Pure Fresh Food.</h3>
                                <p className="texter">We are serve different type of fresh food</p>

                            </div>
                        </div>

                        <div className="flexer">
                            <div className="tablet">
                                <img src={abouttabb} />
                            </div>
                            <div>
                                <h3 className="texter-tab">Experties Chef.</h3>
                                <p className="texter">We are serve different type of fresh food.</p>
                            </div>
                        </div>

                    </div>

                    <button className="btn-more3"><BsArrowUpRightCircle />Discover More</button>

                </div>
            </div>




        </section>
    )




}

export default About;