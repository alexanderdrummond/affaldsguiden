import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

export const RouterWatch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (pathname === "/auth" && !user) {
      if (typeof window !== "undefined") {
        const referrer = document.referrer;
        localStorage.setItem("lastPage", referrer);
      }
    }

    console.log("nav to:", pathname, "from", document.referrer);
    console.log("params:", searchParams);
    console.log("user:", user);
  }, [pathname, searchParams, user]);

  return null;
};
