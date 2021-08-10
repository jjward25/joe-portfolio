import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';
import bulb from '../assets/img-bulb.png';
import tree from '../assets/img-tree.png';
import biz from '../assets/img-biz.png';
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
  
  function About() {
  return (
      <div className='about-wrap'>

          <OnMobile><MobileMenu/></OnMobile>

          <OnAtLeastTablet>
              <Sidebar/>
          </OnAtLeastTablet>

          <div className='about-content'>

            <OnAtLeastTablet><div className='border-grid'>
                <div className='border-box'></div>
                <div className='border-images'>
                    <img src={bulb} alt='bulb' id='border-pic'/>
                    <img src={tree} alt='tree' id='border-pic'/>
                    <img src={biz} alt='biz' id='border-pic'/>
                </div>
            </div></OnAtLeastTablet>

            <div className='about-box'>
                <div className='about-header'>“A creative problem solver with a more-is-more mindset”</div>

                <div className='about-text'>The Long Story: I've always been interested in taking a step back, observing, asking how, then why, then how else...  Playing devil’s advocate and whittling internal debates down with logic...</div>
                <div className='about-text'>I graduated from Cornell University with a degree in Political Science because of my love of debate, a strong attraction to complex things, and general curiousity about the world.  I’d worked 3 years retail, 1 year wait staff and 6 months in asset valuations before I graduated. I’ve been to 6 continents and almost every state. </div>
                <div className='about-text'>My first post-college job was a rotational program, taking me through a comprehensive improvement initiative on a national sales team, analytics on a world-class education platform, and formal project management practices.</div>
                <div className='about-text'>My second role was to set up formal operations for a small non-profit I had volunteered with.  I led 401k enrollments, recruited new hires, set metrics and targets, and fostered continuous improvement before returning to build TD Ameritrade’s procurement analytics.  In this role I developed flexible reporting tools, led key improvement initiatives, and created ad hoc reports for our C-Suite, the SEC, House of Reps, and more.</div>
                <div className='about-text'>These broad and varied experiences perfectly balance my logical nature, allowing me to help you create the best possible solutions for your business.</div>
            </div>

          </div>

      </div>
  )};

  export default About;