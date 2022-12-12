// icons import
import { AiFillHome } from "react-icons/ai";
import { FaBookOpen, FaWallet, FaUserAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";

// styles import
import "./mobilefooter.css";

const MobileFooter = () => {
    return (
        <div className="mobile__footer">
            <div className="mobile__footer__logo">
                <AiFillHome color="#EA1C1C" />
                <FaBookOpen />
                <FaWallet />
                <FaUserAlt />
                <RiEditBoxFill />
            </div>
        </div>
    );
};

export default MobileFooter;
