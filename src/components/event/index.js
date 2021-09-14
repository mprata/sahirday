import React from 'react'
import event1 from '../../images/event/1.jpg'
import event2 from '../../images/event/2.jpg'
import event3 from '../../images/event/3.jpg'
import event6 from '../../images/event/4.jpg'
import event4 from '../../images/event/1.png'
import event5 from '../../images/event/2.png'
import {Link} from 'react-router-dom'

import './style.css'

const EventSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className="event-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>EVENTS</span>
                            </div>
                            <h2>Our Latest Events</h2>
                            <p>To serve the needy and who require the help at the utmost.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event1} alt="" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>SEP</span>
                                        <h4>13</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-location-pin"></i> All Day</li>
                                        <li><i className="ti-location-pin"></i> Agra</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/event">Eco-Friendly Ganesha </Link></h2>
                                    <p>Sahirday Foundation celebrated eco friendly Ganesha Chaturthi. #saveenvironment #SahirdayFoundation #HappyGaneshChaturthi #2021 #environment #awareness.</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event2} alt="" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>SEP</span>
                                        <h4>5</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-location-pin"></i> All Day</li>
                                        <li><i className="ti-location-pin"></i> Agra, Mathura, Shivpuri</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/event">Food Donation</Link></h2>
                                    <p>Sahirday Foundation distributed food to the poor. #SahirdayFoundation #ServingTheNation #joinus #agra #mathura #shivpuri #India #floodrelief #sharingiscaring #food #donation</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event3} alt="" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>SEP</span>
                                        <h4>5</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-location-pin"></i> All Day</li>
                                        <li><i className="ti-location-pin"></i> Agra</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/event">Plated Trees.</Link></h2>
                                    <p>Sahirday Foundation has planted hundreds of saplings at various places in the month of August. We encourage everyone to do plantation or support us in our missions. Let's contribute towards a greener future.</p>
                                </div>
                            </div>
                        </div>
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event6} alt="" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>AUG</span>
                                        <h4>12</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-location-pin"></i> All Day</li>
                                        <li><i className="ti-location-pin"></i> Madhya Pradesh </li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} to="/event">Food For Flood Victims</Link></h2>
                                    <p>Sahirday Foundation is ready to serve their nation by helping and providing food to the flood victims in Madhya Pradesh region.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape1"><img src={event4} alt="" /></div>
            <div className="shape2"><img src={event5} alt="" /></div>
        </div>
    )
}

export default EventSection;