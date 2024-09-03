// npx gltfjsx public\shoerack1.glb --output src\components\modelcomponent\rack --types --keepnames --meta


import classNames from 'classnames';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter';
import { saveAs } from 'file-saver';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
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
interface newFrameInstance {
  scaleX: number;
}
interface ModelProps {
  position: [number, number, number];
}
interface FrameInstance {
  id: number;
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
  const [selectedDrawer, setSelectedDrawer] = useState<string | null>(null);
  const [isRackSelected, setRackSelected] = useState(false);
  const [isRailSelected, setRailSelected] = useState(false);
  const [isDoorSelected, setDoorSelected] = useState(false);
  const [isCustomisationVisible, setIsCustomisationVisible] = useState(false);
  const [isFrame2CustomisationVisible, setIsFrame2CustomisationVisible] = useState(false);
  const [isFrame3CustomisationVisible, setIsFrame3CustomisationVisible] = useState(false);
  const [frames, setFrames] = useState<Array<{ id: number, type: string, scale: [number, number, number] }>>([]);
  const [visiblesSubComponent, setVisibleSubComponent] = useState<'shelves' | 'drawers' | null>(null);
  const [visibles2SubComponent, setVisible2SubComponent] = useState<'shelves' | 'drawers' | null>(null);
  const [visibles3SubComponent, setVisible3SubComponent] = useState<'shelves' | 'drawers' | null>(null);
  const [selectedHandle, setSelectedHandle] = useState<string | null>(null);
  const [frameInstances, setFrameInstances] = useState<FrameInstance[]>([]);
  const handleCardHandleClick = (title: string, setSelectedHandle: React.Dispatch<React.SetStateAction<string | null>>) => {
    setSelectedHandle(title);
  };
  const handleSubCardClick = (component: 'shelves' | 'drawers') => {
    setVisibleSubComponent(component);
  };
  const handleSub2CardClick = (component: 'shelves' | 'drawers') => {
    setVisible2SubComponent(component);
  };
  const handleSub3CardClick = (component: 'shelves' | 'drawers') => {
    setVisible3SubComponent(component);
  };
  const handleDrawerSelection = (productTitle: string, setSelectedDrawer: React.Dispatch<React.SetStateAction<string | null>>) => {
    if (productTitle === 'Lade 1') {
      setSelectedDrawer('Lade 1');
    } else if (productTitle === 'Lade 2') {
      setSelectedDrawer('Lade 2');
    } else if (productTitle === 'Lade 3') {
      setSelectedDrawer('Lade 3');
    } else if (productTitle === 'Lade 4') {
      setSelectedDrawer('Lade 4');
    }
  };


  const handleModelClick = () => {
    setIsCustomisationVisible(true);
  };
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);

  const baseY = -1.11;


  const newFrameInstance: FrameInstance = {
    id: frameInstances.length, // Unique ID for each frame instance
    position: [10.1 / scaleX, baseY + (scaleY - 1) * Math.abs(baseY), -8.2 / scaleZ] as [number, number, number],
  };
  const handleFrameProductClick = (productTitle: string) => {
    setSelectedFrameProduct(productTitle);

    if (productTitle === 'Frame (50x175 cm)') {
      setIsCustomisationVisible(true);
      setIsFrame2CustomisationVisible(false);
      setIsFrame3CustomisationVisible(false);
      setFrameVisible(false);
      setFrames(prevFrames => [
        ...prevFrames,
        {
          id: Date.now(), // Unique ID for each frame
          type: 'Frame (50x175 cm)',
          scale: [1, 1, 1] // Initial scale
        }
      ]);
    } else if (productTitle === 'Frame (75x175 cm)') {
      setIsCustomisationVisible(false);
      setIsFrame2CustomisationVisible(true);
      setIsFrame3CustomisationVisible(false);
      setFrameVisible(false);
      setFrames(prevFrames => [
        ...prevFrames,
        {
          id: Date.now(), // Unique ID for each frame
          type: 'Frame (75x175 cm)',
          scale: [1, 1, 1] // Initial scale
        }
      ]);
    } else if (productTitle === 'Hoek (111cm) ') {
      setIsCustomisationVisible(false);
      setIsFrame2CustomisationVisible(false);
      setIsFrame3CustomisationVisible(true);

      // Ensure baseY and scales are defined here or passed as parameters
      const baseY = -1.11;
      const scaleX = 1;
      const scaleY = 1;
      const scaleZ = 1;

      const newFrameInstance: FrameInstance = {
        id: frameInstances.length, // Unique ID for each frame instance
        position: [10.1 / scaleX, baseY + (scaleY - 1) * Math.abs(baseY), -8.2 / scaleZ],
      };

      setFrameInstances([...frameInstances, newFrameInstance]);

      setFrameVisible(false);
      setFrames(prevFrames => [
        ...prevFrames,
        {
          id: Date.now(), // Unique ID for each frame
          type: 'Hoek (111cm) ',
          scale: [1, 1, 1] // Initial scale
        }
      ]);
    } else if (productTitle === 'Rack') {
      setRackSelected(true);
      setIsCustomisationVisible(false);
      setIsFrame2CustomisationVisible(false);
      setIsFrame3CustomisationVisible(false);
      setFrameVisible(false);
    } else {
      setIsCustomisationVisible(false);
      setIsFrame2CustomisationVisible(false);
      setIsFrame3CustomisationVisible(false);
      setFrameVisible(true);
    }

    handleDrawerSelection(productTitle, setSelectedDrawer);
  }; const handleDeleteFrame = (productTitle: string) => {
    // Deselect the frame product
    setSelectedFrameProduct(null);

    // Perform deletion logic based on the product title
    if (productTitle === 'Frame (50x175 cm)') {
      setIsCustomisationVisible(false);
      setFrames(prevFrames => prevFrames.filter(frame => frame.type !== 'Frame (50x175 cm)'));
    } else if (productTitle === 'Frame (75x175 cm)') {
      setIsFrame2CustomisationVisible(false);
      setFrames(prevFrames => prevFrames.filter(frame => frame.type !== 'Frame (75x175 cm)'));
    } else if (productTitle === 'Hoek (111cm) ') {
      setIsFrame3CustomisationVisible(false);
      setFrames(prevFrames => prevFrames.filter(frame => frame.type !== 'Hoek (111cm) '));
    }
    setFrameVisible(true);
  };

  const handleDeleteFrame2 = () => {
    setSelectedFrameProduct(null); // Or an appropriate default value
    setFrames(prevFrames => prevFrames.filter(frame => frame.type !== 'Frame (50x175 cm)'));
    setIsCustomisationVisible(false);
    setIsFrame2CustomisationVisible(false)
    setFrameVisible(true); // Adjust based on your application logic
  };
  const handleDeleteFrame3 = () => {
    setSelectedFrameProduct(null); // Or an appropriate default value
    setFrames(prevFrames => prevFrames.filter(frame => frame.type !== 'Frame (50x175 cm)'));
    setIsCustomisationVisible(false);
    setIsFrame3CustomisationVisible(false);
    setFrameVisible(true); // Adjust based on your application logic
  };



  const handleScaleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScaleX(parseFloat(event.target.value));
  };

  const [height, setHeight] = useState(175); // Set the default height to 175cm

  function handleHeightChange(e: { target: { value: string; }; }) {
    const inputValue = parseFloat(e.target.value);
  
    // Ensure the value stays within the allowed range
    const validatedValue = Math.max(175, Math.min(280, inputValue));
  
    setHeight(validatedValue);
  }
  const handleApplyHeight = () => {
    // Your logic to apply the height change
    console.log(`Height applied: ${height} cm`);
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
  const [isRailVisible, setRailVisible] = useState(false);
  const [isRackVisible, setRackVisible] = useState(false);

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
  const RailVisible = () => {
    setRailVisible(!isRailVisible);
  };
  const toggleRackVisibility = () => {
    setRackVisible(!isRackVisible);
  }
  const toggleHandleVisibility = () => {
    setHandleComponentVisible(!isHandleComponentVisible);
  };
  const toggleDrawerVisibility = () => {
    setDrawerVisible(!isDrawerVisible);
  };
  const toggleDoorVisibility = () => {
    setDoorVisible(!isDoorVisible);
  };
  useEffect(() => {
    console.log("Frames state updated:", frames);
  }, [frames]);

  const sceneRef = useRef<THREE.Group>(null);

  const exportToGLTF = () => {
    const exporter = new GLTFExporter();
    const scene = sceneRef.current;

    if (scene) {
      exporter.parse(
        scene,
        (gltf) => {
          const blob = new Blob([JSON.stringify(gltf)], { type: 'application/json' });
          saveAs(blob, 'model.gltf');
        },
        (error) => {
          console.error('An error occurred during the GLTF export', error);
        },
        { binary: false } // Set to true if you want to export in .glb format
      );
    } else {
      console.error('Scene reference is invalid.');
    }
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
              onClick={exportToGLTF}
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
                onClick={exportToGLTF}
              >
                Export
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
              <div className={styles.frame}  >
                <FaArrowLeft className={styles.backarrow} onClick={toggleDoorVisibility} />
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
                        onClick={() => setDoorSelected(true)}
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
                <h3 className={styles.frametext}>50cmframe  aanpassing</h3>
                <div className={styles.customise}>
                <label>
                    Height (cm):
                    <input
    type="number"
    min="175"
    max="280"
    step="1"
    value={height} // Bind the input value to the state
    onChange={(e) => setHeight(parseFloat(e.target.value))} // Handle input change
  />
  <button >Apply</button> {/* Button to apply the new height */}
  {`${height.toFixed(1)} cm`} {/* Display the height in cm */}
                  </label>
                  <label>
                    Height (cm):
                    <input
    type="number"
    min="175"
    max="280"
    step="1"
    value={height} // Bind the input value to the state
    onChange={(e) => setHeight(parseFloat(e.target.value))} // Handle input change
  />
  <button onClick={handleApplyHeight}>Apply</button> {/* Button to apply the new height */}
  {`${height.toFixed(1)} cm`} {/* Display the height in cm */}
                  </label>

                  {/* <label>
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
                  </label> */}
                </div>
                <div className={styles.cardContainer22}>
                  <div className={styles.card789} onClick={() => handleDeleteFrame('Frame (50x175 cm)')}>
                    <div className={styles.cardContent183}>
                      <h3 className={styles.cardTitle591} >delete</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isFrame2CustomisationVisible && (
              <div className={styles.frame}>
                <FaArrowLeft className={styles.backarrow} onClick={handleBackClick} />
                <h3 className={styles.frametext}>75cmframe  aanpassing</h3>
                <div className={styles.customise}>
                  {/* <label>
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
                  </label> */}
                  <label>
                    Height (cm):
                    <input
                      type="number"
                      min="175"
                      max="280"
                      step="1"
                      value={height.toFixed(1)}
                      onChange={handleHeightChange}
                    />
                    {`${height.toFixed(1)} cm`}
                  </label>
                  {/* <label>
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
                  </label> */}

                  <div className={styles.cardContainer22}>
                    <div className={styles.card789} onClick={() => handleDeleteFrame('Frame (75x175 cm)')}>
                      <div className={styles.cardContent183}>
                        <h3 className={styles.cardTitle591}>delete</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isFrame3CustomisationVisible && (
              <div className={styles.frame}>
                <FaArrowLeft className={styles.backarrow} onClick={handleBackClick} />
                <h3 className={styles.frametext}>Hoekframe aanpassing</h3>
                <div className={styles.customise}>
                  {/* <label>
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
                  </label> */}
                  <label>
                    Height (cm):
                    <input
                      type="number"
                      min="175"
                      max="280"
                      step="1"
                      value={height.toFixed(1)}
                      onChange={handleHeightChange}
                    />
                    {`${height.toFixed(1)} cm`}
                  </label>

                  {/* <label>
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
                  </label> */}


                  <div className={styles.cardContainer22}>
                    <div className={styles.card789} onClick={() => handleSub3CardClick('shelves')}>
                      <div className={styles.cardContent183}>
                        <h3 className={styles.cardTitle591}>Hoekplanken</h3>
                      </div>
                    </div>
                    <br />
                    {/* <div className={styles.card789}onClick={() => handleDeleteFrame('Hoek (111cm) ')}>
                      <div className={styles.cardContent183}>
                        <h3 className={styles.cardTitle591}>Delete</h3>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            )}


            <div className={styles['components-selection']} onClick={() => { toggleHandleVisibility(); handleToggle(); }} >
              <GiDoorHandle className={styles['handle-icon']} />
              <p className={styles.door}>Handgreep </p>
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
                <h3 className={styles.frametext}>Handgreep</h3>
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
                        onClick={() => handleCardHandleClick(card.title, setSelectedHandle)}
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
                        onClick={() => handleDrawerSelection(card.title, setSelectedDrawer)}
                      />
                    ))}
                </div>

              </div>
            )}
            <div className={styles['components-selection']} onClick={RailVisible}>
              <GiClothesline className={styles['rail-icon']} />
              <p className={styles.door}>Kledinghanger</p>
              <IoIosArrowDropright
                style={{
                  width: '30px',
                  height: '20px',
                  position: 'relative',
                  left: '200px',
                }} />
              {isRailVisible && (
                <div className={styles.frame}>
                  <FaArrowLeft className={styles.backarrow} onClick={RailVisible} />
                  <h3 className={styles.frametext}>Kledinghanger</h3>
                  <div className={styles.cardframe}>
                    {cardData
                      .filter(card => card.category === 'rail')
                      .map((card, index) => (
                        <Card
                          key={index}
                          title={card.title}
                          image={card.image}
                          width={card.width}
                          height={card.height}
                          onClick={() => setRailSelected(true)}
                        />
                      ))}
                  </div>

                </div>
              )}
            </div>
            <div className={styles['components-selection']} onClick={toggleRackVisibility} >
              <MdShelves className={styles['shelve-icon']} />
              <p className={styles.door}> Schoenenrek</p>
              <IoIosArrowDropright
                style={{
                  width: '30px',
                  height: '20px',
                  position: 'relative',
                  left: '200px',
                }} />
            </div>
            {isRackVisible && (
              <div className={styles.frame}>
                <FaArrowLeft className={styles.backarrow} onClick={toggleRackVisibility} />
                <h3 className={styles.frametext}> Schoenenrek</h3>
                <div className={styles.cardframe}>
                  {cardData
                    .filter(card => card.category === 'rack')
                    .map((card, index) => (
                      <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        width={card.width}
                        height={card.height}
                        onClick={() => setRackSelected(true)}
                      />
                    ))}
                </div>

              </div>
            )}
          </div>
        </div>
        <div className={styles['canva-div']}>
          <Scene
            frameInstances={frameInstances}
            onDeleteFrame={handleDeleteFrame}
            selectedHandle={selectedHandle}
            ref={sceneRef}
            frames={frames}
            setFrames={setFrames}
            scaleX={scaleX}
            scaleY={scaleY}
            scaleZ={scaleZ}
            heightScale={height}
            selectedDrawer={selectedDrawer}
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
            }} frameId={0}
            onModelClick={handleModelClick}
            isRackSelected={isRackSelected}
            isRailSelected={isRailSelected}
            isDoorSelected={isDoorSelected}
            setIsFrame2CustomisationVisible={setIsFrame2CustomisationVisible}
            setIsFrame3CustomisationVisible={setIsFrame3CustomisationVisible} setScaleY={0} />
        </div>
      </div>
    </div>
  );
};