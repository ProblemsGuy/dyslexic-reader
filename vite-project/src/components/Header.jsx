import "../css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand">Dyslexic Reader</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link to="/" style={{ textDecoration: "none", color:"black", padding:"4px" }}>
                            Input
                        </Link>
                        <Link to="/o" style={{ textDecoration: "none", color:"black", padding:"4px" }}>
                            Options
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
