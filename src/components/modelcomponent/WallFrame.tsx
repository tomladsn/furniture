/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public\WallFrame.glb --types --output src/components/modelcomponent/WallFrame.tsx 
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
    ['Material.005']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Cornerframe(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/WallFrame.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.005']}
        position={[-0.272, 0, -0.543]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.565, 0.434, 0.434]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.005']}
        position={[-0.272, 0, -0.543]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.565, 0.434, 0.434]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.005']}
        position={[-0.272, 0, -0.543]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.565, 0.434, 0.434]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.005']}
        position={[-0.272, 0, -0.543]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.565, 0.434, 0.434]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[1.259, 1.994, 0.115]}
        scale={[1.187, 2.003, 1.187]}
      />
    </group>
  )
}

useGLTF.preload('/WallFrame.glb')
export default Cornerframe;
