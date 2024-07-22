import classNames from 'classnames';
import styles from './about-ad-kast.module.scss';

export interface AboutAdKastProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AboutAdKast = ({ className }: AboutAdKastProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['about-block']}>
                <p className={styles.about_title}>Over ons</p>
                <p className={styles['about-us']}>
                    wij zijn de interieurbouwers van VI Interieurs.Wij ontwerpen, ontzorgen en
                    realiseren op basis van wederzijdsvertrouwen complete interieurs. Van meubels,
                    keukens, kastenwand tot complete winkelinrichting.
                </p>
                <p className={styles['about-us-btn']}>Lees meer</p>
                <div className={styles.line} />

                <img
                    src="/product image/Image 129about2.png"
                    className={styles.imgabout1}
                />
                <img
                    src="/product image/Image 130about1.png"
                    className={styles.imgabout2}
                />
            </div>
            <div className={styles.kast}>
                <img
                    src="/product image/Image 152Kast.png"
                    className={styles['kast-img']}
                />
                <p className={styles['kast-heading']}>Kast</p>
                <p className={styles['kast-desc']}>
                    Praktische kledingkast voor al uw opbergbehoeften. Stijlvol ontwerp met
                    voldoende ruimte voor kleding en accessoires. Een must-have voor een
                    georganiseerde en opgeruimde slaapkamer.
                </p>
                <button className={styles['kast-btn']}>customize</button>
            </div>
            <div className={styles.ad}>
                <p className={styles['ad-head']}>EINDE VAN HET SEIZOEN UITVERKOOP</p>
                <p className={styles['ad-sub']}>35% KORTING</p>
                <img src="/product image/Image 96ad.png" className={styles['ad-img']} />
            </div>
           
        </div>
    );
};
