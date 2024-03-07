"use client";

import styles from "./MainLayout.module.scss";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import { UserProvider } from "@/app/context/UserContext";
import { RouterWatch } from "../RouterWatch/RouterWatch";
import { NotificationProvider } from "@/app/context/NotificationContext";
import withDataPreload from "@/app/context/dataPreload";

function MainLayout({ children }) {
  return (
    <UserProvider>
      <RouterWatch />
      <NotificationProvider>
        <div className={styles.layout}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </NotificationProvider>
    </UserProvider>
  );
}

export default withDataPreload(MainLayout);
