import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function MasterEnSciencesPolitiques() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("mastere-en-science-politique:Mastère en sciences politiques : Relations internationales et diplomatie")}</h2>
                   
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="formations">{t("mastere-en-science-politique:Formations")}</a></li>
                        <li className="breadcrumb-item active">{t("mastere-en-science-politique:Mastère")}</li>
                    </ul>
                 
                </div>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div className="site-wrapper-reveal">
      
        <div className="blog-pages-wrapper  zegzeg section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 order-lg-2 order-2">
                        <div className="page-sidebar-content-wrapper page-sidebar-right small-mt__40 tablet-mt__40">
              
                            <div className="sidebar-widget search-post wow move-up">
                                <div className="business-solution-form-wrap mr-auto ml-auto">
                                    <div className="contact-title text-center section-space--mb_40">
                                        <h5 className="mb-10">{t("mastere-en-science-politique:Inscrivez-vous dès maintenant")}</h5>
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
                                                            <option disabled selected>{t("mastere-en-science-politique:Nationnalité")}</option>
                                                            <option value="Your inquiry about">{t("mastere-en-science-politique:Tunisienne")}</option>
                                                            <option value="General Information Request">
                                                            {t("mastere-en-science-politique:General Information Request")}</option>
                                                            <option value="Partner Relations">{t("mastere-en-science-politique:Partner Relations")}</option>
                                                            <option value="Careers">{t("mastere-en-science-politique:Careers")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-science-politique:Software Licencing")}
                                                            </option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="contact-select">
                                                <div className="form-item contact-inner">
                                                    <span className="inquiry">
                                                        <select id="Visiting" name="Visiting">
                                                            <option disabled selected>{t("mastere-en-science-politique:Dernier diplôme obtenu")}</option>
                                                            <option value="Your inquiry about">{t("mastere-en-science-politique:Bac")}</option>
                                                            <option value="General Information Request">{t("mastere-en-science-politique:licence")}</option>
                                                            <option value="Partner Relations">{t("mastere-en-science-politique:Mastere")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-science-politique:Ingénieur")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-science-politique:Autres")}</option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="comment-submit-btn text-center">
                                                <button className="ht-btn ht-btn-md" type="submit">{t("mastere-en-science-politique:Envoyer")}</button>
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
                                        <a href="#">{t("mastere-en-science-politique:2 ans | 120 credit")}</a>
                                    </div>
                                    <img className="img-fluid"
                                        src="assets/images/blog/mastere-en-relation-diplomatique.webp"
                                        alt="mastere en droit public : relation diplomatique"/>

                                    
                                    <div className="faq-wrapper section-space--pt_90">
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            {t("mastere-en-science-politique:Objectifs de la formation (compétences, savoir-faire,connaissances)")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="show" aria-labelledby="headingOne"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("mastere-en-science-politique:Le Mastère en")} <b>{t("mastere-en-science-politique:Relations internationales et Diplomatie")} </b>
                                                        {t("mastere-en-science-politique:a pour objectif")} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                            {t("mastere-en-science-politique:Conditions d'accès à la formation et pré-requis")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("mastere-en-science-politique:Le Mastère en")} <b>{t("mastere-en-science-politique:diplomatie et relations internationales")} </b>
                                                        {t("mastere-en-science-politique:est ouvert aux")}
                                                        <ul className="check-list">
                                                            <li className="list-item"> {t("mastere-en-science-politique:Diplômés des différents établissements universitaires spécialisés en sciences juridiques, en sciences politiques ou des diplômés en sciences économiques, sciences de gestion, lettres et histoire et civilisations ayant accompli avec succès leur troisième année de licence")} </li>
                                                            <li className="list-item">{t("mastere-en-science-politique:Professionnels désirants acquérir la formation et ayant l’équivalent d’une licence ou d’un niveau d’étude bac+3")} </li>
                                                            <li className="list-item"> {t("mastere-en-science-politique:Les étudiants ayant validé le M1 d’un mastère équivalent peuvent accéder au M2 après étude de leurs dossiers")} </li>
                                                            <li className="list-item">{t("mastere-en-science-politique:La sélection des candidats se fera sur dossier et après un entretien avec un comité de sélection")} </li>
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
                                                            {t("mastere-en-science-politique:Perspectives professionnelles du parcours")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                        {t("mastere-en-science-politique:objectif du Mastère")}
                                                        <ul className="check-list">
                                                            <li className="list-item"> {t("mastere-en-science-politique:Carrières d'experts et d'analystes de risques dans des organisations internationales publiques ou privées et dans des entreprises internationales")}</li>
                                                            <li className="list-item">{t("mastere-en-science-politique:Concours généralistes pour intégrer la fonction publique internationale")}</li>
                                                            <li className="list-item"> {t("mastere-en-science-politique:Carrières diplomatiques")}</li>
                                                            <li className="list-item"> {t("mastere-en-science-politique:Consultant, Conseiller ou Analyste en Relations Internationales stratégiques et Géopolitiques")}
                                                            </li>
                                                            <li className="list-item"> {t("mastere-en-science-politique:Directeur ou Responsable au sein d’une multinationale")}</li>
                                                            <li className="list-item"> {t("mastere-en-science-politique:Directeur ou Responsable d’Organismes Internationaux ou d’ONG (organisme non gouvernemental)")}
                                                            </li>
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

        <div className="tabs-wrapper bg-gray section-space--ptb_100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrap text-center section-space--mb_40">
                            <h6 className="section-sub-title mb-20">{t("mastere-en-science-politique:Formation initiale, Formation continue, Formation en alternance")}</h6>
                            <h3 className="heading">{t("mastere-en-science-politique:Descriptif détaillé du parcours de")} <span className="text-color-primary"> 
                            {t("mastere-en-science-politique:2 ans")}</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 ht-tab-wrap">
                        <div className="text-center  ">
                            <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                <li className="tab__item nav-item active">
                                    <a className="nav-link active" id="nav-tab1" data-toggle="tab" href="#tab_list_06"
                                        role="tab" aria-selected="true">{t("mastere-en-science-politique:Semestre")} 1</a>
                                </li>
                                <li className="tab__item nav-item">
                                    <a className="nav-link" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab"
                                        aria-selected="false">{t("mastere-en-science-politique:Semestre")} 2</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab"
                                        aria-selected="false">{t("mastere-en-science-politique:Semestre")} 3</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_09" role="tab"
                                        aria-selected="false">{t("mastere-en-science-politique:Semestre")} 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content ht-tab__content">

                            <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                           
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("mastere-en-science-politique:Premiere année mastère Professionnel en Relations internationales et diplomatie")}</h5>
                                        </div>
                                    </div>
                                    <br/>
                                 
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">{t("mastere-en-science-politique:Unité d'enseignement")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Elements constitutifs de L'UE")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Volume horaire")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Credits")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Coefficient")}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>UE F11</td>
                                                        <td>{t("mastere-en-science-politique:Droit International Public")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>UE F12</td>
                                                        <td>{t("mastere-en-science-politique:Droit diplomatique et consulaire")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>UE F13</td>
                                                        <td>{t("mastere-en-science-politique:Théories des relations internationales")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">4</th>
                                                    <td>UE O14</td>
                                                    <td>{t("mastere-en-science-politique:Histoire contemporaine des relations internationales")}</td>
                                                    <td>{t("mastere-en-science-politique:42H")}</td>
                                                    <td>5</td>
                                                    <td>2</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">5</th>
                                                    <td>UE O15</td>
                                                    <td>{t("mastere-en-science-politique:Instituation européenne")}</td>
                                                    <td>{t("mastere-en-science-politique:42H")}</td>
                                                    <td>5</td>
                                                    <td>2</td>
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
                                            <h5 className="heading ">{t("mastere-en-science-politique:Premiere année mastère Professionnel en Relations internationales et diplomatie")}</h5>
                                        </div>
                                    </div>

                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">{t("mastere-en-science-politique:Unité d'enseignement")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Elements constitutifs de L'UE")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Volume horaire")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Credits")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Coefficient")}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>UE F21</td>
                                                        <td>{t("mastere-en-science-politique:Géopolitique")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>UE F22</td>
                                                        <td>{t("mastere-en-science-politique:Politique étrangére de la Tunisie")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>UE F23</td>
                                                        <td>{t("mastere-en-science-politique:Relations économiques internationales")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>UE O24</td>
                                                        <td>{t("mastere-en-science-politique:Politique européenne de voisinage")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>UE O25</td>
                                                        <td>{t("mastere-en-science-politique:Politique d'immigration et d'asile")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>5</td>
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
                                            <h5 className="heading ">{t("mastere-en-science-politique:Deuxième année mastère Professionnel en Relations internationales et diplomatie")}</h5>
                                        </div>
                                    </div>

                     
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"></th>
                                                        <th scope="col">{t("mastere-en-science-politique:Unité d'enseignement")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Elements constitutifs de L'UE")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Volume horaire")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Credits")}</th>
                                                        <th scope="col">{t("mastere-en-science-politique:Coefficient")}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>UE F21</td>
                                                        <td>{t("mastere-en-science-politique:Droit des conflits armés")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>UE F22</td>
                                                        <td>{t("mastere-en-science-politique:Droit international himanitaire")} </td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>UE F23</td>
                                                        <td>{t("mastere-en-science-politique:Règlement pacifique des differends internationaux")}</td>
                                                        <td>{t("mastere-en-science-politique:42H")}</td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">4</th>
                                                    <td>UE O24</td>
                                                    <td>{t("mastere-en-science-politique:Diplomatie des droits de l'Homme")}</td>
                                                    <td>{t("mastere-en-science-politique:42H")}</td>
                                                    <td>5</td>
                                                    <td>2</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">5</th>
                                                    <td>UE O25</td>
                                                    <td>{t("mastere-en-science-politique:Géopolitique des enjeux énergétiques")}</td>
                                                    <td>{t("mastere-en-science-politique:42H")}</td>
                                                    <td>5</td>
                                                    <td>2</td>
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
                                                                <h5 className="heading ">{t("mastere-en-science-politique:Stage professionnel et mémoire de fin d’études")}</h5>
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
                                                                                    {t("mastere-en-science-politique:Descriptif des stages et des activités pratiques de fin d'études")}
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
                                                                                <p> {t("mastere-en-science-politique:Le stage professionnel est obligatoire pour les étudiants ayant")}
                                                                                    <b> {t("mastere-en-science-politique:validés les semestres d’études (M1 et M2)")} </b>. <br/>
                                                                                    {t("mastere-en-science-politique:Les étudiants")} <br/>
                                                                                    {t("mastere-en-science-politique:objectif du rapport")} <br/>
                                                                                    <b> <span
                                                                                            className="text-color-primary">{t("mastere-en-science-politique:Durée")}
                                                                                        </span> {t("mastere-en-science-politique:3 mois")} <br/>
                                                                                        <span
                                                                                            className="text-color-primary">Lieu
                                                                                        </span>: {t("mastere-en-science-politique:ONG, Bureaux représentatifs des organisations internationales, Missions diplomatiques et consulaires, etc")} <br/>
                                                                                        <span
                                                                                            className="text-color-primary">{t("mastere-en-science-politique:Encadrement")} </span>
                                                                                        {t("mastere-en-science-politique:Encadrant professionnel et encadrant universitaire")} <br/>
                                                                                        <span
                                                                                            className="text-color-primary">{t("mastere-en-science-politique:Soutenance de mémoire")} </span>
                                                                                             {t("mastere-en-science-politique:Session de juin/Session de septembre")}
                                                                                        <br/>
                                                                                        <span
                                                                                            className="text-color-primary">{t("mastere-en-science-politique:Valeur en crédits")} </span> 30 </b>
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
                                                                                    {t("mastere-en-science-politique:Inter liaisons entre les semestres du parcours, passerelles (à préciser), évaluation et progression")}<span>
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
                                                                                <p>{t("mastere-en-science-politique:Les modules")}
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
                            <h3 className="heading text-white">{t("mastere-en-science-politique:Double cursus: M1 en")} <span className="text-color-secondary">
                            {t("mastere-en-science-politique:Tunisie")} </span> {t("mastere-en-science-politique:M2 en")} <span className="text-color-secondary"> {t("mastere-en-science-politique:Europe")}</span> </h3>
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
