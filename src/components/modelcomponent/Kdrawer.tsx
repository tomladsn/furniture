
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

export function Kdrawer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Kdrawer.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Lades.geometry} material={materials.FrontColor} position={[-1.854, 1.707, -1.611]} rotation={[Math.PI / 2, 0, 0]} scale={0.191} />
    </group>
  )
}

useGLTF.preload('/Kdrawer.glb')
export default Kdrawer;
