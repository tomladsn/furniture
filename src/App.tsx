import { useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Favoriteslider } from './components/favoriteslider/favoriteslider';
import { AboutAdKast } from './components/about-ad-kast/about-ad-kast';
import { ContactForm } from './components/contact-form/contact-form';
import { Footer } from './components/footer/footer';
import Navbar_module from './components/navbar/navbar.module.scss';
function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Favoriteslider className={styles['fav-slider']} />
            <AboutAdKast />
            <ContactForm />
            <Footer  className={styles['footer11']}/>
        </div>
    );
}

export default App;
