import useTranslation from "next-translate/useTranslation";
export default function Home() {
    let { t } = useTranslation();
  return (
    
  <div id="main-wrapper">
    <div className="site-wrapper-reveal">
        <div className="resolutions-hero-slider position-relative">
            <div className="swiper-container hero-slider__container">
                <div className="swiper-wrapper testimonial-slider__wrapper">
                    <div className="swiper-slide">
                        <div className="service-hero-wrapper resolutions-hero-space resolutions-hero-bg ">
                            <div className="container">
                                <div className="row">
                                    <div className="constellation-wrapper">
                                        <div id="particles-js"></div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="service-hero-wrapper resolutions-hero-space resolutions-hero-bg-2">
                            <div className="container">
                                <div className="row">
                                    <div className="constellation-wrapper">
                                        <div id="particles-js"></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 ml-auto mr-auto">
                                        <div className="service-hero-wrap wow move-up">
                                            <div className="service-hero-text text-center">
                                                <h1 className="font-weight--reguler text-white mb-30"></h1>
                                                <h3 className="text-white"></h3>

                                                <div className="hero-button-group section-space--mt_50">
                                                    <a href="https://admission.blp.tn" target="_blank" className="ht-btn ht-btn-md">{t("index:Inscription")}</a>
                                                    <a href="contact" className="ht-btn ht-btn-md btn--white"><span
                                                            className="btn-icon mr-2"><i
                                                    className="fa fa-play"></i></span>{t("index:Contact")}</a>
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
            <div className="vc_row-separator center_curve_alt bottom">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                </svg>
            </div>
        </div>
   
        <div className="feature-images-wrapper  bg-gray">
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="feature-images__five resolutions-hero-bottom">
                            <div className="row">

                                <div className="col-lg-4 col-md-6 wow move-up">
                              
                                    <div className="ht-box-images style-05">
                                        <div className="image-box-wrap">
                                            <div className="box-image">
                                                <div className="default-image">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-home-resolutions-box-image-02-100x98.png"
                                                        alt=""/>
                                                </div>
                                                <div className="hover-images">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-home-resolutions-box-image-02-hover-100x98.png"
                                                        alt=""/>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="heading">{t("index:??tudier ?? l'??tranger")}</h5>
                                                <div className="text">{t("index:Avec BLP tout est possible M1 en Tunisie, M2 en France")}.
                                                </div>
                                                <div className="box-images-arrow">
                                                    <a href="etudier-en-tunisie">
                                                        <span className="button-text">{t("index:Lire plus")}</span>
                                                        <i className="far fa-long-arrow-right"></i>
                                                    </a>
                                                <br/><br/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                                <div className="col-lg-4 col-md-6 wow move-up">
                                   
                                    <div className="ht-box-images style-05">
                                        <div className="image-box-wrap">
                                            <div className="box-image">
                                                <div className="default-image">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-home-resolutions-box-image-01-100x98.png"
                                                        alt="diplome-mit"/>
                                                </div>
                                                <div className="hover-images">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-home-resolutions-box-image-01-hover-100x98.png"
                                                        alt="diplome-mit"/>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="heading">{t("index:Double dipl??me")}</h5>
                                                <div className="text"> {t("index:Inscrivez-vous au dipl??me tunisien et b??n??ficiez d'un dipl??me fran??ais public avec nos partenaires")}.
                                                </div>
                                                <div className="box-images-arrow">
                                                    <a href="https://admission.blp.tn">
                                                        <span className="button-text">{t("index:Lire plus")}</span>
                                                        <i className="far fa-long-arrow-right"></i>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className="col-lg-4 col-md-6 wow move-up">
                                    
                                    <div className="ht-box-images style-05">
                                        <div className="image-box-wrap">
                                            <div className="box-image">
                                                <div className="default-image">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-home-resolutions-box-image-03-100x98.png"
                                                        alt="mit"/>
                                                </div>
                                                <div className="hover-images">
                                                    <img className="img-fulid"
                                                        src="assets/images/icons/mitech-home-resolutions-box-image-03-hover-100x98.png"
                                                        alt="mit"/>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h5 className="heading">{t("index:Des projets ?? l???international")}</h5>
                                                <div className="text">{t("index:La mise en place d???un r??f??rentiel de comp??tences et l???interaction entre le monde acad??mique et professionnel")}.
                                                </div>
                                                <div className="box-images-arrow">
                                                    <a href="partenaire">
                                                        <span className="button-text">{t("index:Lire plus")}</span>
                                                        <i className="far fa-long-arrow-right"></i>
                                                    </a>
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
     
   
        <div className="blog-pages-wrapper zegzeg section-space--ptb_100 balance bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
               
                    <div className="section-title-wrap text-center section-space--mb_30">
                            <div className="col-lg-8 ml-auto mr-auto">
                                <div className="typed-text-wrap">
                                    <h4 className="cd-headline letters type">
                                        <span>{t("index:B??n??ficiez de nos")} </span>
                                        <span className="cd-words-wrapper waiting">
                                            <b className="is-visible"> Formations</b>
                                            <b> Licences</b>
                                            <b> Mast??res</b>
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="constellation-wrapper">
                            <div id="nasa-js"></div>
                        </div>
                        <div className="flexible-image-slider-wrap">
                            <div className="swiper-container three-flexible__container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                
                                        <a href="mastere-en-sciences-politiques"
                                            className="projects-wrap style-01 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/inter.jpg"
                                                        alt="sciences-politiques-blp"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Mast??re en Sciences Politiques")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> : {t("index:Relations internationales et diplomatie")}</div>
                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                               
                                        <a href="mastere-en-droit-prive" className="projects-wrap style-01 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/droit3.jpg"
                                                        alt="droit-prive-blp"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Mast??re en Droit")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> : {t("index:Droit priv?? des affaires")}
                                                    </div>
                                                    <br/>
                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                       
                                    </div>
                                    <div className="swiper-slide">
                                
                                        <a href="mastere-en-ingenierie-risque-economiques"
                                            className="projects-wrap style-01 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/gestion.jpg"
                                                        alt="Gestion-blp"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Mast??re en Sciences Economiques")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> : {t("index:Ing??nierie des risques Economiques et financiers")}</div>

                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                              
                                    </div>
                                    <div className="swiper-slide">
                      
                                        <a href="mastere-en-assurance-banque"
                                            className="projects-wrap style-01 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/finance.jpg"
                                                        alt="sciences-economiques-blp"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Mast??re en Sciences Economiques")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> : {t("index:Assurance, banque et finance")}
                                                    </div>
                                                    <br/>
                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                   
                                    </div>
                                    <div className="swiper-slide">
              
                                        <a href="mastere-en-marche-financiers" className="projects-wrap style-01">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/risque.jpg"
                                                        alt="science-de-gestion-blp"/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Mast??re en Sciences de gestion")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> : {t("index:March??s financiers et gestion des risques")}</div>
                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                      
                                    </div>
                                    <div className="swiper-slide">
                    
                                        <a href="licence-en-droit-public" className="projects-wrap style-01 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/droit.jpg" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Licence en Droit")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> : {t("index:Droit Public")}
                                                    </div>
                                                    <br/>
                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                      

                                    </div>
                                    <div className="swiper-slide">
                                  
                                        <a href="licence-en-marketing" className="projects-wrap style-01 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/marketing.jpg"
                                                        alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Licence en Sciences de gestion")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> : {t("index:Marketing")}
                                                    </div>
                                                    <br/>
                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
             
                                    </div>
                                    <div className="swiper-slide">
               
                                        <a href="licence-en-droit-prive" className="projects-wrap style-01 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <img className="img-fluid"
                                                        src="assets/images/projects/droit2.jpg" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h6 className="post-categories">{t("index:Licence en Droit")}</h6>
                                                    <div className="heading"><b>{t("index:Parcours")}</b> :{t("index:Droit Priv??")}
                                                    </div>
                                                    <br/>
                                                    <div className="box-projects-arrow">
                                                        <span className="button-text">{t("index:en savoir plus")}</span>
                                                        <i className="fa fa-long-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                             
                                    </div>

                                </div>

                            
                                <div className="swiper-nav-button swiper-button-next"><i className="nav-button-icon"></i></div>
                                <div className="swiper-nav-button swiper-button-prev"><i className="nav-button-icon"></i></div>
                            </div>
                            <div className="swiper-pagination swiper-pagination-3 section-space--mt_50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="blog-pages-wrapper zegzeg section-space--ptb_100 ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
               
                    <div className="section-title-wrap text-center section-space--mb_30">
                            <div className="col-lg-8 ml-auto mr-auto">
                                <div className="typed-text-wrap">
                                    <h4 className="cd-headline letters type">
                                        <span>{t("index:Actualit??s")} </span>
                                      
                                    </h4>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <div className="constellation-wrapper">
                            <div id="nasa-js"></div>
                        </div>
                        <div className="flexible-image-slider-wrap">
                            <div className="swiper-container three-flexible__container">
                                <div className="swiper-wrapper">
                       
                                <div className="col-lg-4 col-md-6 mt-30">
                                        <a href="inauguration-des-universites" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                    <img src="assets/images/actualites/inaugration-its-blp.webp" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                 <span className="button-text">{t("index:en savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                    

                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                <div className="col-lg-4 col-md-6 mt-30">
                                        <a href="lancement-de-le-premier-salon-des-start-ups" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                    <img src="assets/images/actualites/ouverture-its-blp.webp" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                <span className="button-text">{t("index:en savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               
                                            </div>
                                        </a>
                                    </div>
                              
                                    <div className="col-lg-4 col-md-6 mt-30">
                                        <a href="startup-house-africa" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                    <img src="assets/images/actualites/startup-africa.webp" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                <span className="button-text">{t("index:en savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                    

                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                
                                    <div className="col-lg-4 col-md-6 mt-30">
                                        <a href="plan-de-communication" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                    <img src="assets/images/actualites/plan-du-communication.webp" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                <span className="button-text">{t("index:en savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                    

                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                

                                </div>

                            
                                <div className="swiper-nav-button swiper-button-next"><i className="nav-button-icon"></i></div>
                                <div className="swiper-nav-button swiper-button-prev"><i className="nav-button-icon"></i></div>
                            </div>
                            <div className="swiper-pagination swiper-pagination-3 section-space--mt_50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="contact-us-section-wrappaer processing-contact-us-bg section-space--ptb_120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-lg-6">
                        <div className="conact-us-wrap-one">
                            <h3 className="heading text-white">{t("index:Si vous cherchez une formation qui d??bouche sur le m??tier r??mun??rateur")}, 
                                <span className="text-red"> BLP</span> {t("index:vous propose plusieurs fili??res choisies en fonction du march?? du travail")}. </h3>

                        </div>
                    </div>

                    <div className="col-lg-6 col-lg-6">
                        <div className="contact-info-two text-center">
                            <div className="icon">
                                <span className="fal fa-phone"></span>
                            </div>
                            <h6 className="heading font-weight--reguler">{t("index:REJOIGNEZ MAINTENANT")}!!</h6>
                            <br/>
                            <h2 className="call-us">
                                <div className="typed-text-wrap">
                                    <h4 className="cd-headline letters type">
                                        <span className="cd-words-wrapper waiting">
                                            <b className="is-visible text-white">(+216) 70 721 002</b>
                                        </span>
                                    </h4>
                                </div>

                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="fun-fact-wrapper  section-space--ptb_120 balance">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="photo">
                            <img src="assets/images/timeline/law.webp" alt="fac de droit" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="conact-us-wrap-one managed-it ">
                            <h5 className="heading ">{t("index:Pourquoi choisir")} <span className="text-color-primary"> BLP</span> ? </h5>

                            <div className="sub-heading">{t("index:Pourquoi choisir blp")}.</div>
                            <br/>
                            <div className="list-group-wrap section-space--mb_60">
                                <div className="separator-list-wrap">
                                    <ul className="check-list">
                                        <li className="list-item"><a href="#">{t("index:Offrir ce s??same ?? travers l???Afrique gratuitement ?? tous sur plus de 100 cours")}.</a></li>
                                        <li className="list-item"><a href="#">{t("index:Enseignement dispens?? par les meilleurs enseignants et professionnels Tunisiens et experts internationaux")}</a></li>
                                        <li className="list-item"><a href="#">{t("index:Collaboration avec des universit??s ??trang??res et possibilit?? de continuer les ??tudes et stages a l'??tranger")}</a></li>        
                                        <li className="list-item"><a href="#">{t("index:Places gratuites ?? nos enseignements en pr??sentiel aux laur??ats de chaque lyc??e au baccalaur??at")}.</a></li>
                                        <li className="list-item"><a href="#">{t("index:Bourse d?????tudes et Places gratuites et acc??s d??s la terminale ?? nos modules d???E-learning et sur place")}.</a></li>
                                        <li className="list-item"><a href="#">{t("index:Ouverture universit?? d'??t?? : cours gratuits en e-learning en temps r??el")}.</a></li>
                                        <li className="list-item"><a href="#">{t("index:Double cursus (reconnu par l???Union europ??enne)")}.</a></li>
                                        <li className="list-item"><a href="#">{t("index:Licences, Masters (Tunisiens et Fran??ais)")}.</a>
                                        </li>
                                        <li className="list-item"><a href="#">{t("index:Logements gratuits ?? Nabeul sur l???ann??e scolaire")}.</a></li>
                                        <li className="list-item"><a href="#">{t("index:D??veloppement des Comp??tences M??tiers et Employabilit??")}.</a></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 wow move-up">
                        <div className="fun-fact--two text-center">
                            <div className="fun-fact__count counter">10</div>
                            <h6 className="fun-fact__text">{t("index:Conventions + Universit??s dans le monde")}</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 wow move-up">
                        <div className="fun-fact--two text-center">
                            <div className="fun-fact__count counter">100</div>
                            <h6 className="fun-fact__text">{t("index:Cours gratuits")}</h6>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 wow move-up">
                        <div className="fun-fact--two text-center">
                            <div className="fun-fact__count counter"> 40</div>
                            <h6 className="fun-fact__text">{t("index:Sp??cialit??s")}</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 wow move-up">
                        <div className="fun-fact--two text-center">
                            <div className="fun-fact__count counter">10</div>
                            <h6 className="fun-fact__text">{t("index:Partenaires")}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="brand-logo-slider-area section-space--ptb_60 border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center section-space--mb_60">
                            <h6 className="section-sub-title mb-20" style={{color: "#c72b1a"}}>{t("index:NOS PARTENAIRES")}</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    
                        <div className="brand-logo-slider__container-area">
                            <div className="swiper-container brand-logo-slider__container">
                                <div className="swiper-wrapper brand-logo-slider__one">
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                        <a href="https://www.ipsl-edu.fr/">
                                            <div className="brand-logo__image">
                                                <img src="assets/images/brand/partenaire/ipsl.webp"
                                                    className="img-fluid" alt="after-code"/>
                                            </div>
                                            <div className="brand-logo__image-hover">
                                                <img src="assets/images/brand/partenaire/ipsl.webp"
                                                    className="img-fluid" alt="after-code"/>
                                            </div>
                                        </a>
                                    </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                        <a href="https://aftercode.tn/">
                                            <div className="brand-logo__image">
                                                <img src="assets/images/brand/partenaire/after-code.webp"
                                                    className="img-fluid" alt="after-code"/>
                                            </div>
                                            <div className="brand-logo__image-hover">
                                                <img src="assets/images/brand/partenaire/after-code.webp"
                                                    className="img-fluid" alt="after-code"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="swiper-slide brand-logo brand-logo--slider">
                                        <a href="https://www.banquezitouna.com/fr">
                                            <div className="brand-logo__image">
                                                <img src="assets/images/brand/partenaire/Bank-zitouna.webp"
                                                    className="img-fluid" alt="banque-zitouna"/>
                                            </div>
                                            <div className="brand-logo__image-hover">
                                                <img src="assets/images/brand/partenaire/Bank-zitouna.webp"
                                                    className="img-fluid" alt="banque-zitouna"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="swiper-slide brand-logo brand-logo--slider">
                                        <a href="https://www.smart-it.fr/">
                                            <div className="brand-logo__image">
                                                <img src="assets/images/brand/partenaire/Smart.webp"
                                                    className="img-fluid" alt="smart-it"/>
                                            </div>
                                            <div className="brand-logo__image-hover">
                                                <img src="assets/images/brand/partenaire/Smart.webp"
                                                    className="img-fluid" alt="smart-it"/>
                                            </div>
                                        </a>
                                    </div>
                              
                                
                                  
                                    <div className="swiper-slide brand-logo brand-logo--slider">
                                        <a href="https://www.u-cergy.fr/fr/index.html">
                                            <div className="brand-logo__image">
                                                <img src="assets/images/brand/partenaire/cergy-universite.webp"
                                                    className="img-fluid" alt="cergy"/>
                                            </div>
                                            <div className="brand-logo__image-hover">
                                                <img src="assets/images/brand/partenaire/cergy-universite.webp"
                                                    className="img-fluid" alt="cergy"/>
                                            </div>
                                        </a>
                                    </div>
                                 
                                    <div className="swiper-slide brand-logo brand-logo--slider">
                                        <a href="https://polytech.univ-nantes.fr/">
                                            <div className="brand-logo__image">
                                                <img src="assets/images/brand/partenaire/Ulysse.webp"
                                                    className="img-fluid" alt="ulysee"/>
                                            </div>
                                            <div className="brand-logo__image-hover">
                                                <img src="assets/images/brand/partenaire/Ulysse.webp"
                                                    className="img-fluid" alt="ulysee"/>
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


</div>
    </div>
    
  )
}
