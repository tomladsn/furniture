import classNames from 'classnames';
import styles from './favoriteslider.module.scss';
import { Card } from '../card/card';
import { FavoriteCard } from '../favorite-card/favorite-card';
import products from '../card/product.json';
import React, { useState } from 'react';

export interface FavoritesliderProps {
    className?: string;
}
interface ProductItem {
    id: number;
    name: string;
    image: string;
    favorite: boolean;
    discount: string;
}
type favoriteProducts = Array<ProductItem>;

const favoriteItems: favoriteProducts = products.products.filter((item) => item.favorite === true);

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Favoriteslider = ({ className }: FavoritesliderProps) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlideLeft = () => {
        setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleSlideRight = () => {
        setSlideIndex((prevIndex) => Math.min(prevIndex + 1, favoriteItems.length - 4));
    };
    return (
        <div className={classNames(styles.root, className)}>
            <p className={styles['favorite-heading']}>Onze favorieten</p>
            <p className={styles['fav-sub']}>Onze wekelijkse keuzes vind je hier.</p>
            <div className={styles['fav-prod']}>
                <div className={styles['favorite-card']}>
                    {favoriteItems?.length > 0 &&
                        favoriteItems
                            .slice(slideIndex, slideIndex + 4)
                            .map((item) => (
                                <FavoriteCard
                                    key={item.id}
                                    imageUrl={item.image}
                                    title={item.name}
                                    discount={item.discount}
                                />
                            ))}
                </div>
            </div>
        </div>
    );
};
