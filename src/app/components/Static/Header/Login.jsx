import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

const Login = () => {
  const router = useRouter();
  const { user, setUser } = useUser();

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const handleLoginRedirect = () => {
    router.push("/auth");
  };

  const imgStyle = {
    width: "10px",
    height: "auto",
    cursor: "pointer",
  };

  return (
    <div
      className="header-login"
      onClick={user ? handleSignOut : handleLoginRedirect}
    >
      <img
        src={user ? "/out.svg" : "/login.svg"}
        alt={user ? "Sign Out" : "Login"}
        style={imgStyle}
      />
    </div>
  );
};

export default Login;
