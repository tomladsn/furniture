import classNames from 'classnames';
import styles from './navbar.module.scss';
import { IoMenuOutline } from 'react-icons/io5';
export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.navbar}>
                <img
                    src="../src/assets/Capture-removebg-preview 2.png"
                    alt=""
                    className={styles.logo}
                />
                <IoMenuOutline className={styles['menu-mod-icon']} />
                <p className={styles.navmenu}>Home</p>
                <a href="/configurator">
                    <p className={styles.navmenu1}>Aanpassen</p>
                </a>
                <a href="/shop">
                    <p className={styles.navmenu2}>Producten</p>
                </a>
                <a href="/checkout">
                    {' '}
                    <img src="../src/assets/Image6.svg" alt="" className={styles.navicon} />
                </a>
            </nav>
        </div>
    );
};
