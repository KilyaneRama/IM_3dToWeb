import React, { useState } from "react"
import './../css/song.css' 
import cover from '../assets/cover.png'
import music from '../assets/song.mp3'
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






export default function Music(props) {
  // Create state
  
  // Main function to handle both play and pause operations
  /* playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
    console.log('hello')
  }; */
  

  /* const volumeSlider = useRef(null);
  audio.volume = volumeSlider.value / 100; */ 



    return (
      <div className="music-container">

        <img className={props.cover} src={cover}></img>

        <div className="music-sub-container">
            <p className={props.title} >Blue Swede - Hooked on a feeling</p>

            <div className="music-player">
                <button className={props.class} onClick= {props.click}><FontAwesomeIcon icon={props.playimage} /></button>
                <input className="volumeSlider" type="range" min="0" max="100" step="1" defaultValue={"50"} onChange={e => {props.state.volume = e.currentTarget.value / 100}}/>
            </div>
           
        </div>

      </div>
    );
  }
  