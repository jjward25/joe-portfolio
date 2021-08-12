import React from 'react'; 
import './main.css'
import { layoutGenerator } from 'react-break';
import Sidebar2 from '../components/sidebar-mobile';
import Sidebar from '../components/sidebar';
import bulb from '../assets/img-bulb.png';
import tree from '../assets/img-tree.png';
import biz from '../assets/img-biz.png';
import gear from '../assets/gear-icon.png';
import {Link} from 'react-router-dom';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 787,
  desktop: 992,
});

const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');

function Home() {
return (
    <div className='desktop-home'>
        
        <OnAtLeastTablet><Sidebar/></OnAtLeastTablet>
        <OnMobile><Sidebar2/></OnMobile>
        
        <OnMobile>
            <div className='mobile-border-home'>
                <img src={bulb} alt='bulb' id='border-pic'/>
                <img src={tree} alt='tree' id='border-pic'/>
                <img src={biz} alt='biz' id='border-pic'/>
            </div>
        </OnMobile>
        <div></div>
        <div className='home-content'>
            
            <div className='home-text'>I want to help small businesses act like big businesses.</div>
            <OnAtLeastTablet className='home-text'>I want to help smart teams find and use the right tools and data to facilitate their growth.  I want to help your business automate the boring stuff, identify inefficiencies, and implement solutions. </OnAtLeastTablet>
            <OnAtLeastTablet className='home-text' id='alt-length'>I use my broad background, and experience with large corporations and small non-profits, to identify creative and comprehensive possibilities that can give your team meaningful amounts of time back and solve your most pressing issues.</OnAtLeastTablet>

            <OnAtLeastTablet className='border-grid'>
                <div className='border-box'></div>
                <div className='border-images'>
                    <img src={bulb} alt='bulb' id='border-pic'/>
                    <img src={tree} alt='tree' id='border-pic'/>
                    <img src={biz} alt='biz' id='border-pic'/>
                </div>
            </OnAtLeastTablet>

            <div className='home-nav'>
                <Link to='/about'><div className='nav-item'>
                    <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
                    <div className='nav-text'>About Joe</div>
                </div></Link>
                <Link to='/services'><div className='nav-item'>
                    <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
                    <div className='nav-text'>Services</div>
                </div></Link>
                <Link to='/experience'><div className='nav-item'>
                    <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
                    <div className='nav-text'>Professional Experience</div>
                </div></Link>
                <Link to='/portfolio'><div className='nav-item'>
                    <div className='gear-img'><img src={gear} alt='gear' id='gear-pic'/></div>
                    <div className='nav-text'>{'Portfolio & Testimonials'}</div>
                </div></Link>
            </div>

        </div>

    </div>
)};

export default Home;