import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function licenceEnDroitPrive() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                  <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="actualites">{t("lancement-de-le-premier-salon-des-start-ups:Actualités")}</a></li>
                    </ul>
                   
                    <h2 className="breadcrumb-title ">{t("lancement-de-le-premier-salon-des-start-ups:Lancement du premier salon des start ups")}</h2>
                   
                
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
                                                <a href="">
                                                    <img className="img-fluid" src="assets/images/actualites/ouverture-its-blp.webp" alt="Blog Images"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="post-info lg-blog-post-info">
                                                <h4 className="post-title">
                                                {t("lancement-de-le-premier-salon-des-start-ups:Visitez le premier salon des start ups")}
                                                </h4>
                                              
                                                <div className="post-meta mt-20">
                                                 
                                                    <div className="post-date">
                                                        <span className="far fa-calendar meta-icon"></span>
                                                        {t("lancement-de-le-premier-salon-des-start-ups:05 juin, 2021")}
                                                    </div>
                         
                                                </div>
                                                <blockquote>
                                                    <p className="p1">{t("lancement-de-le-premier-salon-des-start-ups:CBM formation & PSS annonce le salon des start ups en partenariat avec MIT Polytech & BLP et Lance le premier salon")}  </p>
                                                </blockquote>
                                                <div className="post-excerpt mt-15">
                                                    <p>{t("lancement-de-le-premier-salon-des-start-ups:Dont le but est d'aider les jeunes à développer leurs idées et projet en offrant de l'Hébergement,Formations,Conseils et Financement")}</p>
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
 </div>
        </>
    )
}
