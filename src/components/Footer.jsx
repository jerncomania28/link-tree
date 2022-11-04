

import Zuri from "../assets/zuri.png";
import Ingressive from "../assets/ingressive.png";

// stylesheet
import "./Footer.css";


const Footer = () => {
    return (

        <div className="app-zuri">
            <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={Zuri} alt="zuri-internship" />
            </a>

            <p>HNG Internship 9 Frontend Task</p>

            <a href="/" target="_blank" rel="noopener noreferrer">
                <img src={Ingressive} alt="ingressive" />
            </a>
        </div>

    )

}



export default Footer;