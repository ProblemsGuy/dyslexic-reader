import "../css/Options.css";

const Options = () => {
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const alphabetColomn = alphabet.map((element) => (
        <>
            <div className=""
                style={{
                    display: "flex",
                    justifyContent: "start",
                    margin: "2px",
                    maxHeight: "16px",
                }}
            >
                <p className="pe-1">{element.toUpperCase()}</p>
                <div
                    className="color-square"
                    style={{
                        width: "16px",
                        height: "16px",
                        backgroundColor: "#ff6347",
                    }}
                ></div>
            </div>
        </>
    ));

    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col">{alphabetColomn}</div>
                    <div className="col">
                        <div>
                            <input id="flickering" type="checkbox"></input>
                            <label for="flickering">Flickering</label>
                        </div>
                        <div>
                            <input id="jumping" type="checkbox"></input>
                            <label for="jumping">Jumping</label>
                        </div>
                        <div>
                            <input id="hazing" type="checkbox"></input>
                            <label for="hazing">Hazing</label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Options;
