import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputTextPage from "./components/InputTextPage.jsx";
import Header from "./components/Header.jsx";
import TextDisplay from "./components/TextDisplay.jsx";
import Options from "./components/Options.jsx";
import alpha from "./characters.json";
import Cookies from "js-cookie";

function App() {
    const [text, setText] = useState(
        "This is placeholder text intended to demonstrate the capabilities of this code and to see if the hazing effect is working properly or not."
    );
    const [alphabet, setAlphabet] = useState(alpha);

    const getDataFromCookies = () => {
        const cookieData = Cookies.get("dyslexic-reader-data");
        return cookieData ? JSON.parse(cookieData) : null;
    };

    useEffect(() => {
        const retrievedAlphabet = getDataFromCookies();
        retrievedAlphabet ? setAlphabet(retrievedAlphabet) : null;
        console.log(retrievedAlphabet);
    }, []);

    return (
        <>
            <Router>
                <Header />
                <div className="main">
                    <Routes>
                        <Route
                            path="/"
                            element={<InputTextPage setText={setText} />}
                        />
                        <Route
                            path="/d"
                            element={
                                <TextDisplay text={text} alphabet={alphabet} />
                            }
                        />
                        <Route
                            path="/o"
                            element={
                                <Options
                                    alphabet={alphabet}
                                    setAlphabet={setAlphabet}
                                />
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
