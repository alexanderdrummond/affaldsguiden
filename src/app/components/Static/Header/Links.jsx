import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    if (
      path === "/sortering" &&
      (pathname === "/sorting" || pathname.startsWith("/sorting/"))
    ) {
      return true;
    } else if (
      path === "/stations" &&
      (pathname === "/stations" || pathname.startsWith("/stations/"))
    ) {
      return true;
    }
    return pathname === path;
  };

  return (
    <div className="header-links">
      <a href="/" className={isActive("/") ? "active" : ""}>
        Forside
      </a>
      <a href="/sorting" className={isActive("/sortering") ? "active" : ""}>
        Sortering
      </a>
      <a href="/stations" className={isActive("/stations") ? "active" : ""}>
        Genbrugsstationer
      </a>
      <a href="/order" className={isActive("/order") ? "active" : ""}>
        Bestil beholder
      </a>
    </div>
  );
};

export default Links;
