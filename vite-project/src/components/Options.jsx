import "../css/Options.css";
import Tooltip from "./Tooltip";
import AlphabetOption from "./AlphabetOption";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Options = ({ alphabet, setAlphabet }) => {
    const options = alphabet.options;

    const saveDataToCookie = (data) => {
        const inputData = JSON.stringify(data);
        Cookies.set("dyslexic-reader-data", inputData, { expires: 7 });
    };

    const submitButton = (event) => {
        saveDataToCookie(alphabet);
    };

    const onChange = (event) => {
        setAlphabet((alpha) => ({
            ...alpha,
            options: {
                ...alpha.options,
                [event.target.id]: event.target.checked,
            },
        }));
    };

    const alphabetKeys = Object.keys(alphabet.characters);
    const alphabetKeysNoDupes = [
        ...new Set(alphabetKeys.map((element) => element.toUpperCase())),
    ];
    const alphabetColomn = alphabetKeysNoDupes.map((element) => (
        <AlphabetOption
            char={element}
            alphabet={alphabet}
            setAlphabet={setAlphabet}
        />
    ));

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">{alphabetColomn}</div>

                    <div className="col">
                        <Tooltip text="Enables Coloring: Letters will be colored in accordance with the set colors on the left, otherwise they will be white if this box is unchecked.">
                            <div>
                                <input
                                    id="coloring"
                                    checked={options.coloring}
                                    onChange={onChange}
                                    type="checkbox"
                                ></input>
                                <label htmlFor="coloring">Colouring</label>
                            </div>
                        </Tooltip>
                        <Tooltip text="Enables Flickering: Letters will flicker and change, distorting at random before returning to their original state.">
                            <div>
                                <input
                                    id="flickering"
                                    checked={options.flickering}
                                    onChange={onChange}
                                    type="checkbox"
                                ></input>
                                <label htmlFor="flickering">Flickering</label>
                                <div>
                                    <label htmlFor="flickerRate">
                                        Flicker Rate:
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="flickerRate"
                                        min="0"
                                        max="0.3"
                                        step="0.01"
                                    ></input>
                                </div>
                            </div>
                        </Tooltip>

                        <Tooltip text="Enables Jumping: Words will jump forward to a line or two ahead of where they are currently located, before jumping back again.">
                            <div>
                                <input
                                    id="jumping"
                                    checked={options.jumping}
                                    onChange={onChange}
                                    type="checkbox"
                                ></input>
                                <label htmlFor="jumping">Jumping</label>
                                <div>
                                    <label htmlFor="flickerRate">
                                        Jumping Rate:
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="jumpRate"
                                        min="0"
                                        max="0.3"
                                        step="0.01"
                                    ></input>
                                </div>
                            </div>
                        </Tooltip>
                        <Tooltip text="Enables Hazing: Makes it so words will appear fuzzy unless the mouse cursor is brought close to them.">
                            <div>
                                <input
                                    id="hazing"
                                    checked={options.hazing}
                                    onChange={onChange}
                                    type="checkbox"
                                ></input>
                                <label htmlFor="hazing">Hazing</label>
                                <div>
                                    <label htmlFor="hazeCone">
                                        Haze Cone:
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="hazeCone"
                                        min="0"
                                        max="0.3"
                                        step="0.01"
                                    ></input>
                                </div>
                            </div>
                        </Tooltip>
                        <Tooltip text="Saves the options state to the browser. By clicking this button you are accepting using cookies.">
                            <button
                                onClick={submitButton}
                                style={{ marginTop: "10px" }}
                            >
                                Submit
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Options;
