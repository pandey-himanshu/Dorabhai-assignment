// icons import
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen, FaWallet, FaUserAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";

// styles import 
import "./sidebar.css";

// assets import
import user from "./../../assets/user.png";
import playstore from "./../../assets/playstore.png";
import facebook from "./../../assets/facebook.png";
import instagram from "./../../assets/instagram.png";
import youtube from "./../../assets/youtube.png";
import twitter from "./../../assets/twitter.png";

const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className="sidebar_user">
                <div className="sidebar_user_bubble1"></div>
                <div className="sidebar_user_bubble2"></div>
                <div className="sidebar_user_bubble3"></div>
                <div className="sidebar_user_user">
                    <p>
                        Good Morning <br />
                        Mithilesh
                    </p>
                    <img src={user} alt="" />
                </div>
            </div>
            <ul>
                <li>
                    <AiFillHome color="#ea1c1c" />{" "}
                    <span style={{ color: "#ea1c1c" }}>Home</span>
                </li>
                <li>
                    <FaBookOpen /> <span>Library</span>
                </li>
                <li>
                    <FaWallet /> <span>My Courses</span>
                </li>
                <li>
                    <FaUserAlt /> <span>Account</span>
                </li>
                <li>
                    <RiEditBoxFill /> <span>Blog</span>
                </li>
            </ul>
            <div className="sidebar_social">
                <p>Follow us on</p>
                <div className="sidebar_social_handles">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                </div>
                <img
                    className="sidebar_social_playstore"
                    src={playstore}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Sidebar;
