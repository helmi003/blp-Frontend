import React from 'react'
import useTranslation from "next-translate/useTranslation";
export default function presentation() {
    let { t } = useTranslation();
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_box text-center">
                                <h2 className="breadcrumb-title ">{t("presentation:Ecole  de Sciences juridiques et politiques")}<br/>
                                {t("presentation:Ecole  d’ingénierie Juridique, droit des TIC et de Smart applications")}</h2>
            
                                <ul className="breadcrumb-list">
                                    <li className="breadcrumb-item"><a href="/">{t("presentation:Accueil")}</a></li>
                                    <li className="breadcrumb-item active">{t("presentation:Présentation")}</li>
                                </ul>
                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="main-wrapper">
                <div className="site-wrapper-reveal">


                    <div className="our-history-wrapper section-space--ptb_100 balance">
                        <div className="container">

                            <div className="timeline-area section-space--pt_60">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="ht-timeline style-01">
                                            <ul className="tm-timeline-list ht-animation-queue">
                                                <li className="line"></li>

                                                <li className="item animate">
                                                    <div className="dots">
                                                        <div className="middle-dot"></div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 timeline-col left timeline-feature">
                                                            <div className="inner">
                                                                <div className="date-wrap">
                                                                    <h6 className="year"> {t("presentation:Diplôme")} </h6>
                                                                </div>
                                                                <div className="photo">
                                                                    <img src="assets/images/diplome-en-law.jpg"
                                                                        alt="pdiplome-en-law" className="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 timeline-col right timeline-info">
                                                            <div className="inner">
                                                                <div className="content-wrap">
                                                                    <div className="content-body">
                                                                        <div className="text text-left">
                                                                        {t("presentation:L'idée de lancer")} 
                                                                            <b>{t("presentation:une école des sciences juridiques et politiques à Tunis; Business; Law and Politics")}; BLP; 
                                                                            </b>{t("presentation:commencement du diplome")}.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="item animate">
                                                    <div className="dots">
                                                        <div className="middle-dot"></div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 timeline-col left timeline-feature">
                                                            <div className="inner">
                                                                <div className="date-wrap">
                                                                    <h6 className="year"> {t("presentation:Enseignement")} </h6>
                                                                </div>

                                                                <div className="photo">
                                                                    <img src="assets/images/timeline/enseignement.webp"
                                                                        alt="enseignement-distance-mit" className="img-fluid"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 timeline-col right timeline-info">
                                                            <div className="inner">
                                                                <div className="content-wrap">
                                                                    <div className="content-body">
                                                                        <h6 className="heading" style={{textAlign: "justify"}} >{t("presentation:Enseignement à Distance")}</h6>

                                                                        <div className="text" style={{textAlign: "justify"}}>
                                                                        {t("presentation:L'École Supérieure Privée des Sciences Juridiques, Economiques et Politiques de Tunis")} <b>BLP</b> 
                                                                        {t("presentation:dispose d’une plateforme d’enseignement à distance et de conseillers pédagogiques couvrants tous les programmes de formation et des cours flexibles pour ceux qui travaillent")}.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                            
                                        <div className="post-info lg-blog-post-info">
                                            <div className="post-excerpt mt-15">

                                                <blockquote>
                                                    <p className="p1">{t("presentation:BUSINESS, LAW AND POLITICS")} : BLP <br/>{t("presentation:POLE TECHNOLOGIQUE GHAZELLA")} </p>
                                                </blockquote>
                                                <p style={{textAlign:"justify"}}> <b>BLP {t("presentation:Tunis")},</b> {t("presentation:pole technologique")}. <b>BLP</b> 
                                                {t("presentation:permet aux étudiants de continuer en Suisse")} <b>{t("presentation:( Centre d’Etudes Juridiques Africaines à Genève)")}</b>; 
                                                {t("presentation:et en  France pour obtenir un master public français (Cy-Cergy Paris Université) ;  un doctorat Français, un titre d'Ingénieur Français pour les filières de Gestion (Polytech Saint Louis, ECAM-EPMI); et un Doctorat en Business Administration, DBA en France")} <b>
                                                {t("presentation:(Institut Supérieur des hautes études de commerce et de communication IESCCI )- France")}.</b><br/><br/>
                                                {t("presentation:Le réseau")} <b>{t("presentation:REMEREG")}</b> {t("presentation:auquel appartient BLP regroupe des universités publiques et privées européennes, nord-américaines et tunisiennes")}. <b>BLP </b> 
                                                {t("presentation:délivre des diplômes tunisiens d’abord et permet à ses étudiants de continuer pour des diplômes européens publics et privés avec nos partenaires en France, en Suisse et en Inde (pour ceux qui le souhaitent) et profite pleinement du dynamisme des universités européennes")}.</p>
                                                <blockquote>
                                                    <p className="p1">{t("presentation:Ancienneté et Qualité")} </p>
                                                </blockquote>
                                                <p style={{textAlign:"justify"}}> <b>{t("presentation:L'École Supérieure Privée des Sciences Juridiques, Economiques et Politiques de Tunis")} BLP </b>
                                                {t("presentation:offre une formation particulièrement riche, diversifiée et adaptée aux perspectives d’insertion professionnelle sur le plan national et international")}. <br/>

                                                {t("presentation:former")}. </p>

                                                <blockquote>
                                                    <p className="p1">{t("presentation:Les avantages")} </p>
                                                </blockquote>

                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item"><b>BLP {t("presentation:dispose d’une plateforme d’enseignement à distance")}
                                                        </b> {t("presentation:et de conseillers pédagogiques couvrant tous les programmes de formation et  des cours flexibles pour ceux qui travaillent")}.</li>
                                                    <li className="list-item"> <b> BLP {t("presentation:Co-organise des conférences internationales comme IFC en 2018")}:</b>
                                                    {t("presentation:Présence de prix Nobels : James Hekman, Harry Markovitz, Edward Prescott, Myron Scholes, etc")}. <br/>
                                                    {t("presentation:Les étudiants et enseignants d’UM participent et présentent des articles")}.
                                                    </li>
                                                    <li className="list-item"><b>{t("presentation:Gérer les processus")} </b>: {t("presentation:Les étudiants maîtrisent les concepts et les théories de chaque domaine fonctionnel ainsi que les applications dans ses LABOS afin d'allier Connaissances théoriques et expériences pratiques dans les domaines de gestion, scientifiques et sciences de l’ingénieur")}. </li>
                                                    <li className="list-item"> <b>{t("presentation:Savoir faire face à la complexité, la globalisation et  l’internationalisation")}</b>
                                                    {t("presentation:réelle aptitude à comprendre et résoudre des situations de management et techniques complexes en appliquant des compétences analytiques, en créant des solutions innovantes, en prenant et en déployant des décisions")}.
                                                    </li>
                                                    <li className="list-item"><b>{t("presentation:Développer le leadership, du Managment, la culture d’entreprise et entrepreneurial")}</b>
                                                    {t("presentation:permettre à l’étudiant de prendre des initiatives de haute responsabilité en démontrant des qualités certaines de communication et d’exécution")}.</li>

                                                </ul>


                                                <blockquote>
                                                    <p className="p1">{t("presentation:Les Objectifs")}</p>
                                                </blockquote>
                                                <ul className="check-list section-space--mb_40">
                                                    <li className="list-item"><b>{t("presentation:Spécialisation")} </b> : {t("presentation:Choisir la formation appropriée")}..
                                                    </li>
                                                    <li className="list-item"> <b> {t("presentation:Professionnalisation")} :</b> {t("presentation:Degré de technicité élevé")}.
                                                    </li>
                                                    <li className="list-item"><b>{t("presentation:Internationalisation")} </b>: {t("presentation:Mobilité de nos étudiants et possibilité de Double diplôme et certification de chaque parcours")} . </li>
                                                    <li className="list-item"> <b>{t("presentation:Stages et placement des étudiants en Tunisie et à l’étranger")} </b>
                                                    {t("presentation:l’étudiant peut intégrer les enjeux sociétaux, savoir faire face à la complexité, à la globalisation et à l’internationalisation")}.</li>

                                                </ul>
                                                <div className="main-blog-wrap">
                                            
                                                    <div className="single-blog-item lg-blog-item border-bottom wow move-up">
                                                        <div className="post-feature post-quote">
                                                            <h5 className="post-quote-text text-center">
                                                            “ {t("presentation:1 Etudiant aujourd’hui =  Juriste, Diplomate, Cadre, Ingénieur financier, Dirigeant, Chercheur, Docteur, Avocat = 1 Emploi demain")} ”
                                                            </h5>
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

                    <div className="projects-wrapper projectinfotechno-bg section-space--ptb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">

                                    <div className="row">
                                        <div className="col-lg-4 offset-lg-1">
                                            <div className="modern-number-01 mr-5">
                                                <h2 className="heading"><span className="mark-text">20</span>{t("presentation:Régles d'OR")} </h2>
                                                <h3 className="heading"> {t("presentation:En partenariat")}</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-8">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 wow move-up">
                                                    <div className="fun-fact--three text-center">
                                                        <div className="fun-fact__count counter"> 10</div>
                                                        <h6 className="fun-fact__text">{t("presentation:Partenaires")}</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 wow move-up">
                                                    <div className="fun-fact--three text-center">
                                                        <div className="fun-fact__count counter">40</div>
                                                        <h6 className="fun-fact__text">{t("presentation:Spécialités")}</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 wow move-up">
                                                    <div className="fun-fact--three text-center">
                                                        <div className="fun-fact__count counter">10</div>
                                                        <h6 className="fun-fact__text">{t("presentation:Conventions")}</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 wow move-up">
                                                    <div className="fun-fact--three text-center">
                                                        <div className="fun-fact__count counter">100</div>
                                                        <h6 className="fun-fact__text">{t("presentation:Cours gratuits")}</h6>
                                                    </div>
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
                                        <h3 className="heading text-white">{t("presentation:Bourses d'études et places gratuites et accés dés la Terminale à nos modules de E-learning et sur place")} </h3>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="cta-button-group--one text-center">

                                        <a href="contact" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i className="far fa-info-circle"></i></span> {t("presentation:Contact")}</a>
                                            
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
