import React from 'react'
import './style.css'

const CtaSection = (props) => {

    return(
        <div className="cta-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="cta-left">
                            <h2>If You Want To Join With Us As a Volunteer. Contact Us Today!</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-12">
                        <div className="cta-wrap">
                            <div className="cta-call">
                                <span>Call Us!</span>
                                <h3>09411405282</h3>
                            </div>
                            <div className="cta-call cta-left">
                                <span>E-mail Us!</span>
                                <h3>sahirdaybharat@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;