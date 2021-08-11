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
  
  function Experience() {
  return (
      <div className='experience-wrap'>

          <OnMobile><MobileMenu/></OnMobile>

          <OnAtLeastTablet>
              <Sidebar/>
          </OnAtLeastTablet>

          <div className='experience-content'>
            Content
          </div>

      </div>
  )};

  export default Experience;