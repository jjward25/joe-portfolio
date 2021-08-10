import Sidebar from './sidebar';
import React from 'react'; 
import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 787,
    desktop: 992,
  });
  
  const OnMobile = layout.is('mobile');
  const OnAtLeastTablet = layout.isAtLeast('tablet');
  
  function About() {
  return (
      <div className='about-wrap'>
          <OnMobile>Mobile Menu</OnMobile>
          <OnAtLeastTablet>
              <Sidebar/>
          </OnAtLeastTablet>
          <div className='about-content'>
              About Content
          </div>

      </div>
  )};

  export default About;