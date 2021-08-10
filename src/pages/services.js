import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';

import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';
import gear from '../assets/gear-icon.png';
import sixsig from '../assets/img-skill-sixsigma.png';
import pmp from '../assets/img-skill-pmp.png';
import sql from '../assets/img-skill-sql.png';
import tableau from '../assets/img-skill-tableau.png';
import python from '../assets/img-skill-python.png';
import figma from '../assets/img-skill-figma.png';

const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 787,
    desktop: 992,
  });
  
  const OnMobile = layout.is('mobile');
  const OnAtLeastTablet = layout.isAtLeast('tablet');
  
  function Services() {
  return (
      <div className='services-wrap'>

          <OnMobile><MobileMenu/></OnMobile>

          <OnAtLeastTablet>
              <Sidebar/>
          </OnAtLeastTablet>

          <div className='services-content'>

            <OnAtLeastTablet><div className='gear-border-grid'>
                    <div className='gear-border-box'></div>
                    <div className='gear-border-content'>
                        <div className='gear-border-text' id='left'>Operations</div>
                        <img src={gear} alt='gear' id='gear-border-pic'/>
                        <div className='gear-border-text' id='right'>Technology</div>
                    </div>
            </div></OnAtLeastTablet>

            <div className='skill-content'>
                <div className='skill-left-column'>
                    <div className='skill-buttons-left'>
                        <img src={sixsig} alt='six-sigma' id='services-skill-button'/>
                        <img src={pmp} alt='pmp' id='services-skill-button'/>
                    </div>
                    <div className='skill-textbox-left'>
                        <div className='skill-text'>{'Strategic Planning & Best Practices Review'}</div>
                        <div className='skill-text'>{'Process Mapping & Design'}</div>
                        <div className='skill-text'>{'Qualitative Analyses'}</div>
                        <div className='skill-text'>{'Establishing Continuous Improvement'}</div>
                        <div className='skill-text'>{'Formal Policy Design'}</div>
                    </div>
                </div>
                
                <div></div>

                <div className='skill-right-column'>
                    <div className='skill-buttons-right'>
                        <img src={sql} alt='sql' id='services-skill-button'/>
                        <img src={tableau} alt='tableau' id='services-skill-button'/>
                        <img src={python} alt='python' id='services-skill-button'/>
                        <img src={figma} alt='figma' id='services-skill-button'/>
                    </div>
                    <div className='skill-textbox-right'>
                        <div className='skill-text'>{'Data Collection & Visualization'}</div>
                        <div className='skill-text'>{'Reporting & Analytics'}</div>
                        <div className='skill-text'>{'Project Management'}</div>
                        <div className='skill-text'>{'Task Automation'}</div>
                        <div className='skill-text'>{'Ad Hoc Analyses'}</div>
                        <div className='skill-text'>{'Application Design & Development'}</div>
                    </div>
                </div>
            </div>

            <div className='services-footer'>
                <div className='services-footer-header'>Every engagement starts with a 30-60 minute consultation.  This meeting serves several purposes: </div>
                <li className='services-footer-bullet'>Formal introductions for us, your business, and your pain points.</li>
                <li className='services-footer-bullet'>An overview of my skills and tools that may be of particular use.</li>
                <li className='services-footer-bullet'>{'Open Discussion & Actions Items:  Go into anything we wanted to discuss more, and determine anything to be sent or scheduled after the call.'}</li>
            </div>


          </div>
      </div>
  )};

  export default Services;