import React from 'react';
import Logo from "../../../../assets/icons/drinks.svg";
import RouteContent from "./RouteContent/RouteContent";

const Drinks = () => {
    return (
        <RouteContent Logo={Logo} title='Напитки' path='drinks'/>
    );
};

export default Drinks;