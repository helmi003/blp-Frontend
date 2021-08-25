import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function LicenceEnMarketing() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("licence-en-marketing:Licence en Marketing")}</h2>
               
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="formations">{t("licence-en-marketing:Formations")}</a></li>
                        <li className="breadcrumb-item active">{t("licence-en-marketing:Licence")}</li>
                    </ul>
               
                </div>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div className="site-wrapper-reveal">
 
        <div className="blog-pages-wrapper zegzeg section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 order-lg-2 order-2">
                        <div className="page-sidebar-content-wrapper page-sidebar-right small-mt__40 tablet-mt__40">
                     
                            <div className="sidebar-widget search-post wow move-up">
                                <div className="business-solution-form-wrap mr-auto ml-auto">
                                    <div className="contact-title text-center section-space--mb_40">
                                        <h5 className="mb-10">{t("licence-en-marketing:Inscrivez-vous dès maintenant")}</h5>
                                    </div>
                                
                                    <form id="contact-form"
                                        action="https://whizthemes.com/mail-php/jowel/mitech/php/hero-mail.php"
                                        method="post">
                                        <div className="contact-form__two">
                                            <div className="contact-inner">
                                                <input name="con_name" type="text" placeholder="Votre nom "/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="text" placeholder="Votre prénom *"/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="email" placeholder="Votre email *"/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="email" placeholder="Votre telephone *"/>
                                            </div>
                                            <div className="contact-select">
                                                <div className="form-item contact-inner">
                                                    <span className="inquiry">
                                                        <select id="Visiting" name="Visiting">
                                                            <option disabled selected>{t("licence-en-marketing:Nationnalité")}</option>
                                                            <option value="Your inquiry about">{t("licence-en-marketing:Tunisienne")}</option>
                                                            <option value="General Information Request">
                                                            {t("licence-en-marketing:General Information Request")}</option>
                                                            <option value="Partner Relations">{t("licence-en-marketing:Partner Relations")}</option>
                                                            <option value="Careers">{t("licence-en-marketing:Careers")}</option>
                                                            <option value="Software Licencing">{t("licence-en-marketing:Software Licencing")}
                                                            </option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="contact-select">
                                                <div className="form-item contact-inner">
                                                    <span className="inquiry">
                                                        <select id="Visiting" name="Visiting">
                                                            <option disabled selected>{t("licence-en-marketing:Dernier diplôme obtenu")}</option>
                                                            <option value="Your inquiry about">{t("licence-en-marketing:Bac")}</option>
                                                            <option value="General Information Request">{t("licence-en-marketing:Licence")}</option>
                                                            <option value="Partner Relations">{t("licence-en-marketing:Mastere")}</option>
                                                            <option value="Software Licencing">{t("licence-en-marketing:Ingénieur")}</option>
                                                            <option value="Software Licencing">{t("licence-en-marketing:Autres")}</option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="comment-submit-btn text-center">
                                                <button className="ht-btn ht-btn-md" type="submit">{t("licence-en-marketing:Envoyer")}</button>
                                                <p className="form-messege"></p>
                                            </div>
                                        </div>
                                    </form>
                               
                                </div>
                            </div>
                         
                            <div className="col-lg-4 mr-auto ml-auto col-md-6">
                            </div>
                  
                            <div className="projects-wrapper  section-space--ptb_100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 ht-team-member-style-one">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6 wow move-up">
                                                    <div className="grid-item">
                                                        <div className="ht-team-member">
                                                            <div className="team-image">
                                                                <h5 className="heading text-color-primary">{t("licence-en-marketing:Responsable de la licence")} </h5> <br/>
                                                                <img className="img-fluid"
                                                                    src="assets/images/team/team-member-07-370x250.jpg"
                                                                    alt=""/>
                                                                <div className="social-networks">
                                                                    <div className="inner">
                                                                        <a target="_blank" href="#"
                                                                            className=" hint--bounce  hint--top hint--theme-two"
                                                                            aria-label="Facebook"><i
                                                                                className="fab fa-facebook"></i>
                                                                        </a>
                                                                        <a target="_blank" href="#"
                                                                            className=" hint--bounce hint--top hint--theme-two"
                                                                            aria-label="Twitter"><i
                                                                                className="fab fa-twitter"></i>
                                                                        </a>
                                                                        <a target="_blank" href="#"
                                                                            className=" hint--bounce hint--top hint--theme-two"
                                                                            aria-label="Instagram"><i
                                                                                className="fab fa-instagram"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="team-info ">
                                                                <h5 className="name">{t("licence-en-marketing:El ghoul amira")} </h5>
                                                                <div className="position">{t("licence-en-marketing:Docteur en science de gestion")}
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
                    <div className="col-lg-8 order-lg-1 order-1">
                        <div className="main-blog-wrap">
                           
                            <div className="single-blog-item">
                             
                                <div className="post-info lg-blog-post-info  wow move-up">
                                    <div className="post-categories text-right">
                                        <a href="#">{t("licence-en-marketing:3 ans | 180 credit")}</a>
                                    </div>
                                    <img className="img-fluid" src="assets/images/blog/licence-marketing.webp"
                                        alt="licence en marketing"/>

                    
                                    <div className="faq-wrapper section-space--pt_90">
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            {t("licence-en-marketing:Objectifs de la formation (compétences, savoir-faire,connaissances)")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="show" aria-labelledby="headingOne"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <b className=" text-color-primary">{t("licence-en-marketing:Objectifs")}</b>
                                                        <p>{t("licence-en-marketing:objectif est de former")}</p>
                                                        <b className=" text-color-primary">{t("licence-en-marketing:Objectifs spécifiques")}</b>
                                                        <p>{t("licence-en-marketing:Le licencier")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                            {t("licence-en-marketing:Conditions d'accès à la formation et pré-requis")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("licence-en-marketing:Baccalauréat mathematiques,sciences exprémentales,economie gestion,Informatique,lettre,sport,technique")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                            <div className="card">
                                                <div className="card-header" id="headingAC">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseacquis" aria-expanded="false"
                                                            aria-controls="collapseacquis">
                                                            {t("licence-en-marketing:Acquis d’apprentissages")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseacquis" className="collapse" aria-labelledby="headingAC"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <ul className="icon-list">
                                                            <li className="list-item">
                                                                <span className="list__icon"><i
                                                                        className="far fa-crown"></i></span> <b
                                                                    className=" text-color-primary"> {t("licence-en-marketing:A la fin de la formation, les participants doivent être capables de")}
                                                                </b>
                                                            </li>
                                                        </ul>
                                                        <div className="list-member-area section-space--pb_70">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div
                                                                        className="col-lg-4 col-md-6 team_member-list mb-30">
                                                                        <h6 className="team__title mb-20">{t("licence-en-marketing:CONNAISANCES")}</h6>
                                                                        <ul className="footer-widget__list">
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Posséder des compétances marketing et commerciales")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Etre apte à mener des négociations")}</a>
                                                                            </li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Avoir des connaissance financière et juridiques")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Matriser les langues (francais,anglais)et les outils Informatique")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("licence-en-marketing:Etre capable d'analyser son marché,de synthétiser ces données et de prendre des initiatives")} </a>
                                                                            </li>

                                                                        </ul>
                                                                    </div>
                                                                    <div
                                                                        className="col-lg-4 col-md-6 team_member-list mb-30">
                                                                        <h6 className="team__title mb-20">{t("licence-en-marketing:APTITUDES (savoir-faire)")} </h6>
                                                                        <ul className="footer-widget__list">
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("licence-en-marketing:Etablir la stratégie marketing de l'entreprise et s'assurer de sa bonne application")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Connaitre les besoins des clients et également de la concurrence")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("licence-en-marketing:Définir la stratégie commerciale et marketing de l'entreprise")}</a></li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("licence-en-marketing:Trouver des opportunités à exploiter et connaitre la concurrence")}</a>
                                                                            </li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("licence-en-marketing:Elaborer un plan marketing grace à des études marketing aussi bien quantitavies que qualitatives")}</a>
                                                                            </li>
                                                                            <li><a href="#" className="hover-style-default">
                                                                            {t("licence-en-marketing:Définir le positionnement,lacommunication,l'image,la politique de distribution")}</a></li>

                                                                        </ul>
                                                                    </div>
                                                                    <div
                                                                        className="col-lg-4 col-md-6 team_member-list mb-30">
                                                                        <h6 className="team__title mb-20">{t("licence-en-marketing:ATITUDES (savoir-être)")}</h6>
                                                                        <ul className="footer-widget__list">
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Etre une personne créative,rigoureuse,pragmatique")}</a>
                                                                            </li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Avoir les qualité de leadership et de persuasion")}</a></li>
                                                                            <li><a href="#"
                                                                                    className="hover-style-default">{t("licence-en-marketing:Avoir la capacité de travailler en équipe")}</a>
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
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">
                                                            {t("licence-en-marketing:Perspectives professionnelles du parcours")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <b className=" text-color-primary">{t("licence-en-marketing:Perspectives académique")}</b>
                                                        <p>
                                                        {t("licence-en-marketing:Etudes des masterès professionnelles ou recheres en sciences de gestion")}
                                                        </p>
                                                        <b className=" text-color-primary">{t("licence-en-marketing:Perspectives à l'échelle internationales")}</b>
                                                        <p>
                                                        {t("licence-en-marketing:Erasmus,Co-diplomation,PFE,Bourse d'alternance,Parrainage")}
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
                                                            {t("licence-en-marketing:Méthodes pédaogiques innovante")}<span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapsefor" className="collapse" aria-labelledby="headingfor"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li> {t("licence-en-marketing:Apprentissage par projet")}</li>
                                                            <li>{t("licence-en-marketing:Apprentissage par étude de cas")}</li>
                                                            <li>{t("licence-en-marketing:Apprentissage par investigation")}</li>
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
            </div>
        </div>

        <div className="tabs-wrapper bg-gray section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center section-space--mb_40">
                            <h6 className="section-sub-title mb-20">{t("licence-en-marketing:Formation initiale, Formation continue, Formation en alternance")}</h6>
                            <h3 className="heading">{t("licence-en-marketing:Descriptif détaillé du parcours de")} <span className="text-color-primary"> 
                            {t("licence-en-marketing:3 ans")}</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 ht-tab-wrap">
                        <div className="text-center  ">
                            <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                <li className="tab__item nav-item active">
                                    <a className="nav-link active" id="nav-tab1" data-toggle="tab" href="#tab_list_06"
                                        role="tab" aria-selected="true">{t("licence-en-marketing:Semestre")} 1</a>
                                </li>
                                <li className="tab__item nav-item">
                                    <a className="nav-link" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab"
                                        aria-selected="false">{t("licence-en-marketing:Semestre")} 2</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab"
                                        aria-selected="false">{t("licence-en-marketing:Semestre")} 3</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_09" role="tab"
                                        aria-selected="false">{t("licence-en-marketing:Semestre")} 4</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_10" role="tab"
                                        aria-selected="false">{t("licence-en-marketing:Semestre")} 5</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_11" role="tab"
                                        aria-selected="false">{t("licence-en-marketing:Semestre")} 6</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_12" role="tab"
                                        aria-selected="false">{t("licence-en-marketing:les Stages professionnelles")}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content ht-tab__content">

                            <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                  
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("licence-en-marketing:Première année: Tronc commun en Sciences de gestion")}
                                            </h5>
                                        </div>
                                    </div>
                                    <br/>
                                  
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-marketing:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("licence-en-marketing:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-marketing:volume horaire")}</th>
                                                        <th>{t("licence-en-marketing:Credits")}</th>
                                                        <th> {t("licence-en-marketing:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-marketing:Par element")}</td>
                                                        <td>{t("licence-en-marketing:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Principes de gestion")}</td>
                                                    <td>{t("licence-en-marketing:Principes de gestion")} 1</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Comptabilté")}</td>
                                                    <td>{t("licence-en-marketing:Comptabilté financière")} 1</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:UE Principe d'economie")}</td>
                                                    <td>{t("licence-en-marketing:Microéconimie")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Mathematiques")}</td>
                                                    <td>{t("licence-en-marketing:Mathematiques")} 1</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>

                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">{t("licence-en-marketing:Droit et calculs financiers")}</td>
                                                    <td>{t("licence-en-marketing:Introduction au droit")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Mathématique Financières")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                <tr>
                                                <td rowSpan="2">{t("licence-en-marketing:langue et informatique")}</td>
                                                <td>{t("licence-en-marketing:Anglais")} 1</td>
                                                <td>{t("licence-en-marketing:21H")}</td>
                                                <td></td>
                                                <td></td>
                                                <td>2</td>
                                                <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Tableur")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
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
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-marketing:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("licence-en-marketing:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-marketing:volume horaire")}</th>
                                                        <th>{t("licence-en-marketing:Credits")}</th>
                                                        <th> {t("licence-en-marketing:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-marketing:Par element")}</td>
                                                        <td>{t("licence-en-marketing:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Principe de gestion")}</td>
                                                    <td>{t("licence-en-marketing:Comptabilté financières")} 2</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Mathématique")}</td>
                                                    <td>{t("licence-en-marketing:Mathématique")} 2</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Statistique")}</td>
                                                    <td>{t("licence-en-marketing:Statistique descriptive et calculs de probabilité")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">{t("licence-en-marketing:Macroéconomie et droit")}</td>
                                                    <td>{t("licence-en-marketing:Macroéconomie")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Droit des sociétés commerciales")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>

                                                <tr>
                                                    <td rowSpan="2">{t("licence-en-marketing:langue et informatique")} </td>
                                                    <td>{t("licence-en-marketing:Anglais")} 2</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>C2i</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
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
                            <div className="tab-pane fade" id="tab_list_08" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                       
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("licence-en-marketing:Deuxième année Première année: Tronc commun en Sciences de gestion")}</h5>
                                        </div>
                                    </div>

                           
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-marketing:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("licence-en-marketing:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-marketing:volume horaire")}</th>
                                                        <th>{t("licence-en-marketing:Credits")}</th>
                                                        <th>{t("licence-en-marketing:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-marketing:Par element")}</td>
                                                        <td>{t("licence-en-marketing:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Management")}</td>
                                                    <td>{t("licence-en-marketing:Fondamentaux du maagement")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Comptabilté de gestion")}</td>
                                                    <td>{t("licence-en-marketing:Comptabilté de gestion")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Marketing")}</td>
                                                    <td>{t("licence-en-marketing:Fondamentaux du Marketing")} </td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Visite d'entreprise")}</td>
                                                    <td>{t("licence-en-marketing:Visite d'entreprise désignée par l'enseignant")} </td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>5</td>
                                                    <td>2.5</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">{t("licence-en-marketing:Langue et soft skills")}</td>
                                                    <td>{t("licence-en-marketing:Anglais")} 2</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Culture d'entreprise")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">{t("licence-en-marketing:Fiscalité et statistique")}</td>
                                                    <td>{t("licence-en-marketing:Fiscalité")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>3</td>
                                                    <td>1.5</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-marketing:Statistique inférentielle")}</td>
                                                    <td>{t("licence-en-marketing:42H")}</td>
                                                    <td>{t("licence-en-marketing:21H")}</td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
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
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-marketing:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("licence-en-marketing:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-marketing:volume horaire")}</th>
                                                        <th>{t("licence-en-marketing:Credits")}</th>
                                                        <th> {t("licence-en-marketing:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-marketing:Par element")}</td>
                                                        <td>{t("licence-en-marketing:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Gestion des ressources humaines")}</td>
                                                        <td>{t("licence-en-marketing:Fondamentaux de la GRH")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>5</td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Finance")}</td>
                                                        <td>{t("licence-en-marketing:Diagnostic financier")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>5</td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Gestion de la production")}</td>
                                                        <td>{t("licence-en-marketing:Gestion de la production")} </td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>5</td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Activité méthodologie")}</td>
                                                        <td>{t("licence-en-marketing:Méthodologie d'elaboration d'un rapport de stage")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>5</td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">{t("licence-en-marketing:UE Langueet soft skills")}</td>
                                                        <td>{t("licence-en-marketing:Thecnique de communication")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Entrepreneuriat")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>3</td>
                                                        <td>1.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">{t("licence-en-marketing:Communication et travail collaboratif")}</td>
                                                        <td>{t("licence-en-marketing:Communication interne e'entreprise")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>3</td>
                                                        <td>1.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Habilité et travail collaborative")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
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
                            <div className="tab-pane fade" id="tab_list_10" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                 
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("licence-en-marketing:Troixieme année Licence fondamentale en Sciences de gestion-Mention Marketing")}</h5>
                                        </div>
                                    </div>

                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-marketing:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("licence-en-marketing:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-marketing:volume horaire")}</th>
                                                        <th>{t("licence-en-marketing:Credits")}</th>
                                                        <th>{t("licence-en-marketing:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-marketing:Par element")}</td>
                                                        <td>{t("licence-en-marketing:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan="2">{t("licence-en-marketing:Marketing stratégique et opérationnel")}</td>
                                                        <td>{t("licence-en-marketing:Stratégie marketing")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Gestion des prix et des produits")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>3</td>
                                                        <td>1.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Analyse du comportement du consommateur")}</td>
                                                        <td>{t("licence-en-marketing:Analyse du comportement du consommateur")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Visite d'entreprise")}</td>
                                                        <td>{t("licence-en-marketing:Elaboration et validation du rapport de stage")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>5</td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">{t("licence-en-marketing:Langue et soft skills")}</td>
                                                        <td>{t("licence-en-marketing:Préparation toeic")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Elaboration plan d'affaire")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>3</td>
                                                        <td>1.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">{t("licence-en-marketing:Marketing des services et marque")}</td>
                                                        <td>{t("licence-en-marketing:Marketing des services")} </td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>3</td>
                                                        <td>1.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:branding")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_list_11" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-marketing:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("licence-en-marketing:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-marketing:volume horaire")}</th>
                                                        <th>{t("licence-en-marketing:Credits")}</th>
                                                        <th>{t("licence-en-marketing:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-marketing:Par element")}</td>
                                                        <td>{t("licence-en-marketing:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Distribution")}</td>
                                                        <td>{t("licence-en-marketing:Stratégies de distribution")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>5</td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Communication marketing")}</td>
                                                        <td>{t("licence-en-marketing:Communication marketing")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Analyse des donnée marketing")}</td>
                                                        <td>{t("licence-en-marketing:Analyse des donnée marketing")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Enquete")}</td>
                                                        <td>{t("licence-en-marketing:Projet tutoré")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>5</td>
                                                        <td>2.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">{t("licence-en-marketing:Langue et soft skills")}</td>
                                                        <td>{t("licence-en-marketing:Préparation toeic")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Marketing digital")}</td>
                                                        <td>{t("licence-en-marketing:42H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>3</td>
                                                        <td>1.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">{t("licence-en-marketing:Marketing international et marketing de luxe")}
                                                        </td>
                                                        <td>{t("licence-en-marketing:Marketing de luxe")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-marketing:Marketing international")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
                                                        <td>{t("licence-en-marketing:21H")}</td>
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
                            <div className="tab-pane fade" id="tab_list_12" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <div className="accordion-wrapper section-space--pb_100">
                                                <div className="container">
                                                    <div className="row ">
                              
                                                        <div className="col-lg-12 offset-lg-1">
                                                            <div className="conact-us-wrap-one managed-it">
                                                                <h5 className="heading ">{t("licence-en-marketing:Stages professionnelles")} </h5>
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
                                                                                    {t("licence-en-marketing:Descriptif des stages et des activités pratiques de fin d'études")}
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
                                                                                <p> {t("licence-en-marketing:Néant")}</p>
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
                                                                                    {t("licence-en-marketing:Inter liaisons entre les semestres du parcours,passerelles (à préciser), évaluation et progression")}<span>
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
                                                                                <p>{t("licence-en-marketing:Le premier")} </p>
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
                            <h3 className="heading text-white">{t("licence-en-marketing:Double cursus: M1 en")} <span className="text-color-secondary">
                            {t("licence-en-marketing:Tunisie")} </span> {t("licence-en-marketing:M2 en")} <span className="text-color-secondary"> {t("licence-en-marketing:Europe")}</span> </h3>
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
