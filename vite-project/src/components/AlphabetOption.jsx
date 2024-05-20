
import { useState } from "react";

const AlphabetOption = ({ char, alphabet, setAlphabet }) => {

    const handleColorChange = (event) => {
        setAlphabet((characters) => ({
            ...characters,
            [event.target.id]: event.target.value,
        }));
    }

    return (
        <>
            <div
                className=""
                style={{
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "20px",
                    maxHeight: "16px",
                }}
            >
                <p className="pe-1">{char}</p>
                <form>
                    <input
                        type="color"
                        class="form-control form-control-color"
                        id={char}
                        value={alphabet[char]}
                        onChange={handleColorChange}
                    />
                </form>
            </div>
        </>
    );
};

export default AlphabetOption;
