import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { useNotification } from "@/app/context/NotificationContext";

const Login = () => {
  const router = useRouter();
  const { user, setUser, loading } = useUser();
  const { showNotification } = useNotification();

  const handleSignOut = () => {
    if (window.confirm("Er du sikker på, at du vil logge ud?")) {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      showNotification("success", "Du er nu logget ud.");
      router.push("/");
    }
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
