

import * as THREE from 'three'
import React from 'react'
import { useGLTF, Html  } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    Lades: THREE.Mesh
    Lades001: THREE.Mesh
    Lades002: THREE.Mesh
    Lades003: THREE.Mesh
    Lades004: THREE.Mesh
    Lades005: THREE.Mesh
    frame: THREE.Mesh
    shelve4: THREE.Mesh
    shelve2: THREE.Mesh
    shelve5: THREE.Mesh
    shelve3: THREE.Mesh
    shelve1: THREE.Mesh
  }
  materials: {
    Lades: THREE.MeshStandardMaterial
    lades1: THREE.MeshStandardMaterial
    lades2: THREE.MeshStandardMaterial
    lades3: THREE.MeshStandardMaterial
    lades4: THREE.MeshStandardMaterial
    lades5: THREE.MeshStandardMaterial
    Frame: THREE.MeshStandardMaterial
    shelve4: THREE.MeshStandardMaterial
    shelve2: THREE.MeshStandardMaterial
    shelve5: THREE.MeshStandardMaterial
    shelve3: THREE.MeshStandardMaterial
    shelve1: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Smallframe({visibleComponent, ...props }: { visibleComponent: 'shelves' | 'drawers' | null } & JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/50cmframewithdrawer.glb') as GLTFResult
  const bbox = new THREE.Box3().setFromObject(nodes.frame);
  const size = bbox.getSize(new THREE.Vector3());
  return (
    <group {...props} dispose={null} position={[-2, -0.78, -0.9]} scale={[0.077, 0.125, 0.15]} >
       {false && ( <mesh name="Lades" geometry={nodes.Lades.geometry} material={materials.Lades} position={[-0.27, 3.525, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades' }} />)}
       {false && ( <mesh name="Lades001" geometry={nodes.Lades001.geometry} material={materials.lades1} position={[-0.27, 9.238, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades.001' }} />)}
        {false && (<mesh name="Lades002" geometry={nodes.Lades002.geometry} material={materials.lades2} position={[-0.27, 14.992, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades.002' }} />)}
          {false && (<mesh name="Lades003" geometry={nodes.Lades003.geometry} material={materials.lades3} position={[-0.27, 20.438, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades.003' }} />)}
          {visibleComponent === 'drawers' && (
        <>
          <mesh name="shelve1" geometry={nodes.shelve1.geometry} material={materials.shelve1} position={[-0.323, 29.466, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve1' }} />
   <mesh name="shelve2" geometry={nodes.shelve2.geometry} material={materials.shelve2} position={[-0.323, 23.731, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve2' }} />
       <mesh name="shelve3" geometry={nodes.shelve3.geometry} material={materials.shelve3} position={[-0.323, 18.396, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve3' }} />
          
          {/* Render Lades004 and shelve4 */}
          <mesh
            name="Lades004"
            geometry={nodes.Lades004.geometry}
            material={materials.lades4}
            position={[-0.27, 9.3, 15.188]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.177, 0.137, 0.254]}
          />
          <mesh
            name="shelve4"
            geometry={nodes.shelve4.geometry}
            material={materials.shelve4}
            position={[-0.323, 12.64, 13.615]}
            scale={[7.876, 0.203, 4.672]}
          />

          {/* Render Lades005 and shelve5 */}
          <mesh
            name="Lades005"
            geometry={nodes.Lades005.geometry}
            material={materials.lades5}
            position={[-0.27, 3.7, 15.188]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.177, 0.137, 0.254]}
          />
          <mesh
            name="shelve5"
            geometry={nodes.shelve5.geometry}
            material={materials.shelve5}
            position={[-0.323, 6.94, 13.615]}
            scale={[7.876, 0.203, 4.672]}
          />
        </>
      )}
            {false && ( <mesh name="Lades004" geometry={nodes.Lades004.geometry} material={materials.lades4} position={[-0.27, 26.099, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades.004' }} />)}
              {false && ( <mesh name="Lades005" geometry={nodes.Lades005.geometry} material={materials.lades5} position={[-0.27, 31.691, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades.005' }} />)}
      {true && (<mesh name="frame" geometry={nodes.frame.geometry} material={materials.Frame} position={[-0.285, 18.146, 11.451]} scale={[7.976, 1.053, 4.787]} userData={{ name: 'frame' }} />)}
      {visibleComponent === 'shelves' && (
    <>
    <mesh name="shelve4" geometry={nodes.shelve4.geometry} material={materials.shelve4} position={[-0.323, 12.64, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve4' }} />
   <mesh name="shelve2" geometry={nodes.shelve2.geometry} material={materials.shelve2} position={[-0.323, 23.731, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve2' }} />
      <mesh name="shelve5" geometry={nodes.shelve5.geometry} material={materials.shelve5} position={[-0.323, 6.94, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve5' }} />
       <mesh name="shelve3" geometry={nodes.shelve3.geometry} material={materials.shelve3} position={[-0.323, 18.396, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve3' }} />
          <mesh name="shelve1" geometry={nodes.shelve1.geometry} material={materials.shelve1} position={[-0.323, 29.466, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve1' }} />
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

useGLTF.preload('/50cmframewithdrawer.glb')
export default Smallframe;