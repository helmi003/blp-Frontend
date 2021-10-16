import { useForm } from 'react-hook-form';
import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function contact() {
    let { t } = useTranslation();
    const { register, handleSubmit, errors, reset } = useForm();
    async function onSubmitForm(values){
        console.log(values)
    }
    {/*values.preventDefault();
        const formData = {}
        Array.from(values.currentTarget.elements).forEach(field =>{
            if (!field.name) return;
            formData[field.name]= field.value;
        });
        
        fetch('/api/mail',{
            method: 'post',
            body: JSON.stringify(formData),
        })*/}
        
    return (
        <>
<div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="breadcrumb_box text-center">
                    <h2 className="breadcrumb-title">{t("contact:CONTACT")} </h2>
   
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="/">{t("contact:Accueil")}</a></li>
                        <li className="breadcrumb-item active">{t("contact:CONTACT")} </li>
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
                            <h3 className="heading">{t("contact:NOUS SOMME À VOTRE ECOUTE!")} </h3>
                            <div className="sub-heading">{t("contact:Afin de bien préparer votre formation, BLP met à votre disposition des conseillers pour répondre à toutes vos questions et vous orienter vers la bonne formation")}</div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-lg-6">
                        <div className="contact-form-wrap">
                            <form id="contact-form" method="post" onSubmit={handleSubmit(onSubmitForm)} 
                                //action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php"
                            >
                                <div className="contact-form">
                                    <div className="contact-input">
                                        <div className="contact-inner">
                                            <input name="name" type="text"  placeholder="Nom" ref={register} />
                                        </div>
                                        <div className="contact-inner">
                                            <input name="mail" type="email"  placeholder="Email "ref={register} />
                                        </div>
                                    </div>
                                    <div className="contact-inner">
                                        <input name="subject" type="text"  placeholder="Objet "ref={register} />
                                    </div>
                                    <div className="contact-inner contact-message">
                                        <textarea name="message"  placeholder="Message."ref={register} ></textarea>
                                    </div>
                                    <div className="submit-btn mt-20">
                                        <button className="ht-btn ht-btn-md" type="submit">{t("contact:Envoyer")} </button>
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
                            <h5 className="heading mb-20">{t("contact:Adresse")}</h5>
                            <ul className="conact-info__list">
                                <li>{t("contact:102, Chotrana2, Zone industrielle, pôle technologique,Ariana1")}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="conact-info-wrap mt-30">
                            <h5 className="heading mb-20">{t("contact:Téléphone")}</h5>
                            <ul className="conact-info__list">
                                <li> (+216) 70 721 002 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="conact-info-wrap mt-30">
                            <h5 className="heading mb-20">{t("contact:Email")} </h5>
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
            width="100%" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false"
            tabIndex="0"></iframe>
        <div className="fun-fact-wrapper processing-contact-us-bg section-space--pb_30 section-space--pt_60">
            <div className="container">
                <div className="computing-info-box text-center ">
                    <h4 style={{color: "white"}}>{t("contact:Bourses d'études et places gratuites et accès dès la terminale à nos modules d'E-learning et sur place")}</h4>
                    <div className="contact-us-button mt-20">
                        <a href="https://admission.blp.tn" target="_blank" className="btn btn--secondary">{t("contact:Pré-inscription")}</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
        </>
    )
}
