import classNames from 'classnames';
import styles from './navbar.module.scss';
import { FiX } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
export interface NavbarProps {
    className?: string;
}


export const Navbar = ({ className }: NavbarProps) => {

        const [isMenuOpen, setMenuOpen] = useState(false); 
        const toggleMenu = () => {
          setMenuOpen(!isMenuOpen);
        };
    return (     
        <div className={classNames(styles.root, className)}>

{isMenuOpen && (<div className={classNames(styles.containtermob, { [styles.show]: isMenuOpen })} >
<Link to="/"><div className={styles.homemob}>Home</div></Link>
  <div  className={classNames(styles.line)}></div>
  <Link to="/shop"><div className={styles.checkoutmob}>Producten</div></Link>
  <Link to="/checkout"><div className={styles.configmob}>Checkout</div>  </Link>
  <Link to="/checkout">
      <img src="/Image6.svg" alt="" className={styles.navicon2} />
      </Link>
  
</div>            )}

            <nav className={styles.navbar}>
                <img
                    src="/Capture-removebg-preview 2.png"
                    alt=""
                    className={styles.logo}
                />
                <div className={styles.iconWrapper}>
                {!isMenuOpen ? (
          <FiAlignJustify className={styles.mobclick} onClick={toggleMenu} />
        ) : (
          <FiX className={styles.reclick} onClick={toggleMenu} />
        )}
     </div>




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
