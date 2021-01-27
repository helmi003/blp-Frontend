import React from 'react'

export default function FooterCopyright() {
    return (
        <div className="footer-copyright-area section-space--pb_30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-left">
                            <span className="copyright-text">&copy; 2020 <a href="https://aftercode.tn">AfterCode</a> All Rights Reserved.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <ul className="list ht-social-networks solid-rounded-icon">


                                <li className="item">
                                    <a href="https://www.facebook.com/Smart.Universities" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-facebook-f link-icon"></i>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="https://www.instagram.com/mediterranean_institut_tunisia" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-instagram link-icon"></i>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="https://linkedin.com/" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-linkedin link-icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
