import * as THREE from 'three'
import React from 'react'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Mesh1: THREE.Mesh
  }
  materials: {
    FrontColor: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Smallframe(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/new50cmframe.glb') as GLTFResult
  const meshRef = useRef<THREE.Mesh>(null)

  // Create a new white material
  const whiteMaterial = new THREE.MeshStandardMaterial({   color: 'white',
    roughness: 0.7})
  return (
    <group  {...props} dispose={null}>
      <mesh geometry={nodes.Mesh1.geometry}  material={whiteMaterial}  position={[-2, 1.5, 1]} scale={0.0024}  />
    </group>
  )
}

useGLTF.preload('/new50cmframe.glb')
export default Smallframe;
