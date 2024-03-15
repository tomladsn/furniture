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
                <p>This is a paragraph.</p>
                <p>This is a paragraph.</p>
                <p>This is a paragraph.</p>
                <div className={styles.line} />

                <img
                    src="/src/assets/product image/Image 129about2.png"
                    className={styles.imgabout1}
                />
                <img
                    src="/src/assets/product image/Image 130about1.png"
                    className={styles.imgabout2}
                />
            </div>
            <div className={styles.kast}>
                <img src="/src/assets/product image/Image 152Kast.png" />
                <p>This is a paragraph.</p>
                <p>This is a paragraph.</p>
                <button />
            </div>
            <div className={styles.ad}>
                <p>This is a paragraph.</p>
                <p>This is a paragraph.</p>
                <img src="/src/assets/product image/Image 96ad.png" />
            </div>
            <div className={styles.newsletterDiv}>
                <div className={styles['newsletter-subdiv']}>
                    <div className={styles.newslettersubsubdiv}>
                        <img src="/src/assets/product image/Image 85deliverynewsletter.png" />
                        <p>This is a paragraph.</p>
                        <p>This is a paragraph.</p>
                        <img src="/src/assets/product image/Image 87newsletter.png" />
                        <p>This is a paragraph.</p>
                        <p>This is a paragraph.</p>
                        
                        <p>This is a paragraph.</p>
                        <p>This is a paragraph.</p>
                        <input />
                    </div>
                </div>
            </div>
        </div>
    );
};
