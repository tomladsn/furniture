import classNames from 'classnames';
import styles from './header.module.scss';
import products from '../card/product.json';
import { Card } from '../card/card';
export interface HeaderProps {
    className?: string;
}
interface ProductItem {
    id: number;
    name: string;
    image: string;
    featured?: boolean;
}
type FeaturedProducts = Array<ProductItem>;

const filteredFeaturedItems: FeaturedProducts = products.products.filter(
    (item) => item.featured === true,
);
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <header className={styles.header}>
                <div className={styles['header-big']}> Je eigen meubels oet Twente</div>
                <p className={styles['header-big1']}>
                    Ontwerp je eigen meubel op jou wensen en laat dit in onze werkplaats maken.
                </p>
                <button className={styles['header-btn1']}>Winkel nu</button>
                <button className={styles['header-btn2']}>Personaliseren</button>
            </header>
            <div className={styles['feature-prod']}>
                <p className={styles['featured-text']}>Uitgelicht</p>
                {filteredFeaturedItems?.length > 0 &&
                    filteredFeaturedItems.map((item) => (
                        <Card className={styles['featured-card']} key={item.id} imageUrl={item.image} title={item.name} />
                    ))}
            </div>
        </div>
    );
};
