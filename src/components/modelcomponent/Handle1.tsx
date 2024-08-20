import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Mesh3: THREE.Mesh
  }
  materials: {
    FrontColor: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Handle1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/handle1.glb') as GLTFResult
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  return (
    <group {...props} dispose={null}>
      <group name="Group3" userData={{ name: 'Group3' }}>
        <mesh name="Mesh3" geometry={nodes.Mesh3.geometry}  material={whiteMaterial} position={[11.901, 1.587, 1.879]} scale={0.454} userData={{ name: 'Mesh3' }} />
      </group>
    </group>
  )
}

useGLTF.preload('/handle1.glb')
export default Handle1;
