"use client";

import { motion } from "framer-motion";
import styles from "./MainLayout.module.scss";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import { UserProvider } from "@/app/context/UserContext";
import { RouterWatch } from "../RouterWatch/RouterWatch";
import { NotificationProvider } from "@/app/context/NotificationContext";
import withDataPreload from "@/app/context/dataPreload";

function MainLayout({ children }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <UserProvider>
      <RouterWatch />
      <NotificationProvider>
        <div className={styles.layout}>
          <Header />
          <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {children}
          </motion.main>
          <Footer />
        </div>
      </NotificationProvider>
    </UserProvider>
  );
}

export default withDataPreload(MainLayout);
