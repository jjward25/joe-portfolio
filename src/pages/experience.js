import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';

import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';
import gear from '../assets/gear-icon.png';
import pmp from '../assets/work-pmp.png';
import schwab from '../assets/work-schwab.png';
import tda from '../assets/work-tda.png';
import procurementDash from '../assets/portfolio-tableau-procurement.png';
import adeptWireframe from '../assets/portfolio-figma-adept.png';
import whitepaper from '../assets/portfolio-whitepaper.PNG';
import webscraper from '../assets/portfolio-webscraper.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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
            <OnMobile className='mobile-filler'> </OnMobile>

            <div className='work-icon-wrap'>
                <img src={schwab} alt='schwab' id='work-icon' title='Charles Schwab'/>
                <img src={tda} alt='tda' id='work-icon' title='TD Ameritrade'/>
                <img src={pmp} alt='pmp' id='work-icon' title='Practice Makes Perfect'/>
            </div>

            <div className='experience-text-wrap'>

                <div className='carousel-wrap'>
                    <div className='carousel-title'>Work Samples</div>
                    {/* eslint-disable-next-line*/} 
                    <Carousel showArrows={true} showThumbs={false} showArrows={true} infiniteLoop={true} centerMode={.33} swipeable={true}>
                        {/* eslint-disable-next-line*/} 
                        <a href='https://www.youtube.com/watch?v=j_YyXltl4Is' target='_blank'><div className='carousel-item'>
                            <img src={procurementDash} alt='tableau' id='portfolio-img'/>
                            <div className='legend'>Analytics Dashboard</div>
                        </div></a>
                        {/* eslint-disable-next-line*/} 
                        <a href='https://imgur.com/UB8AKQB' target='_blank'><div className='carousel-item'>
                            <img src={adeptWireframe} alt='adept' id='portfolio-img'/>
                            <div className='legend'>Website Wireframe</div>
                        </div></a>
                        {/* eslint-disable-next-line*/} 
                        <a href='https://medium.com/cultural-commentary/strategic-resiliency-in-large-corporations-6003c35f98f6' target='_blank'><div className='carousel-item'>
                            <img src={whitepaper} alt='adept' id='portfolio-img'/>
                            <div className='legend'>Business Strategy</div>
                        </div></a>
                        {/* eslint-disable-next-line*/} 
                        <a href='https://github.com/jjward25/python-ca_scrapers' target='_blank'><div className='carousel-item'>
                            <img src={webscraper} alt='adept' id='portfolio-img'/>
                            <div className='legend'>Python Webscraper</div>
                        </div></a>
                    </Carousel>
                </div>

                <p className='experience-text'>In the spirit of 'more-is-more' I've focused on gaining a variety of skills and experiences, and I think my breadth of experience makes me particularly well suited to finding creative solutions for any team, industry or personalities.</p>
                <p className='experience-text'>I've been to 6 continents and most states. I worked all through high school and college, and have volunteered with homeless shelters, meal deliveries, summer school providers and others.</p>
                <p className='experience-text'>My first full-time role was a rotation program that gave me experience with a comprehensive improvement initiative for our national sales team, analytics with SQL and Tableau, and formal project management practices.</p>
                <p className='experience-text'>My second role was to set up formal operations for a small non-profit I had previously volunteered with. I led 401k enrollments, recruited new hires, set metrics and targets, and fostered continuous improvement before returning to build TD Ameritrade’s procurement analytics. In this role I developed flexible reporting tools, led key improvement initiatives, and created ad hoc reports for our C-Suite, the SEC, House of Reps, and more.</p>
                <p className='experience-text-bold'>{'Some key accomplishments include: '}</p>
                <li className='experience-list'>{'Leading a project to create new “spend channels” so lower-risk purchases could be completed quicker. The project had several legal implications and impacted multiple teams’ processes, as well as the way any of our 10,000 employees could make purchases that totalled ~$17m annually.'}</li>  
                <li className='experience-list'>Building a flexible, code-and-dashboard based analytics environment, starting from a few existing manual-input excel workbooks at TD Ameritrade.</li>
                <li className='experience-list'>Helping an in-flight Schwab data migration team build out a backlog and project plan to get back on schedule.</li>
                <li className='experience-list'>Using analytics to identify which business partners had the most impact on our processing times and working to improve hand-offs and communication.</li>
                <li className='experience-list'>Designing a process for Schwab Procurement to almost fully automate their reporting processes. I previously had fully automated reporting for TD Ameritrade’s Portfolio Project Management Team.</li>
                <li className='experience-list'>Flew out and met with multiple team members to complete a formal analysis (metrics included) of whether combining two of our teams would be effective and desired.</li>
                <li className='experience-list'>Designing a new client retention strategy for TDA’s education platform based on user behaviour metrics.</li>
                <li className='experience-list'>Writing an analysis that led to a re-structuring of our sales teams' operations to increase Client Facing Time ~5% weekly.</li>
                <li className='experience-list'>Organizing Practice Makes Perfect’s (PMP) first annual fundraiser, making ~$30k on an $8k budget.</li>
                <li className='experience-list'>Starting quarterly HR and process reviews to ensure good culture and ongoing operational improvement.</li>
                <li className='experience-list'>Process mapping every role and creating metrics and targets that worked for our industry and goals.</li>
                <li className='experience-list'>Designed and created wireframes for a News and Education platform. </li>
                <li className='experience-list'>Building this website with React.</li>
            </div>

        </div>
      </div>
  )};

  export default Services;