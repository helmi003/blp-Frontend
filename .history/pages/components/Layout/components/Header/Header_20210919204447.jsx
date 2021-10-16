import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className="bi bi-globe"
      viewBox="0 0 16 16"
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
  )

export default function Header() {
    let router = useRouter();
    
    let { t } = useTranslation();

    return (

<div className="header-area header-area--default">
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
                    <nav className="navigation-menu primary--menu">
                    <ul>
                    <li className="has-children has-children--multilevel-submenu">
                        <a href=""><span><GlobeIcon /></span></a>
                        <ul className="submenu">
                        {router.locales.map((locale) => (
                            <li key={locale}>
                                <Link href={router.asPath} locale={locale}>
                                    <a>{locale}</a>
                                </Link>
                            </li>
                            ))}
                                                    
                        </ul>
                    </li>
                    </ul>
                    </nav>

                    
                    <div className="header-midle-box">
                        <div className="header-bottom-wrap d-md-block d-none">
                            <div className="header-bottom-inner">
                                <div className="header-bottom-left-wrap">
                              
                                    <div className="header__navigation d-none d-xl-block">
                                        
                                        <nav className="navigation-menu primary--menu topnav" id="myTopnav">
                                                <ul>
                                                    <li className="has-children has-children--multilevel-submenu">
                                                        <a href=""><span className="header-title">BLP</span></a>
                                                        <ul className="submenu">
                                                            <li><a href="presentation"><span className="header-title">{t("index:Présentation")}</span></a> </li>
                                                            <li><a href="reseau-euro-mediterraneen"><span className="header-title">{t("index:Réseau Euro-Méditerranéen")}</span></a> </li>
                                                            <li><a href="etudier-en-tunisie"><span className="header-title">{t("index:Étudier en Tunisie")}</span></a></li>
                                                            <li> <a href="convention-relations-internationales"> <span className="header-title">{t("index:Relations internationales")}</span></a></li>
                                                            <li><a href="question"><span className="header-title">{t("index:Questions & réponses")}</span></a></li>
                                                    
                                                        </ul>
                                                    </li>
                                                    <li className="has-children has-children--multilevel-submenu">
                                                        <a href=""><span className="header-title">{t("index:BLP EN DIGITAL")}</span></a>
                                                        <ul className="submenu">
                                                            <li><a href="recherche-et-innovation"><span className="header-title">{t("index:Recherche & Innovation")}</span></a></li>
                                                            <li><a href="videotheque"><span className="header-title">{t("index:Vidéothéque")}</span></a></li>
                                                            <li><a href="challenge"><span className="header-title">{t("index:Les nuits de challenge")}</span></a></li>
                                                        </ul>
                                                    </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <a href=""><span className="header-title">{t("index:LA VIE À L'UNIVERSITÉ")}</span></a>
                                                    <ul className="submenu">
                                                        <li><a href="certification"><span className="header-title">{t("index:Certifications")}</span></a></li>
                                                        <li><a href="associative"><span className="header-title">{t("index:La vie associative")}</span></a></li>
                                                        <li><a href="etudiante"><span className="header-title">{t("index:Estudiantine")}</span></a></li>
                                                       
                                                    </ul>
                                                </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <a href="formations"><span className="header-title">{t("index:FORMATIONS")}</span></a>
                                                    <ul className="submenu">
                                                        <li className="has-children">
                                                            <a href="formations"><span className="header-title">{t("index:Licences")}
                                                                    </span></a>
                                                            <ul className="submenu">
                                                                <li><a href="licence-en-droit-public"><span className="header-title">{t("index:Droit public")}</span></a></li>
                                                                <li><a href="licence-en-droit-prive"><span className="header-title">{t("index:Droit privé")}</span></a></li>
                                                                <li><a href="licence-en-marketing"><span className="header-title">{t("index:Marketing")}</span></a></li>

                                                            </ul>
                                                        </li>
                                                        <li className="has-children">
                                                            <a href="formations"><span className="header-title">{t("index:Mastères")}</span></a>
                                                            <ul className="submenu">
                                                                <li><a href="mastere-en-droit-prive"><span className="header-title">{t("index:Droit privé des affaires")} </span></a></li>
                                                                <li><a href="mastere-en-science-politique"><span className="header-title">{t("index:Sciences politiques")} </span></a></li>
                                                                <li><a href="mastere-en-ingenierie-risque-economiques"><span className="header-title">{t("index:Ingénierie des risques Economiques et financiers")}
                                                                 </span></a></li>
                                                                <li><a href="mastere-en-assurance-banque"><span className="header-title">{t("index:Assurance, banque, finance")} </span></a>
                                                                </li>
                                                                <li><a href="mastere-en-marche-financiers"><span className="header-title">{t("index:Marchés financiers et gestion du risques")}
                                                                </span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="actualites"><span className="header-title">{t("index:ACTUALITES")}</span></a></li>
                                                <li><a href="inscription"><span className="header-title">{t("index:INSCRIPTION")}</span></a></li>
                                                <li >
                                                    <a href="contact"><span className="header-title">{t("index:CONTACT")}</span></a>
                                                </li>
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

                                        {/*function myFunction() {
                                            var x = document.getElementById("myTopnav");
                                            if (x.className === "navigation-menu primary--menu topnav") {
                                                x.className += " responsive";
                                            } else {
                                                x.className = "navigation-menu primary--menu topnav";
                                            }
                                        }
                                        

                                        const navslide=()=>{
                                            const burger = document.querySelector('.burger');
                                            const nav = document.querySelector('.nav-links');
                                            const navLinks = document.querySelectorAll('.nav-links li');
                                            burger.addEventListener('click', ()=>{
                                              nav.classList.toggle('nav-active');
                                              navLinks.forEach((link,index)=>{
                                                if(link.style.animation){
                                                  link.style.animation='';
                                                } else {
                                                  link.style.animation='navLinkFade 0.5s ease forward ${index/7}s';
                                                }
                                              });
                                              burger.classList.toggle('toggle');
                                            });
                                          
                                          }
                                          navslide();*/}