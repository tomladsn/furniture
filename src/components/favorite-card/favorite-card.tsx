import classNames from 'classnames';
import styles from './favorite-card.module.scss';

export interface FavoriteCardProps {
    className?: string;
    imageUrl: string;
    title: string;
    discount: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FavoriteCard = ({ className, imageUrl, title, discount }: FavoriteCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.favoritecard}>
                <p className={styles.discount}>{discount}</p>
                <img
                    src={imageUrl}
                    alt=""
                    className={styles['card-img']}
                />
                <p className={styles['card-title']}>{title}</p>
            </div>
        </div>
    );
};
