import classNames from 'classnames';
import styles from './shop.module.scss';
import { Navbar } from '../../navbar/navbar';
import { Shopcard } from '../../shopcard/shopcard';
import products from '../../card/product.json';
import { Footer } from '../../footer/footer';
export interface ShopProps {
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

const favoriteItems: favoriteProducts = products.products;
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Shop = ({ className }: ShopProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p
            className={styles['text-shop']}

            >
                Choose any of the product to customise
            </p>
            <div className={styles['shop-div']}>
                {favoriteItems?.length > 0 &&
                    favoriteItems.map((item) => (
                        <Shopcard key={item.id} imageUrl={item.image} title={item.name} />
                    ))}
            </div>
            <Footer  className={styles['footer11']}/>
        </div>
    );
};
