import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function formations() {
    let { t } = useTranslation();
    return (
        <>
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title text-color-primary">{t("formations:FORMATIONS")}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  

    <div className="projects-wrapper section-space--pb_70 section-space--pt_100 projects-masonary-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrap text-center section-space--mb_40">
                                <h3 className="heading">{t("formations:Bénéficiez par")} <span className="text-color-primary"> {t("formations:nos formations")}</span></h3>
                            </div>

                            <div className="messonry-button text-center  section-space--mb_60">
                                <button data-filter="*" className="is-checked"><span className="filter-text">{t("formations:Tout")}</span><span className="filter-counter">8</span></button>
                                <button data-filter=".cat--1"><span className="filter-text">{t("formations:Les licences")} </span> <span className="filter-counter">3</span></button>
                                <button data-filter=".cat--2"><span className="filter-text">{t("formations:Les mastères")} </span> <span className="filter-counter">5</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="projects-case-wrap">
                        <div className="row mesonry-list">

                     
                            <div className="col-lg-4 col-md-6 cat--2">
                       
                                <a href="mastere-en-science-politique" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/inter.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Mastère en sciences politiques")} </div>
                                            <h6 className="heading">{t("formations:Relations internationales et diplomatie")}</h6>
                                            <br/>
                                        </div>
                                    </div>
                                </a>
                         
                            </div>

                            <div className="col-lg-4 col-md-6 cat--2">
                          
                                <a href="mastere-en-ingenierie-risque-economiques" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/finance.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Mastère en sciences Economiques")} </div>
                                            <h6 className="heading">{t("formations:Ingénierie des risques Economiques et financiers")}</h6>
                                        </div>
                                    </div>
                                </a>
                    
                            </div>
                            
                            <div className="col-lg-4 col-md-6 cat--2 ">
                       
                                <a href="mastere-en-droit-prive" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/droit.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Mastère en Droit")} </div>
                                            <h6 className="heading">{t("formations:Droit privé des affaires")}</h6>
                                            <br/>
                                        </div>
                                    </div>
                                </a>
                         
                            </div>

                            <div className="col-lg-4 col-md-6 cat--2">
                   
                                <a href="mastere-en-assurance-banque" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/gestion.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Mastère en sciences Economiques")}</div>
                                            <h6 className="heading">{t("formations:Assurance, banque, finance")}</h6>
                                        </div>
                                    </div>
                                </a>
        
                            </div>
                            <div className="col-lg-4 col-md-6 cat--2">
              
                                <a href="mastere-en-marche-financiers" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/risque.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Mastère en Sciences de gestion")} </div>
                                            <h6 className="heading"> {t("formations:Marchés financiers et gestion des risques")}</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 cat--1">
                 
                                <a href="licence-en-droit-public" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/droit2.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Licence en Droit")} </div>
                                            <h6 className="heading"> {t("formations:Droit Public")}</h6>
                                        </div>
                                    </div>
                                </a>
            
                            </div>
                            <div className="col-lg-4 col-md-6 cat--1">
                 
                                <a href="licence-en-droit-prive" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/droit3.jpg" alt="licence-droit-prive-blp"/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Licence en Droit")}</div>
                                            <h6 className="heading">{t("formations:Droit Privé")}</h6>
                                        </div>
                                    </div>
                                </a>
   
                            </div>
                            <div className="col-lg-4 col-md-6 cat--1">
                   
                                <a href="licence-en-marketing" className="projects-wrap style-2">
                                    <div className="projects-image-box">
                                        <div className="projects-image">
                                            <img className="img-fluid" src="assets/images/projects/marketing.jpg" alt="licence-marketing-blp"/>
                                        </div>
                                        <div className="content">
                                            <div className="post-categories">{t("formations:Licence en Sciences de gestion")}</div>
                                            <h6 className="heading"> {t("formations:Marketing")}</h6>
                                        </div>
                                    </div>
                                </a>
                       
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
                <div className="container">
                    <div className="computing-info-box text-center ">
                        
                        <h4 style={{color: "white"}} >“ {t("formations:La formation dispensée par notre école est nécessaire pour savoir s'adapter aux mutations profondes de l'économie internationale")} ”</h4>
                     
                    </div>
                </div>
            </div>
    <div id="main-wrapper">
        <div className="site-wrapper-reveal">

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
                                        <img className="img-fulid" src="assets/images/icons/mitech-home-resolutions-box-image-02-100x98.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h6 className="heading">{t("formations:Des conférences internationales")} </h6>
                                        <div className="text"> {t("formations:Présence de prix Nobels")}</div>
                                    </div>
                                </div>
                            </a>
      
                        </div>
                        <div className="swiper-slide">
       
                            <a href="#" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="assets/images/tunis.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">{t("formations:Diplôme agrée par l’État")} </h5>
                                        <div className="text">“{t("formations:L’université offre des diplômes agrées par l’État , des stages en Tunisie et à l’étranger")}”</div>
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
                                        <h5 className="heading">{t("formations:Plusieurs diplômes internationaux")}  </h5>
                                        <div className="text">“ {t("formations:Inscrirez-vous au diplôme tunisien et bénéficier d'un diplôme français public avec nos partenaires")}”</div>
                                    </div>
                                </div>
                            </a>
                      
                        </div>
                        <div className="swiper-slide">
                      
                            <a href="#" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-04-80x83.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">{t("formations:First smart university in Africa")}</h5>
                                        <div className="text">“ {t("formations:BLP dispose d’une plateforme d’enseignement à distance et de conseillers pédagogiques couvrant tous les programmes")}”</div>
                                    </div>
                                </div>
                            </a>
                        
                        </div>
                        <div className="swiper-slide">
                     
                            <a href="#" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="assets/images/safa.jpg" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">{t("formations:Des projets à l’international")}</h5>
                                        <div className="text">“ {t("formations:La mise en place d’un référentiel de compétences et  l’interaction entre le monde académique et professionnel")} ”</div>
                                    </div>
                                </div>
                            </a>
                         
                        </div>
                        
                        <div className="swiper-slide">
                         
                            <a href="#" className="ht-box-images style-03 wow move-up">
                                <div className="image-box-wrap">
                                    <div className="box-image">
                                        <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-04-80x83.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <h5 className="heading">{t("formations:Certifications")}</h5>
                                        <div className="text">{t("formations:Élargissez les perspectives de votre carrière grâce à des certificats reconnus mondialement")}</div>
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
                                <h3 className="heading text-white">{t("formations:First smart Co-working place")}  <span className="text-color-secondary"> {t("formations:in AFRICA")}</span></h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--one text-center">
                            
                                <a href="https://admission.blp.tn" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2">
                                    <i className="far fa-info-circle"></i></span>{t("index:Pré-inscription")}</a>
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
