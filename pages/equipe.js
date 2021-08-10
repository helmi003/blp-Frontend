import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function equipeBlp() {
    let { t } = useTranslation();
    return (
        <>
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title text-color-primary">{t("equipe:ÉQUIPE BLP")}</h2>
               
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item"><a href="accueil">{t("equipe:Accueil")}</a></li>
                            <li className="breadcrumb-item active">{t("equipe:Équipe")}</li>
                        </ul>
                 
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div id="main-wrapper">
        <div className="site-wrapper-reveal">
   
            <div className="team-member-wrapper section-space--pt_100 section-space--pb_70 zegzeg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title section-space--mb_60 text-center">
                                <h3 className="heading">{t("equipe:Équipe administrative très investie")} <br/>{t("equipe:qui sera à")} <span className="text-color-primary">{t("equipe:votre écoute")}</span> </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row ht-team-member-style-two">
                 
                        <div className="col-lg-4 col-md-6 wow move-up">
                            <div className="grid-item">
                                <div className="ht-team-member">
                                    <div className="team-image">
                                        <img className="img-fluid" src="assets/images/demo-images/sami-bellalah.jpg" alt="sami-bellalah"/>
                                        
                                    </div>
                                    <div className="team-info text-center">
                                        <h5 className="name">{t("equipe:Sami Bellalah")} </h5>
                                        <div className="position">{t("equipe:Conseiller Pédagogique")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      
         
        <div className="gallery-section section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center">
                            <h4 className="section-title mb-15 wow move-up">{t("equipe:Quelques photos des signatures des conventions et des visites entreprises")}</h4>
                            
                        </div>
                    </div>
                </div>

                <div className="gallery-wrapper section-space--pt_80 ">
                    <div className="row">
                        <div className="col-lg-12">
                        
                            <div className="gallery-warp popup-images ">
                         
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/demo-images/signiature.jpg">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/demo-images/signiature.jpg">

                                        </div>
                                        <div className="ht-overlay"></div>
                                        <div className="overlay-icon">
                                            <i className="far fa-search"></i>
                                        </div>
                                    </div>
                                </a>
                        
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/conventions/convention-anat.webp">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/conventions/convention-anat.webp"></div>
                                        <div className="ht-overlay"></div>
                                        <div className="overlay-icon">
                                            <i className="far fa-search"></i>
                                        </div>
                                    </div>
                                </a>
                           
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/conventions/convention-avec-anat.webp">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/conventions/convention-avec-anat.webp"></div>
                                        <div className="ht-overlay"></div>
                                        <div className="overlay-icon">
                                            <i className="far fa-search"></i>
                                        </div>
                                    </div>
                                </a>
                            
                                <a className="single-gallery gallery-grid wow move-up"
                                    href="assets/images/conventions/convention-blp-anat.webp">
                                    <div className="single-gallery__item">
                                        <div className="single-gallery__thum bg-item-images bg-img"
                                            data-bg="assets/images/conventions/convention-blp-anat.webp"></div>
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

            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cta-content md-text-center">
                                <h3 className="heading">{t("equipe:Chez")}  <span className="text-color-primary"> BLP</span> {t("equipe:vivez vos rêves tout en réussissant votre vie professionnelle")}</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--two text-center">
                                <a href="contact" className="btn btn--secondary btn-two "><span className="btn-icon mr-2"><i className="far fa-info-circle"></i></span>{t("equipe:Contact")}</a>
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
