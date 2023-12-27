import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faGear, faHome, faChartPie, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';



function Menu(props){
    return (
    <nav className='z-10 text-orange text-xl flex flex-col justify-between h-screen fixed top-0 bottom-0 left-0  bg-gray-dark p-[30px]'>
        <ul>
            <li className='mb-[40px] p-4 rounded'>
                <FontAwesomeIcon icon={faStore} />
            </li>
            <li className='text-white bg-orange p-4 mb-[40px] rounded'>
                <FontAwesomeIcon icon={faHome} />
            </li>
            <li className='p-4 mb-[40px] rounded'>
                <FontAwesomeIcon icon={faGear} />
            </li>
            <li className='p-4 mb-[40px] rounded'>
                <FontAwesomeIcon icon={faChartPie} />
            </li>
        </ul>
        <FontAwesomeIcon className='mb-[50px]' icon={faArrowRightFromBracket} />
    </nav>
  );
};

export default Menu;