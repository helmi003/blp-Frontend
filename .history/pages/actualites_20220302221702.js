import React from 'react'
import useTranslation from "next-translate/useTranslation";
    
export default function actualites({posts}) {
   let { t } = useTranslation();
return (
<>
<div className="breadcrumb-area">
   <div className="container">
      <div className="row">
         <div className="col-12">
            <div className="breadcrumb_box text-center">
               <h2 className="breadcrumb-title">${t("actualites:Actualités")} </h2>
               <ul className="breadcrumb-list">
                  <li className="breadcrumb-item"><a href="/">{t("actualites:Accueil")}</a></li>
                  <li className="breadcrumb-item active">{t("actualites:Actualités")} </li>
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
            {console.log(posts)}
            <div className="row">
               {posts.map((post) =>
               <div className="col-lg-4 col-md-6  mb-30 wow move-up">
                  <div className="single-blog-item blog-grid">
                     <div className="post-feature blog-thumbnail">
                        <a href="assets/images/actualites/devenir-ing-en-france.jpg">
                        <img className="img-fluid" src={`${post.image}`} alt="Convention Carthage & BLP" />
                        </a>
                     </div>
                     <div className="post-info lg-blog-post-info">
                        <div className="post-meta">
                           <div className="post-date">
                              <span className="far fa-calendar meta-icon"></span>
                              {post.date}
                           </div>
                        </div>
                        <h5 className="post-title font-weight--bold">
                           <a>{post.content}</a>
                        </h5>
                        <div className="btn-text">
                           <a href={`${post.url}`}>{t("actualites:En savoir Plus")} <i className="ml-1 button-icon far fa-long-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               )}
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
                  <h3 className="heading text-white">{t("actualites:First smart Co-working place")}  <span className="text-color-secondary"> {t("actualites:in AFRICA")}</span></h3>
               </div>
         </div>
         <div className="col-xl-4 col-lg-5">
               <div className="cta-button-group--one text-center">
               
                  <a href="https://admission.blp.tn" className="btn btn--secondary  btn-two"><span className="btn-icon mr-2">
                     <i className="far fa-info-circle"></i></span>{t("index:Pré-inscription")}</a>
               </div>
         </div>
      </div>
   </div>
</div>
</>
)
}


export async function getStaticProps(){
	
 
	const res = await fetch("http://127.0.0.1:8000/api/");
	const posts= await res.json();
	
	
	return{
	  props:{
		  posts
	  }
	}
  

}