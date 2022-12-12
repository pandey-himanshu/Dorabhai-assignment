// styles import 
import "./navbar.css";

// assets import 
import logo from "./../../assets/logosymbol.png";
import name from "./../../assets/logo.png";

const Navbar = () => {
    return (
        <nav>
            <div className="nav_logo">
                <img src={logo} className="nav_logo_logo" alt="" />
                <img src={name} className="nav_logo_name" alt="" />
            </div>
        </nav>
    );
};

export default Navbar;
