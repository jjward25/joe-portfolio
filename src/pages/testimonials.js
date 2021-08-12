import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';
import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';


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