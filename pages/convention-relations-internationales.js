import React from 'react'
import useTranslation from "next-translate/useTranslation";

export default function partenaire() {
    let { t } = useTranslation();
    return (
        <>
            <div className="cybersecurity-hero processing-hero-bg__color ">
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-7">
                        <div className="cybersecurity-hero-text wow move-up">
                            <h6 className="text-color-primary">{t("convention-relations-internationales:Nos activités internationnale")}s </h6>
                            <h3 className="font-weight--reguler mb-30">{t("convention-relations-internationales:BLP votre Passeport pour la réussite")} !</h3>
                            <div className="bedraw-button">
                                <a href="https://admission.blp.tn" target="_blank" className="ht-btn ht-btn-md">{t("convention-relations-internationales:Inscription")} <i
                                        className="far fa-long-arrow-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="cybersecurity-hero-images-wrap wow move-up">
                            <div className="cybersecurity-hero-images section-space--mt_80">
                                <div className="inner-img-one">
                                    <img className="img-fluid worldRotate"
                                        src="assets/images/hero/mitech-slider-cybersecurity-global-image.png"
                                        alt=""/>
                                </div>
                                <div className="inner-img-two">
                                    <img className="img-fluid  ml-5 "
                                        src="assets/images/hero/slider-cybersecurity-slide-01-image-01.png"
                                        alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="section-space--ptb_100 infotechno-section-bg-01">

                <div className="feature-large-images-wrapper section-space--pt_100">
                    <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title-wrap text-center section-space--mb_30">
                                        <h6 className="section-sub-title mb-20">{t("convention-relations-internationales:Actualité")}</h6>
                                        <h3 className="heading">{t("convention-relations-internationales:Conventions")} <span className="text-color-primary"> &</span> {t("convention-relations-internationales:relations internationales")}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="row row--35">
                                    <div className="col-lg-4 col-md-6 mt-30">
                    
                                        <a href="signature-de-convention-entre-blp-iescci" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                        <img src="assets/images/conventions/signature-convention-blp-escci.webp" className="img-fluid" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                <span className="button-text">{t("convention-relations-internationales:En savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>

                                                <div className="box-large-image__content mt-30 text-center">
                                                    <p>{t("convention-relations-internationales:Signature d'une convention de partenariat entre")}  <strong>{t("convention-relations-internationales:BLP et IESCCI France")} </strong></p> 
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                  
                                    <div className="col-lg-4 col-md-6 mt-30">
                    
                                        <a href="convention-avec-centre-etude-juridique-geneve" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                        <img src="assets/images/conventions/convention-blp-centre-etude-juridique-geneve.webp" className="img-fluid" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                <span className="button-text">{t("convention-relations-internationales:En savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                     
                                                    </div>
                                                </div>

                                                <div className="box-large-image__content mt-30 text-center">
                                                     <p>{t("convention-relations-internationales:Signature de la convention de partenariat avec")} <strong>{t("convention-relations-internationales:Centre d'Etude Juridique à Genève, Suisse")}</strong>.</p>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-lg-4 col-md-6 mt-30">
                    
                                        <a href="convention-avec-conect" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                        <img src="assets/images/conventions/convention-blp-conect.webp" className="img-fluid" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                <span className="button-text">{t("convention-relations-internationales:En savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                    

                                                    </div>
                                                </div>

                                                <div className="box-large-image__content mt-30 text-center">
                                                <p>{t("convention-relations-internationales:Signature de la convention de partenariat avec")} <strong>{t("convention-relations-internationales:la Confédération des Entreprises Citoyennes de Tunisie 'CONECT'")}</strong>.</p>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                    <div className="col-lg-4 col-md-6 mt-30">
                                        
                                        <a href="convention-avec-anat" className="box-large-image__wrap wow move-up">
                                            <div className="box-large-image__box">
                                                <div className="box-large-image__midea">
                                                    <div className="images-midea">
                                                        <img src="assets/images/conventions/convention-avec-anat.webp" className="img-fluid" alt=""/>

                                                        <div className="button-wrapper">
                                                            <div className="btn tm-button">
                                                                <span className="button-text">{t("convention-relations-internationales:En savoir plus")}</span>
                                                            </div>
                                                        </div>
                                                     

                                                    </div>
                                                </div>

                                                <div className="box-large-image__content mt-30 text-center">
                                                <p>{t("convention-relations-internationales:Signature de la convention de partenariat avec")} <strong>ANAT</strong>.</p>
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
            
            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="cta-content md-text-center">
                                        <h3 className="heading text-white">{t("convention-relations-internationales:Ouverture des inscriptions : Inscrivez-vous à des filières tendances qui garantissent l'emploi")} </h3>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="cta-button-group--one text-center">

                                        <a href="https://admission.blp.tn/" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i className="far fa-info-circle"></i></span> {t("convention-relations-internationales:Inscription")}</a>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
              </div>

 
        <div className="tabs-wrapper bg-gray section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ht-tab-wrap">
                        <div className="text-center  ">
                            <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                <li className="tab__item nav-item active">
                                    <a className="nav-link active" id="nav-tab1" data-toggle="tab" href="#tab_list_06"
                                        role="tab" aria-selected="true">{t("convention-relations-internationales:LES OBJECTIFS DE PARTENARIAT")}</a>
                                </li>
                                <li className="tab__item nav-item">
                                    <a className="nav-link" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab"
                                        aria-selected="false">{t("convention-relations-internationales:LES STAGES")}</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab"
                                        aria-selected="false">{t("convention-relations-internationales:L’IMPLICATION DES PROFESSIONNELS")}</a>
                                </li>

                            </ul>
                        </div>

                        <div className="tab-content ht-tab__content">

                            <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_40">
                                    <div className="row">
                                        <div className="col-lg-6 ">
                                            <div className="tab-history-image video-popup mt-30">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA"
                                                    className="video-link">
                                                    <div className="single-popup-wrap">
                                                        <img className="img-fluid"
                                                            src="assets/images/brand/convention.webp"
                                                            alt=""/>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1 ">
                                            <div className="tab-content-inner  mt-30">
                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item">{t("convention-relations-internationales:Organiser des visites pour nos étudiants aux entreprises")}.</li>
                                                    <li className="list-item">{t("convention-relations-internationales:Présenter les formations de l’université par secteur d’activité")}. </li>
                                                    <li className="list-item">{t("convention-relations-internationales:Enquêter auprès des services concernés pour identifier leurs besoins en compétences")}. </li>
                                                    <li className="list-item"> {t("convention-relations-internationales:Analyser et consolider les besoins de l’entreprise en formation continue")}. </li>
                                                    <li className="list-item">{t("convention-relations-internationales:Elaborer les cahiers des charges en collaboration avec l’entreprise")}.</li>
                                                    <li className="list-item">{t("convention-relations-internationales:Proposer un plan d’action et le faire valider par l’entreprise")}.</li>
                                                    <li className="list-item">{t("convention-relations-internationales:Evaluer nos formations et les relier avec le besoin du monde économique")}.</li>
                                                    <li className="list-item">{t("convention-relations-internationales:Avoir des formations de haute qualité dans les différentes spécialités")}.</li>
                                                    <li className="list-item">{t("convention-relations-internationales:Organiser des journées entreprises")}</li>
                                                    <li className="list-item">{t("convention-relations-internationales:Facilité la recherche des stages et des PFEs pour les étudiants")}.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tab_list_07" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="ht-box-images style-08 move-up animate">
                                                <p>{t("convention-relations-internationales:Le stage est considéré")}.</p>
                                                <p>{t("convention-relations-internationales:De nombreuses entreprises")}.</p>
                                              
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="tab_list_08" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="tab-content-inner  mt-30">
                                            <p>{t("convention-relations-internationales:BLP intègre des professionnels dans le corps enseignant, chacun dans son domaine, ils interviennent sous forme de conférences, travaux dirigés ou modules thématiques")}.</p>
                                            <p>{t("convention-relations-internationales:Les entreprises et les professionnels")}.</p>
                                            <p>{t("convention-relations-internationales:BLP a adopté un modèle d’enseignement orienté employ")}.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 ">
                                        <div className="tab-history-image video-popup mt-30">
                                            <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link">
                                                <div className="single-popup-wrap">
                                                    <img className="img-fluid"
                                                        src="assets/images/bg/teach.webp" alt=""/>
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

        </>
    )
}
