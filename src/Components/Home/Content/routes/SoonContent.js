import React from 'react';
import Logo from "../../../../assets/icons/sale.svg";
import RouteContent from "./RouteContent/RouteContent";

const SoonContent = () => {
    return (
        <>
            <RouteContent Logo={Logo} title='Акции' path='sale'/>
            <span className='content__card-title'>Товаров не найдено!</span>
            </>
    );
};

export default SoonContent;