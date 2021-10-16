import React from 'react';
import './components.css'
import {Link} from 'react-router-dom';
import name from '../assets/joeward.png';
import selfie from '../assets/selfie-circle.png';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/icon-github.png';
import skillbar from '../assets/img-skillbar.png';

function Sidebar() {
return (
    
    <div className='sidebar'>

        <Link to='/' className='sidebar-title-wrap'><div className='sidebar-title'><img src={name} alt='Joe Ward'  title={`Joe Ward`} id='title-img'/></div></Link>
        <div className='sidebar-selfie'><img src={selfie} alt='TechGear' id='main-img'/></div>
        <div className='sidebar-email'>Joseph.Ward@Outlook.com</div>

        <div className='social-section'>
            {/* eslint-disable-next-line*/} 
            <a href='https://www.linkedin.com/in/joe-ward1/' target="_blank" ><div className='social-item'>
                <div className='social-icon'><img src={linkedin} alt='LinkedIn'  title={`LinkedIn`} id='social-button'/></div>
                <div className='social-title'>LinkedIn</div>
            </div></a>
            {/* eslint-disable-next-line*/} 
            <a href='https://github.com/jjward25?tab=repositories' target="_blank" ><div className='social-item'>
                <div className='social-icon'><img src={github} alt='github'  title={`Github`} id='social-button'/></div>
                <div className='social-title'>Github</div>
            </div></a>
        </div>

        <div className='sidebar-slogan'>Let's make things, better.</div>
        <div className='skill-icons'><img src={skillbar} alt='skillbar'  title={`skillbar`} id='skillbar'/></div>
        <div className='call-to-action'>Start with a free consultation to see exactly how my skills and experience can work for you.</div>
 
    </div>
    

)};

export default Sidebar