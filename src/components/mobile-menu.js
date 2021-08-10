import React from 'react'; 
import '../pages/main.css';
import {Link} from 'react-router-dom';

import bulb from '../assets/img-bulb.png';
import tree from '../assets/img-tree.png';
import biz from '../assets/img-biz.png';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/icon-github.png';
import medium from '../assets/icon-medium.png';
import home from '../assets/icon-home.png';

function MobileMenu() {
return (
    <div className='mobile-menu-wrap'>
        <div className='mobile-menu'>

        <div className='mobile-social-section'>
            {/* eslint-disable-next-line*/} 
            <a href='https://www.linkedin.com/in/joe-ward1/' target="_blank" ><div className='mobile-menu-item'>
                <div className='mobile-icon'><img src={linkedin} alt='LinkedIn'  title={`LinkedIn`} id='mobile-button'/></div>
            </div></a>
            {/* eslint-disable-next-line*/} 
            <a href='https://github.com/jjward25?tab=repositories' target="_blank" ><div className='mobile-menu-item'>
                <div className='mobile-icon'><img src={github} alt='github'  title={`Github`} id='mobile-button'/></div>
            </div></a>
            {/* eslint-disable-next-line*/} 
            <a href='https://medium.com/cultural-commentary' target="_blank" ><div className='mobile-menu-item'>
                <div className='mobile-icon'><img src={medium} alt='medium'  title={`Medium`} id='mobile-button'/></div>
            </div></a>
            <Link to='/'><div className='mobile-menu-item'>
                <div className='mobile-icon'><img src={home} alt='home'  title={`Home`} id='mobile-button'/></div>
            </div></Link>
        </div>

        <div className='mobile-border-grid'>
            <div className='mobile-border-box'></div>
            <div className='mobile-border-images'>
                <img src={bulb} alt='bulb' id='mobile-border-pic'/>
                <img src={tree} alt='tree' id='mobile-border-pic'/>
                <img src={biz} alt='biz' id='mobile-border-pic'/>
            </div>
        </div>



    </div>
    </div>
)};

  export default MobileMenu;