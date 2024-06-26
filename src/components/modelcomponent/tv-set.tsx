/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src\components\modelcomponent\tv-set.glb --output src\components\modelcomponent\tv --types --keepnames --meta 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    cabinet_Material003_0_1: THREE.Mesh
    cabinet_Material003_0_2: THREE.Mesh
    Cube_Material003_0: THREE.Mesh
    Cube001_Material001_0: THREE.Mesh
    Cube003_Material001_0: THREE.Mesh
    Cube004_Material004_0: THREE.Mesh
    Cube005_Material004_0: THREE.Mesh
    Cube006_Material004_0: THREE.Mesh
    Cube010_Material004_0: THREE.Mesh
    Cylinder010__0: THREE.Mesh
    Cylinder011__0: THREE.Mesh
    Cylinder012__0: THREE.Mesh
    Cylinder013__0: THREE.Mesh
    handle_3_Material002_0: THREE.Mesh
  }
  materials: {
    leg: THREE.MeshStandardMaterial
    drawer: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Cylinder.001__0']: THREE.MeshStandardMaterial
    rail: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Tvmeubel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/tv-set.glb') as GLTFResult
  const bbox = new THREE.Box3().setFromObject(nodes.cabinet_Material003_0_2);
  
  const size = bbox.getSize(new THREE.Vector3());
  return (
    <group {...props} dispose={null}>
      <group name="RootNode" rotation={[0, Math.PI, 0]} scale={0.02} userData={{ name: 'RootNode' }}>
        <group name="cabinet_Material003_0" position={[-0.067, 170.148, -45.821]} rotation={[-Math.PI / 2, 0, 0]} scale={100} userData={{ name: 'cabinet_Material.003_0' }}>
          <mesh name="cabinet_Material003_0_1" geometry={nodes.cabinet_Material003_0_1.geometry} material={materials.leg} />
          <mesh name="cabinet_Material003_0_2" geometry={nodes.cabinet_Material003_0_2.geometry} material={materials.drawer} />
        </group>
        <mesh name="Cube_Material003_0" geometry={nodes.Cube_Material003_0.geometry} material={materials.leg} position={[149.447, 114.782, -76.507]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 105.999]} userData={{ name: 'Cube_Material.003_0' }} />
        <mesh name="Cube001_Material001_0" geometry={nodes.Cube001_Material001_0.geometry} material={materials['Material.001']} position={[101.224, 174.931, -53.834]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-37.344, -27.621, -4.434]} userData={{ name: 'Cube.001_Material.001_0' }} />
        <mesh name="Cube003_Material001_0" geometry={nodes.Cube003_Material001_0.geometry} material={materials['Material.001']} position={[-131.281, 182.198, -53.894]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-33.559, -29.915, -8.779]} userData={{ name: 'Cube.003_Material.001_0' }} />
        <mesh name="Cube004_Material004_0" geometry={nodes.Cube004_Material004_0.geometry} material={materials['Material.005']} position={[-131.281, 182.198, -53.894]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-33.559, -29.915, -8.779]} userData={{ name: 'Cube.004_Material.004_0' }} />
        <mesh name="Cube005_Material004_0" geometry={nodes.Cube005_Material004_0.geometry} material={materials['Material.005']} position={[-131.281, 182.198, -53.894]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-33.559, -29.915, -8.779]} userData={{ name: 'Cube.005_Material.004_0' }} />
        <mesh name="Cube006_Material004_0" geometry={nodes.Cube006_Material004_0.geometry} material={materials['Material.005']} position={[-131.281, 182.198, -53.894]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-33.559, -29.915, -8.779]} userData={{ name: 'Cube.006_Material.004_0' }} />
        <mesh name="Cube010_Material004_0" geometry={nodes.Cube010_Material004_0.geometry} material={materials['Material.005']} position={[-131.281, 182.198, -53.894]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-33.559, -29.915, -8.779]} userData={{ name: 'Cube.010_Material.004_0' }} />
        <mesh name="Cylinder010__0" geometry={nodes.Cylinder010__0.geometry} material={materials['Cylinder.001__0']} position={[-110.486, 171.858, -71.648]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.479, 4.723, 1.606]} userData={{ name: 'Cylinder.010__0' }} />
        <mesh name="Cylinder011__0" geometry={nodes.Cylinder011__0.geometry} material={materials['Cylinder.001__0']} position={[-151.256, 171.858, -71.648]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.479, 4.723, 1.606]} userData={{ name: 'Cylinder.011__0' }} />
        <mesh name="Cylinder012__0" geometry={nodes.Cylinder012__0.geometry} material={materials['Cylinder.001__0']} position={[-110.486, 172.079, -37.067]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.479, 4.723, 1.606]} userData={{ name: 'Cylinder.012__0' }} />
        <mesh name="Cylinder013__0" geometry={nodes.Cylinder013__0.geometry} material={materials['Cylinder.001__0']} position={[-151.256, 172.079, -37.067]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.479, 4.723, 1.606]} userData={{ name: 'Cylinder.013__0' }} />
        <mesh name="handle_3_Material002_0" geometry={nodes.handle_3_Material002_0.geometry} material={materials.rail} position={[-132.812, 160.495, -89.197]} rotation={[-Math.PI / 2, 0, 0]} scale={[10.045, 2.007, 1.02]} userData={{ name: 'handle_3_Material.002_0' }} />
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

useGLTF.preload('/tv-set.glb')

export default Tvmeubel;
