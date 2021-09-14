import React from 'react'
import Logo from '../../images/logo/logo.jpg'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu'
import min1 from '../../images/shop/mini/img-1.jpg'
import min2 from '../../images/shop/mini/img-2.jpg'

const Header2 = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="middle-header header-style-3">
            <div className="container">
                <div className="header-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                            <div className="logo">
                                <Link to="/home" title="">
                                    <img style={{ height: '66px' }} src={Logo} alt="" />
                                    SahirdayFoundation
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <li><Link className="active" to="/home" title="">Home</Link>
                                    </li>
                                    <li><Link to="/about" title="">About</Link></li>
                                    {/* <li><Link to="/case" title="">Causes</Link>
                                        <ul>
                                            <li><Link to="/case" title="">Causes</Link></li>
                                            <li><Link to="/case-single" title="">Causes Single</Link></li>
                                        </ul>
                                    </li> */}
                                    <li><Link to="/event" title="">Events</Link>
                                    </li>
                                    {/* <li><Link to="/home" title="">Pages</Link>
                                        <ul>
                                            <li><Link to="/about" title="">About</Link></li>
                                            <li><Link to="/donate" title="">Donate</Link></li>
                                            <li><Link to="/volunteer" title="">Volunteer</Link></li>
                                            <li><Link to="/404" title="">Error 404</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li><Link to="/blog">Blog</Link>
                                        <ul>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/blog-left">Blog Left sidebar</Link></li>
                                            <li><Link to="/blog-fullwidth">Blog full width</Link></li>
                                            <li><i className="fa fa-angle-right"></i><Link to="/blog-details" title="">Blog Details</Link>
                                                <ul>
                                                    <li><Link to="/blog-details" title="">Blog single</Link></li>
                                                    <li><Link to="/blog-details-left" title="">Blog single Left sidebar</Link></li>
                                                    <li><Link to="/blog-details-fullwidth" title="">Blog single full width</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li><Link to="/contact" title="">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu />
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>

            </div>
        </div>
    )
}

export default Header2;