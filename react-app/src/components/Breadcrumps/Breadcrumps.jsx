import { Link } from "react-router-dom";
import "./Breadcrumps.css"
function Breadcrumps() {
    return (
        <div className="breadcrumps">
            <nav className="breadcrumps__nav">
                <Link className="breadcrumps__link" id="bc" to="!">Электроника</Link>
                <span> {`>`} </span>
                <Link className="breadcrumps__link" to="!">Смартфоны и гаджеты</Link>
                <span> {`>`} </span>
                <Link className="breadcrumps__link" to="!">Мобильные телефоны</Link>
                <span> {`>`} </span>
                <Link className="breadcrumps__link" to="!">Apple</Link>
            </nav>
        </div>
    )
};
export default Breadcrumps;