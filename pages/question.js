import React from 'react'
import useTranslation from "next-translate/useTranslation";
export default function question() {
    let { t } = useTranslation();
    return (
        <>
  <div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("question:QUESTIONS - RÉPONSES")}</h2>
                    
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="accueil">BLP</a></li>
                        <li className="breadcrumb-item active">{t("question:Questions & Réponses")}</li>
                    </ul>
             
                </div>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div className="site-wrapper-reveal">

          <div className="accordion-wrapper">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6">
                        <div className="faq-wrapper section-space--pt_90">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {t("question:Qui sommes nous")} ? <span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>- {t("question:De Bac à Prépa, licence, Cycle Ingénieur, Mastère")} .<br/>
                                            - {t("question:+ 100 partenaires industriels pour stages et Embauche en Tunisie et en Europe")}.<br/>
                                            - {t("question:Smart E-Learning et certification gratuites (sur place à distance et Alternance en Afrique)")}.<br/>
                                            - {t("question:Diplôme reconnu par l'état tunisien, Communauté Européenne : M1 en Tunisie et M2 en Europe")}<br/>
                                            - {t("question:Certifié en cours  ISO 9001 et accrédité AACSB en cours 21001")}.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            {t("question:L'année universitaire commencera à quelle date")} ?<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>{t("question:L’année universitaire commence en Septembre et se termine fin Juin")}. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            {t("question:Quelles sont les procédures d'inscription")} ? <span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                                <ul className="circle-list">
                                                    <li className="list-item">{t("question:Préinscription sur le site")}.</li>
                                                    <li className="list-item">{t("question:Envoyez les pièces suivantes à")} : contact@blp.tn .</li>
                                                    <li className="list-item">{t("question:Copies d’acte de naissance, dernier diplôme, relevé de notes, Passeport / CIN")}.</li>
                                                    <li className="list-item">{t("question:Indiquer la formation choisie")}.</li>
                                               </ul>
                                                <b style={{color:"blue"}}>{t("question:paiement")}.</b> 
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h5 className="mb-0">
                                            <button className="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            {t("question:Quel est le coût annuel de votre formation")} ?<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>{t("question:Le coût annuel qui inclut uniquement les frais de scolarité varie selon la formation : Licence 2500 Euro et Master: 3000 Euro")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                        <div className="card-header" id="faq_a">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_a" aria-expanded="false" aria-controls="faq_a">
                                                {t("question:Le cout total d'une année entre étude,nourriture et hébergement")} <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_a" className="collapse" aria-labelledby="faq_a" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <ul className="circle-list">
                                                    <li className="list-item">{t("question:Bourse études et Bourse logement")}.</li>
                                                    <li className="list-item">{t("question:Pack de service inclut les frais d’inscription, d’hébergement, de restauration, d’accompagnement depuis son arrivée en Tunisie")}.</li>
                                                    <li className="list-item">{t("question:Voir pack (Africa Intégration Services)")}.</li>
                                                    <li className="list-item">{t("question:2000 euros pour l’hébergement et nourriture")}.</li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                
                        <div className="toggles-wrapper section-space--pt_90">

                            <div className="faq-wrapper">

                                <div id="faq-toggles">
                                    <div className="card">
                                        <div className="card-header" id="faq_25">
                                            <h5 className="mb-0">
                                                <button className="btn-link collapsed" data-toggle="collapse" data-target="#faq_d" aria-expanded="false" aria-controls="faq_d">
                                                {t("question:Est-ce que vous trouvez l'hébergement")} ?<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_d" className="collapse" aria-labelledby="faq_25">
                                            <div className="card-body">
                                                <p>{t("question:Oui Plus 1 mois gratuit")} . </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_2">
                                            <h5 className="mb-0">
                                                <button className="btn-link collapsed" data-toggle="collapse" data-target="#faq_two" aria-expanded="false" aria-controls="faq_two">
                                                {t("question:Y'a-t-il des facilités de paiement et comment")} ?<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_two" className="collapse" aria-labelledby="faq_2">
                                            <div className="card-body">
                                                <p> {t("question:Oui, les frais de scolarité peuvent être échelonnés sur deux tranches")}. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_3">
                                            <h5 className="mb-0">
                                                <button className="btn-link collapsed" data-toggle="collapse" data-target="#faq_three" aria-expanded="false" aria-controls="faq_three">
                                                {t("question:Où vous trouvez nous")} ? <span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_three" className="collapse" aria-labelledby="faq_3">
                                            <div className="card-body">
                                                <p>{t("question:Mediterranean Institute of Tunisia, MITPolytech, MITTunis et MITNabeul, Tunisie : Afrique du Nord")}. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_4">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_four" aria-expanded="false" aria-controls="faq_four">
                                                {t("question:Est-ce que nos diplomes sont reconnus et pouvez-vous trouver des stages et d'embauche en Tunisie et en Europe ?")} <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_four" className="collapse" aria-labelledby="faq_4" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <ul className="circle-list">
                                                    <li className="list-item">{t("question:Diplôme reconnu Union Européenne")}.</li>
                                                    <li className="list-item">{t("question:Conventions avec 10 Entreprises pour les stages")}.</li>
                                                    <li className="list-item">{t("question:Innovation Project")}.</li>
                                                    <li className="list-item">{t("question:Stage d’initiation")}.</li>
                                                    <li className="list-item">{t("question:1ère année (Licence )")}.</li>
                                                    <li className="list-item">{t("question:2ème année (Licence)")}.</li>
                                                    <li className="list-item">{t("question:Stage PFE en terminales (Licence L3, Ingénieur, Master M2)")}.</li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_16">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_16" aria-expanded="false" aria-controls="faq_16">
                                                {t("question:Est-ce que vous assurez un accompagnement de l'etudiant lors de son arrivée en tunisie et sa carte de séjour ?")} <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_16" className="collapse" aria-labelledby="faq_16" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <p>{t("question:Oui étudiant")}.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_17">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_17" aria-expanded="false" aria-controls="faq_17">
                                                {t("question:Comment venir en Tunisie ?")} <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_17" className="collapse" aria-labelledby="faq_17" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <ul className="circle-list">
                                                    <li className="list-item">{t("question:Attestation de préinscription : remplir formulaire sur site")}.</li>
                                                    <li className="list-item">{t("question:Envoi du dossier de préinscription")}.</li>
                                                    <li className="list-item">{t("question:Confirmation (Acceptation ou complément ou rejet)")}.</li>
                                                    <li className="list-item"> {t("question:Attestation de paiement : paiement de la première tranche (cliquez Page responsabilité sociale et Bourse)")}.</li>
                                                    <li className="list-item">{t("question:Contrat / attestation de Logement : MIT héberge gratuitement une semaine à Tunis et des mois à Nabeul")}.</li>
                                                    <li className="list-item">{t("question:Confirmation de l’université par email à l’ambassade: Direction/administration")}.</li>
                                               </ul>
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

<div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
                <div className="row">
                    <div className="col-lg-12">
                       
                        <div className="section-title-wrap text-center">
                            <h6 className="section-sub-title mb-20">{t("question:Contactez-nous !")}</h6>
                            <h3 className="heading">{t("question:Avez-Vous Des Questions?")}</h3>
                        </div>
                           </div>
                </div>
            <br/><br/>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-lg-6">
                        <div className="conact-us-wrap-one mb-30">
                            <h3 className="heading">{t("question:NOUS SOMME À VOTRE ECOUTE!")} </h3>
                            <div className="sub-heading">{t("question:Afin de bien préparer votre formation, BLP met à votre disposition des conseillers pour répondre à toutes vos questions et vous orienter vers la bonne formation")}.</div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-lg-6">
                        <div className="contact-form-wrap">

                            <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php" method="post">
                                <div className="contact-form">
                                    <div className="contact-input">
                                        <div className="contact-inner">
                                            <input name="con_name" type="text" placeholder="Nom"/>
                                        </div>
                                        <div className="contact-inner">
                                            <input name="con_email" type="email" placeholder="Email "/>
                                        </div>
                                    </div>
                                    <div className="contact-inner">
                                        <input name="con_subject" type="text" placeholder="Objet "/>
                                    </div>
                                    <div className="contact-inner contact-message">
                                        <textarea name="con_message" placeholder="Message."></textarea>
                                    </div>
                                    <div className="submit-btn mt-20">
                                        <button className="ht-btn ht-btn-md" type="submit">{t("question:Envoyer")} </button>
                                        <p className="form-messege"></p>
                                    </div>
                                </div>
                            </form>
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
                                <h3 className="heading text-white">{t("question:First smart Co-working place")}  <span className="text-color-secondary"> {t("question:in AFRICA")}</span></h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--one text-center">
                            
                                <a href="https://admission.blp.tn" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i className="far fa-info-circle"></i></span>{t("index:Pré-inscription")}</a>
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
