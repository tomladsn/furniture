import classNames from 'classnames';
import styles from './configuratorpage.module.scss';
import { Navbar } from '../../navbar/navbar';
import { Canvas } from '@react-three/fiber';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuFrame } from 'react-icons/lu';
import { MdDoorSliding, MdShelves } from 'react-icons/md';
import { GiDoorHandle, GiClothesline, GiRunningShoe } from 'react-icons/gi';
import { VscLayoutPanelCenter } from 'react-icons/vsc';
import { IoIosArrowDropright } from 'react-icons/io';
export interface ConfiguratorpageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Configuratorpage = ({ className }: ConfiguratorpageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div
                className="Container90"
                style={{
                    width: 1440,
                    height: 118,
                    position: 'relative',
                    background: 'white',
                    boxShadow: '0px 0px 1px rgba(23, 26, 31, 0.19)',
                    borderRadius: 2,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <img
                    className="Chevron"
                    style={{
                        width: '66px',
                        height: '45px',
                        position: 'relative',
                        top: '30px',
                    }}
                    src="/src/assets/product image/arrowleft.svg"
                />

                <div className={styles['first-slide-block']}>
                    <img
                        className="Image50"
                        style={{ borderRadius: 2, height: '110px', width: '130px' }}
                        src="/src/assets/product image/Garderobe.png"
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
                <div style={{ position: 'absolute', left: 480 }} className="tv-meubel-div">
                    <img
                        className="meubel"
                        style={{ width: '120px', height: '112px' }}
                        src="/src/assets/product image/Tvmeubel.svg"
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
                    style={{ position: 'absolute', left: '880px', height: '120px' }}
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
                        src="/src/assets/product image/Kast.png"
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
                            left: '150px',
                            bottom: '70px',
                        }}
                    >
                        Kast
                    </p>
                </div>
                <img
                    className="ChevronLeft"
                    style={{
                        width: 42,
                        position: 'relative',
                        left: 1000,
                        top: 75,
                        height: 38,
                        transform: 'rotate(180deg)',
                        transformOrigin: '0px 0px',
                    }}
                    src="/src/assets/product image/arrowleft.svg"
                />
            </div>
            <div className={styles['configurator-section']}>
                <div className={styles['canva-div']}>
                    <Canvas>
                        <mesh>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="hotpink" />
                        </mesh>
                    </Canvas>
                </div>
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
