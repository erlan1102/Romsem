import React from 'react';
import Logo from "../../../../assets/icons/soup.svg";
import RouteContent from "./RouteContent/RouteContent";

const Soup = () => {
    return (
        <RouteContent Logo={Logo} title='Супы' path='soup'/>
    );
};

export default Soup;