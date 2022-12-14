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
                        <li className="breadcrumb-item"><a href="actualites">{t("startup-house-africa:Actualitรฉs")}</a></li>
                    </ul>
                   
                    <h2 className="breadcrumb-title ">{t("startup-house-africa:๐ฆ๐๐ฎ๐ฟ๐๐จ๐ฝ ๐๐ผ๐๐๐ฒ ๐๐ณ๐ฟ๐ถ๐ฐ๐ฎ")}</h2>
                   
                
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
                                                    <img className="img-fluid" src="assets/images/actualites/startup-africa.webp" alt="Blog Images"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="post-info lg-blog-post-info">
                                                <h4 className="post-title">
                                                {t("startup-house-africa:ouverture de ๐?๐๐ง ๐๐ป๐ฐ๐๐ฏ๐ฎ๐๐ผ๐ฟ")} 
                                                </h4>
                                              
                                                <div className="post-meta mt-20">
                                                 
                                                    <div className="post-date">
                                                        <span className="far fa-calendar meta-icon"></span>
                                                        {t("startup-house-africa:22 mai, 2021")}
                                                    </div>
                         
                                                </div>
                                                <blockquote>
                                                    <p className="p1"> {t("startup-house-africa:Ouverture de ๐?๐๐ง ๐๐ป๐ฐ๐๐ฏ๐ฎ๐๐ผ๐ฟ et lancement le premier รฉvรฉnement โ ๐ฆ๐๐ฎ๐ฟ๐๐จ๐ฝ ๐๐ผ๐๐๐ฒ ๐๐ณ๐ฟ๐ถ๐ฐ๐ฎ โ")} .</p>
                                                </blockquote>
                                                <p className="p1">{t("startup-house-africa:๐๐๐ & ๐ฝ๐๐ annoncent l'ouverture de ๐?๐๐ง ๐๐ป๐ฐ๐๐ฏ๐ฎ๐๐ผ๐ฟ en partenariat avec ๐๐๐ & ๐พ๐ฝ๐ et lance le premier รฉvรฉnement โ ๐ฆ๐๐ฎ๐ฟ๐๐จ๐ฝ ๐๐ผ๐๐๐ฒ ๐๐ณ๐ฟ๐ถ๐ฐ๐ฎ โ")} .</p>
                                               <p>{t("startup-house-africa:Dont le but d'aider les jeunes ร? dรฉvelopper leurs idรฉes et projet en offrant de l'Hรฉbergement, Formations, Conseils et Financement")}</p>
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
