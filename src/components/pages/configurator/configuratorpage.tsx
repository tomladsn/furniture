import classNames from 'classnames';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import { Navbar } from '../../navbar/navbar';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuFrame } from 'react-icons/lu';
import { MdDoorSliding, MdShelves } from 'react-icons/md';
import { GiDoorHandle, GiClothesline, GiRunningShoe } from 'react-icons/gi';
import { VscLayoutPanelCenter } from 'react-icons/vsc';
import { IoIosArrowDropright } from 'react-icons/io';
import { Floor } from '../../modelcomponent/floor'
import { Tvmeubel } from '../../modelcomponent/tv-set';
import { Wardrobe } from '../../modelcomponent/wardrobe';
import { Kast } from '../../modelcomponent/kast';
import  Draggable  from './draggable'
export interface ConfiguratorpageProps {
    className?: string;
}
interface ModelProps {
    position: [number, number, number];
  }   

  const products = [
    {
      src: '/product image/Garderobe.png',
      name: 'Garderobe',
    },
    {
      src: '/product image/Tvmeubel.svg',
      name: 'TV-meubel',
    },
    {
      src: '/product image/Image 152Kast.png',
      name: 'Kast',
    },
    // Add more products as needed
  ];
export const Configuratorpage = ({ className }: ConfiguratorpageProps) => {
    const [showDoor, setShowDoor] = useState(true) 
    const [showDrawer, setShowDrawer] = useState(true) 
    const [showHandle, setShowHandle] = useState(false) 
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const handleToggle = () => {
        setShowHandle(!showHandle); // Toggle the showHandle state
      };
      const kastShowDrawer = () => {
        setShowDrawer(!showDrawer); 
      };

      const [currentIndex, setCurrentIndex] = useState(0);

      const handleNext = () => {
        if (currentIndex < products.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };
      const handleProductClick = (productName: string) => {
        setSelectedProduct(productName);
      };
      useEffect(() => {
        const preventDefault = (e: WheelEvent) => {
          e.preventDefault();
        };
    
        const canvasElement = document.querySelector(`.${styles.canva}`);
        if (canvasElement) {
          canvasElement.addEventListener('wheel', preventDefault, { passive: false });
        }
    
        return () => {
          if (canvasElement) {
            canvasElement.removeEventListener('wheel', preventDefault);
          }
        };
      }, []);
    return (
        <div className={classNames(styles.root, className)}>
        
            <div
                className={styles['Container90']}
            >
                <img
                onClick={handlePrev}
                    className={styles['Chevron']} 
                    src="/product image/arrowleft.svg"
                />
      <ul className={styles['slider']}  style={{ transform: `translateX(-${currentIndex * 100}%)`  }}>
        {products.map((product, index) => (
          <li key={index} className={styles.slide} onClick={() => handleProductClick(product.name)} >
            <img className={styles.productImage} src={product.src} alt={product.name} />
            <p className={styles.productName}>{product.name}</p>
          </li>
        ))}
      </ul>
                <img
                    className={styles['Chevron-left']}
                    src="/product image/arrowleft.svg"
                    onClick={handleNext}
                />
            </div>
            <div className={styles['configurator-section']}>

                <div className={styles['configurator-listing']}>

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
                                        fontFamily: 'Arial',
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
                        </div><div className={styles['component-config']}>
                                <div className={styles['components-selection']}>
                                    <MdDoorSliding className={styles['door-icon']} />
                                    <p className={styles.door}>Door</p>
                                    <IoIosArrowDropright
                                        style={{
                                            width: '30px',
                                            height: '20px',
                                            position: 'relative',
                                            left: '200px',
                                        }} />
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
                                        }} />
                                </div>
                                <div className={styles['components-selection']} onClick={handleToggle} >
                                    <GiDoorHandle className={styles['handle-icon']} />
                                    <p className={styles.door}>Handle</p>
                                    <IoIosArrowDropright
                                        style={{
                                            width: '30px',
                                            height: '20px',
                                            position: 'relative',
                                            left: '200px',
                                        }} />
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
                                        }} />
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
                                        }} />
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
                                        }} />
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
                                        }} />
                                </div>
                            </div>
       </div>
                <div className={styles['canva-div']}>
            <Canvas className={styles['canva']}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <OrbitControls 
            enableRotate={false}/>
                <Floor />
                {selectedProduct === 'TV-meubel' && (
        <Draggable>
          <Tvmeubel position={[0, -4, -8]} />
        </Draggable>
      )}
                  {selectedProduct === 'Garderobe' && (
        <Draggable>
          <Wardrobe showDoor={showDoor} showHandle={showHandle} />
        </Draggable>
      )}
                {selectedProduct === 'Kast' && (
        <Draggable>
          <Kast  showDrawer={showDrawer} position={[0, -0.6, -8]} />
        </Draggable>
      )}

      </Canvas>
    </div>
            </div>
        </div>
    );
};
