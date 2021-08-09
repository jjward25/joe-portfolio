import React from 'react';
import { layoutGenerator } from 'react-break';

import Sidebar from '../components/sidebar'


const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');

function Home() {
return (
    <div className='desktop-home'>
        <Sidebar/>
        <OnAtLeastTablet><div className='desktop-content'>Main Content</div></OnAtLeastTablet>
    </div>
)};

export default Home;