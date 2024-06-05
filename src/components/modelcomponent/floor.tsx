import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh
    Plane_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    floor: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Floor(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/environment.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI, 0]} scale={5.427}>
      <pointLight
    position={[0, 0, 1]} 

        intensity={10}
        castShadow
        color="white"
      />
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.floor} />
      </group>
    </group>
  )
}

useGLTF.preload('/environment.glb')
