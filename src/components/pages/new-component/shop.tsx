import classNames from 'classnames';
import styles from './shop.module.scss';
import { Navbar } from '../../navbar/navbar';
import { Shopcard } from '../../shopcard/shopcard';
import products from '../../card/product.json';
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
            <Navbar className={styles['nav-shop']} />
            <p
                style={{
                    color: 'black',
                    fontSize: 48,
                    fontFamily: 'Inria Serif',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    width: '700',
                    marginLeft: 39,
                    marginTop: 30,
                }}
            >
                Choose any of the product to customise
            </p>
            <div className={styles['shop-div']}>
                {favoriteItems?.length > 0 &&
                    favoriteItems.map((item) => (
                        <Shopcard key={item.id} imageUrl={item.image} title={item.name} />
                    ))}
            </div>
        </div>
    );
};
