import React from 'react'

export default function SideBar() {
    return (
        <div className="xs-sidebar-group info-group">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
            <div className="sidebar-widget-container">
                <div className="widget-heading">
                    <a href="#" className="close-side-widget">
                        X
                    </a>
                </div>
                <div className="sidebar-textwidget">
                    <div className="sidebar-info-contents">
                        <div className="content-inner">
                            <div className="logo">
                                <a href="accueil"><img src="images/logo-mit-blanc.png" alt="logo-mit.png" /></a>
                            </div>
                            <div className="content-box">
                                <h2>A propos </h2>
                                <p className="text">L’Ecole Polytechnique Méditerranéenne est un établissement privé
                                    pluridisciplinaire.</p>
                                <p className="text">L’Ecole Polytechnique Méditerranéenne a réussit à mettre sur pied
                                    des formations de plus en plus en phase avec le monde du travail. Cette démarche
                                    lui a permis d’être mieux à l’écoute des besoins de ses partenaires économiques
                                    en matière de ressources humaines et de compétences.
                                </p>
                                <a href="presentation" className="theme-btn btn-style-two"><span className="txt">En savoir
                                        Plus</span></a>
                            </div>
                            <div className="contact-info">
                                <h2>Contact</h2>
                                <ul className="list-style-one">
                                    <li><span className="icon fa fa-location-arrow"></span>2. Rue de Sousse Beb El
                                        Kadhra 1006 Tunis</li>
                                    <li><span className="icon fa fa-phone"></span>+216 71 283 416</li>
                                    <li><span className="icon fa fa-envelope"></span>contact@epm.tn</li>
                                    <li><span className="icon fa fa-clock-o"></span>7/7: 09.00 à 18.00 </li>
                                </ul>
                            </div>
                            <ul className="social-box">
                                <li className="facebook"><a href="https://www.facebook.com/Smart.Universities"
                                        className="fa fa-facebook-f"></a></li>
                                <li className="instagram"><a
                                        href="https://www.instagram.com/mediterranean_institut_tunisia/"
                                        className="fa fa-instagram"></a></li>
                                <li className="youtube"><a
                                        href="https://www.youtube.com/channel/UCpybIZdZSFpcwlJlJzh9nHA"
                                        className="fa fa-youtube"></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
        )
}
