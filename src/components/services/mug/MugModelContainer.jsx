import React, {Suspense} from 'react'
import { MugModel } from './MugModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const MugModelContainer = () => {
  return (
    <Canvas>
            <Suspense fallback="loading..">
            <Stage environment="city" intensity={10}>
            <MugModel/>
            </Stage>
           
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[0,-1,2]} zoom={0.7} makeDefault/>
            </Suspense>
        </Canvas>
  )
}

export default MugModelContainer