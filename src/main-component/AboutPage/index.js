import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Features from '../../components/Features'
import About from '../../components/about'
import TeamSection from '../../components/team'
import Testimonial from '../../components/Testimonial'
import CounterSection from '../../components/counter'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const CasePage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About/>
            <Features/>
            <TeamSection/>
            {/* <Testimonial/> */}
            <CounterSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;
