import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function equipeBlp() {
    let { t } = useTranslation();
    return (
        <>
<div id="main-wrapper">
    <div className="site-wrapper-reveal">
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title ">{t("etudier-en-tunisie:ÉTUDIER EN TUNISIE")}</h2>
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item"><a href="accueil">BLP</a></li>
                            <li className="breadcrumb-item active">{t("etudier-en-tunisie:ÉTUDIER EN TUNISIE")}</li>
                        </ul>
              
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div className="blog-pages-wrapper section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ml-auto mr-auto">
                            <div className="main-blog-wrap">
                              
                                <div className="single-blog-item  wow move-up">

                                 
                                    <div className="post-info lg-blog-post-info">
                                        <div className="post-categories text-center">
                                            <a href="#">{t("etudier-en-tunisie:ÉTUDIER EN TUNISIE")}</a>
                                        </div>

                                        <h3 className="post-title text-center">
                                            <a href="#">{t("etudier-en-tunisie:Quelles sont les démarches à suivre")} ?</a>
                                        </h3>
                                        <div className="post-excerpt mt-15 text-center">
                                            <p>
                                           
                                            {t("etudier-en-tunisie:préparer")}.
                                            </p>

                                        </div>

                                    </div>
                                
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            <div className="accordion-wrapper ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 pr-5">
                            <div className="faq-two-wrapper section-space--mt_40">
                                <div id="accordion_two">
                                    <div className="card">
                                        <div className="card-header" id="heading__10">
                                            <h5 className="mb-0 font-weight--bold">
                                                <button className="btn-link" data-toggle="collapse" data-target="#tab__10" aria-expanded="true" aria-controls="tab__10">
                                                {t("etudier-en-tunisie:Les documents")} <span>
                                        <i className="far fa-caret-circle-down"></i>
                                        <i className="far fa-caret-circle-right"></i> </span>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="tab__10"  className="collapse"  aria-labelledby="heading__10" data-parent="#accordion_two">
                                            <div className="card-body">
                                     
                                              <ul className="check-list section-space--mb_40">
                                                        <li className="list-item">{t("etudier-en-tunisie:Passeport en cours de validité")} .</li>
                                                        <li className="list-item"> {t("etudier-en-tunisie:Visa")}. </li>
                                                        <li className="list-item">{t("etudier-en-tunisie:Extrait d’acte de naissance (original et au moins 3 copies)")}. </li>
                                                        <li className="list-item">  {t("etudier-en-tunisie:Justificatif de ressources financières")}. </li>
                                                        <li className="list-item">{t("etudier-en-tunisie:Certificat de scolarité")}.</li>
                                                        <li className="list-item">{t("etudier-en-tunisie:Diplômes obtenus dans votre pays d’origine ou copies certifiées conformes")}.</li>
                                                        <li className="list-item"> {t("etudier-en-tunisie:Les notes de vos années d’études universitaires")}.</li>
                                                        <li className="list-item">{t("etudier-en-tunisie:Photos")}.</li>
                                                        <li className="list-item">{t("etudier-en-tunisie:Carnet de vaccinations")}.</li>
                                                        <li className="list-item">{t("etudier-en-tunisie:Assurance maladie")}.</li>
                                                        <li className="list-item"> {t("etudier-en-tunisie:Ordonnances, si vous avez un traitement médical spécifique")}.</li>
                                                    </ul>
                                                    <b className="text-color-primary"> {t("etudier-en-tunisie:Si vous êtes marié et votre époux/épouse vous accompagne")}</b>
                                                    
                                                  <ul className="check-list section-space--mb_40">
                                                        <li className="list-item"> {t("etudier-en-tunisie:Certificat de mariage certifiée conforme")}.</li>
                                                        <li className="list-item">  {t("etudier-en-tunisie:Les mêmes documents que pour vous-même")}. </li>
                                                    </ul>
                                                    <b className="text-color-primary"> {t("etudier-en-tunisie:Si vous avez des enfants qui viennent avec vous")}</b>
                                                    
                                                    <ul className="check-list section-space--mb_40">
                                                          <li className="list-item">{t("etudier-en-tunisie:Extraits d’acte de naissance (certifiés conformes)")}.</li>
                                                          <li className="list-item"> {t("etudier-en-tunisie:Carnet de vaccinations")}. </li>
                                                      </ul>

                                                      <b className="text-color-primary">{t("etudier-en-tunisie:Nous vous conseillons d’apporter également")}</b>
                                                    
                                                    <ul className="check-list section-space--mb_40">
                                                          <li className="list-item">{t("etudier-en-tunisie:Une somme suffisante en devise pour couvrir vos besoins immédiats")}.</li>
                                                          <li className="list-item">{t("etudier-en-tunisie:Des vêtements adaptés au climat de la Tunisie")}. </li>
                                                      </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading__11">
                                            <h5 className="mb-0">
                                                <button className="btn-link collapsed" data-toggle="collapse" data-target="#collapse__11" aria-expanded="false" aria-controls="collapse__11">
                                                {t("etudier-en-tunisie:Le visa")}<span>
                                        <i className="far fa-caret-circle-down"></i>
                                        <i className="far fa-caret-circle-right"></i>  </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse__11" className="collapse" aria-labelledby="heading__11" data-parent="#accordion_two">
                                            <div className="card-body">
                                            <b>{t("etudier-en-tunisie:Ai-je besoin d’un visa pour venir en Tunisie")} ?</b>
                                           <p> « {t("etudier-en-tunisie:Pour vérifier si vous avez besoin d’un visa, consultez le site du Ministère")}
                                           {t("etudier-en-tunisie:des Affaires Etrangères")} ».</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading__12">
                                            <h5 className="mb-0">
                                                <button className="btn-link collapsed" data-toggle="collapse" data-target="#collapse__12" aria-expanded="false" aria-controls="collapse__12">
                                                {t("etudier-en-tunisie:Le logement")} <span><i className="far fa-caret-circle-down"></i>
                                        <i className="far fa-caret-circle-right"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse__12" className="collapse" aria-labelledby="heading__12" data-parent="#accordion_two">
                                            <div className="card-body">
                                            <p>
                                            {t("etudier-en-tunisie:Le groupe Méditerranéen propose des logements aux étudiants")}. <br/>
                                            {t("etudier-en-tunisie:possède")}. <br/>
                                            <b>{t("etudier-en-tunisie:Existe-t-il d’autres moyens de se loger")} ? </b> <br/>
                                            {t("etudier-en-tunisie:Des appartements meublés peuvent être loués près de la faculté")}.

                                            </p> 
                                           </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading__13">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapse__13" aria-expanded="false" aria-controls="collapse__13">
                                                {t("etudier-en-tunisie:Le climat")}<span><i className="far fa-caret-circle-down"></i>
                                        <i className="far fa-caret-circle-right"></i>  </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse__13" className="collapse" aria-labelledby="heading__13" data-parent="#accordion_two">
                                            <div className="card-body">
                                               <b>{t("etudier-en-tunisie:Quel temps fait-il en Tunisie")} ?</b>
                                                <p>« {t("etudier-en-tunisie:La Tunisie bénéficie")} »</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading__14">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapse__14" aria-expanded="false" aria-controls="collapse__13">
                                                {t("etudier-en-tunisie:Le budget & coût de la vie")}<span><i className="far fa-caret-circle-down"></i>
                                        <i className="far fa-caret-circle-right"></i>  </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse__14" className="collapse" aria-labelledby="heading__14" data-parent="#accordion_two">
                                            <div className="card-body">

                                               <b> {t("etudier-en-tunisie:De quel budget dois-je disposer pour séjourner en Tunisie")} ?</b>
                                                <p>                                           
                                            « {t("etudier-en-tunisie:Logement")}»</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading__15">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapse__15" aria-expanded="false" aria-controls="collapse__15">
                                                {t("etudier-en-tunisie:Le transport")} <span><i className="far fa-caret-circle-down"></i>
                                                <i className="far fa-caret-circle-right"></i>  </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse__15" className="collapse" aria-labelledby="heading__15" data-parent="#accordion_two">
                                            <div className="card-body">

                                                <b>{t("etudier-en-tunisie:Comment accéder à l'école Supérieure Privée des Sciences Juridiques, Economiques et Politiques")} ?</b>
                                                <p>                                           
                                                {t("etudier-en-tunisie:5 minutes")}. <br/>
                                                {t("etudier-en-tunisie:Adresse: 102, Chotrana 2, Zone industrielle, pôle technologique, Ariana")} <br/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading__16">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapse__16" aria-expanded="false" aria-controls="collapse__16">
                                                {t("etudier-en-tunisie:Santé, sécurite sociale et autres assurances")}<span><i className="far fa-caret-circle-down"></i>
                                                <i className="far fa-caret-circle-right"></i>  </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse__16" className="collapse" aria-labelledby="heading__16" data-parent="#accordion_two">
                                            <div className="card-body">

                                               <b>{t("etudier-en-tunisie:Comment bénéficier de la couverture sociale tunisienne")} ?</b>
                                                <p>                                           
                                                {t("etudier-en-tunisie:L’inscription à l’université vous donne le droit de bénéficier gratuitement d’un carnet de soin Etudiant qui vous donne le droit de se soigner auprès des établissements publics gratuitement")}. <br/>
                                                {t("etudier-en-tunisie:Pour bien préparer votre séjour")}
                                                {t("etudier-en-tunisie:Quelques liens utiles")} <br/>
                                                {t("etudier-en-tunisie:Ministère des Affaires Etrangères")} : <a href="www.diplomatie.gov.tn">www.diplomatie.gov.tn</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                           
                            <div className="video-interview section-space--mt_40 video-popup">
                                <a href="https://www.youtube.com/watch?v=ZqCy3TT49IQ" className="video-link mt-30">
                                    <div className="single-popup-wrap">
                                        <img className="img-fluid border-radus-5" src="assets/images/bg/Transport.webp" alt="etudier-en-tunisie-blp"/>
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
                      
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="gallery-section section-space--ptb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-wrap text-center">
                                <h4 className="section-title mb-15 wow move-up">{t("etudier-en-tunisie:VIVRE À NABEUL OU À TUNIS !")} </h4>
                            </div>
                        </div>
                    </div>

                  
                    <div className="gallery-wrapper section-space--pt_80 ">
                        <div className="row">
                            <div className="col-lg-12">
                    
                                <div className="gallery-warp popup-images ">
                             
                                    <a className="single-gallery gallery-grid wow move-up" href="assets/images/brand/centre.webp">
                                        <div className="single-gallery__item">
                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/brand/centre.webp">

                                            </div>
                                            <div className="ht-overlay"></div>
                                            <div className="overlay-icon">
                                                <i className="far fa-search"></i>
                                            </div>
                                        </div>
                                    </a>
                                  
                                    <a className="single-gallery gallery-grid wow move-up" href="assets/images/brand/medina.webp">
                                        <div className="single-gallery__item">
                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/brand/medina.webp"></div>
                                            <div className="ht-overlay"></div>
                                            <div className="overlay-icon">
                                                <i className="far fa-search"></i>
                                            </div>
                                        </div>
                                    </a>
                                 
                                    <a className="single-gallery gallery-grid wow move-up" href="assets/images/brand/tunis.webp">
                                        <div className="single-gallery__item">
                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/brand/tunis.webp"></div>
                                            <div className="ht-overlay"></div>
                                            <div className="overlay-icon">
                                                <i className="far fa-search"></i>
                                            </div>
                                        </div>
                                    </a>
                    
                                    <a className="single-gallery gallery-grid wow move-up" href="assets/images/brand/sidibou.webp">
                                        <div className="single-gallery__item">
                                            <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/brand/sidibou.webp"></div>
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
