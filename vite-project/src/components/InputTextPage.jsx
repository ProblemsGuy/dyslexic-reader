import { Link } from "react-router-dom";
import "../css/InputTextPage.css";

const InputTextPage = () => {
    const submitInput = () => {};

    return (
        <>
            <h1 className="title">Dyslexic Reader</h1>
            <h2 className="input-text">Input Text</h2>
            <div className="input-container">
                <textarea id="input" name="input" rows="8" cols="60"></textarea>
            </div>
            <div className="btn-container">
                <Link to="/d">
                    <button className="btn btn-light" onClick={submitInput}>
                        Submit
                    </button>
                </Link>
            </div>
        </>
    );
};

export default InputTextPage;
