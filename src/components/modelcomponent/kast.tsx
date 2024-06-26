import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
  }
  materials: {
    external: THREE.MeshStandardMaterial
    ['rough wood']: THREE.MeshStandardMaterial
    drawer: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>
type KastProps = JSX.IntrinsicElements['group'] & {
  showDrawer: boolean

}

export function Kast( { showDrawer, ...props }: KastProps) {
  const { nodes, materials } = useGLTF('Kast.glb') as GLTFResult
  const bbox = new THREE.Box3().setFromObject(nodes.Cube001);
  const size = bbox.getSize(new THREE.Vector3());
  return (
    
    <group {...props} dispose={null}>

      <group name="Cube" position={[0.00, 1, 0.01]} scale={[3.384, 2.435, 0.654]} userData={{ name: 'Cube' }}>

        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.external} />

        <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['rough wood']} />

        {showDrawer &&  <mesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials.drawer} />}
        <Html position={[size.x / 2, size.y, 0]} center>
        <div style={{ background: 'white', padding: '2px', borderRadius: '3px', fontSize: '12px' }}>
          {`Width: ${size.x.toFixed(2)}m`}
        </div>
      </Html>
      <Html position={[0, size.y / 2, size.z / 2]} center>
        <div style={{ background: 'white', padding: '2px', borderRadius: '3px', fontSize: '12px' }}>
          {`Height: ${size.y.toFixed(2)}m`}
        </div>
      </Html>
      <Html position={[0, size.y, size.z / 2]} center>
        <div style={{ background: 'white', padding: '2px', borderRadius: '3px', fontSize: '12px' }}>
          {`Depth: ${size.z.toFixed(2)}m`}
        </div>
      </Html>
      </group>
    </group>
  )
}

useGLTF.preload('/Kast.glb')

export default Kast;