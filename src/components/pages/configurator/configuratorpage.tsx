// npx gltfjsx public\plinth.glb --output src\components\modelcomponent\plinth --types --keepnames --meta


import classNames from 'classnames';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter';
import { saveAs } from 'file-saver';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import * as THREE from 'three';
import styles from './configuratorpage.module.scss';
import { useRef, useState, useEffect, ChangeEvent, SetStateAction } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong, FaShoePrints } from 'react-icons/fa6';
import { LuFrame } from 'react-icons/lu';
import { MdDoorSliding, MdShelves } from 'react-icons/md';
import { GiDoorHandle, GiClothesline, GiRunningShoe } from 'react-icons/gi';
import { VscLayoutPanelCenter } from 'react-icons/vsc';
import { IoIosArrowDropright } from 'react-icons/io';
import { BsBookshelf } from "react-icons/bs";
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
const materials = [
  {
    name: 'Wood',
    image: '../../../../public/solidwood.jpg',  // Path to wood material image
  },
  {
    name: 'Plywood',
    image: '../../../../public/plywood.jpg', // Path to metal material image
  },
  {
    name: 'Fiberboard',
    image: '../../../../public/fabricboard.jpg', // Path to glass material image
  },
  {
    name: 'Particle board',
    image: '../../../../public/particleboard.jpg', // Path to glass material image
  }
];
type Frame = {
  id: number;
  type: string;
  scale: [number, number, number];
  position: [number, number, number];
};
interface DrawerState {
  drawer1: string | null;
  drawer2: string | null;
  drawer3: string | null;
  drawer4: string | null;
}
export const Configuratorpage = ({ className }: ConfiguratorpageProps) => {
  const [showDoor, setShowDoor] = useState(true)
  const [showDrawer, setShowDrawer] = useState(true)
  const [showHandle, setShowHandle] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedFrameProduct, setSelectedFrameProduct] = useState<string | null>(null);
  const [selectedDrawers, setSelectedDrawers] = useState<DrawerState>({
    drawer1: null,
    drawer2: null,
    drawer3: null,
    drawer4: null,
  });
  const [isRackSelected, setRackSelected] = useState(false);
  const [isRailSelected, setRailSelected] = useState(false);
  const [isDoorSelected, setDoorSelected] = useState(false);
  const [isCustomisationVisible, setIsCustomisationVisible] = useState(false);
  const [isFrame2CustomisationVisible, setIsFrame2CustomisationVisible] = useState(false);
  const [isFrame3CustomisationVisible, setIsFrame3CustomisationVisible] = useState(false);
  const [frames, setFrames] = useState<Frame[]>([]); 
  const [visiblesSubComponent, setVisibleSubComponent] = useState<'shelves' | 'drawers' | null>(null);
  const [visibles2SubComponent, setVisible2SubComponent] = useState<'shelves' | 'drawers' | null>(null);
  const [visibles3SubComponent, setVisible3SubComponent] = useState<'shelves' | 'drawers' | null>(null);
  const [selectedHandle, setSelectedHandle] = useState<string | null>(null);
  const [frameInstances, setFrameInstances] = useState<FrameInstance[]>([]);
  const [frames50, setFrames50] = useState<{ id: number; type: string; scale: [number, number, number]; position: [number, number, number]; }[]>([]);
  const [selectedMaterialImage, setSelectedMaterialImage] = useState<string | null>(null);
  const [drawerPosition, setDrawerPosition] = useState(0);
  const [materialTexture, setMaterialTexture] = useState<THREE.Texture | null>(null);
  const textureLoader = new THREE.TextureLoader();
  const handleMaterialClick = (imagePath: string) => {
    const texture = textureLoader.load(imagePath);
    setMaterialTexture(texture);
    setSelectedMaterialImage(imagePath);
  };

  const handleFrameProduct50 = (title: string) => {
    if (title === 'Frame (50x175 cm)') {
      // Create a new frame object with the expected `scale` property as a tuple
      const newFrame = {
        id: frames50.length + 1,  // Unique ID for each frame
        type: 'Frame (50x175 cm)',
        scale: [50, 175, 1] as [number, number, number],  // Ensure scale is a tuple
        position: [Math.random() * 10, 0, Math.random() * 10] as [number, number, number],  // Ensure position is a tuple
      };

      // Add the new frame to the state
      setFrames50((prevFrames) => [...prevFrames, newFrame]);
    }
  };


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

  const handleDrawerSelection = (productTitle: string) => {
    switch (productTitle) {
      case 'Lade 1':
        setSelectedDrawers(prev => ({
          ...prev,
          drawer1: prev.drawer1 ? null : 'Lade 1', // Toggle drawer1
        }));
        break;
      case 'Lade 2':
        setSelectedDrawers(prev => ({
          ...prev,
          drawer2: prev.drawer2 ? null : 'Lade 2', // Toggle drawer2
        }));
        break;
      case 'Lade 3':
        setSelectedDrawers(prev => ({
          ...prev,
          drawer3: prev.drawer3 ? null : 'Lade 3', // Toggle drawer3
        }));
        break;
      case 'Lade 4':
        setSelectedDrawers(prev => ({
          ...prev,
          drawer4: prev.drawer4 ? null : 'Lade 4', // Toggle drawer4
        }));
        break;
    }
  };
  const handleModelClick = () => {
    setIsCustomisationVisible(true);
  };
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);
  const [positionX, setPositionX] = useState(-3);
  const [position75X, setPosition75X] = useState(-1.6);
  const [rackCustomisation, setRackCustomisation] = useState({
    rackPosition50: 3.2,
    rackPosition75: 3.2,
    rackPositioncorner: 3.2,
  });
  const [railPosition, setRailPosition] = useState({
    railPosition50: 24.78,
    railPosition75: 22.78,
    railPositioncorner: 22,
  });
  const [shelfCounts, setShelfCounts] = useState({
    shelfCount50: 0,
    shelfCount75: 0,
    shelfCountcorner: 0,
  });
  const [shelfPosition, setShelfPosition] = useState({
    shelfPosition75: 6.5,
    shelfPositioncorner: 6.5,
    shelfPosition50: 6.5,
  })

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

      // Ensure the maximum number of frames is 4
      if (frames.length < 4) {
        // Calculate a new unique position for each new frame, only modifying the X-axis (moving to the left)
        const baseX = 0; // Start from X position 0
        const xOffset = (frames.length * 3); // Move each new frame 2 units left along X-axis (negative direction)

        const newFramePosition: [number, number, number] = [
          baseX + xOffset,  // Shift to the left for each new frame
          -1.11,            // Fixed Y-position
          -9.2,             // Fixed Z-position (unchanged)
        ];

        // Add new frame to the state with a unique position and id
        setFrames(prevFrames => [
          ...prevFrames,
          {
            id: Date.now(),             // Unique ID for each frame
            type: 'Frame (50x175 cm)',  // The type of frame
            scale: [1, 1, 1],           // Initial scale for the frame
            position: newFramePosition, // Ensure that position is provided
          }
        ]);
      }
    }
    else if (productTitle === 'Frame (75x175 cm)') {
      setIsCustomisationVisible(false);
      setIsFrame2CustomisationVisible(true);
      setIsFrame3CustomisationVisible(false);
      setFrameVisible(false);
      if (frames.length < 3) {

        const baseX = 0;
        const xOffset = (frames.length * 1);

        const newFramePosition: [number, number, number] = [
          baseX + xOffset,
          -1.11,
          -9.2,
        ];

        // Add new frame to the state with a unique position and id
        setFrames(prevFrames => [
          ...prevFrames,
          {
            id: Date.now(),             // Unique ID for each frame
            type: 'Frame (75x175 cm)',  // The type of frame
            scale: [1, 1, 1],           // Initial scale for the frame
            position: newFramePosition, // Ensure that position is provided
          }
        ]);
      }
    }
    else if (productTitle === 'Hoek (111cm) ') {
      setIsCustomisationVisible(false);
      setIsFrame2CustomisationVisible(false);
      setIsFrame3CustomisationVisible(true);
      setFrameVisible(false);

      // Ensure only one duplicate is allowed
      if (frames.filter((frame) => frame.type === 'Hoek (111cm)').length < 2) {
        // Define the base position for the original frame
        const baseX = 1; // Initial X position
        const baseZ = -9.2; // Initial Z position for the first corner frame

        // Check if this is the first or second instance of the corner frame
        const isDuplicate = frames.some((frame) => frame.type === 'Hoek (111cm)');

        // Calculate the new position and rotation for the duplicate
        const newFramePosition: [number, number, number] = isDuplicate
          ? [baseX, -1.11, baseZ + 2] // Z-offset by 2 for the duplicate
          : [baseX, -1.11, baseZ];    // Original position for the first frame

        const newRotation = isDuplicate ? [0, Math.PI / 2, 0] : [0, 0, 0]; // Rotate 90 degrees for the duplicate

        // Add the new frame with rotation and position
        setFrames((prevFrames) => [
          ...prevFrames,
          {
            id: Date.now(),            // Unique ID for each frame
            type: 'Hoek (111cm)',      // Frame type
            scale: [1, 1, 1],          // Initial scale
            position: newFramePosition,// Position, with Z-offset for duplicate
            rotation: newRotation      // Rotation, 90 degrees for duplicate
          },
        ]);
      }
    }
    else if (productTitle === 'Rack') {
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
  const [numberOfFrames, setNumberOfFrames] = useState(0);
  const [height, setHeight] = useState(175); // Set the default height to 175cm
  const [width50, setwidth50] = useState(50); // Set the default height to 175cm
  const [width75, setwidth75] = useState(75); // Set the default height to 175cm
  const [depth50, setdepth50] = useState(35);

  function handleHeightChange(e: { target: { value: string; }; }) {
    const inputValue = parseFloat(e.target.value);

    // Ensure the value stays within the allowed range
    const validatedValue = Math.max(175, Math.min(280, inputValue));

    setHeight(validatedValue);
  }
  function handleWidthChange(e: { target: { value: string; }; }) {
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
  const [islegComponentVisible, setIslegComponentVisible] = useState(false);
  const [isShelveVisible, setIsShelveVisible] = useState(false)

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
  const [railCustomisation, setRailCustomisation] = useState(false);
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
                        onClick={() => {
                          handleFrameProductClick(card.title)
                          handleFrameProduct50
                        }}
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
                    Number of 50cm frames:
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="1"
                      value={numberOfFrames} // bind this to state
                      onChange={(e) => setNumberOfFrames(parseInt(e.target.value))} // update on change
                    />
                  </label>

                  <label>
                    Width (cm):
                    <input
                      type="number"
                      min="50"
                      max="74"
                      step="1"
                      value={width50}
                      onChange={(e) => setwidth50(parseFloat(e.target.value))}
                    />
                    <button >Apply</button> {/* Button to apply the new height */}
                    {`${width50.toFixed(1)} cm`} {/* Display the height in cm */}
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

                  <label>
                    Depth (cm):
                    <input
                      type="number"
                      min="35"
                      max="50"
                      step="1"
                      value={depth50}
                      onChange={(e) => setdepth50(parseFloat(e.target.value))}
                    />
                    {`${depth50.toFixed(1)} cm`}
                  </label>
                  <label>
                    Move Part along X-axis:
                    <input
                      type="range"
                      min="-3"
                      max="10"
                      step="0.1"
                      value={positionX}
                      onChange={(e) => setPositionX(parseFloat(e.target.value))}
                    />
                    {`${positionX.toFixed(1)} units`}
                  </label>
                </div>
                <div className={styles.materialSelection1}>
                  <h4>Select Material:</h4>
                  <div className={styles.materialCards1}>
                    {materials.map((material) => (
                      <div
                        key={material.name}
                        className={`materialCard ${selectedMaterialImage === material.image ? 'selected' : ''}`}
                        onClick={() => handleMaterialClick(material.image)}
                      >
                        <img src={material.image} alt={material.name} className={styles.materialImage1} />
                        <p>{material.name}</p>
                      </div>
                    ))}
                  </div>
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
                  <label>
                    Width (cm):
                    <input
                      type="number"
                      min="75"
                      max="100"
                      step="1"
                      value={width75} // Bind the input value to the state
                      onChange={(e) => setwidth75(parseFloat(e.target.value))} // Handle input change
                    />
                    <button >Apply</button> {/* Button to apply the new height */}
                    {`${width75.toFixed(1)} cm`} {/* Display the height in cm */}
                  </label>
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
                  <label>
                    Depth (cm):
                    <input
                      type="number"
                      min="35"
                      max="50"
                      step="1"
                      value={depth50}
                      onChange={(e) => setdepth50(parseFloat(e.target.value))}
                    />
                    {`${depth50.toFixed(1)} cm`}
                  </label>
                  <label>
                    Move Part along X-axis:
                    <input
                      type="range"
                      min="-1.6"
                      max="10"
                      step="0.1"
                      value={position75X}
                      onChange={(e) => setPosition75X(parseFloat(e.target.value))}
                    />
                    {`${positionX.toFixed(1)} units`}
                  </label>
                  <div className={styles.materialSelection1}>
                    <h4>Select Material:</h4>
                    <div className={styles.materialCards1}>
                      {materials.map((material) => (
                        <div
                          key={material.name}
                          className={`materialCard ${selectedMaterialImage === material.image ? 'selected' : ''}`}
                          onClick={() => handleMaterialClick(material.image)}
                        >
                          <img src={material.image} alt={material.name} className={styles.materialImage1} />
                          <p>{material.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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

                  <label>
                    Depth (cm):
                    <input
                      type="number"
                      min="35"
                      max="50"
                      step="1"
                      value={depth50}
                      onChange={(e) => setdepth50(parseFloat(e.target.value))}
                    />
                    {`${depth50.toFixed(1)} cm`}
                  </label>


                  <div className={styles.cardContainer22}>
                    <div className={styles.card789} onClick={() => handleDeleteFrame('Hoek')}>
                      <div className={styles.cardContent183}>
                        <h3 className={styles.cardTitle591}>delete</h3>
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
                        onClick={() => handleDrawerSelection(card.title)}

                      />
                    ))
                  }
                </div>

              </div>
            )}
            <div className={styles['components-selection']} onClick={() => setIslegComponentVisible(prevState => !prevState)}>
              <GiDoorHandle className={styles['handle-icon']} />
              <p className={styles.door}>legs</p>
              <IoIosArrowDropright
                style={{
                  width: '30px',
                  height: '20px',
                  position: 'relative',
                  left: '200px',
                }} />
            </div>
            {islegComponentVisible && (
              <div className={styles.frame}>
                <FaArrowLeft className={styles.backarrow} onClick={() => setIslegComponentVisible(prevState => !prevState)} />
                <h3 className={styles.frametext}>legs</h3>
                <div className={styles.cardframe}>
                  {cardData
                    .filter(card => card.category === 'leg')
                    .map((card, index) => (
                      <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        width={card.width}
                        height={card.height} onClick={function (): void {
                          throw new Error('Function not implemented.');
                        }}
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
                  <FaArrowLeft className={styles.backarrow} onClick={() => setRailVisible(prev => !prev)} />
                  <h3 className={styles.frametext}> Clotherail </h3>
                  <div className={styles.cardframe}>
                    {cardData
                      .filter(card => card.category === 'rail')
                      .map((card, index) => (
                        <Card
                          key={index}
                          title={card.title}
                          image={card.image}
                          width={card.width}
                          height={card.height} onClick={() => { setRailSelected(true); setRailCustomisation(true) }}
                        />
                      ))}

                  </div>

                </div>
              )}

              {railCustomisation && (
                <div className={styles.frame}>
                  <FaArrowLeft className={styles.backarrow} onClick={() => { setRailCustomisation(false); }} />
                  <h3 className={styles.frametext}> rails </h3>
                  <div className={styles.cardframe}>
                    <label>
                      Adjust 50cm rail  position:
                      <input
                        type="range"
                        min="4"
                        max="24.78"
                        step="0.1"
                        value={railPosition.railPosition50}
                        onChange={(e) => setRailPosition({ ...railPosition, railPosition50: parseFloat(e.target.value) })}
                      />
                      {`${railPosition.railPosition50.toFixed(1)} units`}
                    </label>
                    <label>
                      Adjust 75cm rail  position:
                      <input
                        type="range"
                        min="4"
                        max="24.78"
                        step="0.1"
                        value={railPosition.railPosition75}
                        onChange={(e) => setRailPosition({ ...railPosition, railPosition75: parseFloat(e.target.value) })}
                      />
                      {`${railPosition.railPosition75.toFixed(1)} units`}
                    </label>

                  </div>

                </div>
              )}
            </div>
            <div className={styles['components-selection']} onClick={() => setIsShelveVisible(prev => !prev)}>
              <BsBookshelf className={styles['rail-icon']} />
              <p className={styles.door}>shelves</p>
              <IoIosArrowDropright
                style={{
                  width: '30px',
                  height: '20px',
                  position: 'relative',
                  left: '200px',
                }} />
            </div>
            {isShelveVisible && (
              <div className={styles.frame}>
                <FaArrowLeft className={styles.backarrow} onClick={() => setIsShelveVisible(prev => !prev)} />
                <h3 className={styles.frametext}> Shelves </h3>
                <div className={styles.cardframe}>
                  <label>
                    Number of Shelves 50cm frame:
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="1"
                      value={shelfCounts.shelfCount50}
                      onChange={(e) => setShelfCounts({ ...shelfCounts, shelfCount50: parseInt(e.target.value, 10) })}
                    />
                  </label>
                  <label>
                    Number of Shelves 75cm frame:
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="1"
                      value={shelfCounts.shelfCount75}
                      onChange={(e) => setShelfCounts({ ...shelfCounts, shelfCount75: parseInt(e.target.value, 10) })}
                    />
                  </label>
                  <label>
                    Number of Shelves corner frame:
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="1"
                      value={shelfCounts.shelfCountcorner}
                      onChange={(e) => setShelfCounts({ ...shelfCounts, shelfCountcorner: parseInt(e.target.value, 10) })}
                    />
                  </label>
                  <label>
                    Adjust 50cm shelf position:
                    <input
                      type="range"
                      min="1"
                      max="24"
                      step="0.1"
                      value={shelfPosition.shelfPosition50}
                      onChange={(e) => setShelfPosition({ ...shelfPosition, shelfPosition50: parseFloat(e.target.value) })}
                    />
                    {`${shelfPosition.shelfPosition50.toFixed(1)} units`}
                  </label>

                  <label>
                    Adjust 75cm shelf position:
                    <input
                      type="range"
                      min="1"
                      max="24"
                      step="0.1"
                      value={shelfPosition.shelfPosition75}
                      onChange={(e) => setShelfPosition({ ...shelfPosition, shelfPosition75: parseFloat(e.target.value) })}
                    />
                    {`${shelfPosition.shelfPosition75.toFixed(1)} units`}
                  </label>
                  <label>
                    Adjust corner shelf position:
                    <input
                      type="range"
                      min="1"
                      max="24"
                      step="0.1"
                      value={shelfPosition.shelfPositioncorner}
                      onChange={(e) => setShelfPosition({ ...shelfPosition, shelfPositioncorner: parseFloat(e.target.value) })}
                    />
                    {`${shelfPosition.shelfPositioncorner.toFixed(1)} units`}
                  </label>

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
                      onClick={() => handleDrawerSelection(card.title)}
                    />
                  ))}
              </div>

            </div>
          )}

        </div>
        <div className={styles['canva-div']}>
          <Scene
            railPosition={railPosition}
            shelfPosition={shelfPosition}
            shelfCount={shelfCounts}
            depthScale={depth50}
            handle50={handleFrameProduct50}
            frameInstances={frameInstances}
            onDeleteFrame={handleDeleteFrame}
            selectedHandle={selectedHandle}
            numberOfFrames={numberOfFrames}
            ref={sceneRef}
            frames={frames}
            selectedMaterialImage={selectedMaterialImage}
            scaleX={scaleX}
            scaleY={scaleY}
            scaleZ={scaleZ}
            positionX={positionX}
            position75X={position75X}
            materialTexture={materialTexture}
            width75Scale={width75}
            width50Scale={width50}
            heightScale={height}
            selectedDrawer={selectedDrawers}
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
            setIsFrame3CustomisationVisible={setIsFrame3CustomisationVisible} setScaleY={0} setFrames={setFrames} />
        </div>
      </div>
    </div>
  );
};