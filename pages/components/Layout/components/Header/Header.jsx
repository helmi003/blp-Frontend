import React from 'react'

export default function Header() {
    return (

<div className="header-area header-area--default">
    <div className="header-top-wrap border-bottom">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="top-bar-wrap">
                        <div className="top-bar-left">

                        </div>
                        <div className="top-bar-right text-center">
                            <ul className="top-bar-info">
                                <li className="info-item">
                                    <a href="tel:+21670721002" className="info-link">
                                        <i className="info-icon fa fa-phone"></i>
                                        <span className="info-text"><strong>(+216) 70 721 002</strong></span>
                                    </a>
                                </li>
                                <li className="info-item">
                                    <i className="info-icon fa fa-map-marker-alt"></i>
                                    <span className="info-text">102, Chotrana 2, Zone industrielle, pôle
                                        technologique,Ariana</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="header-bottom-wrap header-sticky">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="header default-menu-style position-relative">

                  
                    <div className="header__logo">
                        <a href="/">
                            <img src="assets/images/logo/logo-blp2.png" className="img-fluid"
                                alt="logo-blp"/>
                        </a>

                    </div>

                    <div className="header-midle-box">
                        <div className="header-bottom-wrap d-md-block d-none">
                            <div className="header-bottom-inner">
                                <div className="header-bottom-left-wrap">
                              
                                    <div className="header__navigation d-none d-xl-block">
                                        
                                    <nav className="navigation-menu primary--menu">
                                                <ul>
                                                    <li className="has-children has-children--multilevel-submenu">
                                                        <a href="presentation"><span>BLP</span></a>
                                                        <ul className="submenu">
                                                            <li><a href="presentation"><span>Présentation</span></a> </li>
                                                            <li><a href="etudier"><span>Étudier en Tunisie</span></a></li>
                                                            <li> <a href="convention-relations-internationales"> <span>Relations internationales</span></a></li>
                                                            <li><a href="question"><span>Question & reponse</span></a></li>
                                                    
                                                        </ul>
                                                    </li>
                                                    <li className="has-children has-children--multilevel-submenu">
                                                        <a href="presentation"><span>BLP EN DIGITAL</span></a>
                                                        <ul className="submenu">
                                                            <li><a href="recherche"><span>Recherche & Innovation</span></a></li>
                                                            <li><a href="videotheque"><span>Vidéothéque</span></a></li>
                                                            <li><a href="challenge"><span>Les nuits de challenge</span></a></li>
                                                        </ul>
                                                    </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <a href="#"><span>LA VIE À L'UNIVERSITÉ</span></a>
                                                    <ul className="submenu">
                                                        <li><a href="actualites"><span>Actualités</span></a></li>
                                                        <li><a href="certification"><span>Certifications</span></a></li>
                                                        <li><a href="associative"><span>La vie associative</span></a></li>
                                                        <li><a href="etudiante"><span>Estudiantine</span></a></li>
                                                       
                                                    </ul>
                                                </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <a href="formations"><span>FORMATIONS</span></a>
                                                    <ul className="submenu">
                                                        <li className="has-children">
                                                            <a href="formations"><span>Licences
                                                                    </span></a>
                                                            <ul className="submenu">
                                                                <li><a href="licence-en-droit-public"><span>Licence
                                                                            en Droit public</span></a></li>
                                                                <li><a href="licence-en-droit-prive"><span>Licence
                                                                            en Droit privé</span></a></li>
                                                                <li><a href="licence-en-marketing"><span>Licence en
                                                                            Marketing</span></a></li>

                                                            </ul>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="formations"><span>Mastères</span></a>
                                                            <ul className="submenu">
                                                                <li><a href="mastere-en-droit-prive"><span>Mastère
                                                                            en Droit privé des affaires </span></a></li>
                                                                <li><a href="mastere-en-science-politique"><span>Mastère
                                                                            en sciences politiques </span></a></li>
                                                                <li><a href="mastere-en-ingenierie-risque-economiques"><span>Mastère
                                                                            en Ingénierie des risques Economiques et financiers
                                                                 </span></a></li>
                                                                <li><a href="mastere-en-assurance-banque"><span>Mastère
                                                                            en Assurance, banque, finance </span></a>
                                                                </li>
                                                                <li><a href="mastere-en-marche-financiers"><span>Mastère
                                                                            en Marchés financiers et gestion du risques
                                                                </span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <a href="contact"><span>CONTACT</span></a>
                                                </li>
                                               
                                                <li><a href="https://admission.mit.tn/" target="_blank"><span>INSCRIPTION</span></a></li>
                                                </ul>
                                            </nav>
                                    </div>
                                </div>
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
