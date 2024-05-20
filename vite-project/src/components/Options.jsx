import "../css/Options.css";
import Tooltip from "./Tooltip";
import AlphabetOption from "./AlphabetOption"

const Options = ({ options, setOptions, alphabet, setAlphabet }) => {
    const onChange = (event) => {
        setOptions((options) => ({
            ...options,
            [event.target.id]: event.target.checked,
        }));
    };

    const alphabetKeys = Object.keys(alphabet);
    const alphabetColomn = alphabetKeys.map((element) => (
        <AlphabetOption char={element} alphabet={alphabet} setAlphabet={setAlphabet}/>
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
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Options;
