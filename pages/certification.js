import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function certification() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("certification:CENTRE DE CERTIFICATIONS ET DE FORMATION")}</h2>
               
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="">{t("certification:la Vie à l'université")}</a></li>
                        <li className="breadcrumb-item active">{t("certification:Certifications")}</li>
                    </ul>
 
                </div>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div className="site-wrapper-reveal">


        
       

        <div className="our-company-history section-space--ptb_100">
            <div className="container-fluid">
                <div className="grid-wrapper">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="faq-custom-col">
                            <div className="section-title-wrap">

                                <h3 className="heading">{t("certification:Certifications")} </h3>

                                <p className="text mt-30">{t("certification:BLP intègre")}</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ht-banner-01 ">
                            <img className="img-fluid border-radus-5 animation_images one wow fadeInDown"
                                src="assets/images/radio1.jpg" alt=""/>
                        </div>
                        <div className="ht-banner-02">
                        </div>
                        <div className="col-lg-6 col-md-6 mt-30">
                            <div className="">
                                <img src="assets/images/certifications.jpg" alt="certifications.jpg"
                                    className=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    
        <div className="gradation-process-area bg-gray section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ht-gradation style-01">
                     
                            <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.1s">
                                <div className="line"></div>
                                <div className="circle-wrap">
                                    <div className="mask">
                                        <div className="wave-pulse wave-pulse-1"></div>
                                        <div className="wave-pulse wave-pulse-2"></div>
                                        <div className="wave-pulse wave-pulse-3"></div>
                                    </div>

                                    <h6 className="circle">1</h6>
                                </div>

                                <div className="content-wrap">

                                    <h6 className="heading">{t("certification:Certifications SOLIDWORKS")}</h6>

                                    <div className="text">{t("certification:Elles permettent d'évaluer précisément vos connaissances et savoir-faire avec les logiciels SOLIDWORKS")}</div>


                                </div>
                            </div>
                          
                            <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.15s">
                                <div className="line"></div>
                                <div className="circle-wrap">
                                    <div className="mask">
                                        <div className="wave-pulse wave-pulse-1"></div>
                                        <div className="wave-pulse wave-pulse-2"></div>
                                        <div className="wave-pulse wave-pulse-3"></div>
                                    </div>

                                    <h6 className="circle">2</h6>
                                </div>

                                <div className="content-wrap">

                                    <h6 className="heading">{t("certification:Certification linguistique")}</h6>

                                    <div className="text">{t("certification:Les tests Test of English for International Communication (TOEIC) sont des certifications standardisées")} <br/>
                                     {t("certification:permettant d'évaluer le niveau d'anglais des locuteurs non anglophones tant au niveau de l'écrit que de l'oral")}
                                    </div>

                                </div>
                            </div>
                         
                            <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.20s">
                                <div className="line"></div>
                                <div className="circle-wrap">
                                    <div className="mask">
                                        <div className="wave-pulse wave-pulse-1"></div>
                                        <div className="wave-pulse wave-pulse-2"></div>
                                        <div className="wave-pulse wave-pulse-3"></div>
                                    </div>

                                    <h6 className="circle">3</h6>
                                </div>

                                <div className="content-wrap">

                                    <h6 className="heading">{t("certification:Certifications Cisco, Microsoft, Linux")}</h6>

                                    <div className="text">{t("certification:BLP permet à tous les etudiants de préparer")} <br/>
                                    {t("certification:leurs certifications Cisco - CCNA, CCNP, CCIE - en suivant une formation officielle Cisco")}</div>
                                </div>
                            </div>
                    
                            <div className="item item-1 animate wow fadeInRight" data-wow-delay="0.25s">
                                <div className="line"></div>
                                <div className="circle-wrap">
                                    <div className="mask">
                                        <div className="wave-pulse wave-pulse-1"></div>
                                        <div className="wave-pulse wave-pulse-2"></div>
                                        <div className="wave-pulse wave-pulse-3"></div>
                                    </div>

                                    <h6 className="circle">4</h6>
                                </div>

                                <div className="content-wrap">

                                    <h6 className="heading">{t("certification:Certification Oracle")}</h6>

                                    <div className="text">{t("certification:C'est le leader mondial des bases de données")} <br/>
                                    {t("certification:Toute personne visant un poste d’administrateur où développeur de base de données doit être capable d’installer")}, <br/>
                                    {t("certification:configurer")}</div>


                                </div>
                            </div>
                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="feature-images-wrapper position-relative">
            <div className="grid-wrapper">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
            </div>
            <div className="swiper-container service-slider__container">
                <div className="swiper-wrapper service-slider__wrapper feature-images__three">
                    <div className="swiper-slide">
      
                        <a href="#" className="ht-box-images style-03 wow move-up">
                            <div className="image-box-wrap">
                                <div className="box-image">
                                    <img className="img-fulid"
                                        src="assets/images/icons/mitech-home-resolutions-box-image-02-100x98.png"
                                        alt=""/>
                                </div>
                                <div className="content">
                                    <h6 className="heading">{t("certification:Des conférences internationales")} </h6>
                                    <div className="text"> {t("certification:nobels")}</div>
                                </div>
                            </div>
                        </a>
               
                    </div>
                    <div className="swiper-slide">
           
                        <a href="#" className="ht-box-images style-03 wow move-up">
                            <div className="image-box-wrap">
                                <div className="box-image">
                                    <img className="img-fulid" width="151px" height="115px"
                                        src="assets/images/tunis.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <h5 className="heading">{t("certification:Diplôme agrée par l’État")} </h5>
                                    <div className="text">“{t("certification:L’université offre des diplômes agrées par l’État , des stages en unisie et à l’étranger")}”</div>
                                </div>
                            </div>
                        </a>
                   
                    </div>
                    <div className="swiper-slide">
    
                        <a href="#" className="ht-box-images style-03 wow move-up">
                            <div className="image-box-wrap">
                                <div className="box-image">
                                    <img className="img-fulid" src="assets/images/france.png" alt=""/>
                                </div>

                                <div className="content">
                                    <h6 className="heading">{t("certification:Plusieurs diplômes internationaux")} </h6>
                                    <div className="text">“ {t("certification:Inscrivez-vous au diplôme tunisien et bénéficieze d'un diplôme français public avec nos partenaires")} ”</div>
                                </div>
                            </div>
                        </a>
                       
                    </div>
                    <div className="swiper-slide">
           
                        <a href="#" className="ht-box-images style-03 wow move-up">
                            <div className="image-box-wrap">
                                <div className="box-image">
                                    <img className="img-fulid"
                                        src="assets/images/icons/mitech-processing-service-image-04-80x83.png"
                                        alt=""/>
                                </div>
                                <div className="content">
                                    <h5 className="heading">{t("certification:First smart university in Africa")}</h5>
                                    <div className="text">“ {t("certification:BLP dispose d’une plateforme d’enseignement à distance et de conseillers pédagogiques couvrants tous les programmes")}”</div>
                                </div>
                            </div>
                        </a>
                   
                    </div>
                    <div className="swiper-slide">
                
                        <a href="#" className="ht-box-images style-03 wow move-up">
                            <div className="image-box-wrap">
                                <div className="box-image">
                                    <img className="img-fulid" width="151px" height="115px"
                                        src="assets/images/safa.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <h5 className="heading">{t("certification:Des projets à l’international")}</h5>
                                    <div className="text">“{t("certification:La mise en place d’un référentiel de compétences et l’interaction entre le monde académique et professionnel")}”</div>
                                </div>
                            </div>
                        </a>
                
                    </div>

                    <div className="swiper-slide">
                
                        <a href="#" className="ht-box-images style-03 wow move-up">
                            <div className="image-box-wrap">
                                <div className="box-image">
                                    <img className="img-fulid"
                                        src="assets/images/icons/mitech-processing-service-image-04-80x83.png"
                                        alt=""/>
                                </div>
                                <div className="content">
                                    <h5 className="heading">{t("certification:Certifications")}</h5>
                                    <div className="text">{t("certification:Élargissez les perspectives de votre carrière grâce à des certificats reconnus mondialement")}</div>
                                </div>
                            </div>
                        </a>
                  
                    </div>


                </div>
            </div>
        </div>

        <div className="cta-image-area_one section-space--ptb_80 processing-contact-us-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cta-content md-text-center">
                            <h3 className="heading text-white">{t("certification:Bourses d'études et places gratuites et accès dès la Terminale à nos modules d'E-learning et sur place")} </h3>
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
