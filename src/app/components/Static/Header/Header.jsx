import Logo from "./Logo"
import Login from "./Login"
import Links from "./Links"
import "../../../styles/Header.scss"


const Header = () => (
    <div className="header">
      <Logo />
      <Links />
      <Login />
    </div>
  );
  
  
  export default Header;