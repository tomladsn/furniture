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
const Smallframe = React.lazy(() => import('../../modelcomponent/new50cmFrame'));
const Mediumframe = React.lazy(() => import('../../modelcomponent/new75cmFrame'));
// const Largeframe = React.lazy(() => import('../../modelcomponent/100cmFrame'));
const Cornerframe = React.lazy(() => import('../../modelcomponent/newCornerFrame'));
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
    scale: number;
    onScaleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
const Scene: React.FC<SceneProps> = ({ selectedProduct, showDoor, showHandle, showDrawer, selectedFrameProduct, scale }) => {
    const [activeFrames, setActiveFrames] = useState<string[]>([]);
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
            <OrbitControls enableRotate={true} />
            <Floor />
                {selectedProduct === 'TV-meubel' && (
                    <Draggable>
                        <group ref={tvmeubelRef} position={[0, -4, -8]}>
                            <Tvmeubel />
                        </group>
                    </Draggable>
                )}
                {selectedProduct === 'Kledingkast' && (
                    <Draggable>
                        <group ref={wardrobeRef}>
                            <Wardrobe showDoor={showDoor} showHandle={showHandle} />
                        </group>
                    </Draggable>
                )}
                {selectedProduct === 'Kast' && (
                    <Draggable>
                        <group ref={kastRef} position={[0, -0.6, -8]}>
                            <Kast showDrawer={showDrawer} />
                        </group>
                    </Draggable>
                )}
           {/* <Draggable>
           <Mdrawer /></Draggable>
           <Draggable> <Cdrawer /> </Draggable> */}           {/* <Draggable><Fdrawer /></Draggable>
           <Draggable><Kdrawer /></Draggable> */}

          {activeFrames.map((frame, index) => {
                    //            <Draggable>
                    //            <Largeframe />
                    //    </Draggable>
    if (frame === 'Corner (111cm)') {
        return (
            <group
                key={frame}
                ref={CornerframeRef}
                position={[10.1, -1.11, -8.2]} // Adjusted position to place them beside each other
                rotation={[0, Math.PI*2, 0]}
               
                scale={[2, 1.55, 1.1]}
            >
                <Cornerframe />
            </group>
        );
    }

    if (frame === 'Frame (75x175 cm)') {
        return (
            <Draggable key={frame}>
                <group
                    ref={MediumframeRef}
                    position={[5, -1.11, -9]} // Adjusted position to place them beside each other
                    rotation={[0, Math.PI*2, 0]}
                    scale={[2, 1.55, 1.1]}
                >
                    <Mediumframe />
                </group>
            </Draggable>
        );
    }

    if (frame === 'Frame (50x175 cm)') {
        return (
            <Draggable key={frame}>
                <group
        ref={SmallframeRef}
        position={[1 / scale, -1.11 / scale, -9.2 / scale]} // Adjusted to compensate for scaling
        rotation={[0, Math.PI * 2, 0]}
        scale={[
          originalScale[0] * scale,
          originalScale[1] * scale,
          originalScale[2] * scale
        ]}
      >
                    <Smallframe />
                </group>
            </Draggable>
        );
    }


    return null;
})}
        </Canvas>
    );
};

export default Scene;
