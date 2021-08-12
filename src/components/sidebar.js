import React from 'react';
import './components.css'
import { layoutGenerator } from 'react-break';
import {Link} from 'react-router-dom';
import name from '../assets/joeward.png';
import selfie from '../assets/selfie-circle.png';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/icon-github.png';
import medium from '../assets/icon-medium.png';
import skillbar from '../assets/img-skillbar.png';


const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 787,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');

function Sidebar() {
return (
    <div className='sidebar-wrap'>
    <div className='sidebar'>

        <Link to='/' className='sidebar-title-wrap'><div className='sidebar-title'><img src={name} alt='Joe Ward'  title={`Joe Ward`} id='title-img'/></div></Link>
        <div className='sidebar-selfie'><img src={selfie} alt='TechGear' id='main-img'/></div>
        <div className='sidebar-slogan'>Let's make things, better.</div>

        <div className='social-section'>
            {/* eslint-disable-next-line*/} 
            <a href='https://www.linkedin.com/in/joe-ward1/' target="_blank" ><div className='social-item'>
                <div className='social-icon'><img src={linkedin} alt='LinkedIn'  title={`LinkedIn`} id='social-button'/></div>
                <OnAtLeastTablet className='social-title'>LinkedIn</OnAtLeastTablet>
            </div></a>
            {/* eslint-disable-next-line*/} 
            <a href='https://github.com/jjward25?tab=repositories' target="_blank" ><div className='social-item'>
                <div className='social-icon'><img src={github} alt='github'  title={`Github`} id='social-button'/></div>
                <OnAtLeastTablet className='social-title'>Github</OnAtLeastTablet>
            </div></a>
            {/* eslint-disable-next-line*/} 
            <a href='https://medium.com/cultural-commentary' target="_blank" ><div className='social-item'>
                <div className='social-icon'><img src={medium} alt='medium'  title={`Medium`} id='social-button'/></div>
                <OnAtLeastTablet className='social-title'>Medium</OnAtLeastTablet>
            </div></a>
        </div>

        
        <div className='sidebar-email'>Joseph.Ward@Outlook.com</div>
        <div className='skill-icons'><img src={skillbar} alt='skillbar'  title={`skillbar`} id='skillbar'/></div>
        <div className='call-to-action'>Start with a free consultation to see exactly how my skills and experience can work for you.</div>
 
    </div>
    </div>

)};

export default Sidebar