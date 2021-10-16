import React from 'react'; 
import './main.css';
import Sidebar from '../components/sidebar';
import bulb from '../assets/img-bulb.png';
import tree from '../assets/img-tree.png';  
import biz from '../assets/img-biz.png';
import { layoutGenerator } from 'react-break';
import MobileMenu from '../components/mobile-menu';
import medium from '../assets/icon-medium.png';
import resume from '../assets/resume.PNG';

/*
 {/* eslint-disable-next-line} 
 <a href='https://drive.google.com/drive/folders/1071BfoIrTB6qLurCf3S_SnujvRnSvepB?usp=sharing' target="_blank" className='other-projects-item'>
 <img src='https://i.imgur.com/kDCa7QB.png' alt='podcast' id='project-img'/>
 <p className='project-title'>Casually Adept Podcast</p>
</a>*/

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
                <div className='about-text'>I use Six Sigma best practices, and years of experience managing projects and using tools like SQL, Tableau, and Python, to find the best solutions to your team's toughest problems.</div>
                <div className='about-text'>With a combination of process mapping, statistical analyses, free tools <em>(for re-usability)</em>, and other quantitive and qualitative inputs, we'll draw the best picture possible of your team's current state, then implement the most effective and efficient solution for tomorrow.</div>
                <div className='about-text'>Effective improvement requires effective communication, and as a PMP certified Project Manager, I have over <em>10,000 hours</em> experience managing improvement initiatives at small non-profits, and companies as large as TD Ameritrade and Citigroup.</div>
                <div className='about-text'>I bring in every relevant stakeholder and actively engage them in drawing the most accurate picture of today's operations, coming up with the best solutions for everyone, then implementing and managing the change.  Just send an e-mail with your organization's website and a summary of the current pain points to start solving for tomorrow.</div>
            </div>

            <div className='other-projects-wrap'>
                <div className='other-projects-header'>Personal Projects</div>
                <div className='other-projects-list'>
                    {/* eslint-disable-next-line*/} 
                    <a href='https://www.topictournaments.com' target="_blank" className='other-projects-item'>
                        <img src='https://i.imgur.com/qXF14ee.png' alt='Topic-Tourny-Game' id='project-img'/>
                        <p className='project-title'>The Bracket Game</p>
                    </a>
                   {/* eslint-disable-next-line*/} 
                   <a href='https://medium.com/cultural-commentary' target="_blank" className='other-projects-item'>
                        <img src={medium} alt='medium' id='project-img'/>
                        <p className='project-title'>Medium Blog Posts</p>
                    </a>
                    {/* eslint-disable-next-line*/} 
                   <a href='https://www.linkedin.com/in/joe-ward1/' target="_blank" className='other-projects-item'>
                        <img src={resume} alt='resume' id='project-img'/>
                        <p className='project-title'>Resume Image</p>
                    </a>
                </div>
            </div>
          </div>

      </div>
  )};

  export default About;