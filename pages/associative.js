import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function associative() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("associative:La vie associative")}</h2>
                
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="">{t("associative:La vie à l'université")}</a></li>
                        <li className="breadcrumb-item active">{t("associative:La vie associative")}</li>
                    </ul>
              
                </div>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div className="site-wrapper-reveal">
 
        <div className="blog-pages-wrapper section-space--pt_100 section-space--pb_70">
            <div className="container masonry-activation">
                <h3 className="post-title text-center">
                {t("associative:La vie associative")}
                </h3>
                <br/><br/>
                <div className="row">
                    <div className="col-lg-6 ">
                        <p>{t("associative:La Vie Associative")}<br/>
                        {t("associative:Les formations associent enseignants et étudiants : social, culture, sport, loisirs, environnement, patrimoine, droits de l'homme, consommation, etc")}<br/>
                            {t("associative:Un comité de pilotage composé de représentants des groupes définit les orientations à prendre et permet aux associations de rester au cœur de nos préoccupations")}</p>
                    </div>
                    <div className="col-lg-6 ">
                        <video controls>
                            <source src="/assets/video/mit1.mp4 " type="video/mp4" frameBorder="0"
                                allowFullScreen/>
                            {t("associative:Votre navigateur ne supporte pas la balise vidéo")}
                        </video>
                    </div>
                </div>

                <blockquote>
                    <p className="p1">{t("associative:Club Sportif")} </p>
                </blockquote>
                
                <div className="gallery-wrapper section-space--pt_80 ">
                    <div className="row">
                        <div className="col-lg-12">
                        
                            <div className="gallery-warp popup-images ">
                            
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/blog/club-sportive.webp">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/blog/club-sportive.webp">

                                        </div>
                                        <div className="ht-overlay"></div>
                                        <div className="overlay-icon">
                                            <i className="far fa-search"></i>
                                        </div>
                                    </div>
                                </a>
                              
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/blog/gymanstique-blp.webp">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/blog/gymanstique-blp.webp"></div>
                                        <div className="ht-overlay"></div>
                                        <div className="overlay-icon">
                                            <i className="far fa-search"></i>
                                        </div>
                                    </div>
                                </a>
                              
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/blog/fitness-blp.webp">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/blog/fitness-blp.webp"></div>
                                        <div className="ht-overlay"></div>
                                        <div className="overlay-icon">
                                            <i className="far fa-search"></i>
                                        </div>
                                    </div>
                                </a>
                             
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/blog/sport-blp.webp">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/blog/sport-blp.webp"></div>
                                        <div className="ht-overlay"></div>
                                        <div className="overlay-icon">
                                            <i className="far fa-search"></i>
                                        </div>
                                    </div>
                                </a>
                               
                            </div>
                      
                        </div>
                    </div>
                </div>
       
            </div>
        </div>
        
        <div className="cta-image-area_one section-space--ptb_80 processing-contact-us-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cta-content md-text-center">
                            <h3 className="heading text-white">{t("associative:Bourses")} </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-button-group--one text-center">

                            <a href="https://admission.blp.tn" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i
                                        className="far fa-info-circle"></i></span>{t("index:Pré-inscription")}</a>
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
