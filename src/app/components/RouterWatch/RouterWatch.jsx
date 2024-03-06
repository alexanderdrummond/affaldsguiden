import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

export const RouterWatch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    console.log("nav to:", pathname, searchParams);
    console.log("user:", user);
  }, [pathname, searchParams, user]);

  return null;
};
