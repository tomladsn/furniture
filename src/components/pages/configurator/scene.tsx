import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
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
interface SceneProps {
    title: string;
    selectedProduct: string | null;
    showDoor: boolean;
    showHandle: boolean;
    showDrawer: boolean;
    selectedFrameProduct: string | null;
    selectedDrawer: string | null
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    onScaleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    visibleComponent: 'shelves' | 'drawers' | null;
    visible2component: "shelves" | "drawers" | null;
    visible3component: "shelves" | "drawers" | null;
    frames: Array<{id: number, type: string, scale: [number, number, number]}>;
    setFrames: React.Dispatch<React.SetStateAction<Array<{id: number, type: string, scale: [number, number, number]}>>>;
    frameId: number
    
}
const CustomCamera = () => {
    const { camera } = useThree();

    useEffect(() => {
        if (camera instanceof THREE.PerspectiveCamera) {
            camera.position.set(3, 8, 4);
            camera.fov = 50; // Set the field of view
            camera.updateProjectionMatrix();
        }
    }, [camera]);

    return null;
};
const Scene: React.FC<SceneProps> = ({ selectedProduct, showDoor, showHandle, showDrawer, selectedFrameProduct, scaleX, scaleY, scaleZ,  visibleComponent, visible2component, visible3component, selectedDrawer, frames, setFrames }) => {
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
    const originalScale = [2, 1.55, 1.1];
    return (
      <Canvas className={styles['canva']}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <OrbitControls enableRotate={!isDragging} />
        <Floor />
        {selectedProduct === 'TV-meubel' && (
          <Draggable>
            <group onPointerDown={() => setIsDragging(true)}
                  onPointerUp={() => setIsDragging(false)}
                  ref={tvmeubelRef} position={[0, -4, -8]}>
              <Tvmeubel />
            </group>
          </Draggable>
        )}
        {selectedProduct === 'Kledingkast' && (
          <Draggable>
            <group onPointerDown={() => setIsDragging(true)}
                  onPointerUp={() => setIsDragging(false)} ref={wardrobeRef}>
              <Wardrobe showDoor={showDoor} showHandle={showHandle} />
            </group>
          </Draggable>
        )}
        {selectedProduct === 'Kast' && (
          <Draggable>
            <group onPointerDown={() => setIsDragging(true)}
                  onPointerUp={() => setIsDragging(false)} ref={kastRef} position={[0, -0.6, -8]}>
              <Kast showDrawer={showDrawer} />
            </group>
          </Draggable>
        )}
        {activeFrames.map((frame, index) => {
          if (frame === 'Corner (111cm)') {
            const originalScale = [1, 1.55, 1.1];
            const baseY = -1.11;
            
            return (
              <group
              onPointerDown={() => setIsDragging(true)}
                  onPointerUp={() => setIsDragging(false)}
                key={frame}
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
                <Cornerframe visible3Component={visible3component} />
              </group>
            );
          }
          
          if (frame === 'Frame (75x175 cm)') {
            const originalScale = [2, 1.55, 1.1];
            const baseY = -1.11;
    
            return (
              <Draggable

            >
                <group
                onPointerDown={() => setIsDragging(true)}
                onPointerUp={() => setIsDragging(false)}
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
                  <Mediumframe visible2component={visible2component} selectedDrawer={selectedDrawer}/>
                </group>
              </Draggable>
            );
          }
          return null;
        })}
        {frames.map((frame) => {
          if (frame.type === 'Frame (50x175 cm)') {
            const originalScale = [2, 1.55, 1.1];
            const baseY = -1.11;
        
            return (
              <Draggable key={frame.id}>
                <group
                  onPointerDown={() => setIsDragging(true)}
                  onPointerUp={() => setIsDragging(false)}
                  position={[
                    1 / frame.scale[0],
                    baseY + (frame.scale[1] - 1) * Math.abs(baseY),
                    -9.2 / frame.scale[2]
                  ]}
                  rotation={[0, Math.PI * 2, 0]}
                  scale={[
                    originalScale[0] * frame.scale[0],
                    originalScale[1] * frame.scale[1],
                    originalScale[2] * frame.scale[2]
                  ]}
                >
                  <Smallframe
                    visibleComponent={visibleComponent}
                    selectedDrawer={selectedDrawer}
                    frameId={frame.id}
                    setFrames={setFrames}
                  />
                </group>
              </Draggable>
            );
          }
          return null;
        })}
      </Canvas>
    );
  }

export default Scene;
