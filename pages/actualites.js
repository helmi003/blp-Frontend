import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function contact() {
   let { t } = useTranslation();
return (
<>
<div className="breadcrumb-area">
   <div className="container">
      <div className="row">
         <div className="col-12">
            <div className="breadcrumb_box text-center">
               <h2 className="breadcrumb-title">{t("actualites:Actualités")} </h2>
               <ul className="breadcrumb-list">
                  <li className="breadcrumb-item"><a href="/">{t("actualites:Accueil")}</a></li>
                  <li className="breadcrumb-item active">{t("actualites:Actualités")} </li>
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
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="assets/images/actualites/devenir-ing-en-france.jpg">
                        <img className="img-fluid" src="assets/images/actualites/devenir-ing-en-france.jpg" alt="Convention Carthage & BLP" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:05 juillet, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{t("actualites:Devenir un ingénieur en France")}</a>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="assets/images/actualites/hackathon.jpg">
                        <img className="img-fluid" src="assets/images/actualites/hackathon.jpg" alt="Convention Carthage & BLP" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:03 juillet, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{t("actualites:Lancement du Hackathon Coding Hub")}</a>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="assets/images/actualites/formation-alternee.jpg">
                        <img className="img-fluid" src="assets/images/actualites/formation-alternee.jpg" alt="Convention Carthage & BLP" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:01 juillet, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{t("actualites:Lancement d'une formation alternée entre Aftercode et MIT")}</a>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="assets/images/actualites/plan2-univ-ete.jpg">
                        <img className="img-fluid" src="assets/images/actualites/plan2-univ-ete.jpg" alt="Convention Carthage & BLP" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:30 juin, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{t("actualites:Plan d'études N° 2 pendant l'été")}</a>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="assets/images/actualites/plan1-univ-ete.jpg">
                        <img className="img-fluid" src="assets/images/actualites/plan1-univ-ete.jpg" alt="Convention Carthage & BLP" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:29 juin, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{t("actualites:Plan d'études N° 1 pendant l'été")}</a>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <img className="img-fluid" src="assets/images/actualites/etudier-gratuitement.jpg" alt="Convention Carthage & BLP" />
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:27 juin, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{t("actualites:Etudier gratuitement pendant les vacances d'été")}</a>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <img className="img-fluid" src="assets/images/actualites/conv-carthage.png" alt="Convention Carthage & BLP" />
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:19 juin, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{t("actualites:BLP vous offre")}</a>
                        </h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="inauguration-des-universites">
                        <img className="img-fluid" src="assets/images/actualites/inaugration-its-blp.webp" alt="Blog Images" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:05 juin, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a href="inauguration-des-universites">{t("actualites:Inauguration des universités BLP-ITS")}</a>
                        </h5>
                        <div className="btn-text">
                           <a href="inauguration-des-universites">{t("actualites:En savoir Plus")} <i className="ml-1 button-icon far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="lancement-de-le-premier-salon-des-start-ups">
                        <img className="img-fluid" src="assets/images/actualites/ouverture-its-blp.webp" alt="Blog Images" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:05 juin, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a href="lancement-de-le-premier-salon-des-start-ups">{t("actualites:Lancement de le premier salon des start ups")}</a>
                        </h5>
                        <div className="btn-text">
                           <a href="lancement-de-le-premier-salon-des-start-ups">{t("actualites:En savoir Plus")} <i className="ml-1 button-icon far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="plan-de-communication">
                        <img className="img-fluid" src="assets/images/actualites/plan-du-communication.webp" alt="Blog Images" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:25 mai, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a href="plan-de-communication">{t("actualites:Plan de communication")}</a>
                        </h5>
                        <div className="btn-text">
                           <a href="plan-de-communication">{t("actualites:En savoir Plus")} <i className="ml-1 button-icon far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="startup-house-africa">
                        <img className="img-fluid" src="assets/images/actualites/startup-africa.webp" alt="Blog Images" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {t("actualites:22 mai, 2021")}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a href="startup-house-africa">{t("actualites:𝗦𝘁𝗮𝗿𝘁𝗨𝗽 𝗛𝗼𝘂𝘀𝗲 𝗔𝗳𝗿𝗶𝗰𝗮")}</a>
                        </h5>
                        <div className="btn-text">
                           <a href="startup-house-africa">{t("actualites:En savoir Plus")} <i className="ml-1 button-icon far fa-long-arrow-right"></i></a>
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
                                <h3 className="heading text-white">{t("actualites:First smart Co-working place")}  <span className="text-color-secondary"> {t("actualites:in AFRICA")}</span></h3>
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
</>
)
}