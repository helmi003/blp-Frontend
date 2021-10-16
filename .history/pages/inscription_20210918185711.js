import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function inscription() {
    let { t } = useTranslation();
    return (
        <>

    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title ">{t("inscription:INSCRIPTION")}</h2>
                 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="main-wrapper">
        <div className="site-wrapper-reveal">
            <div className="container">
                <div className="timeline-area section-space--pt_60">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="post-info lg-blog-post-info">
                                <blockquote>
                                            <p className="p1">{t("inscription:S'inscrire à Tunisie")} </p>
                                </blockquote>
                                <div className="post-excerpt mt-15">
                                    <p style={{textAlign:"justify" , fontSize:"large"}}> {t("inscription:Inscrivez-vous à BLP, et obtenez un diplôme reconnu par l’Etat Tunisien")}<br/>
                                    {t("inscription:Vous pouvez télécharger le dossier d'inscription en cliquant ici")}<br/>
                                                <div className="btn-text">
                                                    <a href="assets/images/inscription/Dossier de candidature_alternatif-blp.docx"><i className="ml-1 button-icon far fa-long-arrow-right"></i> {t("inscription:Dossier d'inscription")} </a>
                                                </div>
                                                {t("inscription:Inscrivez-vous dès maintenant sur le lien suivant")}<br/>
                                                <div className="btn-text">
                                                    <a href="https://admission.blp.tn/"><i className="ml-1 button-icon far fa-long-arrow-right"></i> {t("inscription:Pré-inscription")} </a>
                                                </div>
                                                
                                                </p>
                                </div>
                                <blockquote>
                                            <p className="p1">{t("inscription:S'inscrire à l'international")} </p>
                                </blockquote>
                                    <p style={{textAlign:"justify" , fontSize:"large"}}> {t("inscription:Si vous souhaitez un double cursus qui débute en Tunisie et continue en Europe, nos partenaires vous offrent des opportunités")}<br/>
                                    <strong><p style={{color:"#d2a98e", fontSize:"large"}}>{t("inscription:Cycle INGÉNIEUR Français à Ecole Polytech Saint Louis, ECAM-EPMI")}<br/></p></strong>
                                   <p style={{textAlign:"justify", fontSize:"large"}}> {t("inscription:Pour s’inscrire en Licence et Cycle INGÉNIEUR Français à Ecole Polytech Saint Louis, ECAM-EPMI (accrédité par la commission des titres d’ingénieurs en France), CTI")}<br/>
                                   {t("inscription:Faire 1-2-3 ans en Tunisie")}<br/>
                                   {t("inscription:Faire 2 ans à ECAM-EPMI France : pour obtenir diplôme Ingénieur Français")} <br/>
                                    <b>{t("inscription:Niveau d’Admission")}</b> {t("inscription:Niveau Licence L1 et L2 et L3 : Toutes les spécialités techniques et informatiques")}<br/>
                                    <u style={{color:"#007bff"}}>{t("inscription:Contact en France")}</u><br/>
                                    <b> {t("inscription:Nathalie ZARATÉ")}</b> {t("inscription:Responsable Service des Admissions")}<br/>
                                    <b>{t("inscription:Solenn DAUDU")}</b> {t("inscription:Directrice Relations Internationales")}<br/>
                                    <b>{t("inscription:Contact en International")}</b> contactinternational@ecam-epmi.com<br/>
                                    {t("inscription:Veuillez trouver ci-après le lien vers le formulaire d'inscription Institut polytechnique saint Louis ECAM/EPMI pour la saison 2021/2022")}<br/>
                                    <div className="btn-text">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdX8IqKBevykAUdrKw5FcDvPJwHhALqBQqXDZEVfylFdBkGg/viewform"><i className="ml-1 button-icon far fa-long-arrow-right"></i> {t("inscription:Formulaire d'inscription ECAM/EPMI 2021/2022")} </a>
                                    </div>
                                    </p>
                                    <strong><p style={{color:"#d2a98e", fontSize:"large"}}> {t("inscription:Pour s’inscrire en Master Européen en Management des risques à Cy Cergy Paris université")}<br/></p></strong>
                                    <b>{t("inscription:Niveau d’Admission")}</b> {t("inscription:Maîtrise ou M1 toutes spécialités en sciences de gestion")}<br/>
                                    <b>{t("inscription:Durée des Études")}</b> {t("inscription:1 an en M2  ; M1 en Tunisie et M2 en Europe; soutenir mémoire a Paris")}<br/>

                                    <u style={{color:"#007bff"}}>{t("inscription:Contact en France")}</u><br/>
                                    <b>{t("inscription:Jean luc Prigent")}</b> jean-luc.prigent@cyu.fr<br/>
                                    {t("inscription:Vous pouvez télécharger le dossier d'inscription en cliquant ici")}<br/>
                                    <div className="btn-text">
                                        <a href="assets/images/inscription/Dossier inscription M2 GRFI UMLT TUNISIE 2020-21.pdf"><i className="ml-1 button-icon far fa-long-arrow-right"></i> {t("inscription:Dossier d'inscription à Cy Cergy Paris")} </a>
                                    </div>
                                    <br/>
                                    <strong><p style={{color:"#d2a98e", fontSize:"large"}}>{t("inscription:DBA, Doctorat en Business Administration ; France à Toulon")}<br/></p></strong>
                                    <p style={{textAlign:"justify" , fontSize:"large"}}>{t("inscription:Pour s’inscrire en DBA, Doctorat en Business Administration; en France à Toulon sans passer par notre ecole")}<br/>
                                    {t("inscription:Carte d’étudiant française et diplôme français")}<br/>
                                    <b>{t("inscription:Niveau d’Admission")}</b>{t("inscription:Niveau Licence (3 ans d’expérience) ; Niveau M1 (2 ans expérience) et niveau M2, Toutes les spécialités")}<br/>
                                    <b> {t("inscription:Durée des Études")}</b> {t("inscription:2 ans")}<br/>
                                    {t("inscription:Cours dispensé par les responsables français du DBA")}<br/>
                                    <b> {t("inscription:Inscription")}</b> {t("inscription:Doctorat en Business administration sur 2 ans")}<br/>

                                    {t("inscription:Soutenir en France")}<br/>

                                    <b>{t("inscription:Thèse")} </b>{t("inscription:rédiger thèse minimum 50 pages en Français ou en Anglais avec aide de professeurs à la bibliothèque")}<br/>
                                    <u style={{color:"#007bff"}}>{t("inscription:Contact en France")}</u><br/>
                                    <b>{t("inscription:Aladdin Bijo")}</b> bijo.a@me.com<br/>
                                    {t("inscription:Vous pouvez télécharger le dossier d'inscription en cliquant ici")}<br/>
                                    <div className="btn-text">
                                        <a href="assets/images/inscription/Dossier inscription M2 GRFI UMLT TUNISIE 2020-21.pdf"><i className="ml-1 button-icon far fa-long-arrow-right"></i> {t("inscription:Dossier d'inscription à HECCI")} </a>
                                    </div>
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
                                    <span className=" text-white">{t("inscription:Plus de")} </span>
                                    <span className="cd-words-wrapper waiting">
                            <b className="is-visible text-white">{t("inscription:Spécialisation")}</b>
                            <b className=" text-white">{t("inscription:Professionnalisation")}</b>
                            <b className=" text-white">{t("inscription:Internationalisation")}</b>
                            <b className=" text-white">{t("inscription:Certification")}</b>
                           </span> <span className=" text-white">   {t("inscription:de chaque parcours")}</span>
                                </h4>
                            </div>
                        </div>

                        <div className="col-lg-6 col-lg-6">
                            <div className="contact-info-two text-center">
                                <div className="icon">
                                    <span className="fal fa-phone"></span>
                                </div>
                                <h6 className="heading font-weight--reguler">{t("inscription:REJOIGNEZ MAINTENANT!!")}</h6>
                                <h2 className="call-us"><a href="tel:70721002">(+216) 70 721 002</a></h2>
                                <div className="contact-us-button mt-20">
                                    <a href="contact" className="btn btn--secondary">{t("inscription:Contactez-nous")}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

   </>
    )
}
