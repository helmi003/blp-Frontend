import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function LicenceEnDroitPublic() {
    let { t } = useTranslation();
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">{t("licence-en-droit-public:Licence en droit Public")}</h2>
              
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="formations">{t("licence-en-droit-public:Formations")}</a></li>
                        <li className="breadcrumb-item active">{t("licence-en-droit-public:Licence")}</li>
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
                                        <h5 className="mb-10">{t("licence-en-droit-public:Inscrivez-vous dès maintenant")}</h5>
                                    </div>
                            
                                    <form  >
                                             <div className="comment-submit-btn text-center">
                                             <a href="https://admission.blp.tn" target="_blank" className="ht-btn ht-btn-md">{t("licence-en-droit-public:Inscription")}</a>

                                                <p className="form-messege"></p>
                                            </div>
                                    </form>
                                 
                                </div>
                            </div>
                     
                        </div>
                    </div>
                    <div className="col-lg-8 order-lg-1 order-1">
                        <div className="main-blog-wrap">
           
                            <div className="single-blog-item">
                 
                                <div className="post-info lg-blog-post-info  wow move-up">
                                    <div className="post-categories text-right">
                                        <a href="#">{t("licence-en-droit-public:3 ans | 180 credit")}</a>
                                    </div>
                                    <img className="img-fluid"
                                        src="assets/images/blog/licence-droit-prive.webp"
                                        alt="licence en droit public"/>

                                    <div className="faq-wrapper section-space--pt_90">
                                        <div id="accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            {t("licence-en-droit-public:Objectifs de la formation (compétences, savoir-faire,connaissances)")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="show" aria-labelledby="headingOne"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("licence-en-droit-public:La Licence")} en<b> {t("licence-en-droit-public:droit public")}</b> 
                                                        {t("licence-en-droit-public:est un parcours")} </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button className="btn-link collapsed" data-toggle="collapse"
                                                            data-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo">
                                                            {t("licence-en-droit-public:Conditions d'accès à la formation et pré-requis")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>{t("licence-en-droit-public:Baccalauréat")}
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
                                                            {t("licence-en-droit-public:Perspectives professionnelles du parcours")} <span> <i
                                                                    className="fas fa-chevron-down"></i>
                                                                <i className="fas fa-chevron-up"></i> </span>
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                    data-parent="#accordion">
                                                    <div className="card-body">
                                                        <p>
                                                        {t("licence-en-droit-public:La Licence en droit public")}
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
                            <h6 className="section-sub-title mb-20">{t("licence-en-droit-public:Formation initiale, Formation continue, Formation en alternance")}</h6>
                            <h3 className="heading">{t("licence-en-droit-public:Descriptif détaillé du parcours de")} <span className="text-color-primary"> 
                            {t("licence-en-droit-public:3 ans")}</span></h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 ht-tab-wrap">
                        <div className="text-center  ">
                            <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                                <li className="tab__item nav-item active">
                                    <a className="nav-link active" id="nav-tab1" data-toggle="tab" href="#tab_list_06"
                                        role="tab" aria-selected="true">{t("licence-en-droit-public:Semestre")} 1</a>
                                </li>
                                <li className="tab__item nav-item">
                                    <a className="nav-link" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab"
                                        aria-selected="false">{t("licence-en-droit-public:Semestre")} 2</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab"
                                        aria-selected="false">{t("licence-en-droit-public:Semestre")} 3</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_09" role="tab"
                                        aria-selected="false">{t("licence-en-droit-public:Semestre")} 4</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_10" role="tab"
                                        aria-selected="false">{t("licence-en-droit-public:Semestre")} 5</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_11" role="tab"
                                        aria-selected="false">{t("licence-en-droit-public:Semestre")} 6</a>
                                </li>
                                <li className="tab__item nav-item ">
                                    <a className="nav-link" id="nav-tab5" data-toggle="tab" href="#tab_list_12" role="tab"
                                        aria-selected="false">{t("licence-en-droit-public:les Stages professionnelles")}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content ht-tab__content">

                            <div className="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                              
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("licence-en-droit-public:Première année Licence unifiée en Droit")}</h5>
                                        </div>
                                    </div>
                                    <br/>
                            
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-droit-public:unite")}</th>
                                                        <th rowSpan="2">{t("licence-en-droit-public:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-droit-public:volume horaire")}</th>
                                                        <th>{t("licence-en-droit-public:Credits")}</th>
                                                        <th> {t("licence-en-droit-public:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-droit-public:Par element")}</td>
                                                        <td>{t("licence-en-droit-public:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>UE F11</td>
                                                    <td>{t("licence-en-droit-public:Droit constitutionnel 1")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F12</td>
                                                    <td>{t("licence-en-droit-public:Droit objectif")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F13</td>
                                                    <td>{t("licence-en-droit-public:Droit administratif 1 :organisation administrative")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}"</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="3">UE F14</td>
                                                    <td>{t("licence-en-droit-public:anglais")} 1</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td>1</td>

                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:Informatique")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td>1</td>

                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:Droits de l'homme 1")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">UE F15</td>
                                                    <td>{t("licence-en-droit-public:Histoire des idées politique")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:Droit musulman")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
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
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-droit-public:unite")}</th>
                                                        <th rowSpan="2">{t("licence-en-droit-public:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-droit-public:volume horaire")}</th>
                                                        <th>{t("licence-en-droit-public:Credits")}</th>
                                                        <th> {t("licence-en-droit-public:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-droit-public:Par element")}</td>
                                                        <td>{t("licence-en-droit-public:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>UE F21</td>
                                                    <td>{t("licence-en-droit-public:Droit constitutionnel 2:Regime politiques et régime politique tunisien")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F22</td>
                                                    <td>{t("licence-en-droit-public:Droit subjectif")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F23</td>
                                                    <td>{t("licence-en-droit-public:Droit civil des biens")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="3">UE F24</td>
                                                    <td>{t("licence-en-droit-public:anglais")} 2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:Informatique")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:Droits de l'homme")} 2</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">UE O25</td>
                                                    <td>{t("licence-en-droit-public:Droit électoral")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:Responsablité délictuelle")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
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
                                            <h5 className="heading ">{t("licence-en-droit-public:Deuxième année Licence unifiée en Droit")}</h5>
                                        </div>
                                    </div>

                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-droit-public:unite")}</th>
                                                        <th rowSpan="2">{t("licence-en-droit-public:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-droit-public:volume horaire")}</th>
                                                        <th>{t("licence-en-droit-public:Credits")}</th>
                                                        <th>{t("licence-en-droit-public:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-droit-public:Par element")}</td>
                                                        <td>{t("licence-en-droit-public:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>UE F31</td>
                                                    <td>{t("licence-en-droit-public:Théorie générale du contrat")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F32</td>
                                                    <td>{t("licence-en-droit-public:Droit administratif 2: Activités administratives")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td>UE F33</td>
                                                    <td>{t("licence-en-droit-public:Finance publiques")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td></td>
                                                    <td>6</td>
                                                    <td>3</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">UE T34</td>
                                                    <td>{t("licence-en-droit-public:Culture de l'entreprise")} 1</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:anglais")} 3</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>{t("licence-en-droit-public:21H")}</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td rowSpan="2">UE O35</td>
                                                    <td>{t("licence-en-droit-public:Institutions internationales")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>4</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td>{t("licence-en-droit-public:Droit foncier")}</td>
                                                    <td>{t("licence-en-droit-public:42H")}</td>
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
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-droit-public:unite")}</th>
                                                        <th rowSpan="2">{t("licence-en-droit-public:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-droit-public:volume horaire")}</th>
                                                        <th>{t("licence-en-droit-public:Credits")}</th>
                                                        <th> {t("licence-en-droit-public:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-droit-public:Par element")}</td>
                                                        <td>{t("licence-en-droit-public:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>UE F41</td>
                                                        <td>{t("licence-en-droit-public:Droit administratif 3:administratif des biens")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UE F42</td>
                                                        <td>{t("licence-en-droit-public:Droit de la famille")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UE F43</td>
                                                        <td>{t("licence-en-droit-public:Droit pénal génèral")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">UE F44</td>
                                                        <td>{t("licence-en-droit-public:Culture de l'entreprise")} 2</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-droit-public:anglais")} 4</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">UE F45</td>
                                                        <td>{t("licence-en-droit-public:Droit du travail")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-droit-public:Droit parlementaire")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
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
                            <div className="tab-pane fade" id="tab_list_10" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                    
                                    <div className="col-lg-12 offset-lg-1">
                                        <div className="conact-us-wrap-one managed-it">
                                            <h5 className="heading ">{t("licence-en-droit-public:Troixieme année Licence fondamentale en Droit public")}
                                            </h5>
                                        </div>
                                    </div>

                     
                                    <br/>
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="2">{t("licence-en-droit-public:unite")}</th>
                                                        <th rowSpan="2">{t("licence-en-droit-public:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-droit-public:volume horaire")}</th>
                                                        <th>{t("licence-en-droit-public:Credits")}</th>
                                                        <th>{t("licence-en-droit-public:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-droit-public:Par element")}</td>
                                                        <td>{t("licence-en-droit-public:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>UE F51</td>
                                                        <td>{t("licence-en-droit-public:Droit international public")} 1</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UE F52</td>
                                                        <td>{t("licence-en-droit-public:Droit fiscal")} 1</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UE F53</td>
                                                        <td>{t("licence-en-droit-public:Contentieux administratif")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2"></td>
                                                        <td>{t("licence-en-droit-public:anglais")} </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-droit-public:Droit de l'homme")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UE O55</td>
                                                        <td>{t("licence-en-droit-public:Droit de l'urbanisme")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-droit-public:Droit public économique")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>4</td>
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
                                                        <th rowSpan="2">{t("licence-en-droit-public:unite")}</th>
                                                        <th rowSpan="2">{t("licence-en-droit-public:Elements constitutifs")}</th>
                                                        <th colSpan="3">{t("licence-en-droit-public:volume horaire")}</th>
                                                        <th>{t("licence-en-droit-public:Credits")}</th>
                                                        <th>{t("licence-en-droit-public:Coefficient")}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>TD</td>
                                                        <td>CI</td>
                                                        <td>{t("licence-en-droit-public:Par element")}</td>
                                                        <td>{t("licence-en-droit-public:par Elements")}</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>UE F61</td>
                                                        <td>{t("licence-en-droit-public:Droit intetnarional public")} 2 </td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UE F62</td>
                                                        <td>{t("licence-en-droit-public:Droit fiscal")} 2</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>UE F63</td>
                                                        <td>{t("licence-en-droit-public:Droit de la fonction publique")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td></td>
                                                        <td>6</td>
                                                        <td>3</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">UE F64</td>
                                                        <td>{t("licence-en-droit-public:anglais")} 4</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>{t("licence-en-droit-public:21H")}</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-droit-public:Droits de l'homme")} 4</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="2">UE O65</td>
                                                        <td>{t("licence-en-droit-public:Droit de la mer")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("licence-en-droit-public:Droits international pénal")}</td>
                                                        <td>{t("licence-en-droit-public:42H")}</td>
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
                            <div className="tab-pane fade" id="tab_list_12" role="tabpanel">
                                <div className="tab-history-wrap section-space--mt_20">
                                    <div className="row">
                                        <div className="col-lg-12 ">
                                            <div className="accordion-wrapper section-space--pb_100">
                                                <div className="container">
                                                    <div className="row ">
                                             
                                                        <div className="col-lg-12 offset-lg-1">
                                                            <div className="conact-us-wrap-one managed-it">
                                                                <h5 className="heading ">{t("licence-en-droit-public:Stages professionnelles")} </h5>
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
                                                                                    {t("licence-en-droit-public:Descriptif des stages et des activités pratiques de fin d'études")}
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
                                                                                <p> {t("licence-en-droit-public:Néant")}</p>
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
                                                                                    {t("licence-en-droit-public:Inter liaisons entre les semestres du parcours,passerelles (à préciser), évaluation et progression")}<span>
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
                                                                                <p>{t("licence-en-droit-public:Le premier")} </p>
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
                            <h3 className="heading text-white">{t("licence-en-droit-public:Double cursus: M1 en")} <span className="text-color-secondary">
                            {t("licence-en-droit-public:Tunisie")} </span> {t("licence-en-droit-public:M2 en")} <span className="text-color-secondary"> {t("licence-en-droit-public:Europe")}</span> </h3>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="cta-button-group--one text-center">

                            <a href="contact" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2"><i
                                        className="far fa-info-circle"></i></span>{t("licence-en-droit-public:Contact")}</a>
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
