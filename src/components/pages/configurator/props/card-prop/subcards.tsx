import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
    title: string;
    image: string;
    width: string;
    height: string;
    imageClassName?: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, width, height,  onClick }) => {
    return (
        <div className={styles.card} onClick={onClick} style={{ width, height }}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{title}</p>

            </div>
        </div>
    );
};

export default Card;
