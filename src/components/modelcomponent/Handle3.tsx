
import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Mesh2: THREE.Mesh
  }
  materials: {
    FrontColor: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Handle3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/handle3.glb') as GLTFResult
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  return (
    <group {...props} dispose={null}>
      <mesh name="Mesh2" geometry={nodes.Mesh2.geometry} material={whiteMaterial} position={[11.101, 24.442, 0.905]} scale={0.569} userData={{ name: 'Mesh2' }} />
    </group>
  )
}

useGLTF.preload('/handle3.glb')
export default Handle3;