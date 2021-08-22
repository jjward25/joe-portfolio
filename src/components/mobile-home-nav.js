import React from 'react'; 
import '../pages/main.css'
import gear from '../assets/gear-icon.png';
import {Link} from 'react-router-dom';
import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 787,
    desktop: 992,
  });
  
  const OnAtLeastTablet = layout.isAtLeast('tablet');

function MobileHomeNav() {
    return (
    <div className='home-nav'>
        <Link to='/portfolio' className='nav-link'><div className='nav-item'>
            <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
            <div className='nav-text'>{'Testimonials'}</div>
        </div></Link>

        <Link to='/about' className='nav-link'><div className='nav-item'>
            <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
            <div className='nav-text'>About Joe</div>
        </div></Link>
    </div>
    )}

export default MobileHomeNav;