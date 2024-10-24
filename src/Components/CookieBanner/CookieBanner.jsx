import React from "react";
import { useState } from 'react'
import { useEffect } from "react";
import style from "./CookieBanner.module.scss"
import ReactGA from "react-ga4";


export const CookieBanner = () => {
    const[withTracking, setWithTracking] = useState(false)
    const[hasUserCookies, setHasUserCookies] = useState(false)

    //InitializeGoogle Analytics with GTag ID
    if (withTracking === true) {
        ReactGA.initialize("G-L149R91K2");
    }
        function enableGA() {
            setWithTracking(true)
            setHasUserCookies(true)
            localStorage.setItem('userAccept', true)
        }
        function disableGA() {
            setWithTracking(false)
            setHasUserCookies(true)
            localStorage.setItem('userAccept', false)
        }
     
        //Check in the local storage if user has accepted or denied cokkies already
        const hasUserAccepted = localStorage.getItem('userAccept')

        console.log("User accepted", hasUserAccepted);
        


        //If yes and user has accepted, set with Tracking true
        //If yes and user has denied, set with Tracking false
        //If yes then show cookie bannerand hasUserSetCookie is false

    return (
        !hasUserCookies &&
        hasUserAccepted === null && (
        <div className={style.cookieBanner}>
            <section><p>This site uses cookies for tracking purposes. You can't eat them but you can accept them.</p></section>
            <section>
                <button onClick={disableGA}>DENY</button>
                <button onClick={enableGA}>ACCEPT</button>

            </section>
        </div>
    )
)
}