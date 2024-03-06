"use client";

import styles from "./MainLayout.module.scss";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import { UserProvider } from "@/app/context/UserContext";
import { RouterWatch } from "../RouterWatch/RouterWatch";
import { NotificationProvider } from "@/app/context/NotificationContext";

export default function Layout({ children }) {
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
