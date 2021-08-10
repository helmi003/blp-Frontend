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
                        <li className="breadcrumb-item"><a href="actualites">{t("startup-house-africa:Actualités")}</a></li>
                    </ul>
                   
                    <h2 className="breadcrumb-title ">{t("startup-house-africa:𝗦𝘁𝗮𝗿𝘁𝗨𝗽 𝗛𝗼𝘂𝘀𝗲 𝗔𝗳𝗿𝗶𝗰𝗮")}</h2>
                   
                
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
                                                {t("startup-house-africa:ouverture de 𝗠𝗜𝗧 𝗜𝗻𝗰𝘂𝗯𝗮𝘁𝗼𝗿")} 
                                                </h4>
                                              
                                                <div className="post-meta mt-20">
                                                 
                                                    <div className="post-date">
                                                        <span className="far fa-calendar meta-icon"></span>
                                                        {t("startup-house-africa:22 mai, 2021")}
                                                    </div>
                         
                                                </div>
                                                <blockquote>
                                                    <p className="p1"> {t("startup-house-africa:Ouverture de 𝗠𝗜𝗧 𝗜𝗻𝗰𝘂𝗯𝗮𝘁𝗼𝗿 et lancement le premier événement “ 𝗦𝘁𝗮𝗿𝘁𝗨𝗽 𝗛𝗼𝘂𝘀𝗲 𝗔𝗳𝗿𝗶𝗰𝗮 ”")} .</p>
                                                </blockquote>
                                                <p className="p1">{t("startup-house-africa:𝙈𝙄𝙏 & 𝘽𝙇𝙋 annoncent l'ouverture de 𝗠𝗜𝗧 𝗜𝗻𝗰𝘂𝗯𝗮𝘁𝗼𝗿 en partenariat avec 𝙋𝙎𝙎 & 𝘾𝘽𝙈 et lance le premier événement “ 𝗦𝘁𝗮𝗿𝘁𝗨𝗽 𝗛𝗼𝘂𝘀𝗲 𝗔𝗳𝗿𝗶𝗰𝗮 ”")} .</p>
                                               <p>{t("startup-house-africa:Dont le but d'aider les jeunes à développer leurs idées et projet en offrant de l'Hébergement, Formations, Conseils et Financement")}</p>
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
