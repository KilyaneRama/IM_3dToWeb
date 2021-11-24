import * as THREE from 'three'
import React, {  Suspense  } from "react"
import { Canvas, useThree, useFrame,  } from "react-three-fiber"
import {  OrbitControls, ContactShadows } from '@react-three/drei'
import Model from './model'
import './../css/canvas.css'



function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, camera.position.z), 0.02))
  }

// Animate model

const scene = new THREE.Scene();


export default function Render(props){
    return (
        <div className='canvas'> 
            <Canvas shadowMap> 
            <ambientLight intensity="0.5" />;
            <directionalLight
                intensity={0.5}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />
            <spotLight intensity={0.5} position={[5, 20,20]} />
            <Suspense fallback={null}>
                <Model hello= {props.rotate}/>
            </Suspense>
            <Rig /> 
            </Canvas>
        </div>
    
    )
    
}