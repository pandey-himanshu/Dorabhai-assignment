// icons import
import { BsCameraVideo } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";

// styles import
import "./coursecard.css";

const CourseCard = ({ course }) => {
    const { name, img, content, videos, notes, educator } = course;

    return (
        <div className="course__card">
            <div className="course__card__header">
                <div className="course__card__header__img">
                    <img src={img} alt="" />
                </div>
                <div className="course__card__header__description">
                    <h1>{name}</h1>
                    <p>
                        <span className="course__card__header__description__span1">
                            Also known as :{" "}
                        </span>
                        {content}
                        <span className="course__card__header__description__span2">
                            see more
                        </span>
                    </p>
                </div>
            </div>
            <div className="course__card__footer">
                <div className="course__card__footer__element">
                    <div className="course__card__footer__element__div1">
                        <BsCameraVideo />
                    </div>
                    <p>Videos ({videos})</p>
                </div>
                <div className="course__card__footer__element">
                    <div className="course__card__footer__element__div2">
                        <HiOutlineDocument />
                    </div>
                    <p>Notes ({notes})</p>
                </div>
                <div className="course__card__footer__element">
                    <div className="course__card__footer__element__div3">
                        <FaRegUser />
                    </div>
                    <p>Educator ({educator})</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
