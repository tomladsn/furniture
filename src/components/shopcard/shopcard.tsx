import classNames from 'classnames';
import styles from './shopcard.module.scss';

export interface ShopcardProps {
    className?: string;
    imageUrl: string;
    title: string;
}


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Shopcard = ({ className, imageUrl, title }: ShopcardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container} >
                 <img
                    src={imageUrl}
                    alt=""
                    className={styles['card-img']}
                />
                 </div>
                 <p className={styles['card-title']}>{title}</p>
        </div>
    );
};
