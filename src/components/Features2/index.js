import React from 'react'
import {Link} from 'react-router-dom'
import featuresimg from '../../images/features/img-1.png'
import featuresimg2 from '../../images/features/img-2.png'
import featuresimg3 from '../../images/features/img-3.png'
import featuresimg4 from '../../images/features/img-4.png'


const Features2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="features-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="features-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Save Cows</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg2} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Plant Trees</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg3} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Feed Birds</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg4} alt="" />
                                        </div>
                                        <div className="features-content">
                                            <h2><Link onClick={ClickHandler} to="/case-single">Educate Children</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features2;