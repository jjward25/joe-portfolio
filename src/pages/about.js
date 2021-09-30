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
                <div className='border-box-home'></div>
                <div className='border-images-home'>
                    <img src={bulb} alt='bulb' id='border-pic-home'/>
                    <img src={tree} alt='tree' id='border-pic-home'/>
                    <img src={biz} alt='biz' id='border-pic-home'/>
                </div>
            </div></OnAtLeastTablet>
            <OnMobile className='mobile-filler'> </OnMobile>
            <div className='about-box'>
                <div className='about-header'>I use modern tools and techniques to help small businesses operate more like big ones.</div>
                <div className='about-text'>In general, I think breadth matters more than depth. I think that past a certain point of awareness, there is far greater value in having a variety 
                                            of experiences to pull from than in reading more best-in-class consulting decks and whitepapers. Not because the papers aren't useful or insightful, 
                                            but because we can read them any time.  I gain the most valuable knowledge from <em>you</em>.</div>
                <div className='about-text'>It's important to know where to find the best practices (ie: what do the most recognized certifications teach?), how to use the tools, and actually 
                                            do the work.  Skills have baseline competencies that are specific to each job, but industries, companies, teams, and problems simply need 
                                            to be understood.</div>
                <div className='about-text'>Understanding requires good communication. I foster an environment of trust with my engagements, acting on behalf
                                             of every team member as I help find solutions to your team's most persistent issues. Then I'll use tools like Tableau, Python, or my project management experience to help you
                                             implement and monitor everything we come up with.</div>
            </div>

            <div className='other-projects-wrap'>
                <div className='other-projects-header'>Personal Projects</div>
                <div className='other-projects-list'>
                    {/* eslint-disable-next-line*/} 
                    <a href='https://www.topictournaments.com' target="_blank" className='other-projects-item'>
                        <img src='https://i.imgur.com/qXF14ee.png' alt='Topic-Tourny-Game' id='project-img'/>
                        <p className='project-title'>Topic Tournaments Game</p>
                    </a>
                    {/* eslint-disable-next-line*/} 
                    <a href='https://drive.google.com/drive/folders/1071BfoIrTB6qLurCf3S_SnujvRnSvepB?usp=sharing' target="_blank" className='other-projects-item'>
                        <img src='https://i.imgur.com/kDCa7QB.png' alt='podcast' id='project-img'/>
                        <p className='project-title'>Casually Adept Podcast</p>
                    </a>
                </div>
            </div>
          </div>

      </div>
  )};

  export default About;