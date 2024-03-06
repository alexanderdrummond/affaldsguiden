"use client";

import { UserProvider } from "@/app/context/UserContext";
import { RouterWatch } from "../RouterWatch/RouterWatch";
import { NotificationProvider } from "@/app/context/NotificationContext";

export default function AuthWrapper({ children }) {
  return (
    <UserProvider>
      <RouterWatch />
      <NotificationProvider>{children}</NotificationProvider>
    </UserProvider>
  );
}
