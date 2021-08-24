import React from 'react'; 
import './main.css'
import { layoutGenerator } from 'react-break';
import Sidebar2 from '../components/sidebar-mobile';
import Sidebar from '../components/sidebar';
import bulb from '../assets/img-bulb.png';
import tree from '../assets/img-tree.png';
import biz from '../assets/img-biz.png';
import sixsig from '../assets/img-skill-sixsigma.png';
import pmp_pmi from '../assets/img-skill-pmp.png';
import sql from '../assets/img-skill-sql.png';
import tableau from '../assets/img-skill-tableau.png';
import python from '../assets/img-skill-python.png';
import pmp_logo from '../assets/work-pmp.png';
import schwab from '../assets/work-schwab.png';
import tda from '../assets/work-tda.png';
import procurementDash from '../assets/portfolio-tableau-procurement.png';
import adeptWireframe from '../assets/portfolio-figma-adept.png';
import adeptProcessMap from '../assets/portfolio-figma-process-map.PNG';
import whitepaper from '../assets/portfolio-whitepaper.PNG';
import webscraper from '../assets/portfolio-webscraper.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MobileHomeNav from '../components/mobile-home-nav';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 787,
  desktop: 992, 
});

const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');

function Home() {
return (
    <div className='desktop-home'>
        
        <OnMobile><MobileHomeNav></MobileHomeNav></OnMobile>
        <OnAtLeastTablet><Sidebar/></OnAtLeastTablet>
        <OnMobile><Sidebar2/></OnMobile>
        
        <div className='home-content'>

            <OnAtLeastTablet className='border-grid'>
                <div className='border-box'></div>
                <div className='border-images'>
                    <img src={bulb} alt='bulb' id='border-pic'/>
                    <img src={tree} alt='tree' id='border-pic'/>
                    <img src={biz} alt='biz' id='border-pic'/>
                </div>
            </OnAtLeastTablet>
            
            <OnAtLeastTablet className='home-text-wrap'> 
                <div className='home-text'>Do you need help maximizing your data? A one-off strategic analysis, process review, or task automation? 
                These are some of the things I can help with as a consultant and experienced project manager.
                Working as a team, we will identify, prioritize, and implement creative and custom solutions to your team's biggest problems.
                </div>
            </OnAtLeastTablet>

            <OnAtLeastTablet>
                <MobileHomeNav></MobileHomeNav>
            </OnAtLeastTablet>

            <OnMobile><div className='job-buttons'> 
                    <OnAtLeastTablet><div className='icon-label'>Past<br></br>Employment</div></OnAtLeastTablet>
                    <OnMobile><div className='icon-label'>Past Employment</div></OnMobile>
                    <div className='work-icon-wrap'>    
                        <img src={schwab} alt='schwab' id='work-icon' title='Charles Schwab'/>
                        <img src={tda} alt='tda' id='work-icon' title='TD Ameritrade'/>
                        <img src={pmp_logo} alt='pmp' id='work-icon' title='Practice Makes Perfect'/>
                    </div>
            </div></OnMobile>

            <div className= 'skill-grid'>
                <OnAtLeastTablet><div className='skill-logos'>
                    <div className='skills-label'>Primary Skills</div>
                    <img src={tableau} alt='tableau' id='services-skill-button' title='Tableau'/>
                    <img src={python} alt='python' id='services-skill-button' title='Python'/>
                    <img src={sql} alt='sql' id='services-skill-button' title='SQL'/>
                </div></OnAtLeastTablet>
                <div className='skill-main'>
                    <div className='home-text-wrap'>
                        <div className='skill-header'>Sample Technical Projects</div>
                        <li className='skill-list'>Creating an update-able reporting environment using existing extracts and free tools only.</li>
                        <li className='skill-list'>Pulling data via python webscrapers or public APIs; combining with industry research for ad hoc analyses.</li>
                        <li className='skill-list'>One-time internal deep-dives; measuring effiency, process times, wait times, whatever's available to dig for opportunities.</li>
                    </div>

                    <OnMobile><div className='skill-logos'>
                        <div className='skills-label'>Primary Skills</div>
                        <img src={tableau} alt='tableau' id='services-skill-button' title='Tableau'/>
                        <img src={python} alt='python' id='services-skill-button' title='Python'/>
                        <img src={sql} alt='sql' id='services-skill-button' title='SQL'/>
                    </div></OnMobile>
                    <div className='carousel-wrap'>
                            {/* eslint-disable-next-line*/} 
                            <Carousel className='carousel-inner-wrap' showArrows={true} showThumbs={false} showArrows={true} infiniteLoop={true} centerMode={.33} swipeable={true}>
                                {/* eslint-disable-next-line*/} 
                                <a href='https://www.youtube.com/watch?v=j_YyXltl4Is' target='_blank'><div className='carousel-item'>
                                    <img src={procurementDash} alt='tableau' id='portfolio-img'/>
                                    <div className='legend'>Analytics Dashboard</div>
                                </div></a>
                                {/* eslint-disable-next-line*/} 
                                <a href='https://i.imgur.com/UB8AKQB.png' target='_blank'><div className='carousel-item'>
                                    <img src={adeptWireframe} alt='adept' id='portfolio-img'/>
                                    <div className='legend'>Website Wireframe</div>
                                </div></a>
                                {/* eslint-disable-next-line*/} 
                                <a href='https://github.com/jjward25/python-ca_scrapers' target='_blank'><div className='carousel-item'>
                                    <img src={webscraper} alt='adept' id='portfolio-img'/>
                                    <div className='legend'>Python Webscraper</div>
                                </div></a>
                            </Carousel>
                        </div>
                    </div>

                <OnAtLeastTablet><div className='job-buttons'> 
                    <div className='work-icon-wrap'>
                        <div className='icon-label'>Past<br></br>Employment</div>
                        <img src={schwab} alt='schwab' id='work-icon' title='Charles Schwab'/>
                        <img src={tda} alt='tda' id='work-icon' title='TD Ameritrade'/>
                        <img src={pmp_logo} alt='pmp' id='work-icon' title='Practice Makes Perfect'/>
                    </div>
                </div></OnAtLeastTablet>

                <OnAtLeastTablet><div className='skill-logos'>
                    <div className='skills-label'>Primary Skills</div>
                    <img src={sixsig} alt='six-sigma' id='services-skill-button' title='Lean/Six-Sigma'/>
                    <img src={pmp_pmi} alt='pmp' id='services-skill-button' title='PMP Project Managemnt Professional'/>
                </div></OnAtLeastTablet>
                <div className='skill-main'>
                    <div className='home-text-wrap'>
                        <div className='skill-header'>Sample Consulting Projects</div>
                        <li className='skill-list'>Building out new procurement channels for ~$17m worth of annual spend in a cross-functional project affecting all 10,000 employees at TD Ameritrade.</li>
                        <li className='skill-list'>Conducted sensitive interviews to determine if merging two teams was workable and in everyone's best interest.</li>
                        <li className='skill-list'>Strategic Reviews: Individual and team interviews; process mapping; rough solutions design; research industry best practices; review and final design; implementation.</li>
                        <li className='skill-list'>Sitting down with team members, mapping out daily processes and finding and implementing efficiency-focused solutions (task automation or re-design) in a transparent and inclusive way.</li>
                    </div>

                    <OnMobile><div className='skill-logos'>
                        <div className='skills-label'>Primary Skills</div>
                        <img src={sixsig} alt='six-sigma' id='services-skill-button' title='Lean/Six-Sigma'/>
                        <img src={pmp_pmi} alt='pmp' id='services-skill-button' title='PMP Project Managemnt Professional'/>
                     </div></OnMobile>
                    
                    <div className='carousel-wrap'>
                        {/* eslint-disable-next-line*/} 
                        <Carousel  className='carousel-inner-wrap' showArrows={true} showThumbs={false} showArrows={true} infiniteLoop={true} centerMode={.33} swipeable={true}>
                            {/* eslint-disable-next-line*/} 
                            <a href='https://medium.com/cultural-commentary/strategic-resiliency-in-large-corporations-6003c35f98f6' target='_blank'><div className='carousel-item'>
                                <img src={whitepaper} alt='adept' id='portfolio-img'/>
                                <div className='legend'>Business Strategy</div>
                            </div></a>
                            {/* eslint-disable-next-line*/} 
                            <a href='https://i.imgur.com/DGgdJD4.png' target='_blank'><div className='carousel-item'>
                                <img src={adeptProcessMap} alt='process map' id='portfolio-img'/>
                                <div className='legend'>{'Process Mapping & Design'}</div>
                            </div></a>
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>

        
    </div>
)};

export default Home;