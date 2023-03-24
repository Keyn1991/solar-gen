
import {Link, useLocation} from "react-router-dom";

import cement from "../../image/roofCover/cement.png";
import ceramic from "../../image/roofCover/ceramic.png";

import karpiowka from "../../image/roofCover/karpiowka.png";
import metal from "../../image/roofCover/metal.png";
import papa from "../../image/roofCover/papa.png";

// import {Button} from "react-bootstrap";


const RoofCoverCompany = () => {

    const {state} = useLocation()
    console.log(state);


    return (

        <div className={'text-main'}>
            <br/>
            <h4>Pokrywa dachu:</h4>
            <br/>
            <br/>

            <div className={"dom-firma"}>
                <div>
                    <p><b>Dachówka ceramiczna</b></p>
                    <Link to="/electricity-company" state={{...state, roofCover: "Dachówka ceramiczna"}}>
                        <img className={'dom-firma-img'} src={ceramic} alt={''}/>
                    </Link>
                    <div className="d-flex justify-content-center">
                    </div>
                </div>

                <div className={'firma'}>
                    <p><b>Dachówka cementowa</b></p>
                    <Link to="/electricity-company" state={{...state, roofCover: "Dachówka cementowa"}}>
                        <img className={'dom-firma-img'} src={cement} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>Dachówka
                        karpiówka</b></p>
                    <Link to="/electricity-company" state={{...state, roofCover: "Dachówka karpiówka"}}>
                        <img className={'dom-firma-img'} src={karpiowka} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>blachodachówka</b></p>
                    <Link to="/electricity-company" state={{...state, roofCover: "blachodachówka"}}>
                        <img className={'dom-firma-img'} src={metal} alt="Firma"/>
                    </Link>
                </div>
                <div className={'firma'}>
                    <p><b>papa</b></p>
                    <Link to="/electricity-company" state={{...state, roofCover: "papa"}}>
                        <img className={'dom-firma-img'} src={papa} alt="Firma"/>
                    </Link>
                </div>
            </div>
            {/*<Button className={'m-5'} variant={"primary"} onClick={() => handleOptionSelect("Dom")}>Cofni</Button>*/}

            {/*<div className="d-flex justify-content-center">*/}
            {/*    <Button variant={"primary"} onClick={handleFormSubmit}>Wyślij*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>



    );
};

export {RoofCoverCompany};