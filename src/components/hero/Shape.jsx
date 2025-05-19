import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Shape = () => {
  return (
    <>
            <Sphere args={[1, 100, 200]} scale={2.6} >
                <MeshDistortMaterial color="#eb6587" attach="material" distort={0.5} speed={2}/>
            </Sphere>
            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]}/>
      </>  
  )
}

export default Shape