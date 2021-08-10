import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function inauguration() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                  <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="actualites">{t("inauguration-des-universites:Actualités")}</a></li>
                    </ul>
                   
                    <h2 className="breadcrumb-title ">{t("inauguration-des-universites:Inauguration des universités")}</h2>
                   
                
                </div>
            </div>
        </div>
    </div>
</div>
<div id="main-wrapper">
    <div className="site-wrapper-reveal">
        
    <div className="blog-pages-wrapper section-space--ptb_100">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 order-lg-2 order-1">
                        
                            <div className="main-blog-wrap">
                                <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                                    <div className="row ">
                                        <div className="col-lg-6">
                                            <div className="post-feature blog-thumbnail">
                                                <a>
                                                    <img className="img-fluid" src="assets/images/actualites/inaugration-its-blp.webp" alt="Blog Images"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="post-info lg-blog-post-info">
                                                <h4 className="post-title">
                                                {t("inauguration-des-universites:Inauguration des universités & Clôture du Challenge II")}  
                                                </h4>
                                              
                                                <div className="post-meta mt-20">
                                                 
                                                    <div className="post-date">
                                                        <span className="far fa-calendar meta-icon"></span>
                                                        {t("inauguration-des-universites:05 juin, 2021")}
                                                    </div>
                         
                                                </div>
                                                <blockquote>
                                                    <p className="p1">{t("inauguration-des-universites:C’est dans une ambiance inédite, connectée et toujours aussi chaleureuse malgré la distance, que s’est déroulée la 2ème édition du “ Challenge II: Smart Applications & Automation Process ”")}</p>
                                                </blockquote>
                 
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>

                                <p>{t("inauguration-des-universites:Ce challenge récompense")}</p>
                                <p>{t("inauguration-des-universites:Nous fêtons la cérémonie de clôture du Challenge II le Samedi 05 Juin 2021 au pôle technologique el Ghazela")} </p>
                                <p>{t("inauguration-des-universites:Tous les participants")} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="swiper-container carousel-slider__container">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        
                        <div className="carousel-slider wow move-up">
                            <div className="carousel-slider__image">
                                <img className="img-fluid"
                                    src="assets/images/actualites/inauguration/inauguration-des-universites.webp"
                                    alt=""/>
                            </div>
                        </div>
                
                    </div>
                    <div className="swiper-slide">
                    
                        <div className="carousel-slider wow move-up">
                            <div className="carousel-slider__image">
                                <img className="img-fluid"
                                    src="assets/images/actualites/inauguration/ouverture-blp-its.webp"
                                    alt="signature de convention"/>
                            </div>
                        </div>
                
                    </div>
                        <div className="swiper-slide">
                        
                            <div className="carousel-slider wow move-up">
                                <div className="carousel-slider__image">
                                    <img className="img-fluid"
                                        src="assets/images/actualites/inauguration/challange-cloture.webp"
                                        alt=""/>
                                </div>
                            </div>
                    
                        </div>
                      
                        <div className="swiper-slide">
                            
                            <div className="carousel-slider wow move-up">
                                <div className="carousel-slider__image">
                                    <img className="img-fluid"
                                        src="assets/images/actualites/inauguration/cloture-challange.webp"
                                        alt="signature de convention"/>
                                </div>
                            </div>
                
                        </div>
                        
                    </div>
                    <div className="swiper-pagination swiper-pagination-9 section-space--mt_50">
                    </div>
                </div>
            </div>
    </div>
 </div>
        </>
    )
}
