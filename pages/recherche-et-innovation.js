import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function recherche() {
    let { t } = useTranslation();
    return (
        <>

<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("recherche-et-innovation:RECHERCHE & INNOVATION")}</h2>
                
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="accueil">{t("recherche-et-innovation:BLP en digital")}</a></li>
                        <li className="breadcrumb-item active">{t("recherche-et-innovation:RECHERCHE & INNOVATION")}</li>
                    </ul>
                    
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
                    <div className="col-lg-8 ml-auto mr-auto">
                        <div className="main-blog-wrap">
                            <div className="single-blog-item  wow move-up">                  
                                <div className="post-info lg-blog-post-info">
                                    <div className="post-categories text-center">
                                        <a href="accueil"> {t("recherche-et-innovation:BLP en digital")} </a>
                                    </div>

                                    <h3 className="post-title text-center">
                                        <a href="recherche-et-innovation">{t("recherche-et-innovation:RECHERCHE & INNOVATION")}</a>
                                    </h3>
                                    <div className="post-excerpt mt-15">
                                        <h6><b>{t("recherche-et-innovation:ecole Supérieure")}</b></h6>
                                        <p>{t("recherche-et-innovation:Avec son staff enseignant")}</p>
                                        <p><b>BLP </b>{t("recherche-et-innovation:a réussi")}</p>
                                        <p>{t("recherche-et-innovation:Largement ouverte")}</p>
                               
                                        <div className="single-blog-item lg-blog-item border-bottom wow move-up">
                                  
                                            <div className="post-feature post-quote">
                                                <h5 className="post-quote-text text-center">
                                                    “ {t("recherche-et-innovation:La volonté d’ouverture BLP vers le monde")}  ”
                                                </h5>
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
      
        <div className="cta-image-area_one section-space--ptb_80 processing-contact-us-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cta-content md-text-center">
                            <h3 className="heading text-white">{t("recherche-et-innovation:Double cursus: M1 en")} <span className="text-color-secondary">
                            {t("recherche-et-innovation:Tunisie")} </span> {t("recherche-et-innovation:M2 en")} <span className="text-color-secondary"> {t("recherche-et-innovation:Europe")}</span> </h3>
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
