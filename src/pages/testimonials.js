import React from 'react'; 
import './testimonial.css';
import Sidebar from '../components/sidebar';
import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';
import bulb from '../assets/img-bulb.png';
import tree from '../assets/img-tree.png';
import biz from '../assets/img-biz.png';
import perkLogo from '../assets/test-logo-perk.png'

const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 787,
    desktop: 992,
  });
  
  const OnMobile = layout.is('mobile');
  const OnAtLeastTablet = layout.isAtLeast('tablet');
  
  function Testimonials() {
  return (
    <div className='testimonials-page-wrap'>

        <OnMobile><MobileMenu/></OnMobile>

        <OnAtLeastTablet>
            <Sidebar/>
        </OnAtLeastTablet>
    
        <OnAtLeastTablet><div></div></OnAtLeastTablet>
    
        <div className='testimonials-content'>
            
            <OnAtLeastTablet><div className='border-grid'>
                <div className='border-box-home'></div>
                <div className='border-images-home'>
                    <img src={bulb} alt='bulb' id='border-pic-home'/>
                    <img src={tree} alt='tree' id='border-pic-home'/>
                    <img src={biz} alt='biz' id='border-pic-home'/>
                </div>
            </div></OnAtLeastTablet>

            <div className='testimonial-wrap'>
            
                <div className='testimonial'>
                    <img src={perkLogo} alt='The Perk' id='testimonial-logo'/>
                    <div className='testimonial-client'>The Perk</div>
                    <div className='testimonial-description'>Built a Custom Dashboard Using Free Tools and Statistical Methods to Analyze Shopify Store Data</div>
                    <div className='testimonial-text'>"Joe worked his magic to format my Shopify data in a way that was super easy for me to understand. I immediately began to see trends correlated specifically to my marketing efforts throughout the last year. Joe's easy to understand analytics gave me motivation to continue investing time into marketing efforts to grow my business." <br/><br/>- <em>Austin Gray, Owner</em></div>

                    <a href='https://imgur.com/a/uMF7jUq' className='testimonial-example' target='_blank' rel='noreferrer'>
                        <img src='https://i.imgur.com/axXKT0E.png' alt='Perk Dashboard' id='testimonial-img'/>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )};

  export default Testimonials;