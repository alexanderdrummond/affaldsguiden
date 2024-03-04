import styles from './MainLayout.module.scss';
import Header from '../Static/Header/Header';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
