import React from "react"
import './../css/header.css' 

/* PICTURES */
import guardiansLogo from '../assets/logo.png'


export default function Header(props){
return (
    <div className={props.class}>
        <img src={guardiansLogo}></img>
       
    </div>
)
}

/* import play from '../assets/play3.svg'
        <button><img src={play}></img></button> */