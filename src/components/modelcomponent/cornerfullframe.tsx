
import * as THREE from 'three'
import { useEffect } from 'react';
import Clotherail from './clotherail';
import Handle1  from './Handle1';
import Handle2 from './Handle2';
import Handle3 from './Handle3';
import Door1 from './door';
import React from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import Rack from './rack';
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    cornerframe: THREE.Mesh
    frameshelve1: THREE.Mesh
    frameshelve2: THREE.Mesh
    frameshelve3: THREE.Mesh
    frameshelve4: THREE.Mesh
    cornershelve2: THREE.Mesh
    cornershelve3: THREE.Mesh
    cornershelve4: THREE.Mesh
    cornershelve6: THREE.Mesh
    cornershelve1: THREE.Mesh
    cornershelve5: THREE.Mesh
  }
  materials: {
    cornerframe: THREE.MeshStandardMaterial
    shelve1: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Cornerframe({visible3Component, ...props }: { visible3Component: 'shelves' | 'drawers' | null } & JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cornerframefull.glb') as GLTFResult
    const bbox = new THREE.Box3().setFromObject(nodes.cornerframe);
  const size = bbox.getSize(new THREE.Vector3());
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  return (
    <group {...props} dispose={null} position={[-7.6, -0.46, 0.95]} scale={[0.2, 0.14, 0.13]}>
          {false && (<Clotherail  position={[0.1, 24.78, 13]} scale={[2.3, 2, 1.5]}/>)}
          {false && (<Rack position={[-0.2, 1.68, 16]} scale={[6.2, 7, 3]}/>)}
               {false && (  <Handle1 />)}
               {false && ( <Handle2 />)}
               {false && (  <Handle3 />)}
      <mesh name="cornerframe" geometry={nodes.cornerframe.geometry} material={whiteMaterial} position={[21.173, 13.909, -0.683]} scale={[0.019, 0.017, 0.019]} userData={{ name: 'cornerframe' }} />
      <mesh name="frameshelve1" geometry={nodes.frameshelve1.geometry} material={materials.shelve1} position={[19.822, 23.252, -6.186]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-9.009, -0.196, -4.778]} userData={{ name: 'frameshelve1' }} />
         <mesh name="frameshelve2" geometry={nodes.frameshelve2.geometry} material={materials.shelve1} position={[19.822, 17.318, -6.186]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-9.009, -0.196, -4.778]} userData={{ name: 'frameshelve2' }} />
         <mesh name="frameshelve3" geometry={nodes.frameshelve3.geometry} material={materials.shelve1} position={[20.012, 10.474, -6.165]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-9.009, -0.196, -4.778]} userData={{ name: 'frameshelve3' }} />
            <mesh name="frameshelve4" geometry={nodes.frameshelve4.geometry} material={materials.shelve1} position={[19.822, 3.462, -6.186]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-9.009, -0.196, -4.778]} userData={{ name: 'frameshelve4' }} />
            {visible3Component === 'shelves' && (
    <>
              <mesh name="cornershelve2" geometry={nodes.cornershelve2.geometry} material={materials.shelve1} position={[30.462, 19.945, -1.069]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.054, -0.196, -10.277]} userData={{ name: 'cornershelve2' }} />
               <mesh name="cornershelve3" geometry={nodes.cornershelve3.geometry} material={materials.shelve1} position={[30.462, 14.806, -1.069]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.054, -0.196, -10.277]} userData={{ name: 'cornershelve3' }} />
                <mesh name="cornershelve4" geometry={nodes.cornershelve4.geometry} material={materials.shelve1} position={[30.674, 10.474, -1.024]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.054, -0.196, -10.277]} userData={{ name: 'cornershelve4' }} />
                  <mesh name="cornershelve6" geometry={nodes.cornershelve6.geometry} material={materials.shelve1} position={[30.462, 2.271, -1.069]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.054, -0.196, -10.277]} userData={{ name: 'cornershelve6' }} />
                    <mesh name="cornershelve1" geometry={nodes.cornershelve1.geometry} material={materials.shelve1} position={[30.462, 24.602, -1.069]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.054, -0.196, -10.277]} userData={{ name: 'cornershelve1' }} />
                      <mesh name="cornershelve5" geometry={nodes.cornershelve5.geometry} material={materials.shelve1} position={[30.462, 6.532, -1.069]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-10.054, -0.196, -10.277]} userData={{ name: 'cornershelve5' }} />
                      </>
  )}
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
  )
}

useGLTF.preload('/cornerframefull.glb')
export default Cornerframe;