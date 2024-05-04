import classNames from 'classnames';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import { Navbar } from '../../navbar/navbar';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuFrame } from 'react-icons/lu';
import { MdDoorSliding, MdShelves } from 'react-icons/md';
import { GiDoorHandle, GiClothesline, GiRunningShoe } from 'react-icons/gi';
import { VscLayoutPanelCenter } from 'react-icons/vsc';
import { IoIosArrowDropright } from 'react-icons/io';
export interface ConfiguratorpageProps {
    className?: string;
}

interface TorusKnotProps {
    radius?: number;
    tube?: number;
    tubularSegments?: number;
    radialSegments?: number;
    p?: number;
    q?: number;
    position?: [number, number, number]; 
  }
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
// Extend THREE with TorusKnotGeometry
extend({ TorusKnotGeometry: THREE.TorusKnotGeometry });

function TorusKnot(props: TorusKnotProps) {
    const mesh = useRef<THREE.Mesh>(null); 

  // Rotate mesh every frame
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <torusKnotGeometry args={[10.184, 5.8608, 220, 16, 9, 12]} />
      <meshBasicMaterial color={0xffff00} />
    </mesh>
  );
}

function Scene() {
     const { camera } = useThree();

    // Adjust camera FOV
    camera.zoom = 0.005; // Adjust as needed// 
    camera.updateProjectionMatrix(); // Update the camera's projection matrix after changing its properties

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <TorusKnot position={[-1.2, 0, 0]} />
    </>
  );
}
export const Configuratorpage = ({ className }: ConfiguratorpageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
        
            <div
                className={styles['Container90']}
            >
                <img
                    className="Chevron"
                    style={{
                        width: '66px',
                        height: '45px',
                        position: 'relative',
                        top: '30px',
                    }}
                    src="/product image/arrowleft.svg"
                />

                <div className={styles['first-slide-block']}>
                    <img
                        className="Image50"
                        style={{ borderRadius: 2, height: '110px', width: '130px' }}
                        src="/product image/Garderobe.png"
                    />
                    <p
                        className="Lamp"
                        style={{
                            color: 'black',
                            fontSize: '24px',
                            fontFamily: 'Inria Serif',
                            fontWeight: 400,
                            overflowWrap: 'break-word',
                            position: 'relative',
                            bottom: '70px',
                            left: '120px',
                        }}
                    >
                        Garderobe
                    </p>
                </div>
                <div style={{ position: 'absolute', left: '40vw' }} className="tv-meubel-div">
                    <img
                        className="meubel"
                        style={{ width: '120px', height: '112px' }}
                        src="/product image/Tvmeubel.svg"
                    />
                    <p
                        className="LivingRoom"
                        style={{
                            color: 'black',
                            fontSize: '24px',
                            fontFamily: 'Inria Serif',
                            fontWeight: 400,
                            overflowWrap: 'break-word',
                            position: 'relative',
                            left: '130px',
                            bottom: '70px',
                        }}
                    >
                        TV-meubel
                    </p>
                </div>
                <div
                    style={{ position: 'absolute', left: '75vw', height: '120px' }}
                    className="Kast"
                >
                    <img
                        className="Image51"
                        style={{
                            width: '130px',
                            height: '112px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: 2,
                        }}
                        src="/product image/Kast.png"
                    />
                    <p
                        className="NewNow"
                        style={{
                            color: 'black',
                            fontSize: '24px',
                            fontFamily: 'Inria Serif',
                            fontWeight: 400,
                            overflowWrap: 'break-word',
                            position: 'relative',
                            left: '140px',
                            bottom: '70px',
                            width: 50
                        }}
                    >
                        Kast
                    </p>
                </div>
                <img
                    className="ChevronLeft"
                    style={{
                        width: 42,
                        position: 'absolute',
                        left: '98vw',
                        top: 75,
                        height: 38,
                        transform: 'rotate(180deg)',
                        transformOrigin: '0px 0px',
                    }}
                    src="/product image/arrowleft.svg"
                />
            </div>
            <div className={styles['configurator-section']}>
                <div className={styles['canva-div']}>
                <Canvas
      style={{ background: 'black', width: '70vw' }} // Set the background color to black
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Scene />
    </Canvas>
                </div>
                <div style={{
                       
                    
                    }} className={styles['configurator-listing']}>
                    <div
                        className="Container110"
                        style={{
                            width: '400px',
                            height: 79,
                            position: 'relative',
                            background: 'rgba(243, 243, 243, 1)',
                            boxShadow: '0px 0px 1px rgba(23, 26, 31, 0.19)',
                        }}
                    >
                        <div
                            className="Textbox7"
                            style={{
                                width: 153,
                                height: 51,
                                left: 148,
                                top: 8.11,
                                position: 'absolute',
                                background: '#FFFFFF',
                                borderRadius: 2,
                                border: '1px #9095A1 solid',
                            }}
                        >
                            <p
                                className="Finalise"
                                style={{
                                    width: 82,
                                    left: 36,
                                    top: 12,
                                    position: 'absolute',
                                    color: '#171A1F',
                                    fontSize: 18,
                                    fontFamily: 'Inria Serif',
                                    fontWeight: '400',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Next
                            </p>
                            <div
                                className="ArrowRight"
                                style={{
                                    width: 24,
                                    height: 24,
                                    left: 110,
                                    top: 14,
                                    position: 'absolute',
                                }}
                            >
                                <FaArrowRightLong style={{ width: '50px', height: '20px' }} />
                            </div>
                        </div>
                        <div
                            className="Menu2"
                            style={{
                                width: 20,
                                height: 20,
                                left: 358,
                                top: 29,
                                position: 'absolute',
                            }}
                        >
                            <div
                                className="Vector"
                                style={{
                                    width: 9,
                                    height: 2,
                                    left: 2,
                                    top: 14,
                                    position: 'absolute',
                                    background: '#171A1F',
                                }}
                            ></div>
                            <div
                                className="Vector"
                                style={{
                                    width: 9,
                                    height: 2,
                                    left: 9,
                                    top: 4.02,
                                    position: 'absolute',
                                    background: '#171A1F',
                                }}
                            ></div>
                            <div
                                className="Vector"
                                style={{
                                    width: 16,
                                    height: 2,
                                    left: 2,
                                    top: 9,
                                    position: 'absolute',
                                    background: '#171A1F',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className={styles['component-config']}>
                        <div className={styles['components-selection']}>
                            <MdDoorSliding className={styles['door-icon']} />
                            <p className={styles.door}>Door</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }}
                            />
                        </div>
                        <div className={styles['components-selection']}>
                            <LuFrame className={styles['frame-icon']} />
                            <p className={styles.door}>Frame</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }}
                            />
                        </div>
                        <div className={styles['components-selection']}>
                            <GiDoorHandle className={styles['handle-icon']} />
                            <p className={styles.door}>Handle</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }}
                            />
                        </div>
                        <div className={styles['components-selection']}>
                            <VscLayoutPanelCenter className={styles['drawer-icon']} />
                            <p className={styles.door}>Drawer</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }}
                            />
                        </div>
                        <div className={styles['components-selection']}>
                            <GiClothesline className={styles['rail-icon']} />
                            <p className={styles.door}>Clothes Rail</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }}
                            />
                        </div>
                        <div className={styles['components-selection']}>
                            <MdShelves className={styles['shelve-icon']} />
                            <p className={styles.door}>Shelves</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }}
                            />
                        </div>
                        <div className={styles['components-selection']}>
                            <GiRunningShoe className={styles['shoe-icon']} />
                            <p className={styles.door}>door</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
