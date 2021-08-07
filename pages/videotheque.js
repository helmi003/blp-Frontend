import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function videotheque() {
    let { t } = useTranslation();
    return (
        <>
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title ">{t("videotheque:VIDÉOTHÈQUE")}</h2>
             
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item"><a href="accueil">{t("videotheque:BLP en digital")}</a></li>
                            <li className="breadcrumb-item active">{t("videotheque:VIDÉOTHÈQUE")}</li>
                        </ul>
     
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="main-wrapper">
        <div className="site-wrapper-reveal">


                <div className="feature-large-images-wrapper infotechno-section-bg-01 section-space--pt_100">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12">
                             
                                <div className="section-title-wrap text-center section-space--mb_30">
                                    <h6 className="section-sub-title mb-20">{t("videotheque:BLP en digital")}</h6>
                                    <h3 className="heading">{t("videotheque:VIDÉOTHÈQUE")}</h3>
                                </div>
                   
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="row row--35">
                 
                        <div className="col-lg-4 col-md-6 mt-30">
                                                        
                             <div className="tab-history-image video-popup mt-30">
                             <video width="320" height="240" controls >
                             <source src="/assets/video/epm.mp4" type="video/mp4" frameBorder="0" allowFullScreen/>
                             {t("videotheque:Votre navigateur ne supporte pas la balise vidéo.")}
                            </video>
                              </div>
                               <div className="box-large-image__content mt-30 text-center">
                               <strong>{t("videotheque:MIT spot 2020")}</strong> 
                                </div>
                        </div>
                      
                           <div className="col-lg-4 col-md-6 mt-30">
                            <div className="tab-history-image video-popup mt-30">
                                <video width="320" height="240" controls >
                                    <source src="/assets/video/mit1.mp4" type="video/mp4" frameBorder="0" allowFullScreen/>
                                    {t("videotheque:Votre navigateur ne supporte pas la balise vidéo.")}
                                </video>
                                        </div>
                                            <div className="box-large-image__content mt-30 text-center">
                                         <strong>{t("videotheque:MIT Passage -p1")}</strong> 
                                   </div>
                               </div>                                                        
                                                     
           
                        <div className="col-lg-4 col-md-6 mt-30">
                                                        
                                                        <div className="tab-history-image video-popup mt-30">
                                                        <video width="320" height="240" controls >
                                                        <source src="/assets/video/mit2.mp4" type="video/mp4" frameBorder="0" allowFullScreen/>
                                                        {t("videotheque:Votre navigateur ne supporte pas la balise vidéo.")}
                                                        </video>
                                                                </div>
                                                                    <div className="box-large-image__content mt-30 text-center">
                                                                 <strong>{t("videotheque:MIT  Passage -p2")}</strong> 
                                                           </div>
                                                       </div>
                           
                                       <div className="col-lg-4 col-md-6 mt-30">
                                                <div className="tab-history-image video-popup mt-30">
                                                    <a href="https://www.youtube.com/watch?v=3QBiStVrP_8" className="video-link">
                                                        <div className="single-popup-wrap">
                                                            <img className="img-fluid" src="assets/images/projects/p1.jpg" alt=""/>
                                                            <div className="ht-popup-video video-button">
                                                                <div className="video-mark">
                                                                    <div className="wave-pulse wave-pulse-1"></div>
                                                                    <div className="wave-pulse wave-pulse-2"></div>
                                                                </div>
                                                                <div className="video-button__two">
                                                                    <div className="video-play">
                                                                        <span className="video-play-icon"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="box-large-image__content mt-30 text-center">
                                                    <b>{t("videotheque:PASSAGE RADIO MED 16-05-2020")}</b>
                                                </div>                        
                                       </div>

                                    <div className="col-lg-4 col-md-6 mt-30">
                                  
                                                <div className="tab-history-image video-popup mt-30">
                                                    <a href="https://www.youtube.com/watch?v=Mi7i6DllDRI" className="video-link">
                                                        <div className="single-popup-wrap">
                                                            <img className="img-fluid" src="assets/images/projects/prediction.jpg" alt=""/>
                                                            <div className="ht-popup-video video-button">
                                                                <div className="video-mark">
                                                                    <div className="wave-pulse wave-pulse-1"></div>
                                                                    <div className="wave-pulse wave-pulse-2"></div>
                                                                </div>
                                                                <div className="video-button__two">
                                                                    <div className="video-play">
                                                                        <span className="video-play-icon"></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="box-large-image__content mt-30 text-center">
                                                <strong>{t("videotheque:PRÉDICTION DES NOMBRES D’INFECTÉS, DES MORTS, DE GUÉRISON")}</strong> 
                                                </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=aHLypi4nV4s" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/covid1.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                       <strong>{t("videotheque:COVID 19 ET ÉCONOMIE TUNISIENNE : IMPACT, MESURES ET CONDITIONS DE RELANCE")}</strong> 
                                  </div>
                            </div>

       <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=E4Si0gD9Uzk" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/j2.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:JOURNÉE DE MÉTIER 15-05-2020 -- J2")}</strong> 
                                  </div>
                      </div>


                            <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=39wY9T7W5lo" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/j1.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:JOURNÉE DE MÉTIER 13-05-2020 -- J1")} </strong> 
                                  </div>
                      </div>


                            <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=ZqCy3TT49IQ" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/j3.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:C'est ce qui distingue l'Ecole Méditerranéenne des autres universités privées en Tunisie")} </strong> 
                                  </div>
                      </div>

                        <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=8U2myqUG-w0" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/bac.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:ORIENTATION BAC")} </strong> 
                                  </div>
                      </div>


                       <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=6-EGM0SReXY" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/revision-bac.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:Faker Makni : responsable cycle préparatoire - Chaker Zafouri : Professeur de l'Ecole Méditerranéenne")}</strong> 
                                  </div>
                        </div>


   <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=QPEp_rU2ZAE" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/initiation.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:Initiation Au People Management")} </strong> 
                                  </div>
                      </div>


                            <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=ms2GMW-nFAE" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/pas1.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:Passage Radio Med 09-05-2020")} </strong> 
                                  </div>
                      </div>

   <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=-TP5YrQ8gGo" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/groupe.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:UMLT | M24 Media Group")}</strong> 
                                  </div>
                      </div>


                            <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=RcfuO-rrE18" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/spot.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:École Polytechnique Méditerranéenne : Spot 2019")}</strong> 
                                  </div>
                      </div>


                            <div className="col-lg-4 col-md-6 mt-30">
                                  
                                  <div className="tab-history-image video-popup mt-30">
                                      <a href="https://www.youtube.com/watch?v=44pbYUyH6g8" className="video-link">
                                          <div className="single-popup-wrap">
                                              <img className="img-fluid" src="assets/images/projects/radio.jpg" alt=""/>
                                              <div className="ht-popup-video video-button">
                                                  <div className="video-mark">
                                                      <div className="wave-pulse wave-pulse-1"></div>
                                                      <div className="wave-pulse wave-pulse-2"></div>
                                                  </div>
                                                  <div className="video-button__two">
                                                      <div className="video-play">
                                                          <span className="video-play-icon"></span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("videotheque:Radio Med 02-05-2020")}</strong> 
                                  </div>
                      </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
          <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cta-content md-text-center">
                            <h3 className="heading text-white">{t("videotheque:Bourses d'études et places gratuites et accés dés la Terminale à nos modules de E-learning et sur place")} </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-button-group--one text-center">
                            
                            <a href="contact" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i className="far fa-info-circle"></i></span> {t("videotheque:Contact")}</a>
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
