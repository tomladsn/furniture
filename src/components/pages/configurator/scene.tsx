import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import Draggable from './draggable';

const Floor = React.lazy(() => import('../../modelcomponent/floor') )
const Tvmeubel = React.lazy(() => import('../../modelcomponent/tv-set'));
const Wardrobe = React.lazy(() => import('../../modelcomponent/wardrobe'));
const Kast = React.lazy(() => import('../../modelcomponent/kast'));
const Smallframe = React.lazy(() => import('../../modelcomponent/50cmWideframe1'));
const Mediumframe = React.lazy(() => import('../../modelcomponent/75cmFrame'));
const Largeframe = React.lazy(() => import('../../modelcomponent/100cmFrame'));
const Cornerframe = React.lazy(() => import('../../modelcomponent/cornerFrame'));
const Fdrawer = React.lazy(() => import('../../modelcomponent/Fdrawer'));
const Mdrawer = React.lazy(() => import('../../modelcomponent/Mdrawer'));
const Kdrawer = React.lazy(() => import('../../modelcomponent/Kdrawer'));
const Cdrawer = React.lazy(() => import('../../modelcomponent/Cdrawer'));

interface SceneProps {
    selectedProduct: string | null;
    showDoor: boolean;
    showHandle: boolean;
    showDrawer: boolean;
    selectedFrameProduct: string | null;
}

const Scene: React.FC<SceneProps> = ({ selectedProduct, showDoor, showHandle, showDrawer, selectedFrameProduct }) => {
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

    const calculatePosition = (index: number): [number, number, number] => [index * 3, -1.15, -8];

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
    if (frame === 'Corner (111cm)') {
        return (
            <group
                key={frame}
                ref={CornerframeRef}
                position={[7.3, -1.95, -8.1]}
                rotation={[0, 6 * Math.PI / 2, 0]}
                scale={[1, 1.5, 1.2]}
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
                    position={[index * 3, -1.15, -8]} // Adjusted position to place them beside each other
                    rotation={[0, Math.PI, 0]}
                    scale={[2, 2.7, 1.2]}
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
                    position={[index * 3, -2.5, -8.4]} // Adjusted position to place them beside each other
                    rotation={[0, Math.PI, 0]}
                    scale={[2, 2.7, 1.2]}
                >
                    <Smallframe />
                </group>
            </Draggable>
        );
    }

    if (frame === 'Frame (100x175cm)') {
        return (
            <Draggable key={frame}>
                <group
                    ref={LargeframeRef}
                    position={[index * 3, -1.15, -8]} // Adjusted position to place them beside each other
                    rotation={[0, Math.PI, 0]}
                    scale={[2, 2.7, 1.2]}
                >
                    <Largeframe />
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
