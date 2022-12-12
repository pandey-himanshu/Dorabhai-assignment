// icon import
import { AiOutlineInfoCircle } from "react-icons/ai";

// styles import
import './librarycard.css'

const LibraryCard = ({ course }) => {
    const { name, type, color } = course;

    return (
        <div className="library__card" style={{ backgroundColor: color }}>
            <h1>{name}</h1>
            <div className="library__card__footer ">
                <div><p>{type}</p></div>
                <AiOutlineInfoCircle />
            </div>
        </div>
    );
};

export default LibraryCard;
