import React from 'react'; 
import '../pages/main.css'
import gear from '../assets/gear-icon.png';
import {Link} from 'react-router-dom';

function MobileHomeNav() {
    return (
    <div className='home-nav'>
        <Link to='/portfolio' className='nav-link'><div className='nav-item'>
            <div className='nav-text'>{'Testimonials'}</div>
        </div></Link>

        <Link to='/about' className='nav-link'><div className='nav-item'>
            <div className='nav-text'>About Joe</div>
        </div></Link>
    </div>
    )}

export default MobileHomeNav;