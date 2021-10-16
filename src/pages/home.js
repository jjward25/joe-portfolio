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
import pythonAPI from '../assets/portfolio-python-api.PNG';
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
            <div className='home-top-wrap'>
                <OnAtLeastTablet className='border-grid-home'>
                    <div className='border-box-home'></div>
                    <div className='border-images-home'>
                        <img src={bulb} alt='bulb' id='border-pic-home'/>
                        <img src={tree} alt='tree' id='border-pic-home'/>
                        <img src={biz} alt='biz' id='border-pic-home'/>
                    </div>
                </OnAtLeastTablet>
                <OnAtLeastTablet className='home-text-wrapper'> 
                    <div className='home-text'>
                        <p className='home-text-block'>Working as a team, we will identify, prioritize, and implement <b style={{color:'lightgrey'}}>creative, custom solutions</b> to your team's biggest problems.</p>
                    </div>
                </OnAtLeastTablet>
                <div className= 'skill-grid'> 
                <div className='skill-main'>
                    <div id='skill-header'>Sample Projects:</div>
                        <div className='home-text-wrap'> 
                            <li className='skill-list'>Creating stable, repeatable reporting and analytics using available data and free tools (ie: Tableau). </li>
                            <li className='skill-list'>Pulling external data via python webscrapers or public APIs.</li>
                            <li className='skill-list'>{'Broad Strategic Reviews: Individual and team interviews, process mapping, solutions design, industry best practices, review and final design, then implementation of the designed solution.'}</li>
                            <li className='skill-list'>Ad Hoc Analyses and Deep-Dives: measuring effiency, process times, widgets, whatever's available to dig for opportunities in specific areas, then combining this information with industry research for a best-in-class solution.</li>
                        </div>
                        <div className='carousel-wrap'>
                            {/* eslint-disable-next-line*/} 
                            <Carousel className='carousel-inner-wrap' showArrows={true} showThumbs={false} showArrows={true} infiniteLoop={true} centerMode={.33} swipeable={true}>
                                <a href='https://imgur.com/a/uMF7jUq' target='_blank' rel='noreferrer'><div className='carousel-item'>
                                    <img src='https://i.imgur.com/axXKT0E.png' alt='tableau-shopify' id='portfolio-img'/>
                                    <div className='legend'>Advanced Shopify Analytics</div>
                                </div></a>
                                <a href='https://i.imgur.com/DGgdJD4.png' target='_blank' rel='noreferrer'><div className='carousel-item'>
                                    <img src={adeptProcessMap} alt='process map' id='portfolio-img'/>
                                    <div className='legend'>{'Process Mapping & Design'}</div>
                                </div></a>
                                <a href='https://medium.com/cultural-commentary/strategic-resiliency-in-large-corporations-6003c35f98f6' target='_blank' rel='noreferrer'><div className='carousel-item'>
                                    <img src={whitepaper} alt='adept' id='portfolio-img'/>
                                    <div className='legend'>Business Strategy</div>
                                </div></a>
                                <a href='https://github.com/jjward25/python-ca_scrapers' target='_blank' rel='noreferrer'><div className='carousel-item'>
                                    <img src={webscraper} alt='adept' id='portfolio-img'/>
                                    <div className='legend'>Python Webscraper</div>
                                </div></a>
                                <a href='https://github.com/jjward25/python.crypto-data' target='_blank' rel='noreferrer'><div className='carousel-item'>
                                    <img src={pythonAPI} alt='crypto-api-python' id='portfolio-img'/>
                                    <div className='legend'>Crypto Market Data API Pull</div>
                                </div></a>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className='work-wrap'>
                <div className='icon-header'>Past Employment</div>
                <div className='work-icon-wrap'>    
                    <p className='work-item-wrap'><img src={schwab} alt='schwab' id='work-icon' title='Charles Schwab'/>Charles Schwab</p>
                    <p className='work-item-wrap'><img src={tda} alt='tda' id='work-icon' title='TD Ameritrade'/>TD Ameritrade</p>
                    <p className='work-item-wrap'><img src={pmp_logo} alt='pmp' id='work-icon' title='Practice Makes Perfect'/>Practice Makes Perfect</p>
                </div>
            </div>
            <div className='skill-wrap'>
                <div className='icon-header'>{'Skills & Certs'}</div>
                <div className='skill-icon-wrap'>
                    <p className='skill-item-wrap'><img src={tableau} alt='tableau' id='services-skill-button' title='Tableau'/>Tableau</p>
                    <p className='skill-item-wrap'><img src={python} alt='python' id='services-skill-button' title='Python'/>Python</p>
                    <p className='skill-item-wrap'><img src={sql} alt='sql' id='services-skill-button' title='SQL'/>SQL</p>
                    <p className='skill-item-wrap'><img src={sixsig} alt='six-sigma' id='services-skill-button' title='Lean/Six-Sigma'/>Six Sigma</p>
                    <p className='skill-item-wrap'><img src={pmp_pmi} alt='pmp' id='services-skill-button' title='PMP Project Managemnt Professional'/>Project Management</p>
                </div>
            </div>
        </div>
    </div>
)};

export default Home;