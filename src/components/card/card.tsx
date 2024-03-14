import classNames from 'classnames';
import styles from './card.module.scss';

interface CardProps {
    className?: string;
    imageUrl: string;
    title: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, imageUrl, title }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['card-div']}>
                <img
                    src={imageUrl}
                    alt=""
                    className={styles['prod-img']}
                />
                <p className={styles['product-title']}>{title}</p>
            </div>
        </div>
    );
};
