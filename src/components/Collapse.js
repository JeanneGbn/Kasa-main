import { useState } from "react";
import Arrow from '../pictures/arrow_open.png';
import '../SASS/collapse.scss';

function Collapse ({ children, text }){
    const [open, setOpen] = useState(false)
    const [turn, setTurn] = useState(false)
    const handleClick = () => {
        setOpen(!open);
        setTurn(!turn);
    }
    return (
        <div className="collapse">
            <div className="collapse__style">
                <p className="collapse__title">{text}</p>
                <img src={Arrow} onClick={handleClick} className={turn ? "rotated" : "arrow"} />
            </div>
            <div className={`collapse__text ${open ? "open" : "close"}`}>
                {children}
            </div>
        </div >
    );
}
export default Collapse;