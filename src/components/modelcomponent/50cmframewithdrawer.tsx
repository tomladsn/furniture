

import * as THREE from 'three'
import React from 'react'
import { useState } from 'react';
import Clotherail from './clotherail';
import Rack from './rack';
import Door1 from './door';
import Handle1  from './Handle1';
import Handle2 from './Handle2';
import Handle3 from './Handle3';
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

type CdrawerGLTFResult = GLTF & {
  nodes: {
    Cdrawer: any // Update this to match the actual node name in the model
  }
  materials: {
    CdrawerMaterial: THREE.MeshStandardMaterial // Update this to match the actual material name
  }
}
type MdrawerGLTFResult = GLTF & {
  nodes: {
    Mdrawer: THREE.Mesh;
    // Add other nodes here if necessary
  };
  materials: {
    MdrawerMaterial: THREE.MeshStandardMaterial;
    // Add other materials here if necessary
  };
};
type SmallframeProps = {
  visibleComponent: 'shelves' | 'drawers' | null;
  selectedDrawer: string | null;
  frameId: number;
  setFrames: React.Dispatch<React.SetStateAction<Array<{id: number, type: string, scale: [number, number, number]}>>>;
  isRackSelected: any;
  isRailSelected: any;
  isDoorSelected: any;
  scaleY: number;
  selectedHandle:  any;
} & JSX.IntrinsicElements['group'];

const Smallframe: React.FC<SmallframeProps> = ({ visibleComponent,   selectedHandle, selectedDrawer, frameId, isRackSelected, isRailSelected,isDoorSelected, setFrames,   scaleY, ...props }) => {
  const { nodes, materials } = useGLTF('/50cmframewithdrawer.glb') as GLTFResult
  const [showDimensions, setShowDimensions] = useState(false);
  const { nodes: cdNodes, materials: cdMaterials } = useGLTF('/Cdrawer.glb') as CdrawerGLTFResult;
  const { nodes: mdNodes, materials: mdMaterials } = useGLTF('/Mdrawer.glb') as MdrawerGLTFResult;

  const baseWidth = 175;
  const bbox = new THREE.Box3().setFromObject(nodes.frame);
  const size = bbox.getSize(new THREE.Vector3());
  return (
    <group>
    <group {...props} dispose={null} position={[-2, -0.78, -0.9]} scale={[0.077, 0.125, 0.15]} >
               {isRailSelected && (<Clotherail  position={[0.1, 24.78, 13]} scale={[2.3, 2, 1.5]}/>)}
               {isRackSelected && ( <Rack position={[-0.2, 1.68, 16]} scale={[6.2, 7, 3]}/>)}
               {false && (  <Handle1 />)}
               {false && ( <Handle2 />)}
               {false && (  <Handle3 />)}
               {isDoorSelected && ( <group>
                <Door1 rotation={[Math.PI / 2, 0,Math.PI / 2]}  position={[-0.25, 18.166, 18.851]} scale={[0.22, 7.86, 16.7]} />
                { selectedHandle === 'Handgreep  5' && ( <Handle1 position={[-7.5, 18, 17.6]} scale={[0.09, 0.2, 0.38]} rotation={[0, 0,Math.PI/2]}/>)}
                 { selectedHandle === 'Handgreep  1' && (  <Handle2 position={[-10.5, 18, 17.6]} scale={[0.06, 0.1, 0.2]} rotation={[Math.PI/2, Math.PI/2 ,0]}/>)}
                  { selectedHandle === 'Handgreep  3' && ( <Handle3 position={[-6.5, 18, 17.6]} scale={[0.06, 0.1, 0.2]} rotation={[Math.PI/2, Math.PI/2 ,0]}/>)}
                 </group>)}
     {selectedDrawer === 'Lade 1' && ( <group >
            <mesh
              name="Cdrawer"
              geometry={nodes.Lades.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.Lades}
              position={[-0.3, 4.5, 15.5]}
              scale={[0.18, 0.15, 0.34]}
            />
            <mesh
              name="shelve5"
              geometry={nodes.shelve5.geometry}
              material={materials.shelve5}
              position={[-0.323, 8.94, 13.615]}
              scale={[7.876, 0.203, 4.672]}
            />
               { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-5.2, 8, 17]} scale={[0.08, 0.15, 0.34]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-1, 6.9, 17]} scale={[0.04, 0.1, 0.1]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-1, 5.4, 17]} scale={[0.04, 0.1, 0.08]} rotation={[Math.PI/2, 0, 0]} />)}
          </group>)}
          {selectedDrawer === 'Lade 2' && (<group >
             <mesh
              name="Mdrawer"
              geometry={nodes.Lades.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.Lades}
              position={[-0.3, 2.7, 15.5]}
              scale={[0.18, 0.15, 0.14]}
            />
            <mesh
              name="shelve5"
              geometry={nodes.shelve5.geometry}
              material={materials.shelve5}
              position={[-0.323, 4.8, 13.615]}
              scale={[7.876, 0.203, 4.672]}
            />
            { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-5.2, 4, 17]} scale={[0.08, 0.15, 0.3]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-1, 5, 17.5]} scale={[0.04, 0.08, 0.08]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-1, 3, 17.5]} scale={[0.04, 0.08, 0.07]} rotation={[Math.PI/2, 0, 0]} />)}
         
          </group>)}
          {selectedDrawer === 'Lade 3' && ( <group >
             <mesh
              name="Kdrawer"
              geometry={nodes.Lades.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.Lades}
              position={[-0.3, 3.7, 15.5]}
              scale={[0.18, 0.15, 0.24]}
            />
            <mesh
              name="shelve5"
              geometry={nodes.shelve5.geometry}
              material={materials.shelve5}
              position={[-0.323, 7, 13.615]}
              scale={[7.876, 0.203, 4.672]}
            />
            { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-5.2, 6.3, 17.5]} scale={[0.08, 0.15, 0.3]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-1, 6.9, 17]} scale={[0.04, 0.1, 0.1]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-1, 4, 17]} scale={[0.035, 0.1, 0.07]} rotation={[Math.PI/2, 0, 0]} />)}
         
          </group>)}
          {selectedDrawer === 'Lade 4' &&(<group >
             <mesh
              name="Fdrawer"
              geometry={nodes.Lades.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.Lades}
              position={[-0.3, 5.2, 15.5]}
              scale={[0.18, 0.15, 0.44]}
            />
            <mesh
              name="shelve5"
              geometry={nodes.shelve5.geometry}
              material={materials.shelve5}
              position={[-0.323, 10.5, 13.615]}
              scale={[7.876, 0.203, 4.672]}
            />
            { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-5.2, 10, 17]} scale={[0.08, 0.15, 0.34]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-1, 7.5, 17]} scale={[0.04, 0.1, 0.1]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-1, 6, 17.5]} scale={[0.04, 0.09, 0.09]} rotation={[Math.PI/2, 0, 0]} />)}
         
          </group>)}

        {false && (<mesh name="Lades" geometry={nodes.Lades.geometry} material={materials.Lades} position={[-0.27, 3.525, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades' }} />)}
        {false && (<mesh name="Lades001" geometry={nodes.Lades001.geometry} material={materials.lades1} position={[-0.27, 9.238, 15.188]} rotation={[Math.PI / 2, 0, 0]} scale={[0.177, 0.137, 0.254]} userData={{ name: 'Lades.001' }} />)}
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
      {true && (<mesh onPointerOver={() => setShowDimensions(true)}
  onPointerOut={() => setShowDimensions(false)} name="frame" geometry={nodes.frame.geometry} material={materials.Frame} position={[-0.285, 18.146, 11.451]} scale={[7.976, 1.053, 4.787]} userData={{ name: 'frame' }} />)}
      {visibleComponent === 'shelves' && (
    <>
    <mesh name="shelve4" geometry={nodes.shelve4.geometry} material={materials.shelve4} position={[-0.323, 12.64, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve4' }} />
   <mesh name="shelve2" geometry={nodes.shelve2.geometry} material={materials.shelve2} position={[-0.323, 23.731, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve2' }} />
      <mesh name="shelve5" geometry={nodes.shelve5.geometry} material={materials.shelve5} position={[-0.323, 6.94, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve5' }} />
       <mesh name="shelve3" geometry={nodes.shelve3.geometry} material={materials.shelve3} position={[-0.323, 18.396, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve3' }} />
          <mesh name="shelve1" geometry={nodes.shelve1.geometry} material={materials.shelve1} position={[-0.323, 29.466, 13.615]} scale={[7.876, 0.203, 4.672]} userData={{ name: 'shelve1' }} />
          </>
  )}
  {showDimensions && (
  <>
<Html position={[0.375, 35, 0.175]} center>
  <div style={{
    color: '#333',
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transform: 'translate(-50%, -50%) ',
    whiteSpace: 'nowrap',
  }}>
    Width: 50cm
  </div>
</Html>
<Html position={[6, 20, 20]} center>
  <div style={{
    color: '#333',
    background: 'rgba(255, 255, 255, 0.7)',
 
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
    whiteSpace: 'nowrap',
  }}>
    Height: {(baseWidth * scaleY).toFixed(1)} cm
  </div>
</Html>
<Html position={[0, 0, 20]} center>
  <div style={{
    color: '#333',
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transform: 'translate(-50%, -50%) rotatey(45deg)',
    whiteSpace: 'nowrap',
  }}>
    Depth: 35cm
  </div>
</Html>
</>
)}
    </group>
    </group>
  )
}

useGLTF.preload('/50cmframewithdrawer.glb')
useGLTF.preload('/Cdrawer.glb')
export default Smallframe;