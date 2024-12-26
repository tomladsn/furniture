import React, { useEffect, useRef, Suspense, useState, useCallback, forwardRef } from 'react';
import { Canvas, useThree, extend, Vector3 } from '@react-three/fiber';
import { OrbitControls, Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import CameraHelperComponent from './camerahelper'
import Draggable from './draggable';
const Floor = React.lazy(() => import('../../modelcomponent/floor'))
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
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
interface Frame {
  id: number;
  type: string;
  scale: [number, number, number];
  position: [number, number, number];
  rotation?: any
}
interface SceneProps {
  handle50: any;
  frameInstances: any;
  onModelClick: any;
  heightScale: number;
  onDeleteFrame: any;
  isRackSelected: any;
  isRailSelected: any;
  isDoorSelected: any;
  setIsFrame2CustomisationVisible: any;
  setIsFrame3CustomisationVisible: any;
  title: string;
  selectedProduct: string | null;
  showDoor: boolean;
  showHandle: boolean;
  showDrawer: boolean;
  selectedFrameProduct: string | null;
  selectedDrawer: any;
  selectedHandle: any;
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  width50Scale: number;
  selectedMaterialImage: any
  setScaleY: number;
  width75Scale: number;
  materialTexture: any;
  positionX: any;
  numberOfFrames: any;
  numberOf75Frames:any;
  railPosition: any;
  position75X: any;
  width50: any;
  positionY: any;
  shelfClick: any;
  selectedFrameId: Number | null;
  shelfPosition: any;
  onScaleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  visibleComponent: 'shelves' | 'drawers' | null;
  visible2component: "shelves" | "drawers" | null;
  visible3component: "shelves" | "drawers" | null;
  shelfCount: any;
  frames: Frame[];
  rotationFrame: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFrames: React.Dispatch<React.SetStateAction<Frame[]>>;
  frameId: number;
  depthScale: number;
  setPlinthVisible: any;
}
const Scene = forwardRef<THREE.Group, SceneProps>(({
  setPlinthVisible,
  shelfClick,
  rotationFrame,
  numberOfFrames,
  numberOf75Frames,
  railPosition,
  shelfPosition,
  shelfCount,
  depthScale,
  positionX,
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
  positionY,
  position75X,
  selectedFrameId,
  materialTexture,
  onModelClick,
  isRackSelected,
  isRailSelected,
  isDoorSelected,
  heightScale,
  width50
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
      <group ref={ref}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <PerspectiveCamera
          makeDefault
          position={[-30, 3, 4]}  // Adjust the position as needed
          fov={40}
          near={1}
          far={10000}

        />
        <OrbitControls enableRotate={!isDragging} enablePan={true} enableZoom={true} minZoom={100} maxZoom={500} />
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
                      railPosition={railPosition}
                      shelfCount={shelfCount}
                      shelfPosition={shelfPosition}
                      materialTexture={materialTexture}
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
        onClick={() => {
          onModelClick(frame.id);
          setIsFrame2CustomisationVisible(true)}}
        ref={MediumframeRef}
        position={frame.position}
        rotation={[0, Math.PI * 2, 0]}
        scale={[
          originalScale[0] * scaleX,
          originalScale[1] * scaleY,
          originalScale[2] * scaleZ
        ]}
      >
        <Mediumframe
         setPlinthVisible={setPlinthVisible}
         shelfClick={shelfClick}
          railPosition={railPosition}
          shelfPosition={shelfPosition}
          shelfCount={shelfCount}
          position75X={position75X}
          materialTexture={materialTexture}
          selectedMaterialImage={selectedMaterialImage}
          depthScale={depthScale}
          width75Scale={width75Scale}
          heightScale={heightScale}
          scaleY={scaleY}
          selectedHandle={selectedHandle}
          isRackSelected={isRackSelected}
          isRailSelected={isRailSelected}
          isDoorSelected={isDoorSelected}
          visible2component={visible2component}
          selectedDrawer={selectedDrawer} frameId={0}
        />
      </group>
    );
  }
  return null;
})}

{frames.map((frame) => (
  frame.type === 'Frame (50x175 cm)' && (
    <group
      key={frame.id} // Use frame.id for a unique key
      position={frame.position}
      rotation={[0, Math.PI * 2, 0]} // Ensure rotation is applied if available
      scale={[2 * frame.scale[0], 1.55 * frame.scale[1], 1.1 * frame.scale[2]]}
      onClick={() => onModelClick(frame.id)}
    >
      <Smallframe
       setPlinthVisible={setPlinthVisible}
        shelfClick={shelfClick}
        railPosition={railPosition}
        shelfPosition={shelfPosition}
        shelfCount={shelfCount}
        positionY={frame.positionY}
        positionX={frame.position[0]} // Pass individual frame's positionX
        rotationY={frame.rotation ? frame.rotation[1] : 0}
        selectedMaterialImage={selectedMaterialImage}
        depthScale={depthScale}
        width50Scale={width50Scale}
        heightScale={heightScale}
        scaleY={frame.scale[1]} // Pass unique Y scale
        selectedHandle={selectedHandle}
        visibleComponent={visibleComponent}
        isRackSelected={isRackSelected}
        isRailSelected={isRailSelected}
        isDoorSelected={isDoorSelected}
        selectedDrawer={selectedDrawer}
        materialTexture={materialTexture}
        frameId={frame.id}
        updateFrameAttributes={function (frameId: number, attribute: 'hasDrawer' | 'hasRail' | 'hasShelf', value: boolean): void {
          throw new Error('Function not implemented.');
        } } width50={undefined}      />
    </group>
  )
))}
      </group>
    </Canvas>
  );
});


export default Scene;