
"use client";

import styles from './MainLayout.module.scss';
import Header from '../Static/Header/Header';
import Footer from '../Static/Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
