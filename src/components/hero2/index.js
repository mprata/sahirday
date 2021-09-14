import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'
import hero4 from '../../images/shape/shape.png'
import hero5 from '../../images/slider/slide-4.jpg'
import hero6 from '../../images/slider/slide-5.jpg'



class Hero2 extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="hero-slider hero-style-1">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero1})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>GO FOR HELP</span>
                                </div>
                                <div className="slide-title">
                                    <h2>They Are Waiting For Some Food.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Mission Gau Grass - To protect and feed stray cows on a daily basis.</p>
                                </div>
                            </div>
                            <div className="slide-shape">
                               <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero2})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>GO FOR HELP</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Plant Trees And Save Earth.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Mission Vrinda - The Earth can not survive without trees. This initiative </p>
                                </div>
                            </div>
                            <div className="slide-shape">
                               <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero3})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>GO FOR HELP</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Encourage People To Feed Birds</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Mission Dana Paani for birds to encourage people to feed birds during hot summers. Apart from this we spread awareness among the masses to be sensitive and kind towards all kinds of animals present in our surroundings.</p>
                                </div>
                            </div>
                            <div className="slide-shape">
                                 <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero5})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>GO FOR HELP</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Support The Education Of Underprivileged Children</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Mission Sahirday Paathshala is an initiative to support the education of underprivileged children and make them future ready because we believe that every child deserves a right to education. In this regard, we teach students and provide them stationery items on a regular basis.</p>
                                </div>
                            </div>
                            <div className="slide-shape">
                                 <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero6})`}}>
                            <div className="container">
                                <div className="slide-title">
                                    <h2>Mission Ram</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Mission Ram is an initiative to encourage the youth of India to read , understand and appreciate their roots, culture, traditions and customs. We encourage everyone to indulge in practices such as yoga, meditation, mindfulness, and so forth in order to create a healthy, positive and prosperous society.</p>
                                </div>
                            </div>
                            <div className="slide-shape">
                                 <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )
    }
}

export default Hero2;