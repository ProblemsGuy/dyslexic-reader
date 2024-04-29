import "../css/Header.css";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand">Dyslexic Reader</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link">
                            Input
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Options
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
