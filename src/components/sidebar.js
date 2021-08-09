import React from 'react';
import './sidebar.css'
import { layoutGenerator } from 'react-break';

import name from '../assets/joeward.png';
import selfie from '../assets/selfie-circle.png';
import linkedin from '../assets/icon-linkedin.png';
import github from '../assets/icon-github.png';
import medium from '../assets/icon-medium.png';
import skillbar from '../assets/img-skillbar.png';


const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');

function Sidebar() {
return (

    <div className='sidebar'>

        <div className='sidebar-title'><img src={name} alt='Joe Ward'  title={`Joe Ward`} id='title-img'/></div>
        <div className='sidebar-selfie'><img src={selfie} alt='TechGear' id='main-img'/></div>
        <div className='sidebar-email'>Joseph.Ward@Outlook.com</div>

        <div className='social-section'>
            <div className='social-item'>
                <div className='social-icon'><img src={linkedin} alt='LinkedIn'  title={`LinkedIn`} id='social-button'/></div>
                <OnAtLeastTablet className='social-title'>LinkedIn</OnAtLeastTablet>
            </div>
        
            <div className='social-item'>
                <div className='social-icon'><img src={github} alt='github'  title={`Github`} id='social-button'/></div>
                <OnAtLeastTablet className='social-title'>Github</OnAtLeastTablet>
            </div>
        

            <div className='social-item'>
                <div className='social-icon'><img src={medium} alt='medium'  title={`Medium`} id='social-button'/></div>
                <OnAtLeastTablet className='social-title'>Medium</OnAtLeastTablet>
            </div>
        </div>

        <div className='sidebar-slogan'>Let's make things, better.</div>
        <div className='skill-icons'><img src={skillbar} alt='skillbar'  title={`skillbar`} id='skillbar'/></div>
        <div className='call-to-action'>Start with a free 30 minute consultation to see exactly how my skills and experience can work for you.</div>
 
    </div>

)};

export default Sidebar