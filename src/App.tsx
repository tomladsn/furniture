import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
function App() {
   

    return (
        <div className={styles.App}>
            <Navbar />
            <Header />
               </div>
    );
}

export default App;
