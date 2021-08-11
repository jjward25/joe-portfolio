import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';

import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';
import gear from '../assets/gear-icon.png';
import citi from '../assets/work-citi.png';
import pmp from '../assets/work-pmp.png';
import schwab from '../assets/work-schwab.png';
import tda from '../assets/work-tda.png';


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
      <div className='experience-wrap'>

        <OnMobile><MobileMenu/></OnMobile>

        <OnAtLeastTablet>
              <Sidebar/>
        </OnAtLeastTablet>
        <div></div>
        <div className='experience-content'>

            <OnAtLeastTablet className='gear-border-grid border-wrap'>
                    <div className='gear-border-box'></div>
                    <div className='gear-border-content'>
                        <div className='gear-border-text' id='left'>Professional</div>
                        <img src={gear} alt='gear' id='gear-border-pic'/>
                        <div className='gear-border-text' id='right'>Experience</div>
                    </div>
            </OnAtLeastTablet>

            <div className='work-icon-wrap'>
                <img src={citi} alt='citi' id='work-icon' title='Citigroup'/>
                <img src={pmp} alt='pmp' id='work-icon' title='Practice Makes Perfect'/>
                <img src={tda} alt='tda' id='work-icon' title='TD Ameritrade'/>
                <img src={schwab} alt='schwab' id='work-icon' title='Charles Schwab'/>
            </div>

            <div className='experience-text-wrap'>
                <p className='experience-text'>{'At TD Ameritrade, I led a project to create new “spend channels” so lower-risk purchases could be done quicker.  The project had several legal implications and impacted multiple teams’ processes, as well as the way any of our 10,000 employees could make purchases that totalled ~$17m annually.'}</p>
                <p className='experience-text'>{'My analyses and reports also helped our team make key decisions on contracts, staffing, strategic priorities, and business partner relationships.'}</p>
                <p className='experience-text-bold'>{'Some key accomplishments include: '}</p>
                <li className='experience-list'>Building a flexible, code-and-dashboard based reporting and analytics environment from a few existing manual-input excel workbooks. </li>
                <li className='experience-list'>Joining projects mid-flight; building out the spend channels above, and later helping a Schwab data migration team build out a backlog and project plan to get back on schedule.</li>
                <li className='experience-list'>Using analytics to identify which business partners had the most impact on our processes and working to improve hand-offs and communication with all of them.</li>
                <li className='experience-list'>Designing a process for Schwab Procurement to almost fully automate their reporting processes. I previously had fully automated reporting for TD Ameritrade’s Portfolio Project Management Team.</li>
                <li className='experience-list'>Designing a new client retention strategy for TDA’s education platform based on user behaviour metrics.</li>
                <li className='experience-list'>Writing an analysis that led to a re-structuring of our sales teams operations to increase Client Facing Time ~5% weekly.</li>
                <li className='experience-list'>Organizing Practice Makes Perfect’s (PMP) first annual fundraiser, making ~$30k on an $8k budget.</li>
                <li className='experience-list'>Starting quarterly HR and process reviews to ensure good culture and ongoing operational improvement.</li>
                <li className='experience-list'>Process mapping every role and created metrics and targets that worked for our industry and goals.</li>
                <li className='experience-list'>Designed and created wireframes for a News and Education platform. </li>
            </div>

        </div>
      </div>
  )};

  export default Services;