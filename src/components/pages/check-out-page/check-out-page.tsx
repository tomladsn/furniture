import classNames from 'classnames';
import styles from './check-out-page.module.scss';
import { Navbar } from '../../navbar/navbar';
import Footer_module from '../../footer/footer.module.scss';
import { IoMdCloseCircle } from 'react-icons/io';
import { Footer } from '../../footer/footer';

export interface CheckOutPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CheckOutPage = ({ className }: CheckOutPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles['checkout-div']}>
                <div className={styles['form-div']}>
                    <p className={styles['left-heading']}>Bestellen</p>

                    <p className={styles['first-name']}>Voornaam</p>
                    <input className={styles['first-name-input']} />
                    <div
                        style={{
                            width: 208,
                            height: 50,
                            position: 'relative',
                            left: '230px',
                            bottom: '66px',
                        }}
                    >
                        <p className={styles['second-name']}>Achternaam</p>
                        <input className={styles['last-name-input']} />
                    </div>
                    <p className={styles['street-address']}>Straat en huisnummer</p>
                    <input className={styles['street-input']} />
                    <p className={styles['city-label']}>Plaats</p>
                    <input className={styles['city-input']} />
                    <p className={styles.postcode}>Postcode</p>
                    <input className={styles['postcode-input']} />
                    <button className={styles['button-checkout']}>Bestellen</button>
                </div>
                <div className={styles.listingdiv}>
                    <p className={styles['heading-checkout']}>Winkelwagen</p>
                    <div className={styles['container-checkout']}>
                        <div className={styles.listing1}>
                            <img
                                style={{ width: '80px', height: 70, borderRadius: 10 }}
                                src="/src/assets/product image/Garderobe.png"
                            />
                            <p className={styles['text--1']}>Garderobe</p>
                            <IoMdCloseCircle className={styles['close-icon-circle']} />
                        </div>
                        <div className={styles.listing1}>
                            <img
                                style={{ width: 94, height: '80px', borderRadius: 10 }}
                                src="/src/assets/product image/Badkamermeubel.png"
                            />
                            <p className={styles['text--2']}>Kast</p>
                            <IoMdCloseCircle className={styles['icon-circle2']} />
                        </div>
                        <div className={styles.listing1}>
                            <img
                                style={{ width: 95, height: '80px', borderRadius: 65 }}
                                src="/src/assets/product image/Kast.png"
                            />
                            <p className={styles['text--3']}>Kast</p>
                            <IoMdCloseCircle className={styles['circle-icon3']} />
                        </div>
                        <div className={styles.listing1}>
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: 2,
                                    marginLeft: '10px',
                                }}
                                src="/src/assets/product image/Image 50.png"
                            />
                            <p className={styles['text--4']}>Kast</p>
                            <IoMdCloseCircle className={styles['class-circle-4']} />
                        </div>
                    </div>
                    <button className={styles['button-listing']}>Opslaan voor later</button>
                </div>
            </div>
            <Footer className={styles['footer-checkout']} />
        </div>
    );
};
