import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function layout({children}) {
    return (
        <>
        <div className="preloader-activate preloader-active open_tm_preloader">
            <div className="preloader-area-wrap">
                <div className="spinner d-flex justify-content-center align-items-center h-100">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
                <Header/> 
                { children }
                <Footer/>
           <a href="#" className="scroll-top" id="scroll-top">
                <i className="arrow-top fal fa-long-arrow-up"></i>
                <i className="arrow-bottom fal fa-long-arrow-up"></i>
           </a>
       <div className="demo-option-container">
           <div className="aeroland__toolbar">
               <div className="inner">
                   <a className="quick-option hint--bounce hint--left hint--black primary-color-hover-important" href="accueil" aria-label="Admission">
                       <i className="fal fa-university"></i>
                   </a>
                   <a className="hint--bounce hint--left hint--black primary-color-hover-important" target="_blank" href="formations" aria-label="Nos formations">
                       <i className="fal fa-graduation-cap"></i>
                   </a>
                   <a className="hint--bounce hint--left hint--black primary-color-hover-important" target="_blank" href="contact" aria-label="Contactez-nous">
                       <i className="fal fa-phone"></i>
                   </a>
               </div>
           </div>
        
           <div className="demo-option-wrapper">
               <div className="demo-panel-header">
                   <div className="title">
                       <h6 className="heading mt-30">École Supérieure Privée des Sciences Juridiques, Economiques et Politiques</h6>
                   </div>
       
               </div>
               <div className="row">
                    <div className="col-lg-1"></div>
                            <div className="col-lg-8">
                            <p > Fondée avec le Réseau Euro-méditerranéen pour l'Enseignement et la
                            Recherche, REMEREG.</p>
                            <p> Diplômes Tunisiens agrées par l’Etat et des Co-diplômes avec Université
                            de Cergy Pontoise, Polytechnique Nantes, REMEREG, etc sur ses sites
                            Tunis et Nabeul. </p>
                            </div>
                    </div>
                    <div className="demo-quick-option-list">
                        <a className="link hint--bounce hint--black hint--top hint--dark"  aria-label="Inauguration des universités">
                            <img className="img-fluid" src="assets/images/actualites/inauguration/ouverture-blp-its.webp" alt="Images"/>
                        </a>
                        <a className="link hint--bounce hint--black hint--top hint--dark" aria-label="Inauguration des universités" >
                            <img className="img-fluid" src="assets/images/actualites/inauguration/inauguration-des-universites.webp" alt="Images"/>
                        </a>
                        <a className="link hint--bounce hint--black hint--top hint--dark" aria-label="Inauguration des universités">
                            <img className="img-fluid" src="assets/images/actualites/inauguration/cloture-challange.webp" alt="Images"/>
                        </a>
                      
                    </div>
                </div>
            </div>
       
            <div className="mobile-menu-overlay" id="mobile-menu-overlay">
                <div className="mobile-menu-overlay__inner">
                    <div className="mobile-menu-overlay__header">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-8">
                                    <div className="logo">
                                        <a href="accueil">
                                            <img src="assets/images/logo/logo-blp2.png" className="img-fluid" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-4">
                                    <div className="mobile-menu-content text-right">
                                        <span className="mobile-navigation-close-icon" id="mobile-menu-close-trigger"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
       <div className="search-overlay" id="search-overlay">
       
           <div className="search-overlay__header">
               <div className="container-fluid">
                   <div className="row align-items-center">
                       <div className="col-md-6 ml-auto col-4">
                           <div className="search-content text-right">
                               <span className="mobile-navigation-close-icon" id="search-close-trigger"></span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="search-overlay__inner">
               <div className="search-overlay__body">
                   <div className="search-overlay__form">
                       <form action="#">
                           <input type="text" placeholder="Search"/>
                       </form>
                   </div>
               </div>
           </div>
       </div>
        </>
    )
}
