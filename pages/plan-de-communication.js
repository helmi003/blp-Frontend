import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function licenceEnDroitPrive() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                  <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="actualites">{t("plan-de-communication:Actualités")}</a></li>
                    </ul>
                   
                    <h2 className="breadcrumb-title ">{t("plan-de-communication:Plan de communication")}</h2>
                   
                
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

                        <div className="col-lg-12 order-lg-2 order-1">
                        
                            <div className="main-blog-wrap">
                                <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                                    <div className="row ">
                                        <div className="col-lg-6">
                                            <div className="post-feature blog-thumbnail">
                                                <a href="">
                                                    <img className="img-fluid" src="assets/images/actualites/plan-du-communication.webp" alt="Blog Images"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="post-info lg-blog-post-info">
                                                <h4 className="post-title">
                                                {t("plan-de-communication:Webinaire")}  
                                                </h4>
                                              
                                                <div className="post-meta mt-20">
                                                 
                                                    <div className="post-date">
                                                        <span className="far fa-calendar meta-icon"></span>
                                                        {t("plan-de-communication:25 mai, 2021")}
                                                    </div>
                         
                                                </div>
                                                <blockquote>
                                                    <p className="p1">{t("plan-de-communication:Avoir un plan de communication")}</p>
                                                </blockquote>
                 
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
        </>
    )
}
