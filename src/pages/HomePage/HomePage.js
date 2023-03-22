import React, { useState } from "react";
import { Link } from "react-router-dom";
import './HomePage.css'
import {Button} from "react-bootstrap";
import axios from "axios";
import dom from '../../image/png/dom.png'
import firma from '../../image/png/firma-removebg-preview.png'
const HomePage = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = { selectedOption };
        axios.post("/api/send-email", formData)
            .then((response) => {
                console.log("Email sent successfully");
            })
            .catch((error) => {
                console.log("Error sending email: ", error);
            });
    };

    return (
        <div className={'text-main'}>

            <br/>

            <h4>Wybierz instalację dla:</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>DOMU</b></p>
                    <Link to="/private">
                        <img className={'dom-firma-img'} src={dom}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>FIRMY</b></p>
                    <Link to="/commercial">
                        <img className={'dom-firma-img'} src={firma} alt="Firma"/>

                    </Link>

                </div>
            </div>
                        <Button className={'m-5'} variant={"primary"} onClick={() => handleOptionSelect("Dom")}>Cofni</Button>

            {/*<div className="d-flex justify-content-center">*/}
            {/*    <Button variant={"primary"} onClick={handleFormSubmit}>Wyślij*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>
    );
};
export {HomePage};