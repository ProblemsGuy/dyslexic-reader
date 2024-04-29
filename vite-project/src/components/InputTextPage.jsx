import "../css/InputTextPage.css";

const InputTextPage = () => {
    const submitInput = () => {};

    return (
        <>
            <h1>Dyslexic Reader</h1>
            <h2 className="font-weight-bold">Input Text</h2>
            <div className="input-container">
                <textarea id="input" name="input" rows="8" cols="60"></textarea>
            </div>
            <div className="btn-container">
                <button className="btn btn-light" onClick={submitInput}>
                    Submit
                </button>
            </div>
        </>
    );
};

export default InputTextPage;
