import "./VarietyTab.css";
import product1 from "/src/assets/Images/product1.png";
import product2 from "/src/assets/Images/product2.png";
import product3 from "/src/assets/Images/product3.png";
import product4 from "/src/assets/Images/product4.png";

const VarietyTab = () => {

    return (<section className="variety-tab">


        <div className="container">

            <div className="grid">
                <div className="padding-tab relative">

                    <img className="position" src={product1} />

                    <div className="variety-coll">
                        <h3 className="coll-txt">Thai Soup</h3>
                        <p className="coll-pa">Lorem ipsum dolor sit amet consectet.</p>
                    </div>
                </div>
                <div className="padding-tab relative">

                    <img className="position" src={product2} />

                    <div className="variety-coll">
                        <h3 className="coll-txt">Sea Food</h3>
                        <p className="coll-pa">Lorem ipsum dolor sit amet consectet.</p>
                    </div>
                </div>
                <div className="padding-tab relative">

                    <img className="position" src={product3} />

                    <div className="variety-coll">
                        <h3 className="coll-txt">Meat Masala</h3>
                        <p className="coll-pa">Lorem ipsum dolor sit amet consectet.</p>
                    </div>
                </div>
                <div className="padding-tab relative">

                    <img className="position" src={product4} />

                    <div className="variety-coll">
                        <h3 className="coll-txt">Vegetarian</h3>
                        <p className="coll-pa">Lorem ipsum dolor sit amet consectet.</p>
                    </div>
                </div>




            </div>





        </div>



    </section>
    )



}

export default VarietyTab;