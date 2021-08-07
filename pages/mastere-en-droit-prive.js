import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function mastereEnDroitPrive() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("mastere-en-droit-prive:Mastère en Droit privé des affaires")}</h2>
                    
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="formations">{t("mastere-en-droit-prive:Formations")}</a></li>
                        <li className="breadcrumb-item active">{t("mastere-en-droit-prive:Mastère")}</li>
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
                                        <h5 className="mb-10">{t("mastere-en-droit-prive:Inscrivez-vous dès maintenant")}</h5>
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
                                                            <option disabled selected>{t("mastere-en-droit-prive:Nationnalité")}</option>
                                                            <option value="Your inquiry about">{t("mastere-en-droit-prive:Tunisienne")}</option>
                                                            <option value="General Information Request">
                                                                {t("mastere-en-droit-prive:General Information Request")}</option>
                                                            <option value="Partner Relations">{t("mastere-en-droit-prive:Partner Relations")}</option>
                                                            <option value="Careers">{t("mastere-en-droit-prive:Careers")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-droit-prive:Software Licencing")}
                                                            </option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="contact-select">
                                                <div className="form-item contact-inner">
                                                    <span className="inquiry">
                                                        <select id="Visiting" name="Visiting">
                                                            <option disabled selected>{t("mastere-en-droit-prive:Dernier diplôme obtenu")}</option>
                                                            <option value="Your inquiry about">{t("mastere-en-droit-prive:Bac")}</option>
                                                            <option value="General Information Request">{t("mastere-en-droit-prive:licence")}</option>
                                                            <option value="Partner Relations">{t("mastere-en-droit-prive:Mastere")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-droit-prive:Ingénieur")}</option>
                                                            <option value="Software Licencing">{t("mastere-en-droit-prive:Autres")}</option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="comment-submit-btn text-center">
                                                <button className="ht-btn ht-btn-md" type="submit">{t("mastere-en-droit-prive:Envoyer")}</button>
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
                                        <a href="#">{t("mastere-en-droit-prive:2 ans | 120 credit")}</a>
                                    </div>
                                    <img className="img-fluid"
                                        src="assets/images/blog/licence-droit-prive.webp"
                                        alt="licence droit prive"/>

                         
                                    <div className="faq-wrapper section-space--pt_90">
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            {t("mastere-en-droit-prive:Objectifs de la formation (compétences, savoir-faire,connaissances)")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="show" aria-labelledby="headingOne"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("mastere-en-droit-prive:Le Mastère professionnel")}
                                                        <ul className="circle-list">
                                                            <li className="list-item">{t("mastere-en-droit-prive:La maîtrise des concepts de base relatifs au droit de l'entreprise")}</li>
                                                            <li className="list-item"> {t("mastere-en-droit-prive:La confrontation des connaissances théoriques au monde des affaires")}</li>
                                                            <li className="list-item">{t("mastere-en-droit-prive:La contribution à la structuration du cursus de formation acquis")}</li>
                                                            <li className="list-item"> {t("mastere-en-droit-prive:Le montage propre d'affaires")}</li>
                                                            <li className="list-item"> {t("mastere-en-droit-prive:La rationalisation des projets d'affaires")}</li>
                                                        </ul>
                                                        {t("mastere-en-droit-prive:Ce Mastère")}
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
                                                            {t("mastere-en-droit-prive:Conditions d'accès à la formation et pré-requis")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("mastere-en-droit-prive:Licence en Droit privé")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">
                                                            {t("mastere-en-droit-prive:Perspectives professionnelles du parcours")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                            <b className=" text-color-primary">{t("mastere-en-droit-prive:Le parcours permet de former aux principaux métiers du droit des affaires")} </b>
                                                        <ul className="check-list">
                                                            <li className="list-item"> {t("mastere-en-droit-prive:Avocats d'affaires, magistrats (sous réserve de succès aux concours de l'ISM et de l'ISA)")}
                                                            </li>
                                                            <li className="list-item">{t("mastere-en-droit-prive:Conseils et assistance aux entreprises")}</li>
                                                            <li className="list-item"> {t("mastere-en-droit-prive:Juristes")}</li>
                                                            <li className="list-item"> {t("mastere-en-droit-prive:Juristes dans les institutions publiques et privées à fonction économique")}</li>
                                                            <li className="list-item"> {t("mastere-en-droit-prive:Création d'une entreprise personnelle")}</li>

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
                            <h6 className="section-sub-title mb-20">{t("mastere-en-droit-prive:Formation initiale, Formation continue, Formation en alternance")}</h6>
                            <h3 className="heading">{t("mastere-en-droit-prive:Descriptif détaillé du parcours de")} <span className="text-color-primary"> 
                            {t("mastere-en-droit-prive:2 ans")}</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 ht-tab-wrap">
                        <div className="text-center  ">
                            <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                <li className="tab__item nav-item active">
                                    <a className="nav-link active" id="nav-tab1" data-toggle="tab" href="#tab_list_06"
                                        role="tab" aria-selected="true">{t("mastere-en-droit-prive:Semestre")} 1</a>
                                </li>
                                <li className="tab__item nav-item">
                                    <a className="nav-link" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab"
                                        aria-selected="false">{t("mastere-en-droit-prive:Semestre")} 2</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab"
                                        aria-selected="false">{t("mastere-en-droit-prive:Semestre")} 3</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_09" role="tab"
                                        aria-selected="false">{t("mastere-en-droit-prive:Semestre")} 4</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content ht-tab__content">

                            <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                    
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("mastere-en-droit-prive:Premiere année mastère Professionnel en Droit privé des affaires")}</h5>
                                        </div>
                                    </div>
                                    <br/>
          
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("mastere-en-droit-prive:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("mastere-en-droit-prive:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("mastere-en-droit-prive:volume horaire")}</th>
                                                        <th>{t("mastere-en-droit-prive:Credits")}</th>
                                                        <th> {t("mastere-en-droit-prive:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>SR</td>
                                                        <td>CI</td>
                                                        <td>{t("mastere-en-droit-prive:Par element")}</td>
                                                        <td>{t("mastere-en-droit-prive:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>UE F11</td>
                                                    <td>{t("mastere-en-droit-prive:Droit commercial approfondi")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F12</td>
                                                    <td>{t("mastere-en-droit-prive:Droit douanier")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F13</td>
                                                    <td>{t("mastere-en-droit-prive:Droit des precédures collectives")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>21</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F14</td>
                                                    <td>{t("mastere-en-droit-prive:anglais")} 1</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>

                                                <tr>
                                                    <td rowSpan="2">UE O15</td>
                                                    <td>{t("mastere-en-droit-prive:Droit de la propriété industrielle")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-droit-prive:Droit de la concurrence")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
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
                            <div className="tab-pane fade" id="tab_list_07" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
        
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("mastere-en-droit-prive:Premiere année mastère Professionnel en Droit privé des affaires")}</h5>
                                        </div>
                                    </div>

     
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("mastere-en-droit-prive:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("mastere-en-droit-prive:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("mastere-en-droit-prive:volume horaire")}</th>
                                                        <th>{t("mastere-en-droit-prive:Credits")}</th>
                                                        <th> {t("mastere-en-droit-prive:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>SR</td>
                                                        <td>CI</td>
                                                        <td>{t("mastere-en-droit-prive:Par element")}</td>
                                                        <td>{t("mastere-en-droit-prive:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>UE F21</td>
                                                    <td>{t("mastere-en-droit-prive:Droit approfondi des sociétés commerciales")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F22</td>
                                                    <td>{t("mastere-en-droit-prive:Droit bancaire")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F23</td>
                                                    <td>{t("mastere-en-droit-prive:Droit de l'investissement et de l'arbitrage")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>21</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE T24</td>
                                                    <td>{t("mastere-en-droit-prive:anglais des affaire")} 2</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>1</td>
                                                </tr>

                                                <tr>
                                                    <td rowSpan="2">UE O25</td>
                                                    <td>D{t("mastere-en-droit-prive:Droit des assurances")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-droit-prive:Droit boursier")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
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
                                            <h5 className="heading ">{t("mastere-en-droit-prive:Deuxième année mastère Professionnel en Droit privé des affaires")}</h5>
                                        </div>
                                    </div>

                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-striped table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("mastere-en-droit-prive:Type de l'unité d'enseignement")}</th>
                                                        <th rowSpan="2">{t("mastere-en-droit-prive:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("mastere-en-droit-prive:volume horaire")}</th>
                                                        <th>{t("mastere-en-droit-prive:Credits")}</th>
                                                        <th> {t("mastere-en-droit-prive:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>SR</td>
                                                        <td>CI</td>
                                                        <td>{t("mastere-en-droit-prive:Par element")}</td>
                                                        <td>{t("mastere-en-droit-prive:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>UE F31</td>
                                                    <td>{t("mastere-en-droit-prive:Droit pénal des affaires")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F32</td>
                                                    <td>{t("mastere-en-droit-prive:Droit du commerce électronique")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F33</td>
                                                    <td>{t("mastere-en-droit-prive:Droit fiscal des affaires")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td>21</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F35</td>
                                                    <td>{t("mastere-en-droit-prive:Méthodologie de recherche")}</td>
                                                    <td>{t("mastere-en-droit-prive:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>1</td>
                                                </tr>

                                                <tr>
                                                    <td rowSpan="2">UE O36</td>
                                                    <td>{t("mastere-en-droit-prive:Droit des contrats pétroliers")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("mastere-en-droit-prive:Droit de l'OHADA")}</td>
                                                    <td>{t("mastere-en-droit-prive:42H")}</td>
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
                            <div className="tab-pane fade" id="tab_list_09" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <div className="accordion-wrapper section-space--pb_100">
                                                <div className="container">
                                                    <div className="row ">
                                                  
                                                        <div className="col-lg-12 offset-lg-1">
                                                            <div className="conact-us-wrap-one managed-it">
                                                                <h5 className="heading ">{t("mastere-en-droit-prive:Stage professionnel et mémoire de fin d’études")}</h5>
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
                                                                                    {t("mastere-en-droit-prive:Descriptif des stages et des activités pratiques de fin d'études")}
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
                                                                                <p> {t("mastere-en-droit-prive:Le stage professionnel")} <br/>
                                                                                {t("mastere-en-droit-prive:objectif du rapport")} <br/>
                                                                                {t("mastere-en-droit-prive:Durée")} <b> {t("mastere-en-droit-prive:3 mois")} </b> <br/>
                                                                                {t("mastere-en-droit-prive:Lieu")} <b>
                                                                                {t("mastere-en-droit-prive:Cabinets d’avocats, Compagnies d’assurance, Compagnies pétrolières, Banques, Bourse, etc")}</b> <br/>
                                                                                {t("mastere-en-droit-prive:Encadrement")}<b> 
                                                                                {t("mastere-en-droit-prive:Encadrant professionnel et encadrant universitaire")} </b> <br/>
                                                                                {t("mastere-en-droit-prive:Soutenance de mémoire")}<b> 
                                                                                {t("mastere-en-droit-prive:Session de juin/Session de septembre")}
                                                                                    </b></p>
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
                                                                                    {t("mastere-en-droit-prive:Inter liaisons entre les semestres du parcours,passerelles (à préciser), évaluation et progression")}<span>
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
                                                                                <p>{t("mastere-en-droit-prive:Les modules prévus")}
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

        <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cta-content md-text-center">
                            <h3 className="heading text-white">{t("mastere-en-droit-prive:Double cursus: M1 en")} <span className="text-color-secondary">
                            {t("mastere-en-droit-prive:Tunisie")} </span> {t("mastere-en-droit-prive:M2 en")} <span className="text-color-secondary"> {t("mastere-en-droit-prive:Europe")}</span> </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-button-group--one text-center">

                            <a href="contact" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i
                                        className="far fa-info-circle"></i></span>{t("mastere-en-droit-prive:Contact")}</a>
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
