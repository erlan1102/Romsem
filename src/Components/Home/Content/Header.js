import React,{useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import './header.css';
import axios from "axios";

const Header = () => {
    const [search, setSearch] = useState(false);
    const [all, setAll] =useState([]);
    const [searchVal, setSearchVal] = useState('');

    const searchHandler = (text) => {
        if (text){
            axios('http://localhost:8080/all')
                .then(({data})=> setAll (Object.values(data).reduce((acc, rec)=> {
                    return [...acc, rec.filter((item)=> item.title.toUpperCase().startsWith(text.toUpperCase()))]
                },[]).flat()))
        } else {
            setAll([]);
        }

    };

    return (
        <header className='header'>
            <div className='header__left'>
                <div className='header__phone'>
                    <p className='header__phone-title'>Наш телефон</p>
                    <a className='header__phone-tel' href="tel: +996 705 188 955">+996 705 188 955</a>
                    <a className='header__phone-tel' href="tel: +996 555 188 955">+996 555 188 955</a>
                    <p className='header__phone-time'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.49992 2.44565C7.67926 2.44565 7.826 2.29891 7.826 2.11956V1.95652C7.826 1.77717 7.67926 1.63043 7.49992 1.63043C7.32057 1.63043 7.17383 1.77717 7.17383 1.95652V2.11956C7.17383 2.29891 7.32057 2.44565 7.49992 2.44565Z" fill="#FF9846"/>
                            <path d="M7.49992 12.5544C7.32057 12.5544 7.17383 12.7011 7.17383 12.8804V13.0435C7.17383 13.2228 7.32057 13.3696 7.49992 13.3696C7.67926 13.3696 7.826 13.2228 7.826 13.0435V12.8804C7.826 12.7011 7.67926 12.5544 7.49992 12.5544Z" fill="#FF9846"/>
                            <path d="M2.1195 7.17391H1.95646C1.77711 7.17391 1.63037 7.32065 1.63037 7.5C1.63037 7.67935 1.77711 7.82609 1.95646 7.82609H2.1195C2.29885 7.82609 2.44559 7.67935 2.44559 7.5C2.44559 7.32065 2.29885 7.17391 2.1195 7.17391Z" fill="#FF9846"/>
                            <path d="M13.0436 7.17391H12.8805C12.7012 7.17391 12.5544 7.32065 12.5544 7.5C12.5544 7.67935 12.7012 7.82609 12.8805 7.82609H13.0436C13.2229 7.82609 13.3697 7.67935 13.3697 7.5C13.3697 7.32065 13.2229 7.17391 13.0436 7.17391Z" fill="#FF9846"/>
                            <path d="M3.81533 3.3587C3.6849 3.22826 3.48925 3.22826 3.35881 3.3587C3.22838 3.48913 3.22838 3.68479 3.35881 3.81522L3.47294 3.92935C3.53816 3.99457 3.61968 4.02718 3.7012 4.02718C3.78273 4.02718 3.86425 3.99457 3.92946 3.92935C4.0599 3.79892 4.0599 3.60326 3.92946 3.47283L3.81533 3.3587Z" fill="#FF9846"/>
                            <path d="M3.47294 11.0707L3.35881 11.1848C3.22838 11.3152 3.22838 11.5109 3.35881 11.6413C3.42403 11.7065 3.50555 11.7391 3.58707 11.7391C3.6686 11.7391 3.75012 11.7065 3.81533 11.6413L3.92946 11.5272C4.0599 11.3967 4.0599 11.2011 3.92946 11.0707C3.79903 10.9402 3.60338 10.9402 3.47294 11.0707Z" fill="#FF9846"/>
                            <path d="M11.1849 3.3587L11.0707 3.47283C10.9403 3.60326 10.9403 3.79892 11.0707 3.92935C11.1359 3.99457 11.2175 4.02718 11.299 4.02718C11.3805 4.02718 11.462 3.99457 11.5272 3.92935L11.6414 3.81522C11.7718 3.68479 11.7718 3.48913 11.6414 3.3587C11.5109 3.22826 11.3153 3.22826 11.1849 3.3587Z" fill="#FF9846"/>
                            <path d="M7.826 7.36957V4.40218C7.826 4.22283 7.67926 4.07609 7.49992 4.07609C7.32057 4.07609 7.17383 4.22283 7.17383 4.40218V7.5C7.17383 7.58152 7.20644 7.66305 7.27165 7.72826L10.8423 11.2989C10.9075 11.3641 10.989 11.3967 11.0706 11.3967C11.1521 11.3967 11.2336 11.3641 11.2988 11.2989C11.4293 11.1685 11.4293 10.9728 11.2988 10.8424L7.826 7.36957Z" fill="#FF9846"/>
                            <path d="M7.5 0C3.3587 0 0 3.3587 0 7.5C0 11.6413 3.3587 15 7.5 15C11.6413 15 15 11.6413 15 7.5C15 3.3587 11.6413 0 7.5 0ZM7.5 14.3478C3.71739 14.3478 0.652174 11.2826 0.652174 7.5C0.652174 3.71739 3.71739 0.652174 7.5 0.652174C11.2826 0.652174 14.3478 3.71739 14.3478 7.5C14.3478 11.2826 11.2826 14.3478 7.5 14.3478Z" fill="#FF9846"/>
                        </svg>
                        работаем с 10:00 до 00:00
                    </p>
                </div>
                <div className='header__address'>
                    <p className='header__address-title'>Город:</p>
                    <p className='header__address-city'>Бишкек</p>
                </div>
            </div>
            <div className='header__right'>
                <ul className='header__list'>
                    <li className='header__list-item'>
                        <NavLink className='header__link' to='/reviews'>Отзывы</NavLink>
                    </li>
                    <li className='header__list-item'>
                        <Link className='header__link' to='/express'>Доставка и оплата</Link>
                    </li>
                </ul>
                <div className='header__search'>
                    <input value={searchVal} style={{display: `${search ? 'inline-block' : 'none'}`}} type="search" className='header__search-input' onChange={(e)=> {
                        searchHandler(e.target.value);
                        setSearchVal(e.target.value)
                    }}/>
                    <button className='header__search-btn' type='button' onClick={()=> setSearch(!search)}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M29.8169 28.9331L20.6888 19.805C22.5848 17.6999 23.75 14.9244 23.75 11.875C23.75 5.32717 18.4229 0 11.875 0C5.32717 0 0 5.32717 0 11.875C0 18.4229 5.32717 23.75 11.875 23.75C14.9244 23.75 17.6999 22.5848 19.805 20.6888L28.9331 29.8169C29.0552 29.9389 29.2151 30 29.375 30C29.5349 30 29.6948 29.9389 29.817 29.8169C30.0611 29.5727 30.0611 29.1772 29.8169 28.9331ZM11.875 22.5C6.01688 22.5 1.25004 17.7337 1.25004 11.875C1.25004 6.01629 6.01688 1.24998 11.875 1.24998C17.7332 1.24998 22.5 6.01623 22.5 11.875C22.5 17.7338 17.7332 22.5 11.875 22.5Z" fill="#A4ACAD"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4_29">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <ul style={{display: `${search && all.length  ? 'flex' : 'none'}`}} className='header__search-list'>
                        {all.map((item,idx)=> (
                            <li key={idx} className='header__search-list-item'>
                                <Link to={`${item.categories}/product/${item.id}`} onClick={()=> {
                                    setSearch(false);
                                    setSearchVal('');
                                    setAll([])
                                }}>
                                    <img className='header__search-list-img' src={item.imageURL} alt=""/>
                                </Link>

                                <div className='header__search-list-info'>
                                    <h2 className='header__search-list-title'>{item.title}</h2>
                                    <p className='header__search-list-price'>{item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;