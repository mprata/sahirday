import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import EventSection from '../../components/event'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const EventPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Our Event'} pagesub={'Event'}/> 
            <EventSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage;
