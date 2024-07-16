import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
    title: string;
    image: string;
    width: string;
    height: string;
    imageClassName?: string;
}

const Card: React.FC<CardProps> = ({ title, image, width, height }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{title}</p>

            </div>
        </div>
    );
};

export default Card;
