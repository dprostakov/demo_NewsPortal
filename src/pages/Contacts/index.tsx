import React from "react";

import routeMain from "./routes";
import DmitriyImg from "../../assets/img/backdrop_new.jpg"


import "./styles.scss";

const Contacts = () => {
    return (
        <section className="contactsPage">
            <div className="info">
                <div className="phone">
                    <a href="tel:+380001234567"> +38 (000) 123 45 67</a>
                </div>
                <div className="name">
                    Dmitriy <br/> Prostakov
                </div>
                <div className="mail">
                    <a href="mailto:gmail@gmail.com"> gmail@gmail.com</a>
                </div>
                <div className="position">
                    Front End Developer
                </div>
                <div className="technologies">
                    HTML, CSS, JS
                </div>
            </div>
            <div className="image">
                <img src={DmitriyImg} alt={DmitriyImg} style={{width: "540px", height: "340px"}} />
            </div>
        </section>
    );
  }
  
  export {routeMain};
  
  export default Contacts;