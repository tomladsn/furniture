import classNames from 'classnames';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import { useRef, useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuFrame } from 'react-icons/lu';
import { MdDoorSliding, MdShelves } from 'react-icons/md';
import { GiDoorHandle, GiClothesline, GiRunningShoe } from 'react-icons/gi';
import { VscLayoutPanelCenter } from 'react-icons/vsc';
import { IoIosArrowDropright } from 'react-icons/io';
import cardData from './props/card-prop/card-data.json';
import Card from './props/card-prop/subcards';
import Scene from './scene';
export interface ConfiguratorpageProps {
    className?: string;
}
interface ComponentSelectionProps {
    title: string;
    icon: React.ReactNode;
    category: string;
    isVisible: boolean;
    onToggleVisibility: () => void;
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
    const [isFrameVisible, setFrameVisible] = useState(false);
    const [isDoorVisible, setDoorVisible] = useState(false);
    const [isHandleComponentVisible, setHandleComponentVisible] = useState(false);


    const toggleFrameVisibility = () => {
        setFrameVisible(!isFrameVisible);
    };
    const toggleDoorVisibility = () => {
        setDoorVisible(!isDoorVisible);
    };
    const toggleHandleVisibility = () => {
        setHandleComponentVisible(!isHandleComponentVisible);
    };
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
                <ul className={styles['slider']} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
                    </div>
                    <div className={styles['component-config']} onClick={toggleDoorVisibility}>
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
                        {isDoorVisible && (
                <div className={styles.frame}>
                    <FaArrowLeft className={styles.backarrow} onClick={toggleDoorVisibility} />
                    <h3 className={styles.frametext}>Doors</h3>
                    <div className={styles.carddoor}>
                    {cardData
                            .filter(card => card.category === 'Door')
                            .map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                image={card.image}
                                width={card.width}
                                height={card.height}
                            />
                        ))}
                    </div>
                </div>
            )}
                        <div className={styles['components-selection']} onClick={toggleFrameVisibility}>
                            <LuFrame className={styles['frame-icon']} />
                            <p className={styles.door} >Frame</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }} />


                        </div>
                        {isFrameVisible && (
                <div className={styles.frame}>
                    <FaArrowLeft className={styles.backarrow} onClick={toggleFrameVisibility} />
                    <h3 className={styles.frametext}>FRAME</h3>
                    <div className={styles.cardframe}>
                    {cardData
                            .filter(card => card.category === 'Frame')
                            .map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                image={card.image}
                                width={card.width}
                                height={card.height}
                            />
                        ))}
                    </div>
                </div>
            )}

                        <div className={styles['components-selection']} onClick={() => { toggleHandleVisibility(); handleToggle(); }} >
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
                        {isHandleComponentVisible && (
                <div className={styles.frame}>
                    <FaArrowLeft className={styles.backarrow} onClick={toggleHandleVisibility} />
                    <h3 className={styles.frametext}>Handle</h3>
                    <div className={styles.cardframe}>
                    {cardData
                            .filter(card => card.category === 'Handle')
                            .map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                image={card.image}
                                width={card.width}
                                height={card.height}
                            />
                        ))}
        </div>

                </div>
            )}
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
                    <Scene
                        selectedProduct={selectedProduct}
                        showDoor={showDoor}
                        showHandle={showHandle}
                        showDrawer={showDrawer}
                    />
                </div>
            </div>
        </div>
    );
};