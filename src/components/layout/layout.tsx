import classNames from 'classnames';
import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

export interface LayoutProps {
  className?: string;
}

export const Layout = ({ className }: LayoutProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Navbar />
      <main>
        <Outlet />
      </main>

    </div>
  );
};