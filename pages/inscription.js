import React from 'react'

export default function inscription() {
    return (
        <>
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title ">PRÉ-INSCRIPTION</h2>
             
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item"><a href="/">La vie à l'université</a></li>
                            <li className="breadcrumb-item active">Pré-inscription</li>
                        </ul>
                 
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="main-wrapper">
        <div className="site-wrapper-reveal">

            
       
            <div className=" section-space--ptb_100">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-2 "></div>

                        <div className="col-lg-8 ml-auto">
                            <div className="contact-form-service-wrap">

                                <form className="contact-form" id="contact-form-2" action="" method="post">
                                  
                                    <div className="contact-form__two">
                                        <div className="contact-input">
                                            <div className="contact-inner">
                                                <input name="con_name" type="text" placeholder="Nom"/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="text" placeholder="Prenom"/>
                                            </div>
                                        </div>
                                        <div className="contact-input">
                                            <div className="contact-inner">
                                                <input name="con_name" type="email" placeholder="Email"/>
                                            </div>
                                            <div className="contact-inner">
                                                <input name="con_email" type="tel" placeholder="Télèphone"/>
                                            </div>
                                        </div>
                                        <div className="contact-select">
                                            <div className="form-item contact-inner">
                                                <span className="inquiry">
                                        <select id="Visiting" name="Visiting">
                                            <option disabled selected>Nationnalité</option>
                                            <option value="Tunisian">Tunisian</option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="algeria">algeria</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                        </select>

                                      </span>
                                            </div>
                                        </div>
                                        <div className="contact-select">
                                            <div className="form-item contact-inner">
                                                <span className="inquiry">
                                        <select id="Visiting" name="Visiting">
                                            <option disabled selected>Dernier diplome obtenu</option>
                                            <option value="Bac">Bac </option>
                                            <option value="licence">Licence</option>
                                            <option value="Master">Master</option>
                                            
                                        </select>

                                      </span>
                                            </div>
                                        </div>
                                        <div className="contact-select">
                                            <div className="form-item contact-inner">
                                                <span className="inquiry">
                                        <select id="Visiting" name="Visiting">
                                            <option disabled selected>Choisissez un diplôme</option>
                                            <option value="licence">Licence</option>
                                            <option value="Master">Master</option>
                                            
                                        </select>

                                      </span>
                                            </div>
                                        </div>
                                      
                                        <div className="comment-submit-btn">
                                            <button className="ht-btn ht-btn-md" type="submit">Envoyer</button>
                                            <p className="form-messege-2"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 "></div>
                    </div>
                </div>
            </div>
    
    
        </div>
</div>
        </>
    )
}
