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
          <div></div>
          <div className='services-content'>

            <OnAtLeastTablet className='gear-border-grid'>
                    <div className='gear-border-box'></div>
                    <div className='gear-border-content'>
                        <div className='gear-border-text' id='left'>Operations</div>
                        <img src={gear} alt='gear' id='gear-border-pic'/>
                        <div className='gear-border-text' id='right'>Technology</div>
                    </div>
            </OnAtLeastTablet>
            <OnMobile className='mobile-filler'> </OnMobile> 
            <OnMobile className='services-footer'>
                <div className='services-footer-header'>Every engagement starts with a 30-60 minute consultation.  This meeting serves several purposes: </div>
                <li className='services-footer-bullet'>Formal introductions for us, your business, and your pain points.</li>
                <li className='services-footer-bullet'>An overview of my skills and tools that may be of particular use.</li>
                <li className='services-footer-bullet'>{'Open discussion & actions items.'}</li>
            </OnMobile>

            <div className='skill-content'>
                <div className='skill-left-column'>

                    <OnMobile>  
                        <div className='skill-section'>
                            <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
                            <div className='skill-section-text'>Operations</div>
                        </div>
                    </OnMobile>

                    <div className='skill-buttons-left'>
                        <img src={sixsig} alt='six-sigma' id='services-skill-button' title='Lean/Six-Sigma'/>
                        <img src={pmp} alt='pmp' id='services-skill-button' title='PMP Project Managemnt Professional'/>
                    </div>

                    <div className='skill-textbox'>
                        <div className='skill-text'>{'Strategic Planning & Best Practices Review'}</div>
                        <div className='skill-desc'>{'Maybe you need to build out your reporting, or shore up your procurement practices. We design a custom solution, and compare it to best practices before implementing a final solution.'}</div>
                        
                        <div className='skill-text'>{'Process Mapping & Design'}</div>
                        <div className='skill-desc'>{'Visualize what your team does every day. Every step, every tool, every point where you’re waiting on someone else.  Get everything on paper so we can find the biggest opportunities.'}</div>
                        
                        <div className='skill-text'>{'Qualitative Analyses'}</div>
                        <div className='skill-desc'>{'Use both group and individual feedback, and the flat perspective of process maps to make the best decisions on your toughest questions.'}</div>
                        
                        <div className='skill-text'>{'Continuous Improvement'}</div>
                        <div className='skill-desc'>{'A mix of establishing new meetings, analytics, idea boards, and building other tools to hekp you excute and maintain your improvement efforts.'}</div>
                        
                        <div className='skill-text'>{'Project Management'}</div>
                        <div className='skill-desc'>{'I have experience leading large cross-functional projects and communicating consistently across levels and teams.'}</div>
                    </div>
                </div>
                
                <div></div>

                <div className='skill-right-column'>
                
                   <OnMobile>
                        <div className='skill-section'>
                            <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
                            <div className='skill-section-text'>Technology</div>
                        </div>
                    </OnMobile>

                    <div className='skill-buttons-right'>
                        <img src={sql} alt='sql' id='services-skill-button' title='SQL'/>
                        <img src={tableau} alt='tableau' id='services-skill-button' title='Tableau'/>
                        <img src={python} alt='python' id='services-skill-button' title='Python'/>
                        <img src={figma} alt='figma' id='services-skill-button' title='Figma'/>
                    </div>
                    
                    <div className='skill-textbox'>
                        <div className='skill-text'>{'Data Collection & Visualization'}</div>
                        <div className='skill-desc'>{'Web scraping, pulling from a local database, and displaying  the data either as an analytical tool in Tableau or Excel, or as a story in any format.'}</div>
                        <div className='skill-text'>{'Reporting & Analytics'}</div>
                        <div className='skill-desc'>{'Identifying key metrics and targets; building repeatable reporting processes, tools for ongoing data collection and data management.'}</div>
                        <div className='skill-text'>{'Task Automation'}</div>
                        <div className='skill-desc'>{'Using python, excel or other tools to remove steps in your processes and give you time back.'}</div>
                        <div className='skill-text'>{'Ad Hoc Analyses'}</div>
                        <div className='skill-desc'>{'One-off deep dives to help you find a solution to a tim-sensitive issue or make a core strategic decision.'}</div>
                        <div className='skill-text'>{'Application Design & Development'}</div>
                        <div className='skill-desc'>{'I can create clickable protoype designs in Figma that bring your app ideas to life.  For some simpler projects, I may be able to build it as well.  I built this website.'}</div>
                    </div>
                </div>
            </div>

            <OnAtLeastTablet className='services-footer'>
                <div className='services-footer-header'>Every engagement starts with a 30-60 minute consultation.  This meeting serves several purposes: </div>
                <li className='services-footer-bullet'>Formal introductions for us, your business, and your pain points.</li>
                <li className='services-footer-bullet'>An overview of my skills and tools that may be of particular use.</li>
                <li className='services-footer-bullet'>{'Open Discussion & Actions Items:  Go into anything we wanted to discuss more, and determine anything to be sent or scheduled after the call.'}</li>
            </OnAtLeastTablet>
        </div>

      </div>
  )};

  export default Services;