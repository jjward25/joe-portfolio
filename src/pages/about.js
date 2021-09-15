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
          <div></div>
          <div className='about-content'>

            <OnAtLeastTablet><div className='border-grid'>
                <div className='border-box'></div>
                <div className='border-images'>
                    <img src={bulb} alt='bulb' id='border-pic'/>
                    <img src={tree} alt='tree' id='border-pic'/>
                    <img src={biz} alt='biz' id='border-pic'/>
                </div>
            </div></OnAtLeastTablet>
            <OnMobile className='mobile-filler'> </OnMobile>
            <div className='about-box'>
                <div className='about-header'>I use modern tools and techniques to help small businesses operate more like big ones.</div>
                <div className='about-text'>In general, I think breadth matters more than depth. I think that past a certain point of awareness, there is far greater value in having a variety 
                                            of experiences to pull from than in reading more best-in-class consulting decks and whitepapers. Not because the papers aren't useful or insightful, 
                                            but because we can read them any time.  I gain the most valuable knowledge from <em>you</em>.</div>
                <div className='about-text'>It's important to know where to find the best practices (ie: what do the most recognized certifications teach?), how to use the tools, and actually 
                                            do the work.  Skills have their own baseline competencies that are specific to each job, but industries, companies, teams, and problems simply need 
                                            to be understood.</div>
                <div className='about-text'>Understanding requires good communication - open, honest, and detail oriented. I foster an environment of trust with my engagements, acting on behalf
                                             of every team member as I help find solutions to your team's most persistent issues and give everyone more time to focus on the things they want to 
                                             be doing.</div>
            </div>

          </div>

      </div>
  )};

  export default About;