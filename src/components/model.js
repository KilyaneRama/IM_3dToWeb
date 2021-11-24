import * as THREE from 'three'
import React, { useRef } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useGLTF  } from '@react-three/drei'



export default function Model(props) {
/* 
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  })
 */

    const group = useRef()
    const { nodes, materials } = useGLTF('/scene.gltf')


    useFrame(() => (group.current.rotation.y += props.hello))
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 2]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
              <mesh geometry={nodes.Cube_Material001_0.geometry} material={materials['Material.001']} />
            </group>
          </group>
        </group>
      </group>
    )
  }