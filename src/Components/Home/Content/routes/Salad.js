import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from "../../../../assets/icons/salad.svg";

const Salad = () => {
    return (
        <RouteContent Logo={Logo} title='Салаты' path='salad'/>
    );
};

export default Salad;