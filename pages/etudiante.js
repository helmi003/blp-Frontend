import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function etudiante() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("etudiante:VIE ÉSTUDIANTE")}</h2>
                  
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="formations">{t("etudiante:La vie à l'université")}</a></li>
                        <li className="breadcrumb-item active">{t("etudiante:VIE ÉSTUDIANTE")}</li>
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

                    <div className="col-lg-12 order-lg-2 order-1">

                        <div className="main-blog-wrap">
          
                            <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                                <div className="row ">
                                    <div className="col-lg-6">
                                        <blockquote>
                                            <p className="p1">{t("etudiante:Learning center")} </p>
                                        </blockquote>
                                        <p style={{textAlign:"justify"}}>
                                        {t("etudiante:Agrandi et rénové")}
                                        </p>
                                        <p style={{textAlign:"justify"}}>
                                        {t("etudiante:Le Learning Center")}
                                        </p>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="">
                                            <img src="assets/images/blog/e-learning.webp"
                                                alt="certifications.jpg" width="600px" className=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         

                 
                            <div className="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                                <div className="row ">
                                    <div className="col-lg-6">
                                   
                                        <blockquote>
                                            <p className="p1">{t("etudiante:Bibliothèque")} </p>
                                        </blockquote>
                                        <p style={{textAlign:"justify"}}>
                                        {t("etudiante:La bibliothèque")}
                                        </p>

                                  
                                    </div>
                                    <div className="col-lg-6">
                                        <blockquote>
                                            <p className="p1"> {t("etudiante:Espace SMART de Co-working")} </p>
                                        </blockquote>
                                        <p>
                                        <p style={{textAlign:"justify"}}>
                                        {t("etudiante:L’université dispose de son First Co-working smart place : Salle de Co-working sur ses 4 sites")} <br/>
                                           {t("etudiante:Bienvenue dans la Famille Méditerranéenne")}
                                        </p>
                                        <p style={{textAlign:"justify"}}>
                                        <ul>
                                            <li> <b> CIO</b> : {t("etudiante:Centre Information et Orientation")} </li>
                                            <li> <b> Cci </b>: {t("etudiante:Service Social et Service Financier")}</li>
                                        </ul>
                                        </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
               
                            <div className="">
                                <div className="row ">
                                    <div className="col-lg-6">
                              
                                        <blockquote>
                                            <p className="p1"> {t("etudiante:Une université accessible d’un simple clic")} </p>
                                        </blockquote>
                                        <p style={{textAlign:"justify"}}>
                                        {t("etudiante:Accessible depuis Internet grâce à un mot de passe personnel, la bibliothèque virtuelle concerne la majorité des programmes et des formations diplômantes")}
                                        </p>
                                        <p style={{textAlign:"justify"}}>{t("etudiante:Depuis votre domicile")} </p>

                        
                                    </div>
                                    <div className="col-lg-6">
                                        <blockquote>
                                            <p className="p1"> {t("etudiante:Espace de restauration et Loisirs")} </p>
                                        </blockquote>
                                        <p style={{textAlign:"justify"}}>
                                        {t("etudiante:Un Restaurant est disponible dans les locaux de l’université au pole technologique à Tunis")}
                                        </p>
                                        <p style={{textAlign:"justify"}}>{t("etudiante:Des accords avec des Restaurants et des salles de sports, Piscine, et loisirs sont signés par l’Université à Tunis et à Nabeul")}
                                           </p>

                                        <p> {t("etudiante:Aussi Il existe")}
                                        </p>
                                    </div>
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
                            <h3 className="heading text-white">{t("etudiante:Bourses d'études et places gratuites et accès dès la Terminale à nos modules d'E-learning et sur place")}</h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-button-group--one text-center">

                            <a href="contact" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i
                                        className="far fa-info-circle"></i></span> {t("etudiante:Contact")}</a>
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
