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
  

    </div>
    </div>
        </>
    )
}
