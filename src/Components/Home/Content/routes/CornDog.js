import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from "../../../../assets/icons/corndog.svg";
const CornDog = () => {
    return (
        <RouteContent Logo={Logo} title='Корн доги' path='corndog'/>
    );
};

export default CornDog;