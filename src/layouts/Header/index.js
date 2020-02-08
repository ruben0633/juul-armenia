import React from 'react';
import { NavLink } from 'react-router-dom';

import {us, am} from '../../assets';
import { GoPlus } from 'react-icons/go';
import { FaBuffer } from 'react-icons/fa';
import { Image } from '../../components';
import { FiShoppingCart } from 'react-icons/fi';
import { TiLocationOutline, TiSupport } from 'react-icons/ti';

import '../../variablrs.scss';
import './style.scss';

const Header = () => {
    return (
       <div className='Header'>
           <div className='headerPagesBlock '>
                <div className='border'>
                    <div className='bar flexible jBetween page-content'>
                        <div className='left-bar'> 
                            <ul className='flexible'>
                            <a><li className='flexible aCenter'> <TiLocationOutline className ='barIcon'/>STORE LOCATOR</li></a> 
                            <a><li className='flexible aCenter'> <GoPlus className ='barIcon'/>REGISTER A PRODUCT</li></a>
                                <a><li className='flexible aCenter'><FaBuffer className ='barIcon'/> REFFER AN ADULT SMOKER</li></a>
                            </ul>
                        </div>
                        <div className='right-bar'>
                            <ul className='flexible'>
                                <a><li className='flexible aCenter'><TiSupport className ='barIcon'/>SUPPORT</li></a>
                                <a><li className='flexible aCenter'><Image src={us} width='30px' height='20' className='barIcon'/>US</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='border'>
                    <div className='second-bar flexible jBetween page-content'>
                        <div className='left-bar flexible'> 
                          <Image className='logo' src='https://assets.juul.com/ctf/images/tc11z0kp0vll/2qMDbPuGafzl3IU87UNjWW/cebeed28b9e725c6e1f6fda16a38ee48/juul-logo.svg'/>
                          <ul className='flexible'>
                            <li>OUR MISSION</li>
                            <li>OUR PRODUCT</li>
                            <li>OUR COMMUNITY</li>
                            <li>ABOUT US</li>
                            <li>SHOP</li>
                            <li>ABOUT SHIP</li>
                          </ul>  
                        </div>
                        <div className='right-bar'>
                           <ul className='flexible'>
                               <li>SIGN IN</li>
                               <li><FiShoppingCart className ='barIcon'/></li>
                           </ul>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    )
};

export default Header;