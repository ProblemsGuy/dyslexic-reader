import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/InputTextPage.css";

const InputTextPage = ({ setText }) => {
    const defaultText = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can't."
    const [inputText, setInputText] = useState(defaultText);
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
                    defaultValue={defaultText}
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
