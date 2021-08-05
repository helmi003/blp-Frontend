import React from 'react'
import useTranslation from "next-translate/useTranslation";
export default function recherche() {
    let { t } = useTranslation();
    return (
        <>

<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("reseau-euro-mediterraneen:Réseau Euro-Méditerranéen d’enseignement et de recherche en économie et gestion")}</h2>
                
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="accueil">BLP</a></li>
                        <li className="breadcrumb-item active">{t("reseau-euro-mediterraneen:Réseau Euro-Méditerranéen")}</li>
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
                    <div className="col-lg-8 ml-auto mr-auto">
                        <div className="main-blog-wrap">
                            <div className="single-blog-item  wow move-up">                  
                                <div className="post-info lg-blog-post-info">
                                    <div className="post-excerpt mt-15">
                                      <blockquote>
                                            <p className="p1">{t("reseau-euro-mediterraneen:Historique du Réseau REMEREG")} </p>
                                        </blockquote>
                               
                                        <p style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Le Réseau Euro-méditerranéen REMEREG est fondé sur")} : </p>
                                        <div className="col-lg-12 offset-lg-1 ">
                                            <div className="tab-content-inner  mt-30">
                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:L’Association Méditerranéenne de Finance, Assurance et Management ( AMFAM )")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Association Loi 1901, à but non lucratif de droit Français")}. </li>
                                              
                                                </ul>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="p1">{t("reseau-euro-mediterraneen:Le Réseau REMEREG est constiuté par")} : </p>
                                        </blockquote>
                                        <div className="col-lg-12 offset-lg-1 ">
                                            <div className="tab-content-inner  mt-30">
                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Association Française de Finance ( AFFI )")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:L’Association Méditerranéenne de Finance, Assurance et Management")}. </li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Université de Cergy, ou Cy_Cergy Paris University, France")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Institut Supérieur du Commerce (ISC Paris School of Management), France")}. </li>

                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université Paris X Nanterre, France")} .</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université Bordeaux 4 Montesquieu, France")}. </li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université de Poitiers, France")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université de Minho, Portugal")}. </li>
                                            
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université de Sfax, Tunisie - Université de Lugano, Suisse")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Indian Institute of Finance, Inde")} . </li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université Méditerranéenne de Tunisie")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université Badji Mohktar d’Annaba, Algérie")}. </li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université Pierre Mendès France de Grenoble, France")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:FSEG, IHEC et ESSEC Tunis, Tunisie")}. </li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:ECAM Strasbourg, France")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université de Toulon, France")}. </li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:Université de Nantes, France")}. </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="p1">{t("reseau-euro-mediterraneen:Historique de l'Université Méditerranéenne")} </p>
                                        </blockquote>
                                       <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:université Méditerranéenne")}.</p>
                                       <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:ce réseau")}.</p> 
                                        <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:délivre")}.</p>
                                        <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:MIT , membre du Réseau Euro-méditerranéen pour l'enseignement et la recherche en Technologie-économie- Technologies et gestion, REMEREG, permet à ses étudiants un accès aux ressources du réseau et un accès à des bases de données de recherche comme JSTOR, Data stream, Diane, etc")}.</p>
                                        <div className="col-lg-12 offset-lg-1 ">
                                            <div className="tab-content-inner  mt-30">
                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:REMEREG a un accès à Cyberlibris et aux Bibliothèques numériques en ligne des Universités partenaires")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:REMEREG a permis aussi à ses étudiants ayant suivi avant 2014 des masters recherches de participer aux conférences internationales qu'elle co-organise")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:REMEREG permet aussi aux étudiants et enseignants de présenter leurs travaux et de les publier dans des revues internationales")}.</li>
                                                    <li className="list-item">{t("reseau-euro-mediterraneen:REMEREG finance aussi des séjours recherches pour ses enseignants et ses étudiants en Tunisie et en France")}.</li>

                                                </ul>
                                            </div>
                                        </div>
                                   <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:A l’issue de deux années de formation généraliste aux fondamentaux des écoles préparatoires et la gestion et du Management, de l’informatique, du commerce et des nouvelles technologies, l’étudiant peut se spécialiser en Informatique, cycle ingénieur, affaires internationales, marketing, entrepreneuriat, technologies d’information et de communication, finance audit, contrôle de gestion, expertise comptable, Bale II, Risk Management, Master, MBA, CFA, DBA, etc")} .</p>
                                   <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Bien sur, l’Ecole Polytechnique, membre de MIT et du Réseau est la voie par excellence des Ingénieurs")}.</p>
                                   <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:accompagnement individuel")}.<br/>
                                   {t("reseau-euro-mediterraneen:Les programmes permettent ainsi à chacun de réaliser ses aspirations professionnelles")}.<br/>
                                   {t("reseau-euro-mediterraneen:L’université MIT offre avec le REMEREG à ses étudiants des formations de la licence jusqu’aux études doctorales en Tunisie et avec les partenaires étrangers en Europe")}.</p>
                                          <blockquote>
                                            <p className="p1">{t("reseau-euro-mediterraneen:LES ATOUTS DE L’MIT AVEC REMEREG : MIT Nabeul, MIT Montplaisir, MIT Polytech ,BLP")}</p>
                                        </blockquote>
                                        <div className="col-lg-12 offset-lg-1 ">
                                            <div className="tab-content-inner  mt-30">
                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:La seule qui a délivré ou faire délivrer un")} <b> {t("reseau-euro-mediterraneen:double diplôme Européen public et Tunisien")} </b>.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:La seule qui a délivré des")} <b>{t("reseau-euro-mediterraneen:Mastères Recherches")}</b>{t("reseau-euro-mediterraneen:(Réhabilitation en cours)")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:La seule qui est inscrite en")} <b>{t("reseau-euro-mediterraneen:thèse (doctorats)")}</b> {t("reseau-euro-mediterraneen:dans le cadre du Réseau REMEREG")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:La seule qui dispose d’une")} «<b> {t("reseau-euro-mediterraneen:unité de recherche")} </b> » {t("reseau-euro-mediterraneen:en collaboration avec le Réseau REMEREG")} .</li>

                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:La seule qui a délivré")}<b> {t("reseau-euro-mediterraneen:un MBA - CFA avec l’association professionnelle des banques et la Banque Centrale de Tunisie et un DBA avec la France")} </b>{t("reseau-euro-mediterraneen:(Partenaire français en charge)")}.</li>

                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:La seule qui dispose d'un corps")} <b>{t("reseau-euro-mediterraneen:enseignant Européen et Américain")} </b> {t("reseau-euro-mediterraneen:avec un conseil de Perfectionnement et Scientifique incluant des lauréats de prix Nobels")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:La seule qui dispose de sa revue Scientifique avec un Corps Editorial incluant des lauréats de prix Nobels/ Revue CITI :Challenges : Innovations, Technologies, Information")}.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="p1">{t("reseau-euro-mediterraneen:LES AVANTAGES DU SYSTEME DE FORMATION")}</p>
                                        </blockquote>
                                        <div className="col-lg-12 offset-lg-1 ">
                                            <div className="tab-content-inner  mt-30">
                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Une formation orientée sur la pratique qui utilise simultanément l'informatique, le management et les études de cas indispensable en micro et en macroéconomie, en économie internationale, en comptabilité et finance, en économie de l'entreprise, en histoire de la pensée, en technique quantitative, en anglais pour leur garantir le meilleur niveau de connaissances à ce stade de leur cursus")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Une formation réellement bi-disciplinaire en Economie et Gestion grâce à un volume conséquent d'enseignement de Gestion dans les trois années de licence")}.</li>
                                                    <li className="list-item"style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Une grande flexibilité dans le choix des matières à options afin de favoriser l'élaboration des profils différenciés plus adaptables aux demandes spécifiques du marché du travail, tout en laissant des choix de spécialités se faire par la sélection d'options puisées dans des domaines voisins de l'analyse")}.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:D’un autre coté les études en mastère sont distinguées par le fait que l'université Méditerranéenne est la seule Université privée en Tunisie à avoir délivré des Masters de Recherches dans le cadre LMD (réhabilitation en cours)")}.
                                        <br/>{t("reseau-euro-mediterraneen:Les programmes de ces Masters s'adressent à des étudiants déjà diplômés du second cycle universitaire (et de manière croissante à des Masters), des écoles d'ingénieurs et de cadres d'entreprises")}.</p>
                                        <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Forte de son étroite coopération avec des universités d’envergure internationale à l’instar de l’Université Cergy Pontoise, Bordeaux, Toulon, ainsi que le réseau Euro- méditerranéen pour l'enseignement et la recherche en économie-technologies et en gestion, REMEREG, formé de 12 universités publiques et privées européennes, nord- américaines et tunisiennes et plusieurs autres structures universitaires et laboratoires de recherche régionaux, elle demeure l’unique université en Tunisie qui a délivré des doubles diplômes de masters (presque 250 cadres du système Financier international ont été diplômé) et de recherche (Plus que 100 docteurs et professeurs ont suivis formations) nationaux et publics européens dans les domaines de la Haute Finance et des NTIC et du Management des organisations")}.</p>
                                        <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:Université à l’esprit pionnier, l’MIT montplaisir - MIT Polyech était la première Université à lancer, au niveau de nôtre cher continent, la formation MBA (Master of Business Administration) en partenariat est au niveau des dernières phases de finalisation de l’amorçage pour la première fois aussi un tout nouveau diplôme : le MBA et CFA (Chartered Finance Accounting), DBA, en partenariat avec des universités Américaines")}.</p>
                                        <p className="text" style={{textAlign: "justify",fontSize:"18px"}}>{t("reseau-euro-mediterraneen:A l’avant-garde de l’innovation, elle donne à ses étudiants l’accès, pour la première fois en Tunisie et en Afrique, à un nouvel MBA en Risk Management fruit de sa collaboration avec l’Association Professionnelle des Banques et des Etablissements financiers de Tunisie et la Banque Centrale de Tunisie")}.
                                        <br/>{t("reseau-euro-mediterraneen:En s’inscrivant à l’Université Méditerranéenne, les étudiants auront l’occasion de bénéficier d’un encadrement scientifique et pédagogique de pointe assuré par un corps d’éminents enseignants universitaires et professionnels, de tarifs étudiés ainsi qu’une assistance personnalisée afin de garantir de bonnes conditions de séjour durant la période des études")}.</p>
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
                            <h3 className="heading text-white">{t("reseau-euro-mediterraneen:Double cursus: M1 en")} <span className="text-color-secondary">
                            {t("reseau-euro-mediterraneen:Tunisie")} </span> M2 {t("reseau-euro-mediterraneen:en")} <span className="text-color-secondary"> {t("reseau-euro-mediterraneen:Europe")}</span> </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-button-group--one text-center">

                            <a href="contact" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i
                                        className="far fa-info-circle"></i></span>{t("reseau-euro-mediterraneen:Contact")}</a>
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
