import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function MastereEnAssuranceBanque() {
    let { t } = useTranslation();
    return (
        <>

<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("mastere-en-assurance-banque:Mastère en Assurance, Banque et Finance")} </h2>
                   
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="formations">{t("mastere-en-assurance-banque:Formations")}</a></li>
                        <li className="breadcrumb-item active">{t("mastere-en-assurance-banque:Mastère")}</li>
                    </ul>
                
                </div>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div className="site-wrapper-reveal">
  
        <div className="blog-pages-wrapper zegzeg  section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 order-lg-2 order-2">
                        <div className="page-sidebar-content-wrapper page-sidebar-right small-mt__40 tablet-mt__40">
                         
                            <div className="sidebar-widget search-post wow move-up">
                                <div className="business-solution-form-wrap mr-auto ml-auto">
                                    <div className="contact-title text-center section-space--mb_40">
                                        <h5 className="mb-10">{t("mastere-en-assurance-banque:Inscrivez-vous dès maintenant")}</h5>
                                    </div>
                          
                                    <form id="contact-form"
                                        action="https://whizthemes.com/mail-php/jowel/mitech/php/hero-mail.php"
                                        method="post">
                                        <div className="contact-form__two">
                                            <div className="contact-inner">
                                                <input name="con_name" type="text" placeholder="Votre nom "/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="text" placeholder="Votre prénom "/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="email" placeholder="Votre email "/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="email" placeholder="Votre telephone "/>
                                            </div>
                                            <div className="contact-select">
                                                <div className="form-item contact-inner">
                                                    <span className="inquiry">
                                                        <select id="Visiting" name="Visiting">
                                                            <option disabled selected>{t("mastere-en-assurance-banque:Nationnalité")}</option>
                                                            <option value="Your inquiry about">{t("mastere-en-assurance-banque:Tunisienne")}</option>
                                                            <option value="General Information Request">
                                                            {t("mastere-en-assurance-banque:General Information Request")}</option>
                                                            <option value="Partner Relations">{t("mastere-en-assurance-banque:Partner Relations")}</option>
                                                            <option value="Careers">{t("mastere-en-assurance-banque:Careers")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-assurance-banque:Software Licencing")}
                                                            </option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="contact-select">
                                                <div className="form-item contact-inner">
                                                    <span className="inquiry">
                                                        <select id="Visiting" name="Visiting">
                                                            <option disabled selected>{t("mastere-en-assurance-banque:Dernier diplôme obtenu")}</option>
                                                            <option value="Your inquiry about">{t("mastere-en-assurance-banque:Bac")}</option>
                                                            <option value="General Information Request">{t("mastere-en-assurance-banque:Licence")}</option>
                                                            <option value="Partner Relations">{t("mastere-en-assurance-banque:Mastère")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-assurance-banque:Ingénieur")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-assurance-banque:Autres")}</option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="comment-submit-btn text-center">
                                                <button className="ht-btn ht-btn-md" type="submit">{t("mastere-en-assurance-banque:Envoyer")}</button>
                                                <p className="form-messege"></p>
                                            </div>
                                        </div>
                                    </form>
                             
                                </div>
                            </div>
                    
                            <div className="col-lg-4 mr-auto ml-auto col-md-6">
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-8 order-lg-1 order-1">
                        <div className="main-blog-wrap">
               
                            <div className="single-blog-item">
                               
                                <div className="post-info lg-blog-post-info  wow move-up">
                                    <div className="post-categories text-right">
                                        <a href="#">{t("mastere-en-assurance-banque:2 ans | 120 credit")}</a>
                                    </div>
                                    <img className="img-fluid" src="assets/images/blog/mastere-assurance.webp"
                                        alt="mastere en assurance"/>

                                    <div className="faq-wrapper section-space--pt_90">
                                        <div id="accordion">
                                   
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            {t("mastere-en-assurance-banque:Objectifs génerals de la formation")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="show" aria-labelledby="headingOne"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("mastere-en-assurance-banque:Ce Master vise à offrir")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                            {t("mastere-en-assurance-banque:Objectifs spéciques")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                        <ul className="circle-list">
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Emet des ordres")}</li>

                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut exectuer")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut coordonner une équipe")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Organise le suivi")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut définir les procédures")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Optimiser le rendement")}
                                                            </li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Accueillie et oriente physiquement")}
                                                            </li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut réaliser le suivi")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut mettre en oeuvre des mandats de gestion")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut diriger une structure")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Etudie et rend avis")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut élaborer des supports contractuels, effectuer le suivi des contrats d'assurances rattachés aux crédits")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Réalise l'étude, la conception et la mise sur le marché de produits bancaires selon la stratégie et l'offre commerciale globale de la banque et la réglementation bancaire")}</li>
                                                            <li className="list-item"> {t("mastere-en-assurance-banque:Peut définir un plan média, rendre décision sur l'octroi de crédits")}</li>
                                                        </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                          
                                            <div className="card">
                                                <div className="card-header" id="headingsaven">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapsesaven" aria-expanded="false"
                                                            aria-controls="collapsesaven">
                                                            {t("mastere-en-assurance-banque:Méthodes pédagogiques innovantes")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsesaven" className="collapse" aria-labelledby="headingsaven"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                        {t("mastere-en-assurance-banque:Différentes approches pédagogiques")}
                                                        <ul className="check-list">
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Apprentissage par projet")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Apprentissage par resolution de problème")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Apprentissage par étude de cas")}</li>
                                                        </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="card">
                                                <div className="card-header" id="headingfor">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapsefor" aria-expanded="false"
                                                            aria-controls="collapsefor">
                                                            {t("mastere-en-assurance-banque:Métiers visés et perspectives professionnelles du parcours")}
                                                            <span> <i className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsefor" className="collapse" aria-labelledby="headingfor"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                            <b className=" text-color-primary"> {t("mastere-en-assurance-banque:Liste des métiers visés")} </b>
                                                        <ul className="check-list">
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Front office marchés financiers")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Gestion back et middle-office marchés financiers")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Gestion de portefeuilles sur les marchés financiers")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Analyse et ingénierie financière")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Direction administrative et financière")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Analyse de crédits et risques bancaires")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Conception et expertise produits bancaires et financiers")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Conseil en gestion de patrimoine financier")}</li>
                                                        </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">
                                                            {t("mastere-en-assurance-banque:Acquis d’apprentissages")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <ul className="icon-list">
                                                            <li className="list-item">
                                                                <span className="list__icon"><i
                                                                        className="far fa-crown"></i></span> <b
                                                                    className=" text-color-primary"> {t("mastere-en-assurance-banque:À la fin de la formation, les participants doivent être capables de")}
                                                                </b>
                                                            </li>
                                                        </ul>
                                                        <div className="list-member-area section-space--pb_70">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div
                                                                        className="col-lg-4 col-md-6 team_member-list mb-30">
                                                                        <h6 className="team__title mb-20">{t("mastere-en-assurance-banque:CONNAISANCES")}</h6>
                                                                        <ul className="footer-widget__list">
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Veille informationnelle")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Veille concurrentielle")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Analyse statistique")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Calculs financiers")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Macroéconomie")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Anglais financier")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Gestion administrative")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Techniques pédagogiques")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Modes de paiement")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Gestion comptable")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Analyse des risques Financiers")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Caractéristiques des produits")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Analyse d'indicateurs financiers")}</a>
                                                                            </li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Economie des marchés financiers")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Réglementation bancaire")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Mathématiques financières")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                                    {t("mastere-en-assurance-banque:Loi de sécurité financière (LSF)")}</a>
                                                                            </li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Méthodes de valorisation")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Indicateurs statistiques")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Comptabilité générale")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Comptabilité des opérations de marché")}</a></li>

                                                                        </ul>
                                                                    </div>
                                                                    <div
                                                                        className="col-lg-4 col-md-6 team_member-list mb-30">
                                                                        <h6 className="team__title mb-20">{t("mastere-en-assurance-banque:APTITUDES (savoir-faire)")} </h6>
                                                                        <ul className="footer-widget__list">
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Réaliser une étude de marché")}</a>
                                                                            </li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Analyser les marchés")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Evaluer des risques FInanciers")}</a>
                                                                            </li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Evaluer des actifs financiers")}</a>
                                                                            </li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Identier les priorités du client")}</a>
                                                                            </li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Collecter des données clients")}</a>
                                                                            </li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Animer une formation")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Déterminer des mesures correctives")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Réaliser le suivi de comptes clients")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Apporter une expertise technique")}</a>
                                                                            </li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Analyser la situation financière d'un client")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Proposer une stratégie d'investissement")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Emettre des ordres d'achat ou de vente")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Evaluer la solvabilité d'un créditeur et les risques")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Vérifier la rentabilité d'un crédit pour une banque")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Suivre des évolutions boursières et indices de référence")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("mastere-en-assurance-banque:Établir une courbe d'évolution de produits financiers")}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div
                                                                        className="col-lg-4 col-md-6 team_member-list mb-30">
                                                                        <h6 className="team__title mb-20">{t("mastere-en-assurance-banque:ATITUDES (savoir-être)")}</h6>
                                                                        <ul className="footer-widget__list">
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Montrer une attitude positive envers l’adoption de nouvelles approches pédagogiques")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Prendre systématiquement des initiatives pour réaliser ses idées créatives")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:S’engager activement et être responsable dans la mise en œuvre du projet pour atteindre les objectifs fixés")}</a>
                                                                            </li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("mastere-en-assurance-banque:Démontrer une capacité à travailler à la fois individuellement et en équipe")}</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div className="card">
                                                <div className="card-header" id="headingfive">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapsefive" aria-expanded="false"
                                                            aria-controls="collapsefive">
                                                            {t("mastere-en-assurance-banque:Conditions d'accès à la formation")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsefive" className="collapse" aria-labelledby="headingfive"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                            <b className=" text-color-primary"> {t("mastere-en-assurance-banque:Licences admises pour l'accès au mastère")} </b>
                                                        <ul className="circle-list">
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Licence en Gestion mention finance")}
                                                            </li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Licence en Gestion mention Comptabilité")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Licence en informatique appliqué à la gestion")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Diplome dépassant trois années d'etudes aprés le baccalauréat")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Autre diplome admis en équivalence")}
                                                            </li>
                                                        </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                 
                                            <div className="card">
                                                <div className="card-header" id="headingsix">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapsesix" aria-expanded="false"
                                                            aria-controls="collapsesix">
                                                            {t("mastere-en-assurance-banque:Perspectives académiques")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsesix" className="collapse" aria-labelledby="headingsix"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                        <ul className="circle-list">
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Possibilité de donner des cours pour différents niveaux et de faire de l’encadrement pédagogique")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Possibilité de faire de la recherche dans des unités et laboratoires Tunisiens et étrangers")}
                                                            </li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Possibilité de faire de la recherche appliquée en entreprise")}</li>
                                                            <li className="list-item">{t("mastere-en-assurance-banque:Possibilité de faire de la recherche fondamentale")}</li>
                                                        </ul>
                                                        </p>
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
        </div>

        <div className="projects-wrapper  section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-title section-space--mb_60">
                            <h3 className="heading">{t("mastere-en-assurance-banque:Responsable de mastère")} </h3>

                            <div className="sider-title-button-box mt-30">
                                <a href="equipe" className="btn-text font-weight--bold small-mt__20">{t("mastere-en-assurance-banque:Voir toute l'équipe")} <i
                                        className="ml-1 button-icon far fa-long-arrow-right"></i></a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-8 ht-team-member-style-one">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 wow move-up">
                                <div className="grid-item">
                                    <div className="ht-team-member">
                                        <div className="team-image">
                                            <img className="img-fluid"
                                                src="assets/images/team/team-member-01-370x250.jpg"
                                                alt=""/>
                                            <div className="social-networks">
                                                <div className="inner">
                                                    <a target="_blank" href="#"
                                                        className=" hint--bounce  hint--top hint--theme-two"
                                                        aria-label="Facebook"><i className="fab fa-facebook"></i>
                                                    </a>
                                                    <a target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Twitter"><i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Instagram"><i className="fab fa-instagram"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info ">
                                            <h5 className="name">{t("mastere-en-assurance-banque:Bouzid Anis")} </h5>
                                            <div className="position">{t("mastere-en-assurance-banque:Docteur en Science économique")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 wow move-up">
                                <div className="grid-item">
                                    <div className="ht-team-member">
                                        <div className="team-image">
                                            <img className="img-fluid"
                                                src="assets/images/team/team-member-07-370x250.jpg"
                                                alt=""/>
                                            <div className="social-networks">
                                                <div className="inner">
                                                    <a target="_blank" href="#"
                                                        className=" hint--bounce  hint--top hint--theme-two"
                                                        aria-label="Facebook"><i className="fab fa-facebook"></i>
                                                    </a>
                                                    <a target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Twitter"><i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a target="_blank" href="#"
                                                        className=" hint--bounce hint--top hint--theme-two"
                                                        aria-label="Instagram"><i className="fab fa-instagram"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-info ">
                                            <h5 className="name">{t("mastere-en-assurance-banque:Abbas Ons")} </h5>
                                            <div className="position">{t("mastere-en-assurance-banque:Docteur en Science économique")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tabs-wrapper bg-gray section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center section-space--mb_40">
                            <h6 className="section-sub-title mb-20">{t("mastere-en-assurance-banque:Formation initiale, Formation continue, Formation en alternance")}</h6>
                            <h3 className="heading">{t("mastere-en-assurance-banque:Descriptif détaillé du parcours de")} <span className="text-color-primary"> 
                            {t("mastere-en-assurance-banque:2 ans")}</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 ht-tab-wrap">
                        <div className="text-center  ">
                            <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                <li className="tab__item nav-item active">
                                    <a className="nav-link active" id="nav-tab1" data-toggle="tab" href="#tab_list_06"
                                        role="tab" aria-selected="true">{t("mastere-en-assurance-banque:Semestre")} 1</a>
                                </li>
                                <li className="tab__item nav-item">
                                    <a className="nav-link" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab"
                                        aria-selected="false">{t("mastere-en-assurance-banque:Semestre")} 2</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab"
                                        aria-selected="false">{t("mastere-en-assurance-banque:Semestre")} 3</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_09" role="tab"
                                        aria-selected="false">{t("mastere-en-assurance-banque:Semestre")} 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content ht-tab__content">

                            <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                  
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("mastere-en-assurance-banque:Premiere année mastère Professionnel")} </h5>
                                        </div>
                                    </div>
                                    <br/>
                    
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("mastere-en-assurance-banque:Type de l'unité d'enseignement")} </th>
                                                        <th rowSpan="2">{t("mastere-en-assurance-banque:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("mastere-en-assurance-banque:volume horaire")}</th>
                                                        <th>{t("mastere-en-assurance-banque:Credits")}</th>
                                                        <th> {t("mastere-en-assurance-banque:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("mastere-en-assurance-banque:Par element")}</td>
                                                        <td>{t("mastere-en-assurance-banque:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td rowSpan="2">{t("mastere-en-assurance-banque:UFE Fondamentaux de la mention")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Microéconimie des banques et des assurances")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Microéconimie de l'incertain")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:UES1 spécifiques au parcours")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Macroéconomie monétaire et financiere")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>

                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:UES 2 spécifiques au parcours")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Econométrie avanvée des modeles lineaire")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td>21</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>

                                                <tr>
                                                <td rowSpan="2">UET</td>
                                                <td>{t("mastere-en-assurance-banque:Anglais des affaires")}</td>
                                                <td></td>
                                                <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                <td></td>
                                                <td>2</td>
                                                <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Francais des affaires")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                <td rowSpan="2">UEO</td>
                                                <td>{t("mastere-en-assurance-banque:OPT 1 :Technique financiere et acturielles")}</td>
                                                <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                <td></td>
                                                <td></td>
                                                <td>4</td>
                                                <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Opt 2:Comptabilité des banques et de assurance")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_list_07" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                          
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("mastere-en-assurance-banque:Premiere année mastère Professionnel")} </h5>
                                        </div>
                                    </div>

                             
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("mastere-en-assurance-banque:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("mastere-en-assurance-banque:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("mastere-en-assurance-banque:volume horaire")}</th>
                                                        <th>{t("mastere-en-assurance-banque:Credits")}</th>
                                                        <th> {t("mastere-en-assurance-banque:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("mastere-en-assurance-banque:Par element")}</td>
                                                        <td>{t("mastere-en-assurance-banque:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td rowSpan="2">{t("mastere-en-assurance-banque:UFE Fondamentaux de la mention")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Analyse économique des risque")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Droit des institutions financières")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:UES1 spécifiques au parcours")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Normes prudentielles et risque bancaires")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:UES2 spécifiques au parcours")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Produits dérivées:mécanismes d'évalution")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">UET</td>
                                                    <td>{t("mastere-en-assurance-banque:Anglais des affaires")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Buisness Plan")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td rowSpan="2">UEO</td>
                                                    <td>{t("mastere-en-assurance-banque:Option 1:Métiers de la banque,de l'assurance")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Option 2:Insertion professionnelle")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_list_08" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                      
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("mastere-en-assurance-banque:Deuxième année mastère Professionnel")} </h5>
                                        </div>
                                    </div>

                                  
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("mastere-en-assurance-banque:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("mastere-en-assurance-banque:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("mastere-en-assurance-banque:volume horaire")}</th>
                                                        <th>{t("mastere-en-assurance-banque:Credits")}</th>
                                                        <th> {t("mastere-en-assurance-banque:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("mastere-en-assurance-banque:Par element")}</td>
                                                        <td>{t("mastere-en-assurance-banque:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td rowSpan="2">{t("mastere-en-assurance-banque:UFE Fondamentaux de la mention")}</td>
                                                    <td>{t("mastere-en-assurance-banque:recherche opérationnelle")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Logiciels spécialisés")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:UES1 spécifiques au parcours")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Théorie de la politique monétaire")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:UES2 spécifiques au parcours")}</td>
                                                    <td>{t("mastere-en-assurance-banque:Informatique")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">UET</td>
                                                    <td>{t("mastere-en-assurance-banque:Anglais des affaires")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Methodologie de rédaction d'un rapport de stage")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("mastere-en-assurance-banque:21H")}</td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">UEO</td>
                                                    <td>{t("mastere-en-assurance-banque:OPT 1 :Marketing des produits financiers")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-assurance-banque:Opt2:technique de scoring")}</td>
                                                    <td>{t("mastere-en-assurance-banque:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_list_09" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <div className="accordion-wrapper section-space--pb_100">
                                                <div className="container">
                                                    <div className="row ">
                                                  
                                                        <div className="col-lg-12 offset-lg-1">
                                                            <div className="conact-us-wrap-one managed-it">
                                                                <h5 className="heading ">{t("mastere-en-assurance-banque:Stage professionnel et mémoire de fin d’études")}</h5>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 pr-5">
                                                            <div className="faq-two-wrapper section-space--mt_40">
                                                                <div id="accordion_two">
                                                                    <div className="card">
                                                                        <div className="card-header" id="heading__10">
                                                                            <h5 className="mb-0 font-weight--bold">
                                                                                <button className="btn-link"
                                                                                    data-toggle="collapse"
                                                                                    data-target="#tab__10"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="tab__10">
                                                                                    {t("mastere-en-assurance-banque:Descriptif des stages et des activités pratiques de fin d'études")}
                                                                                    <span>
                                                                                        <i
                                                                                            className="far fa-caret-circle-down"></i>
                                                                                        <i
                                                                                            className="far fa-caret-circle-right"></i>
                                                                                    </span>
                                                                                </button>
                                                                            </h5>
                                                                        </div>

                                                                        <div id="tab__10" className="show"
                                                                            aria-labelledby="heading__10"
                                                                            data-parent="#accordion_two">
                                                                            <div className="card-body">
                                                                                <p> {t("mastere-en-assurance-banque:Le mémoire ou le rapport de stage de master doit porter sur un sujet d’actualité ne dépassant pas les")}
                                                                                    <b>{t("mastere-en-assurance-banque:120 pages")}</b>
                                                                                    {t("mastere-en-assurance-banque:étudiant doit montrer")} <br/>
                                                                                    {t("mastere-en-assurance-banque:Le stage est réalisé au sein d’un")}
                                                                                    <b>{t("mastere-en-assurance-banque:cabinet d’expertise comptable ou d’audit ou auprès d’une direction comptable et financière d’entreprise")}</b>
                                                                                    {t("mastere-en-assurance-banque:Chaque étudiant est suivi")} <br/>
                                                                                    {t("mastere-en-assurance-banque:De la même")} <br/>
                                                                                    {t("mastere-en-assurance-banque:issue de la soutenance")}


                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <div className="card-header" id="heading__11">
                                                                            <h5 className="mb-0">
                                                                                <button className="btn-link collapsed"
                                                                                    data-toggle="collapse"
                                                                                    data-target="#collapse__11"
                                                                                    aria-expanded="false"
                                                                                    aria-controls="collapse__11">
                                                                                    {t("mastere-en-assurance-banque:Inter liaisons entre les semestres du parcours, passerelles (à préciser), évaluation et progression")}<span>
                                                                                        <i
                                                                                            className="far fa-caret-circle-down"></i>
                                                                                        <i
                                                                                            className="far fa-caret-circle-right"></i>
                                                                                    </span>
                                                                                </button>
                                                                            </h5>
                                                                        </div>
                                                                        <div id="collapse__11" className="collapse"
                                                                            aria-labelledby="heading__11"
                                                                            data-parent="#accordion_two">
                                                                            <div className="card-body">
                                                                                <p>{t("mastere-en-assurance-banque:Le master articule sur trois")}
                                                                                <ul className="circle-list">

                                                                                    <li className="list-item"> {t("mastere-en-assurance-banque:Une session principale")} </li>
                                                                                </ul>
                                                                                </p>
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
                            <h3 className="heading text-white">{t("mastere-en-assurance-banque:Double cursus: M1 en")} <span className="text-color-secondary">
                                    {t("mastere-en-assurance-banque:Tunisie")} </span> {t("mastere-en-assurance-banque:M2 en")} <span className="text-color-secondary"> {t("mastere-en-assurance-banque:Europe")}</span> </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-button-group--one text-center">

                            <a href="https://admission.blp.tn" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i
                                        className="far fa-info-circle"></i></span>{t("index:Pré-inscription")}</a>
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
