import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/InputTextPage.css";

const InputTextPage = ({ setText }) => {
    const [inputText, setInputText] = useState("");
    const [failedText, setfailedText] = useState(false);
    let containsText = inputText != "";

    const submitInput = (event) => {
        setText(inputText);
    };
    const handleTextChange = (event) => {
        const currentState = event.target.value;
        setInputText(currentState);
        containsText = inputText != "";
    };
    const failedSubmit = (event) => {
        setfailedText(true);
    };

    const maxCharLength = 500;

    return (
        <>
            <h1 className="title">Dyslexic Reader</h1>
            <h2 className="input-text">Input Text</h2>
            <p>
                Characters: {inputText.length}/{maxCharLength}
            </p>
            <div className="input-container">
                <textarea
                    id="input"
                    name="input"
                    rows="8"
                    cols="60"
                    onChange={handleTextChange}
                    maxLength={maxCharLength}
                    required
                ></textarea>
            </div>
            <div className="btn-container">
                {containsText ? (
                    <Link to="/d">
                        <button className="btn btn-light" onClick={submitInput}>
                            Submit
                        </button>
                    </Link>
                ) : (
                    <button className="btn btn-light" onClick={failedSubmit}>
                        Submit
                    </button>
                )}
            </div>
            {failedText ? (
                <p style={{ color: "red" }}>
                    *Requires some kind of text input to work
                </p>
            ) : (
                <></>
            )}
        </>
    );
};

export default InputTextPage;
