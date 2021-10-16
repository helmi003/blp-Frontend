import link from 'next/link';
import '../styles/globals.css'
import Layout from './components/Layout/Layout';
//import { ChakraProvider } from "@chakra-ui/react"
//import { RtlProvider } from "@/components/rtl-provider"
/*const navslide=()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link,index)=>{
      if(link.style.animation){
        link.style.animation='';
      } else {
        link.style.animation='navLinkFade 0.5s ease forward ${index/7}s';
      }
    });
    burger.classList.toggle('toggle');
  });

}
navslide();*/
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    
        <Component {...pageProps} />
      
    </Layout>
  )
 
}

export default MyApp
