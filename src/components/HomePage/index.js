import React from 'react';
import TopNav from '../TopNav';
import HomeCarousel from '../HomeCarousel';
import CompanyInfo from '../CompanyInfo';
import Founders from '../Founders';
import Services from '../Services';
import Footer from '../Footer';

const Homepage = () => {
    return (
        <div>
            <TopNav/>
            <HomeCarousel/>
            <CompanyInfo/>
            <Founders/>
            <Services/>
            <Footer/>
        </div>
    );
}

export default Homepage;