import * as THREE from 'three'
import Clotherail from './clotherail';
import Handle1  from './Handle1';
import Handle2 from './Handle2';
import Handle3 from './Handle3';
import Door1 from './door';
import React, { useState } from 'react'
import { useGLTF, Html  } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import Rack from './rack';
type GLTFAction = any;
type GLTFResult = GLTF & {
  nodes: {
    frame: THREE.Mesh
    drawer6: THREE.Mesh
    drawer5: THREE.Mesh
    drawer4: THREE.Mesh
    drawer3: THREE.Mesh
    drawer2: THREE.Mesh
    drawer1: THREE.Mesh
    shelve1: THREE.Mesh
    shelve2: THREE.Mesh
    shelve3: THREE.Mesh
    shelve4: THREE.Mesh
    shelve5: THREE.Mesh
  }
  materials: {
    frame: THREE.MeshStandardMaterial
    drawer6: THREE.MeshStandardMaterial
    drawer5: THREE.MeshStandardMaterial
    drawer4: THREE.MeshStandardMaterial
    drawer3: THREE.MeshStandardMaterial
    drawer2: THREE.MeshStandardMaterial
    drawer1: THREE.MeshStandardMaterial
    shelve1: THREE.MeshStandardMaterial
    shelve2: THREE.MeshStandardMaterial
    shelve3: THREE.MeshStandardMaterial
    shelve4: THREE.MeshStandardMaterial
    shelve5: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}
type SmallframeProps = {
  visible2component: 'shelves' | 'drawers' | null;
  selectedDrawer: string | null;
  isRackSelected: any;
  isRailSelected: any;
  isDoorSelected: any;
  selectedHandle: any;
  scaleY:number;
} & JSX.IntrinsicElements['group'];
const Mediumframe: React.FC<SmallframeProps> = ({ visible2component, selectedHandle, selectedDrawer,isRackSelected,  isRailSelected, isDoorSelected, scaleY, ...props }) => {
  const { nodes, materials } = useGLTF('/75cmframefull.glb') as GLTFResult
  const [showDimensions, setShowDimensions] = useState(false);
  const baseWidth = 175;
  const bbox = new THREE.Box3().setFromObject(nodes.frame);
  const size = bbox.getSize(new THREE.Vector3());
  const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  return (
    <group >
    <group {...props} dispose={null} position={[-1.6, -0.46, 0.95]} scale={[0.12, 0.14, 0.13]}>
   {isRailSelected && (<Clotherail  position={[-3, 22.78, 3]} scale={[2.1, 1.8, 1.5]}/>)}
     {isRackSelected && (<Rack position={[-3.2, -0.8, 3]} scale={[5.5, 6, 3.7]}/>)}

               {false && (  <Handle1 />)}
               {false && ( <Handle2 />)}
               {false && (  <Handle3 />)}


               {isDoorSelected && (<group> <Door1 rotation={[Math.PI / 2, 0,Math.PI / 2]}  position={[-3.1, 14, 6.51]} scale={[0.22, 7, 15]} />
                { selectedHandle === 'Handgreep  5' &&  ( <Handle1 position={[-9.3, 18, 5]} scale={[0.09, 0.2, 0.38]} rotation={[0, 0,Math.PI/2]}/>)}
                 { selectedHandle === 'Handgreep  1' && (  <Handle2 position={[-11.5, 17, 5.5]} scale={[0.06, 0.1, 0.2]} rotation={[Math.PI/2, Math.PI/2 ,0]}/>)}
                  { true && ( <Handle3 position={[-9, 17, 5.5]} scale={[0.06, 0.1, 0.2]} rotation={[Math.PI/2, Math.PI/2 ,0]}/>)}
                 
                 </group>)}
    {selectedDrawer === 'Lade 1' && ( <group >
            <mesh
              name="Cdrawer"
              geometry={nodes.drawer5.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.drawer5}
              position={[-3.12, 1.2, 3.273]}
              scale={[0.15, 0.15, 0.17]}
            />
            <mesh
              name="shelve5"
              geometry={nodes.shelve5.geometry}
              material={materials.shelve5}
              position={[-3.133, 5.9, 0.541]}
              scale={[-6.938, -0.196, -5.481]}
            />
             { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-7, 5, 4.8]} scale={[0.08, 0.15, 0.34]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-4, 4, 4.9]} scale={[0.04, 0.1, 0.1]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-4, 3, 4.9]} scale={[0.04, 0.1, 0.08]} rotation={[Math.PI/2, 0, 0]} />)}
          </group>)}
          {selectedDrawer === 'Lade 2' && (  <group >
             <mesh
              name="Mdrawer"
              geometry={nodes.drawer5.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.drawer5}
              position={[-3.12, 0.3, 3.273]}
              scale={[0.15, 0.15, 0.08]}
            />
            <mesh
              name="shelve5"
              geometry={nodes.shelve5.geometry}
              material={materials.shelve5}
              position={[-3.133, 2.7, 0.541]}
              scale={[-6.938, -0.196, -5.481]}
            />
             { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-7, 2, 5]} scale={[0.08, 0.15, 0.3]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-4, 2.5, 5]} scale={[0.04, 0.08, 0.08]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-4, 1, 5.4]} scale={[0.04, 0.08, 0.07]} rotation={[Math.PI/2, 0, 0]} />)}
         
          </group>)}
          {selectedDrawer === 'Lade 3' && ( <group >
             <mesh
              name="Kdrawer"
              geometry={nodes.drawer5.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.drawer5}
              position={[-3.12, 0.8, 3.273]}
              scale={[0.15, 0.15, 0.15]}
            />
            <mesh
              name="shelve5"
              geometry={nodes.shelve5.geometry}
              material={materials.shelve5}
              position={[-3.133, 5, 0.541]}
              scale={[-6.938, -0.196, -5.481]}
            />
            { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-7, 4, 5]} scale={[0.08, 0.15, 0.3]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-4, 4, 4.9]} scale={[0.04, 0.1, 0.1]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-4, 2, 4.9]} scale={[0.035, 0.1, 0.07]} rotation={[Math.PI/2, 0, 0]} />)}
         
          </group>)}
          {selectedDrawer === 'Lade 4' &&(<group >
             <mesh
              name="Fdrawer"
              geometry={nodes.drawer5.geometry}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.drawer5}
              position={[-3.12, 1.5, 3.273]}
              scale={[0.15, 0.15, 0.23]}
            />
           <mesh name="shelve5" geometry={nodes.shelve5.geometry} material={materials.shelve5} position={[-3.133, 7.5, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve5' }} />
           { selectedHandle === 'Handgreep  5' && (  <Handle1 position={[-7, 7, 5]} scale={[0.08, 0.15, 0.34]} rotation={[0, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  1' && ( <Handle2 position={[-4, 5, 4.9]} scale={[0.04, 0.1, 0.1]} rotation={[Math.PI/2, 0, 0]}/>)}
               { selectedHandle === 'Handgreep  3' && (  <Handle3 position={[-4, 3, 4.9]} scale={[0.04, 0.09, 0.09]} rotation={[Math.PI/2, 0, 0]} />)}
         
          </group>)}

      <mesh onPointerOver={() => setShowDimensions(true)}
  onPointerOut={() => setShowDimensions(false)} name="frame" geometry={nodes.frame.geometry} material={whiteMaterial} position={[-3.079, 13.984, 0.565]} scale={[0.019, 0.017, 0.019]} userData={{ name: 'frame' }} />
      {false && ( <> <mesh name="drawer6" geometry={nodes.drawer6.geometry} material={materials.drawer6} position={[-3.12, 0.417, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer6' }} />
      <mesh name="drawer5" geometry={nodes.drawer5.geometry} material={materials.drawer5} position={[-3.12, 5.563, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer5' }} />
      <mesh name="drawer4" geometry={nodes.drawer4.geometry} material={materials.drawer4} position={[-3.12, 10.622, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer4' }} />
      <mesh name="drawer3" geometry={nodes.drawer3.geometry} material={materials.drawer3} position={[-3.12, 15.556, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer3' }} />
      <mesh name="drawer2" geometry={nodes.drawer2.geometry} material={materials.drawer2} position={[-3.12, 20.612, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer2' }} />
      <mesh name="drawer1" geometry={nodes.drawer1.geometry} material={materials.drawer1} position={[-3.12, 25.743, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer1' }} /></>)}
      {visible2component === 'drawers' && (
        <>
        <mesh name="shelve1" geometry={nodes.shelve1.geometry} material={materials.shelve1} position={[-3.133, 24.133, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve1' }} />
      <mesh name="shelve2" geometry={nodes.shelve2.geometry} material={materials.shelve2} position={[-3.133, 18.947, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve2' }} />
      <mesh name="shelve3" geometry={nodes.shelve3.geometry} material={materials.shelve3} position={[-3.133, 13.932, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve3' }} />
      
         <mesh name="drawer5" geometry={nodes.drawer5.geometry} material={materials.drawer5} position={[-3.12, 0.563, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer5' }} />
         <mesh name="shelve5" geometry={nodes.shelve5.geometry} material={materials.shelve5} position={[-3.133, 3.989, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve5' }} />
         <mesh name="drawer4" geometry={nodes.drawer4.geometry} material={materials.drawer4} position={[-3.12, 5.622, 3.273]} rotation={[Math.PI / 2, 0, 0]} scale={[0.152, 0.131, 0.123]} userData={{ name: 'drawer4' }} />
         <mesh name="shelve4" geometry={nodes.shelve4.geometry} material={materials.shelve4} position={[-3.133, 9.011, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve4' }} />  
                </>
      )}
     
      {visible2component === 'shelves' && (
    <>
      <mesh name="shelve1" geometry={nodes.shelve1.geometry} material={materials.shelve1} position={[-3.133, 24.133, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve1' }} />
      <mesh name="shelve2" geometry={nodes.shelve2.geometry} material={materials.shelve2} position={[-3.133, 18.947, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve2' }} />
      <mesh name="shelve3" geometry={nodes.shelve3.geometry} material={materials.shelve3} position={[-3.133, 13.932, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve3' }} />
      <mesh name="shelve4" geometry={nodes.shelve4.geometry} material={materials.shelve4} position={[-3.133, 9.011, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve4' }} />
      <mesh name="shelve5" geometry={nodes.shelve5.geometry} material={materials.shelve5} position={[-3.133, 3.989, 0.541]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.938, -0.196, -5.481]} userData={{ name: 'shelve5' }} />
      </>
  )}
    {showDimensions && (
  <>
  <Html position={[0.375, 20, 0.175]} center>
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
    Width: 75cm
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

useGLTF.preload('/75cmframefull.glb')
export default Mediumframe;