import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';
import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';
import bulb from '../assets/img-bulb.png';
import tree from '../assets/img-tree.png';
import biz from '../assets/img-biz.png';

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
          <OnAtLeastTablet><div className='border-grid'>
              <div className='border-box'></div>
              <div className='border-images'>
                  <img src={bulb} alt='bulb' id='border-pic'/>
                  <img src={tree} alt='tree' id='border-pic'/>
                  <img src={biz} alt='biz' id='border-pic'/>
              </div>
          </div></OnAtLeastTablet>
          <div className='testimonial-body'></div>
              <div className='testimonial-title'>Testimonals Coming Soon :)</div>
          </div>

    </div>
  )};

  export default Testimonials;