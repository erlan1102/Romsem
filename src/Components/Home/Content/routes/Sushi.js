import React from 'react';
import Logo from "../../../../assets/icons/sushi.svg";
import RouteContent from "./RouteContent/RouteContent";

const Sushi = () => {
    return (
        <RouteContent Logo={Logo} title='Суши' path='sushi'/>
    );
};

export default Sushi;