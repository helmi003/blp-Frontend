import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function layout({children}) {
    return (
        <>
        <div className="hidden-bar-wrapper">
            <div className="page-wrapper">
                <div className="preloader"></div>
                <Header/> 
                { children }
                <Footer/>
            </div>
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-arrow-up"></span></div>
        </div>        
        </>
    )
}
