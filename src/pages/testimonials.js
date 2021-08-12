import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';
import { Carousel } from 'react-responsive-carousel';
import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';
import procurementDash from '../assets/portfolio-tableau-procurement.png';
import adeptWireframe from '../assets/portfolio-figma-adept.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
    <div className='testimonials-wrap'>

        <OnMobile><MobileMenu/></OnMobile>

        <OnAtLeastTablet>
            <Sidebar/>
        </OnAtLeastTablet>
    
        <OnAtLeastTablet><div></div></OnAtLeastTablet>
    
        <div className='testimonials-content'>

            <div className='testimonial-wrap'></div>
                <div className='carousel-title'>Testimonal Blocks (Coming Soon</div>
           </div>

    </div>
  )};

  export default Testimonials;