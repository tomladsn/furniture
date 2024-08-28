
import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import Handle1  from './Handle1';
import Handle2 from './Handle2';
import Handle3 from './Handle3';
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    door: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Door1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/door.glb') as GLTFResult
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  return (
    <group {...props} dispose={null}>
      <mesh name="door" geometry={nodes.door.geometry} material={whiteMaterial}   userData={{ name: 'door' }} />

    </group>
  )
}

useGLTF.preload('/door.glb')
export default Door1;
