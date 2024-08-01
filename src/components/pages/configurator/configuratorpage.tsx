import classNames from 'classnames';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import { useRef, useState, useEffect, ChangeEvent } from 'react';
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
    onClick: () => void;
}
interface ModelProps {
    position: [number, number, number];
}
interface CardProps {
    title: string;
    image: string;
    width: string;
    height: string;
    imageClassName?: string;
    onClick: () => void;
}
const products = [
    {
        src: '/product image/Garderobe.png',
        name: 'Kledingkast',
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
    const [selectedFrameProduct, setSelectedFrameProduct] = useState<string | null>(null);
    const [isCustomisationVisible, setIsCustomisationVisible] = useState(false);
    const [isFrame2CustomisationVisible, setIsFrame2CustomisationVisible] = useState(false);
    const [isFrame3CustomisationVisible, setIsFrame3CustomisationVisible] = useState(false);

    const [visiblesSubComponent, setVisibleSubComponent] = useState<'shelves' | 'drawers' | null>(null);
    const [visibles2SubComponent, setVisible2SubComponent] = useState<'shelves' | 'drawers' | null>(null);
    const [visibles3SubComponent, setVisible3SubComponent] = useState<'shelves' | 'drawers' | null>(null);
    const handleSubCardClick = (component: 'shelves' | 'drawers') => {
        setVisibleSubComponent(component);
      };
      const handleSub2CardClick = (component: 'shelves' | 'drawers') => {
        setVisible2SubComponent(component);
      }; 
        const handleSub3CardClick = (component: 'shelves' | 'drawers') => {
        setVisible3SubComponent(component);
      };

      const handleFrameProductClick = (productTitle: string) => {
        setSelectedFrameProduct(productTitle);
    
        if (productTitle === 'Frame (50x175 cm)') {
          setIsCustomisationVisible(true);
          setIsFrame2CustomisationVisible(false);
          setIsFrame3CustomisationVisible(false);
          setFrameVisible(false);
        } else if (productTitle === 'Frame (75x175 cm)') {
          setIsCustomisationVisible(false);
          setIsFrame2CustomisationVisible(true);
          setIsFrame3CustomisationVisible(false);
          setFrameVisible(false);
        } else if (productTitle === 'Corner (111cm)') {
          setIsCustomisationVisible(false);
          setIsFrame2CustomisationVisible(false);
          setIsFrame3CustomisationVisible(true);
          setFrameVisible(false);
        } else {
          setIsCustomisationVisible(false);
          setIsFrame2CustomisationVisible(false);
          setIsFrame3CustomisationVisible(false);
          setFrameVisible(true);
        }
      };
    
    
      const [scaleX, setScaleX] = useState(1);
      const [scaleY, setScaleY] = useState(1);
      const [scaleZ, setScaleZ] = useState(1);
    
      const handleScaleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScaleX(parseFloat(event.target.value));
      };
    
      const handleScaleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScaleY(parseFloat(event.target.value));
      };
    
      const handleScaleZChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScaleZ(parseFloat(event.target.value));
      };

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
    const [isDrawerVisible, setDrawerVisible] = useState(false);

    const toggleFrameVisibility = () => {
        setIsCustomisationVisible(false);
        setIsFrame2CustomisationVisible(false);
        setIsFrame3CustomisationVisible(false);
        setVisibleSubComponent(null);
        setFrameVisible(!isFrameVisible);
      };
      const handleBackClick = () => {
        setIsCustomisationVisible(false);
        setIsFrame2CustomisationVisible(false);
        setIsFrame3CustomisationVisible(false);
        setFrameVisible(true); // Show the frame selection div
      };
    // const toggleDoorVisibility = () => {
    //     setDoorVisible(!isDoorVisible);
    // };
    const toggleHandleVisibility = () => {
        setHandleComponentVisible(!isHandleComponentVisible);
    };
    const toggleDrawerVisibility = () => {
        setDrawerVisible(!isDrawerVisible);
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
                    <div className={styles['component-config']}>
                        <div className={styles['components-selection']}>
                            <MdDoorSliding className={styles['door-icon']} />
                            <p className={styles.door}>Deuren</p>
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
                    <FaArrowLeft className={styles.backarrow} />
                    <h3 className={styles.frametext}>Deuren</h3>
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
                                onClick={() => handleFrameProductClick(card.title)} 
                            />
                        ))}
                    </div>
                </div>
            )}
                        <div className={styles['components-selection']} onClick={toggleFrameVisibility}>
                            <LuFrame className={styles['frame-icon']} />
                            <p className={styles.door} >Basiselementen</p>
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
                    <h3 className={styles.frametext}>Basiselementen</h3>
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
                                onClick={() => handleFrameProductClick(card.title)}
                            />
                        ))}
                    </div>
                </div>
            )}
{isCustomisationVisible && (
        <div className={styles.frame}>
          <FaArrowLeft className={styles.backarrow} onClick={handleBackClick} />
          <h3 className={styles.frametext}>50cmframe customisation</h3>
          <div className={styles.customise}>
          <label>
        Scale X:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={scaleX}
          onChange={handleScaleXChange}
        />
        {scaleX.toFixed(1)}
      </label>
      <label>
        Scale Y:
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={scaleY}
          onChange={handleScaleYChange}
        />
        {scaleY.toFixed(1)}
      </label>
      <label>
        Scale Z:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={scaleZ}
          onChange={handleScaleZChange}
        />
        {scaleZ.toFixed(1)}
      </label>
          </div>
          <div className={styles.cardContainer22}>
  <div className={styles.card789} onClick={() => handleSubCardClick('shelves')}>
    <div className={styles.cardContent183}>
      <h3 className={styles.cardTitle591}>Shelves</h3>
    </div>
  </div>
  <div className={styles.card359} onClick={() => handleSubCardClick('drawers')}>
    <div className={styles.cardContent497}>
      <h3 className={styles.cardTitle824}>Drawers</h3>
    </div>
  </div>
</div>
        </div>
      )}
      {isFrame2CustomisationVisible && (
        <div className={styles.frame}>
          <FaArrowLeft className={styles.backarrow} onClick={handleBackClick} />
          <h3 className={styles.frametext}>75cmframe customisation</h3>
          <div className={styles.customise}>
          <label>
        Scale X:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={scaleX}
          onChange={handleScaleXChange}
        />
        {scaleX.toFixed(1)}
      </label>
      <label>
        Scale Y:
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={scaleY}
          onChange={handleScaleYChange}
        />
        {scaleY.toFixed(1)}
      </label>
      <label>
        Scale Z:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={scaleZ}
          onChange={handleScaleZChange}
        />
        {scaleZ.toFixed(1)}
      </label>


      <div className={styles.cardContainer22}>
  <div className={styles.card789} onClick={() => handleSub2CardClick('shelves')}>
    <div className={styles.cardContent183}>
      <h3 className={styles.cardTitle591}>Shelves</h3>
    </div>
  </div>
  <div className={styles.card359} onClick={() => handleSub2CardClick('drawers')}>
    <div className={styles.cardContent497}>
      <h3 className={styles.cardTitle824}>Drawers</h3>
    </div>
  </div>
</div>
          </div>
        </div>
      )}

{isFrame3CustomisationVisible && (
        <div className={styles.frame}>
          <FaArrowLeft className={styles.backarrow} onClick={handleBackClick}/>
          <h3 className={styles.frametext}>cornerframe customisation</h3>
          <div className={styles.customise}>
          <label>
        Scale X:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={scaleX}
          onChange={handleScaleXChange}
        />
        {scaleX.toFixed(1)}
      </label>
      <label>
        Scale Y:
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={scaleY}
          onChange={handleScaleYChange}
        />
        {scaleY.toFixed(1)}
      </label>
      <label>
        Scale Z:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={scaleZ}
          onChange={handleScaleZChange}
        />
        {scaleZ.toFixed(1)}
      </label>


      <div className={styles.cardContainer22}>
  <div className={styles.card789} onClick={() => handleSub3CardClick('shelves')}>
    <div className={styles.cardContent183}>
      <h3 className={styles.cardTitle591}>Corner Shelves</h3>
    </div>
  </div>
</div>
          </div>
        </div>
      )}


                        <div className={styles['components-selection']} onClick={() => { toggleHandleVisibility(); handleToggle(); }} >
                            <GiDoorHandle className={styles['handle-icon']} />
                            <p className={styles.door}>Handgrepen</p>
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
                                onClick={() => handleFrameProductClick(card.title)}
                            />
                        ))}
        </div>

                </div>
            )}
                        <div className={styles['components-selection']} onClick={toggleDrawerVisibility}>
                            <VscLayoutPanelCenter className={styles['drawer-icon']} />
                            <p className={styles.door}>Lades</p>
                            <IoIosArrowDropright
                                style={{
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    left: '200px',
                                }} />
                        </div>
                        {isDrawerVisible && (
                <div className={styles.frame}>
                    <FaArrowLeft className={styles.backarrow} onClick={toggleDrawerVisibility} />
                    <h3 className={styles.frametext}>Lades</h3>
                    <div className={styles.cardframe}>
                    {cardData
                            .filter(card => card.category === 'drawer')
                            .map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                image={card.image}
                                width={card.width}
                                height={card.height}
                                onClick={() => handleFrameProductClick(card.title)}
                            />
                        ))}
        </div>

                </div>
            )}
                        <div className={styles['components-selection']}>
                            <GiClothesline className={styles['rail-icon']} />
                            <p className={styles.door}>Kledinghanger</p>
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
                            <p className={styles.door}>Planken</p>
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
                        scaleX={scaleX}
                        scaleY={scaleY}
                        scaleZ={scaleZ}
                        selectedProduct={selectedProduct}
                        showDoor={showDoor}
                        showHandle={showHandle}
                        showDrawer={showDrawer}
                        selectedFrameProduct={selectedFrameProduct}
                        title={''}
                        visible2component={visibles2SubComponent}
                        visible3component={visibles3SubComponent}
                        visibleComponent={visiblesSubComponent} // Correct prop name
                        onScaleChange={function (event: ChangeEvent<HTMLInputElement>): void {
                            throw new Error('Function not implemented.');
                        } }  
                           />
                </div>
            </div>
        </div>
    );
};