import classNames from 'classnames';
import styles from './navbar.module.scss';
import { IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
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
                    src="/Capture-removebg-preview 2.png"
                    alt=""
                    className={styles.logo}
                />
                <div className={styles.navmen}>
                <Link to="/">
        <p className={styles.navmenu}>Home</p>
      </Link>
      <Link to="/configurator">
        <p className={styles.navmenu1}>Aanpassen</p>
      </Link>
      <Link to="/shop">
        <p className={styles.navmenu2}>Producten</p>
      </Link>
      <Link to="/checkout">
      <img src="/Image6.svg" alt="" className={styles.navicon} />
      </Link>
                </div>
            </nav>
        </div>
    );
};
