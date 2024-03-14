import classNames from 'classnames';
import styles from './favoriteslider.module.scss';
import { Card } from '../card/card';

export interface FavoritesliderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Favoriteslider = ({ className }: FavoritesliderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <Card />
        </div>
    );
};
