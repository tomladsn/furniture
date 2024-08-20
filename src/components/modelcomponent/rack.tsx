
import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {}
  animations: GLTFAction[]
}

export function Rack(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/shoerack1.glb') as GLTFResult
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  return (
    <group {...props} dispose={null}>
      <mesh name="Cube" geometry={nodes.Cube.geometry} material={whiteMaterial} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.751, -0.039, -1.751]} userData={{ name: 'Cube' }} />
    </group>
  )
}

useGLTF.preload('/shoerack1.glb')
export default Rack;
