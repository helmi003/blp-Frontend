import React from 'react'

export default function contact() {
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title">CONTACT </h2>
   
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="/">Accueil</a></li>
                        <li className="breadcrumb-item active">Contact </li>
                    </ul>
            
                </div>
            </div>
        </div>
    </div>
</div>

<div id="main-wrapper">
    <div className="site-wrapper-reveal">
 
        <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-lg-6">
                        <div className="conact-us-wrap-one mb-30">
                            <h3 className="heading">NOUS SOMME À VOTRE ECOUTE! </h3>
                            <div className="sub-heading">Afin de bien préparer votre formation, BLP met à votre disposition
                                des conseillers pour répondre à toutes vos questions et vous orienter vers la bonne
                                formation.</div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-lg-6">
                        <div className="contact-form-wrap">

                            <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php"
                                method="post">
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
     
        <div className="contact-us-info-wrappaer section-space--pb_100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="conact-info-wrap mt-30">
                            <h5 className="heading mb-20">Adresse</h5>
                            <ul className="conact-info__list">
                                <li>102, Chotrana2, Zone industrielle, pôle technologique,Ariana1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="conact-info-wrap mt-30">
                            <h5 className="heading mb-20">Téléphone</h5>
                            <ul className="conact-info__list">
                                <li> (+216) 70 721 002 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="conact-info-wrap mt-30">
                            <h5 className="heading mb-20">Email </h5>
                            <ul className="conact-info__list">
                                <li>contact@blp.tn</li>
                             
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.595559648835!2d10.184826641184372!3d36.89365418212504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb71841eca41%3A0x90bf0f4a4360e5fa!2sPole%20Technologique%20El%20Gazela!5e0!3m2!1sfr!2stn!4v1606732394382!5m2!1sfr!2stn"
            width="1900" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false"
            tabindex="0"></iframe>
        <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
            <div className="container">
                <div className="computing-info-box text-center ">
                    <h4 style={{color: "white"}}>Bourses d'études et places gratuites et accés dés la Terminale à nos
                        modules de E-learning et sur place.</h4>
                    <div className="contact-us-button mt-20">
                        <a href="https://admission.mit.tn/" target="_blank" className="btn btn--secondary">Pré-inscription</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
        </>
    )
}
