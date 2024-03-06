import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

export const RouterWatch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    console.log("Navigated to:", pathname, searchParams);
    console.log("Current User:", user);
  }, [pathname, searchParams, user]);

  return null;
};
