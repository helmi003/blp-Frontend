import React from 'react'

export default function footer() {
    return (
      
        <div className="footer-area-wrapper reveal-footer bg-gray ">
            <div className="footer-area section-space--ptb_80">
                <div className="container">
                    <div className="row footer-widget-wrapper">
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20"> À PROPOS</h6>
                            <div className="footer-widget__logo mb-30">
                                <img src="assets/images/logo/logo-blp2.png" />
                            </div>
                           <p> BLP est une école supérieure privée qui assure un enseignement d'avant-garde et de niveau international. Notre réseau est également présent en France, Canada et Europe.</p>

                        </div>
                        <div className="col-lg-1 col-md-4 col-sm-6 footer-widget"></div>
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20"> NOUS CONTACTER</h6>
                            <p>Pour toute information complémentaire, n’hésitez pas à nous contacter.</p>
                            <ul className="footer-widget__list">
                                <li>  <span className="fa fa-map-marker-alt"></span> 102, Chotrana2, Zone industrielle, pôle technologique,Ariana</li>
                                <li><i className="fas fa-envelope-open-text"></i> contact@epm.tn</li>
                                <li><i className="fas fa-phone-volume"></i> (+216) 97 100 149 / (+216) 71 903 215</li>
                                <li><i className="fas fa-globe"></i> <a href="https://blp.tn/" className="hover-style-link "> www.blp.tn</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-md-4 col-sm-6 footer-widget"></div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">CATÉGORIES</h6>
                            <ul className="footer-widget__list">
                                <li><a href="accueil" className="hover-style-link">Présentation de BLP</a></li>
                                <li><a href="etudiante" className="hover-style-link">Étudier en tunisie</a></li>
                                <li><a href="etudiante" className="hover-style-link">Vie à l'université</a></li>
                                <li><a href="etudiante" className="hover-style-link">Recherche et innovation</a></li>
                                <li><a href="formations" className="hover-style-link">Formations</a></li>
                                <li><a href="contact" className="hover-style-link">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                            
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
  
 
  )
}
