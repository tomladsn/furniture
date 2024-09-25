import React, {useEffect,useRef , Suspense, useState, useCallback, forwardRef } from 'react';
import { Canvas, useThree,extend, Vector3  } from '@react-three/fiber';
import { OrbitControls, Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import CameraHelperComponent from './camerahelper'
import Draggable from './draggable';
const Floor = React.lazy(() => import('../../modelcomponent/floor') )
const Tvmeubel = React.lazy(() => import('../../modelcomponent/tv-set'));
const Wardrobe = React.lazy(() => import('../../modelcomponent/wardrobe'));
const Kast = React.lazy(() => import('../../modelcomponent/kast'));
const Smallframe = React.lazy(() => import('../../modelcomponent/50cmframewithdrawer'));
const Mediumframe = React.lazy(() => import('../../modelcomponent/75cmfullframe'));
// const Largeframe = React.lazy(() => import('../../modelcomponent/100cmFrame'));
const Cornerframe = React.lazy(() => import('../../modelcomponent/cornerfullframe'));
const Fdrawer = React.lazy(() => import('../../modelcomponent/Fdrawer'));
const Mdrawer = React.lazy(() => import('../../modelcomponent/Mdrawer'));
const Kdrawer = React.lazy(() => import('../../modelcomponent/Kdrawer'));
const Cdrawer = React.lazy(() => import('../../modelcomponent/Cdrawer'));
const clotherail = React.lazy(() => import('../../modelcomponent/clotherail'));
import { Physics } from '@react-three/cannon';
interface SceneProps {
  handle50: any;
  frameInstances: any;
  onModelClick: any;
  heightScale: number;
  onDeleteFrame:any;
  isRackSelected: any;
  isRailSelected: any;
  isDoorSelected:any;
  setIsFrame2CustomisationVisible: any;
  setIsFrame3CustomisationVisible: any;
    title: string;
    selectedProduct: string | null;
    showDoor: boolean;
    showHandle: boolean;
    showDrawer: boolean;
    selectedFrameProduct: string | null;
    selectedDrawer: string | null;
    selectedHandle:any;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    width50Scale: number;
    selectedMaterialImage: any
    setScaleY: number;
    width75Scale: number;
    onScaleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    visibleComponent: 'shelves' | 'drawers' | null;
    visible2component: "shelves" | "drawers" | null;
    visible3component: "shelves" | "drawers" | null;
    frames: Array<{
      position: any; id: number, type: string, scale: [number, number, number]
}>;

    setFrames: React.Dispatch<React.SetStateAction<Array<{id: number, type: string, scale: [number, number, number]}>>>;
    frameId: number;  
    depthScale: number;
}
const Scene = forwardRef<THREE.Group, SceneProps>(({
  depthScale,
  handle50,
  setFrames,
  selectedMaterialImage,
  width75Scale,
  frameInstances,
  onDeleteFrame,
  width50Scale,
  selectedHandle,
  selectedDrawer,
  setIsFrame3CustomisationVisible,
  setIsFrame2CustomisationVisible,
  selectedProduct,
  showDoor,
  showHandle,
  showDrawer,
  selectedFrameProduct,
  visibleComponent,
  visible2component,
  visible3component,
  frames,
  onModelClick,
  isRackSelected,
  isRailSelected,
  isDoorSelected,
  heightScale
}, ref) => {
    const [activeFrames, setActiveFrames] = useState<string[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    
    const wardrobeRef = useRef<THREE.Group>(null);
    const tvmeubelRef = useRef<THREE.Group>(null);
    const kastRef = useRef<THREE.Group>(null);
    const SmallframeRef = useRef<THREE.Group>(null);
    const MediumframeRef = useRef<THREE.Group>(null);
    const LargeframeRef = useRef<THREE.Group>(null);
    const CornerframeRef = useRef<THREE.Group>(null);
    const MdrawerRef = useRef<THREE.Group>(null);
    const KdrawerRef = useRef<THREE.Group>(null);
    const FdrawerRef = useRef<THREE.Group>(null);
    const CdrawerRef = useRef<THREE.Group>(null);
    const [globalScale, setGlobalScale] = useState(10);
    const scaleX = 1;
const scaleY = 1;
const scaleZ = 1;
const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([-5, 0, -4]);
    useEffect(() => {
        // Define the event handler within the useEffect scope
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
        };

        // Query the canvas element
        const canvasElement = document.querySelector(`.${styles['canva']}`);
        if (canvasElement) {
            // Add the event listener with type assertion
            canvasElement.addEventListener('wheel', handleWheel as EventListener, { passive: false });
        }

        // Cleanup function to remove the event listener
        return () => {
            if (canvasElement) {
                // Remove the event listener with type assertion
                canvasElement.removeEventListener('wheel', handleWheel as EventListener);
            }
        };
    }, []);
    useEffect(() => {
        if (selectedFrameProduct && !activeFrames.includes(selectedFrameProduct)) {
            setActiveFrames(prev => [...prev, selectedFrameProduct]);
        }
    }, [selectedFrameProduct]);
    return (
      <Canvas className={styles['canva']}>
        <group   ref={ref}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <PerspectiveCamera
          makeDefault
          position={[0, 1, 7]}  // Adjust the position as needed
          fov={40}
          near={1}
          far={10000}
          
        />
      <OrbitControls enableRotate={!isDragging}  enablePan={true}   enableZoom={true}  minZoom={100}   maxZoom={500}             />
      <Physics>
        <Floor />
        </Physics>
        {selectedProduct === 'TV-meubel' && (
          <Draggable onDragStart={() => setIsDragging(true)} onDragEnd={() => setIsDragging(false)}>
            <group ref={tvmeubelRef} position={[0, -4, -8]}>
              <Tvmeubel />
            </group>
          </Draggable>
        )}
        {selectedProduct === 'Kledingkast' && (
          <Draggable onDragStart={() => setIsDragging(true)} onDragEnd={() => setIsDragging(false)}>
            <group ref={wardrobeRef}>
              <Wardrobe showDoor={showDoor} showHandle={showHandle} />
            </group>
          </Draggable>
        )}
        {selectedProduct === 'Kast' && (
          <Draggable onDragStart={() => setIsDragging(true)} onDragEnd={() => setIsDragging(false)}>
            <group ref={kastRef} position={[0, -0.6, -8]}>
              <Kast showDrawer={showDrawer} />
            </group>
          </Draggable>
        )}
      {activeFrames.map((frame, index) => {
  
  if (frame === 'Hoek (111cm) ') {
    const originalScale = [1, 1.55, 1.1];
    const baseY = -1.11;
    
    return (
      <Physics>
      {frames.map((frame, index) => (
        <group
        key={`hoek-frame-${index}`} // Add a unique key for each group
          onClick={() => setIsFrame3CustomisationVisible(true)}
          ref={CornerframeRef}
          position={[
            10.1 / scaleX,
            baseY + (scaleY - 1) * Math.abs(baseY),
            -8.2 / scaleZ
          ]}
          rotation={[0, Math.PI * 2, 0]}
          scale={[
            originalScale[0] * scaleX,
            originalScale[1] * scaleY,
            originalScale[2] * scaleZ
          ]}
        >
          <Cornerframe
            width75Scale={width75Scale}
            depthScale={depthScale}
            heightScale={heightScale}
            selectedHandle={selectedHandle}
            scaleY={scaleY}
            isRackSelected={isRackSelected}
            isRailSelected={isRailSelected}
            isDoorSelected={isDoorSelected}
            visible3Component={visible3component}
          />
        </group>
      ))}
    </Physics>
    );
  }
  return null;
})}


{frames.map((frame) => {
  if (frame.type === 'Frame (75x175 cm)') {
    const originalScale = [2, 1.55, 1.1];
    const baseY = -1.11;

    return (

        <group
        key={frame.id}
          onClick={() => setIsFrame2CustomisationVisible(true)}
          ref={MediumframeRef}
          position={[
            5 / scaleX,
            baseY + (scaleY - 1) * Math.abs(baseY),
            -9 / scaleZ
          ]}
          rotation={[0, Math.PI * 2, 0]}
          scale={[
            originalScale[0] * scaleX,
            originalScale[1] * scaleY,
            originalScale[2] * scaleZ
          ]}
        >
          <Mediumframe 
          selectedMaterialImage={selectedMaterialImage} 
           depthScale= { depthScale}
          width75Scale = {width75Scale}
          heightScale={heightScale}
            scaleY={scaleY}
            selectedHandle={selectedHandle}
            isRackSelected={isRackSelected}
            isRailSelected={isRailSelected}
            isDoorSelected={isDoorSelected}
            visible2component={visible2component}
            selectedDrawer={selectedDrawer}
          />
        </group>

    );
  }
  return null;
})}
{frames.map((frame) => {
  if (frame.type === 'Frame (50x175 cm)') {
    const originalScale = [2, 1.55, 1.1];
    const baseY = frame.position[1];  // Use Y position from frame

    return (
      <Draggable
        key={frame.id}  // Unique key for each frame
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <group
          ref={ref}
          onClick={onModelClick}
          position={frame.position}  // Use frame's unique position
          rotation={[0, Math.PI * 2, 0]}
          scale={[
            originalScale[0] * frame.scale[0],  // Scale along X-axis
            originalScale[1] * frame.scale[1],  // Scale along Y-axis
            originalScale[2] * frame.scale[2],  // Scale along Z-axis
          ]}
        >
          <Smallframe
          selectedMaterialImage={selectedMaterialImage} 
           depthScale= { depthScale}
            width50Scale={width50Scale}
            heightScale={heightScale}
            scaleY={frame.scale[1]} // Pass unique Y scale
            selectedHandle={selectedHandle}
            visibleComponent={visibleComponent}
            isRackSelected={isRackSelected}
            isRailSelected={isRailSelected}
            isDoorSelected={isDoorSelected}
            selectedDrawer={selectedDrawer}
            frameId={frame.id}    />
        </group>
      </Draggable>
    );
  }
  return null;
})}

        </group>
      </Canvas>
    );
  });


export default Scene;
