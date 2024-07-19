/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public\Cornerframe.glb --types --output src/components/modelcomponent/cornerFrame.tsx 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Cube004: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Cornerframe(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Cornerframe.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[0, 2.095, 0]} scale={[1, 2.094, 1]} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[-0.854, 3.334, -1.254]} scale={[0.5, 0.044, 0.782]} />
      <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[-0.854, 2.471, -1.254]} scale={[0.5, 0.044, 0.782]} />
      <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[-0.854, 1.582, -1.254]} scale={[0.5, 0.044, 0.782]} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[-0.854, 0.686, -1.254]} scale={[0.5, 0.044, 0.782]} />
    </group>
  )
}

useGLTF.preload('/Cornerframe.glb')
export default Cornerframe;
