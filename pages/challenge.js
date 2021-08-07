import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function challenge() {
    let { t } = useTranslation();
    return (
        <>
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title ">{t("challenge:LES NUITS DE CHALLENGE")}</h2>
                      
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item"><a href="accueil">{t("challenge:BLP en digital")}</a></li>
                            <li className="breadcrumb-item active">{t("challenge:LES NUITS DE CHALLENGE")}</li>
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
                                    <h6 className="section-sub-title mb-20">{t("challenge:BLP en digital")}</h6>
                                    <h3 className="heading">{t("challenge:LES NUITS DE CHALLENGE COVID-19")}</h3>
                                </div>
         
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="row row--35">
                      
                        <div className="col-lg-4 col-md-6 mt-30">
                                                        
                             <div className="tab-history-image video-popup mt-30">
                             <iframe  width="400" height="450" src="https://www.youtube.com/embed/G56wc5kl5gQ" frameBorder="0" allowFullScreen autoPlay="1"></iframe>
                                     </div>
                                         <div className="box-large-image__content mt-30 text-center">
                                      <strong>{t("challenge:Projet 01 : Application de reconnaissance et de diagnostic de COVID19")}</strong> 
                                </div>
                            </div>
          
                           <div className="col-lg-4 col-md-6 mt-30">
                                                        
                                                        <div className="tab-history-image video-popup mt-30">
                                 <iframe  width="400" height="450" src="https://www.youtube.com/embed/mIwKf4ojLL0" frameBorder="0" allowFullScreen autoPlay="1"></iframe>

                                                                </div>
                                                                    <div className="box-large-image__content mt-30 text-center">
                                                                 <strong>{t("challenge:Projet")} 2 : TBIBKOM</strong> 
                                                           </div>
                                                       </div>
                        
                        <div className="col-lg-4 col-md-6 mt-30">
                                                        
                            <div className="tab-history-image video-popup mt-30">
                               <iframe  width="400" height="450" src="https://www.youtube.com/embed/dufzJAPW_VE" frameBorder="0" allowFullScreen autoPlay="1"></iframe>

                               </div>
                                 <div className="box-large-image__content mt-30 text-center">
                                  <strong>{t("challenge:Projet")} 5</strong> 
                                   </div>
                                     </div>
              
                            <div className="col-lg-4 col-md-6 mt-30">
                                                        
                                  <div className="tab-history-image video-popup mt-30">
                                     <iframe  width="400" height="450" src="https://www.youtube.com/embed/xZcdUNMAWG4" frameBorder="0" allowFullScreen autoPlay="1"></iframe>
                            
                                        </div>
                                             <div className="box-large-image__content mt-30 text-center">
                                          <strong>{t("challenge:Projet")} 6</strong> 
                                  </div>
                             </div>
                      
                            <div className="col-lg-4 col-md-6 mt-30">
                                                        
                                    <div className="tab-history-image video-popup mt-30">
                                       <iframe  width="400" height="450" src="https://www.youtube.com/embed/Mi7i6DllDRI" frameBorder="0" allowFullScreen autoPlay="1"></iframe>
                                                  
                                    </div>
                                        <div className="box-large-image__content mt-30 text-center">
                                     <strong> {t("challenge:Projet 7 : Prédiction des nombres d’infectés, des morts et de guérison")}</strong> 
                                    </div>
                             </div>
       
                               <div className="col-lg-4 col-md-6 mt-30">
                                                        
                                                        <div className="tab-history-image video-popup mt-30">
                                                           <iframe  width="400" height="450" src="https://www.youtube.com/embed/mxNIshUpTQI" frameBorder="0" allowFullScreen autoPlay="1"></iframe>
                                                                      
                                                        </div>
                                                            <div className="box-large-image__content mt-30 text-center">
                                                         <strong> {t("challenge:Projet")} 8</strong> 
                                                        </div>
                                                 </div>
                      
                           <div className="col-lg-4 col-md-6 mt-30">
                                                        
                                                        <div className="tab-history-image video-popup mt-30">
                                                           <iframe  width="400" height="450" src="https://www.youtube.com/embed/_5R2vC-aCgE" frameBorder="0" allowFullScreen autoPlay="1"></iframe>
                                                                      
                                                        </div>
                                                            <div className="box-large-image__content mt-30 text-center">
                                                         <strong> {t("challenge:Projet")} 9</strong> 
                                                        </div>
                                                 </div>

                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>

  <div className="contact-us-section-wrappaer processing-contact-us-bg section-space--ptb_120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-lg-6">
                        <div className="typed-text-wrap ">
                                <h4 className="cd-headline letters type">
                                    <span className=" text-white">{t("challenge:Plus de")} </span>
                                    <span className="cd-words-wrapper waiting">
                            <b className="is-visible text-white">{t("challenge:Spécialisation")}</b>
                            <b className=" text-white">{t("challenge:Professionnalisation")}</b>
                            <b className=" text-white">{t("challenge:Internationalisation")}</b>
                            <b className=" text-white">{t("challenge:Certification")}</b>
                           </span> <span className=" text-white">   {t("challenge:de chaque parcours")}</span>
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-6 col-lg-6">
                            <div className="contact-info-two text-center">
                                <div className="icon">
                                    <span className="fal fa-phone"></span>
                                </div>
                                <h6 className="heading font-weight--reguler">{t("challenge:REJOIGNEZ MAINTENANT!!")}</h6>
                                <h2 className="call-us"><a href="tel:70721002">(+216) 70 721 002</a></h2>
                                <div className="contact-us-button mt-20">
                                    <a href="contact" className="btn btn--secondary">{t("challenge:Contactez-nous")}</a>
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
