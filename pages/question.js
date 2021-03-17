import React from 'react'

export default function question() {
    return (
        <>
  <div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title ">QUESTIONS - RÉPONSES</h2>
                    
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="accueil">BLP</a></li>
                        <li className="breadcrumb-item active">Questions & Réponses</li>
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
                                                Qui somme nous ? <span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Groupe d’universités privées en Tunisie ; MIT, 3 établissements, avec Foyer et Restaurants. +35 spécialités :Gestion, Finance, Informatique... + 900 partenaires industriels pour stages et Embauche en Tunisie et en Europe. Diplôme reconnu par l’État Tunisien, Communauté Européenne : M1 en Tunisie et M2 en Europe. Certifiées iso 9001 et accréditées AACSB en cours 21001. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                               L'année universitaire commencera à quelle date ?<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>L’année universitaire commence en Septembre et se termine fin Juin. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Quel est les procédures d'inscription? <span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                                <ul className="circle-list">
                                                    <li className="list-item">Préinscription sur le site.</li>
                                                    <li className="list-item">Envoyez les pièces suivantes à : contact@blp.tn .</li>
                                                    <li className="list-item">Copies d’acte de naissance, dernier diplôme, relevé de notes, Passeport / CIN.</li>
                                                    <li className="list-item">Indiquer la formation choisie.</li>
                                               </ul>
                                                <b style={{color:"blue"}}>N.B : l’Attestation d’Inscription : payement d’une tranche de frais scolaire.</b> 
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h5 className="mb-0">
                                            <button className="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Quel est le coût annuel de votre formation<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>Le coût annuel qui inclut uniquement le frais de scolarité varie selon la formation : Licence 2500 Euro et Master: 3000 Euro</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                        <div className="card-header" id="faq_a">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_a" aria-expanded="false" aria-controls="faq_a">
                                                 Le cout total d'une année entre étude,nourriture et hébergement <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_a" className="collapse" aria-labelledby="faq_a" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <ul className="circle-list">
                                                    <li className="list-item">Bourse études et Bourse logement.</li>
                                                    <li className="list-item">Pack de service inclut les frais d’inscription, d’hébergement, de restauration, d’accompagnement depuis son arrivée en Tunisie.</li>
                                                    <li className="list-item">Voir pack (Africa Intégration Services).</li>
                                                    <li className="list-item">2000 euros pour l’hébergement et nourriture.</li>
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
                                                    Est-ce que vous trouvez l'hébergement ?<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_d" className="collapse" aria-labelledby="faq_25">
                                            <div className="card-body">
                                                <p>Oui Plus 1 mois gratuit . </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_2">
                                            <h5 className="mb-0">
                                                <button className="btn-link collapsed" data-toggle="collapse" data-target="#faq_two" aria-expanded="false" aria-controls="faq_two">
                                                   Y'a-t-il des facilités de paiement et comment ?<span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_two" className="collapse" aria-labelledby="faq_2">
                                            <div className="card-body">
                                                <p> Oui, les frais de scolarité peuvent être échelonnés sur deux tranches. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_3">
                                            <h5 className="mb-0">
                                                <button className="btn-link collapsed" data-toggle="collapse" data-target="#faq_three" aria-expanded="false" aria-controls="faq_three">
                                                Où vous trouvez nous ? <span> <i className="fas fa-chevron-down"></i>
                                        <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_three" className="collapse" aria-labelledby="faq_3">
                                            <div className="card-body">
                                                <p>Mediterranean Institute of Tunisia, MITPolytech, MITTunis et MITNabeul, Tunisie : Afrique du Nord. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_4">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_four" aria-expanded="false" aria-controls="faq_four">
                                                   Est-ce que nos diplomes sont reconnus et pouvez-vous trouver des stages et d'embauche en Tunisie et en Europe ? <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_four" className="collapse" aria-labelledby="faq_4" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <ul className="circle-list">
                                                    <li className="list-item">Diplôme reconnu Union Européenne.</li>
                                                    <li className="list-item">Conventions avec + 1000 Entreprises pour les stages.</li>
                                                    <li className="list-item">Innovation Project.</li>
                                                    <li className="list-item">Stage d’initiation.</li>
                                                    <li className="list-item">1ère année (Licence ).</li>
                                                    <li className="list-item">2ème année (Licence).</li>
                                                    <li className="list-item">Stage PFE en terminales (Licence L3, Ingénieur, Master M2).</li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_16">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_16" aria-expanded="false" aria-controls="faq_16">
                                                   Est-ce que vous assurez un accompagnement de l'etudiant lors de son arrivée en tunisie et sa carte de séjours ? <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_16" className="collapse" aria-labelledby="faq_16" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <p>Oui, l’étudiant est accompagné par notre CIO Centre Information et Orientation.-demande de l’étudiant depuis son pays d’origine.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="faq_17">
                                            <h5 className="mb-0">
                                                <button className="collapsed" data-toggle="collapse" data-target="#faq_17" aria-expanded="false" aria-controls="faq_17">
                                                 Comment venir en Tunisie ? <span> <i className="fas fa-chevron-down"></i>
                                            <i className="fas fa-chevron-up"></i> </span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="faq_17" className="collapse" aria-labelledby="faq_17" data-parent="#faq-toggles">
                                            <div className="card-body">
                                            <ul className="circle-list">
                                                    <li className="list-item">Attestation de préinscription : remplir formulaire sur site.</li>
                                                    <li className="list-item">Envoi du dossier de préinscription.</li>
                                                    <li className="list-item">Confirmation (Acceptation ou complément ou rejet).</li>
                                                    <li className="list-item"> Attestation de paiement : paiement première tranche (cliquez Page responsabilité sociale et Bourse).</li>
                                                    <li className="list-item">Contrat / attestation de Logement : MIT héberge gratuitement une semaine à Tunis et des mois à Nabeul.</li>
                                                    <li className="list-item">Confirmation de l’université par email à l’ambassade: Direction/administration.</li>
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
                            <h6 className="section-sub-title mb-20">Contactez-nous !</h6>
                            <h3 className="heading">Avez-Vous Des Questions?</h3>
                        </div>
                           </div>
                </div>
            <br/><br/>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-lg-6">
                        <div className="conact-us-wrap-one mb-30">
                            <h3 className="heading">NOUS SOMME À VOTRE ECOUTE! </h3>
                            <div className="sub-heading">Afin de bien préparer votre formation, BLP met à votre disposition des conseillers pour répondre à toutes vos questions et vous orienter vers la bonne formation.</div>
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
                                        <button className="ht-btn ht-btn-md" type="submit">Envoyer </button>
                                        <p className="form-messege"></p>
                                    </div>
                                </div>
                            </form>
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
