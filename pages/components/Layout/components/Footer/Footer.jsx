import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function footer() {
    let { t } = useTranslation();
    return (
      
<div className="footer-area-wrapper bg-gray">
            <div className="footer-area section-space--ptb_80">
                <div className="container">
                    <div className="row footer-widget-wrapper">
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                            
                            <div className="footer-widget__logo mb-30">
                                <img src="assets/images/logo/logo-blp2.png" className="img-fluid" alt=""/>
                            </div>
                            <p> <b>{t("index:BLP Tunis")},</b> {t("index:Pôle Technologique Al Ghazella")}</p>

                        </div>
                        <div className="col-lg-1 col-md-4 col-sm-6 footer-widget"></div>
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20"> {t("index:NOUS CONTACTER")}</h6>
                            <p>{t("index:Pour toute information complémentaire, n’hésitez pas à nous contacter")}</p>
                            <ul className="footer-widget__list">
                                <li>  <span className="fa fa-map-marker-alt"></span> {t("index:102, Chotrana 2, Zone industrielle, pôle technologique,Ariana")}</li>
                                <li><i className="fas fa-envelope-open-text"></i> contact@blp.tn</li>
                                <li><i className="fas fa-phone-volume"></i> (+216) 70 721 002</li>
                                <li><i className="fas fa-globe"></i> <a href="https://blp.tn/" className="hover-style-link "> www.blp.tn</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">{t("index:CATÉGORIES")}</h6>
                            <ul className="footer-widget__list">
                                <li><a href="accueil" className="hover-style-link">{t("index:Présentation de BLP")}</a></li>
                                <li><a href="etudier-en-tunisie" className="hover-style-link">{t("index:Étudier en Tunisie")}</a></li>
                                <li><a href="convention-relations-internationales" className="hover-style-link">{t("index:Relations internationales")}</a></li>
                                <li><a href="etudiante" className="hover-style-link">{t("index:Vie à l'université")}</a></li>
                                <li><a href="formations" className="hover-style-link">{t("index:Nos Formations")}</a></li>
                                <li><a href="inscription" className="hover-style-link">{t("index:Inscription")}</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-area section-space--pb_30">
                <div className="container">
                    
                        
                        <div className="text-center py-3">
                            <ul className="list ht-social-networks solid-rounded-icon">

                             
                                <li className="item">
                                    <a href="https://www.facebook.com/BLP-100509428465071" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-facebook-f link-icon"></i>
                                    </a>
                                </li>
                               {/*  <li className="item">
                                    <a href="https://www.facebook.com/BLP-100509428465071" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-instagram link-icon"></i>
                                    </a>
                                </li> */}
                                <li className="item">
                                    <a href="https://www.youtube.com/channel/UC-ZRcr24hih-MyBaYpoIpwA" target="_blank" aria-label="Youtube" className="social-link hint--bounce hint--top hint--primary">
                                        <i className="fab fa-youtube link-icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    
                </div>
                <div className="footer-copyright text-center w-100 py-3">
                            <span className="copyright-text">&copy; 2020 <a href="https://aftercode.tn">AfterCode</a> {t("index:All Rights Reserved")}</span>
                        </div>
            </div>
        </div>
  
 
  )
}
