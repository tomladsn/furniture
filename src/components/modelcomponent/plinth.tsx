/*
Command: npx gltfjsx@6.5.2 public\plinth.glb --output src\components\modelcomponent\plinth --types --keepnames --meta 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    group_0: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}
type PlinthProps = JSX.IntrinsicElements['group'] & {
  customMaterial?: THREE.Material;
  materialTexture: any;

};

// Modify the Plinth component to accept the customMaterial prop
export function Plinth({ materialTexture, ...props }: PlinthProps) {
  const { nodes, materials } = useGLTF('/plinth.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="SketchUp" scale={0.025} userData={{ name: 'SketchUp' }}>
        <mesh name="group_0" geometry={nodes.group_0.geometry} material={materialTexture ? new THREE.MeshStandardMaterial({ map: materialTexture }) : materials.material} position={[1.048, 1.969, -0.374]} userData={{ name: 'group_0' }} />
      </group>
    </group>
  )
}

useGLTF.preload('/plinth.glb')
