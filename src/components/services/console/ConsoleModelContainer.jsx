import React, {Suspense} from 'react'
import { ConsoleModel } from './ConsoleModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const ConsoleModelContainer = () => {
  return (
    <Canvas>
            <Suspense fallback="loading..">
            <Stage environment="city" intensity={0.5}>
            <ConsoleModel/>
            </Stage>
           
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
            </Suspense>
        </Canvas>
  )
}

export default ConsoleModelContainer