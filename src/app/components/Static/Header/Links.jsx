import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    if (
      path === "/sortering" &&
      (pathname === "/sorting" || pathname.startsWith("/sorting/"))
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
      <a
        href="/genbrugsstationer"
        className={isActive("/genbrugsstationer") ? "active" : ""}
      >
        Genbrugsstationer
      </a>
      <a
        href="/bestil-beholder"
        className={isActive("/bestil-beholder") ? "active" : ""}
      >
        Bestil beholder
      </a>
    </div>
  );
};

export default Links;
