import './App.css';
import './css/header.css' 
import React, { useRef, Suspense } from "react"
import MouseParticles from 'react-mouse-particles'



import Music from  '../src/components/song'
import Header from '../src/components/header'
import Render from '../src/components/canvas'
import song from '../src/assets/song.mp3'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import pause from '../src/assets/pause2.svg'


class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            button: false,
            audio: new Audio(song),
            isPlaying: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
          button: !this.state.button
        })
        this.state.button ? this.state.audio.pause() : this.state.audio.play();
        this.state.audio.loop = true;
    }

    /* playPause = () => {
        let isPlaying = this.state.isPlaying;
    
        if (isPlaying) {
          this.state.audio.pause();
        } if (this.state.audio.currentTime = 0){
            this.state.audio.play();
        }else {
          this.state.audio.play();
        }
        this.setState({ isPlaying: !isPlaying });
        console.log('hello')
      }; */

        /* componentDidMount() {
                this.setState({left: window.screenX, top: window.screenY});
            
        } */

       /*  showCoords(event) {
            this.state.x  = event.clientX;
            this.state.y = event.clientY;
          } */
    


    render(){
        return (
            <div className='hello'>
                <Music state={this.state.audio} cover={this.state.button ? "cover-moving" : ""} title={this.state.button ? "title-play" : ""} class={this.state.button ? "pause": "play"} playimage={this.state.button ? faPause : faPlay} click={this.handleClick}/> 
                <Header class={this.state.button ? "header-breathe": "header-static"} /> 
                <Render rotate={this.state.button ? 0.01 : 0} /> 
                <MouseParticles g={1} num={2.5} life={1} radius={5} v={2}  alpha={.8} color={["#8B377C", "white", "#B43078" ]} cull="MuiSvgIcon-root,MuiButton-root" />
                
            </div>
            
        )
    }
}



export default App;
