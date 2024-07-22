
import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}


export function Smallframe(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/50cmWideFrame.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube.geometry}
      material={materials['Material.006']}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.171}
    />
  </group>
)
}
useGLTF.preload('/50cmWideFrame.glb')
export default Smallframe;
