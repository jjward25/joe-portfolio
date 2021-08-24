import React from 'react'; 
import '../pages/main.css'
import gear from '../assets/gear-icon.png';
import {Link} from 'react-router-dom';

function MobileHomeNav() {
    return (
    <div className='home-nav'>
        <Link to='/portfolio' className='nav-link'><div className='nav-item'>
            <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
            <div className='nav-text'>{'Testimonials'}</div>
        </div></Link>

        <Link to='/about' className='nav-link'><div className='nav-item'>
            <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
            <div className='nav-text'>About</div>
        </div></Link>
    </div>
    )}

export default MobileHomeNav;