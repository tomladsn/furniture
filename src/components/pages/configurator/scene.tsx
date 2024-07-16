import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import Preloader from './props/predator';
import styles from './configuratorpage.module.scss';
import Draggable from './draggable';

const Floor = React.lazy(() => import('../../modelcomponent/floor') )
const Tvmeubel = React.lazy(() => import('../../modelcomponent/tv-set'));
const Wardrobe = React.lazy(() => import('../../modelcomponent/wardrobe'));
const Kast = React.lazy(() => import('../../modelcomponent/kast'));

interface SceneProps {
    selectedProduct: string | null;
    showDoor: boolean;
    showHandle: boolean;
    showDrawer: boolean;
}

const Scene: React.FC<SceneProps> = ({ selectedProduct, showDoor, showHandle, showDrawer }) => {
    const wardrobeRef = useRef<THREE.Group>(null);
    const tvmeubelRef = useRef<THREE.Group>(null);
    const kastRef = useRef<THREE.Group>(null);

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

    return (
        <Canvas className={styles['canva']}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <OrbitControls enableRotate={false} />
            <Floor />
                {selectedProduct === 'TV-meubel' && (
                    <Draggable>
                        <group ref={tvmeubelRef} position={[0, -4, -8]}>
                            <Tvmeubel />
                        </group>
                    </Draggable>
                )}
                {selectedProduct === 'Garderobe' && (
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

        </Canvas>
    );
};

export default Scene;
