import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
export default function Header() {
    let router = useRouter();
    
    let { t } = useTranslation();

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
                                    <span className="info-text">{t("index:102, Chotrana 2, Zone industrielle, pôle technologique,Ariana")}</span>
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
                    <div className="header__logo">
                    <ul>
                            {router.locales.map((locale) => (
                            <li key={locale}>
                                <Link href={router.asPath} locale={locale}>
                                    <a>{locale}</a>
                                </Link>
                            </li>
                            ))}
                        </ul>

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
                                                            <li><a href="presentation"><span>{t("index:Présentation")}</span></a> </li>
                                                            <li><a href="reseau-euro-mediterraneen"><span>{t("index:Réseau Euro-Méditerranéen")}</span></a> </li>
                                                            <li><a href="etudier-en-tunisie"><span>{t("index:Étudier en Tunisie")}</span></a></li>
                                                            <li> <a href="convention-relations-internationales"> <span>{t("index:Relations internationales")}</span></a></li>
                                                            <li><a href="question"><span>{t("index:Questions & réponses")}</span></a></li>
                                                    
                                                        </ul>
                                                    </li>
                                                    <li className="has-children has-children--multilevel-submenu">
                                                        <a href="presentation"><span>{t("index:BLP EN DIGITAL")}</span></a>
                                                        <ul className="submenu">
                                                            <li><a href="recherche-et-innovation"><span>{t("index:Recherche & Innovation")}</span></a></li>
                                                            <li><a href="videotheque"><span>{t("index:Vidéothéque")}</span></a></li>
                                                            <li><a href="challenge"><span>{t("index:Les nuits de challenge")}</span></a></li>
                                                        </ul>
                                                    </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <a href="#"><span>{t("index:LA VIE À L'UNIVERSITÉ")}</span></a>
                                                    <ul className="submenu">
                                                        <li><a href="certification"><span>{t("index:Certifications")}</span></a></li>
                                                        <li><a href="associative"><span>{t("index:La vie associative")}</span></a></li>
                                                        <li><a href="etudiante"><span>{t("index:Estudiantine")}</span></a></li>
                                                       
                                                    </ul>
                                                </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <a href="formations"><span>{t("index:FORMATIONS")}</span></a>
                                                    <ul className="submenu">
                                                        <li className="has-children">
                                                            <a href="formations"><span>{t("index:Licences")}
                                                                    </span></a>
                                                            <ul className="submenu">
                                                                <li><a href="licence-en-droit-public"><span>{t("index:Droit public")}</span></a></li>
                                                                <li><a href="licence-en-droit-prive"><span>{t("index:Droit privé")}</span></a></li>
                                                                <li><a href="licence-en-marketing"><span>{t("index:Marketing")}</span></a></li>

                                                            </ul>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="formations"><span>{t("index:Mastères")}</span></a>
                                                            <ul className="submenu">
                                                                <li><a href="mastere-en-droit-prive"><span>{t("index:Droit privé des affaires")} </span></a></li>
                                                                <li><a href="mastere-en-science-politique"><span>{t("index:Sciences politiques")} </span></a></li>
                                                                <li><a href="mastere-en-ingenierie-risque-economiques"><span>{t("index:Ingénierie des risques Economiques et financiers")}
                                                                 </span></a></li>
                                                                <li><a href="mastere-en-assurance-banque"><span>{t("index:Assurance, banque, finance")} </span></a>
                                                                </li>
                                                                <li><a href="mastere-en-marche-financiers"><span>{t("index:Marchés financiers et gestion du risques")}
                                                                </span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <a href="contact"><span>{t("index:CONTACT")}</span></a>
                                                </li>
                                                <li><a href="inscription"><span>{t("index:INSCRIPTION")}</span></a></li>
                                                <li><a href="actualites"><span>{t("index:ACTUALITES")}</span></a></li>
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
