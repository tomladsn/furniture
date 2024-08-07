
import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    hanger2: THREE.Mesh
    rail: THREE.Mesh
    hanger1: THREE.Mesh
    hanger3: THREE.Mesh
    hanger4: THREE.Mesh
  }
  materials: {}
  animations: GLTFAction[]
}

export function clotherail(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/clotherail.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="hanger2" geometry={nodes.hanger2.geometry} material={nodes.hanger2.material} position={[0, 2.385, 0.466]} scale={0.079} userData={{ name: 'hanger2' }} />
      <mesh name="rail" geometry={nodes.rail.geometry} material={nodes.rail.material} position={[-0.065, 2.538, 0.162]} rotation={[0, 0, -Math.PI / 2]} scale={[0.113, 3.35, 0.113]} userData={{ name: 'rail' }} />
      <mesh name="hanger1" geometry={nodes.hanger1.geometry} material={nodes.hanger1.material} position={[0.599, 2.385, 0.466]} scale={0.079} userData={{ name: 'hanger1' }} />
      <mesh name="hanger3" geometry={nodes.hanger3.geometry} material={nodes.hanger3.material} position={[-0.76, 2.385, 0.466]} scale={0.079} userData={{ name: 'hanger3' }} />
      <mesh name="hanger4" geometry={nodes.hanger4.geometry} material={nodes.hanger4.material} position={[-1.622, 2.385, 0.466]} scale={0.079} userData={{ name: 'hanger4' }} />
    </group>
  )
}

useGLTF.preload('/clotherail.glb')
