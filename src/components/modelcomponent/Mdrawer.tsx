/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public\Mdrawer.glb --types --output src/components/modelcomponent/Mdrawer.tsx 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Lades: THREE.Mesh
  }
  materials: {
    FrontColor: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Mdrawer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Mdrawer.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Lades.geometry} material={materials.FrontColor} rotation={[Math.PI / 2, 0, 0]} scale={0.191} />
    </group>
  )
}

useGLTF.preload('/Mdrawer.glb')
export default Mdrawer;