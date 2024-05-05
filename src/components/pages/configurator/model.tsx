
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('../../../assets/living room_furniture.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['stand-blanco'].geometry}
        material={materials.muebles}
        position={[1.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['escritorio-salon'].geometry}
        material={materials.wood}
        position={[-2, 0, 0.095]}
      />
      <group position={[0.092, 0, -1.557]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.muebles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <group position={[0.767, 0, -0.065]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.muebles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <group position={[-0.941, 1.116, -0.065]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.muebles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <group position={[-0.941, 1.896, -0.065]} rotation={[0, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.muebles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials.pared} />
      <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials.suelo} />
    </group>
  )
}

useGLTF.preload('../../../assets/living room_furniture.glb')