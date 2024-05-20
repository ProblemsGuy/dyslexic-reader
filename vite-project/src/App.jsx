import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputTextPage from "./components/InputTextPage.jsx";
import Header from "./components/Header.jsx";
import TextDisplay from "./components/TextDisplay.jsx";
import Options from "./components/Options.jsx";
import alpha from "./characters.json";

function App() {
    const [options, setOptions] = useState({flickering: true, coloring: true,jumping: true, hazing: true});
    const [text, setText] = useState("This is placeholder text intended to demonstrate the capabilities of this code and to see if the hazing effect is working properly or not.")
    const [alphabet, setAlphabet] = useState(alpha)

    return (
        <>
            <Router>
                <Header />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<InputTextPage setText={setText}/>} />
                        <Route path="/d" element={<TextDisplay options={options} text={text} alphabet={alphabet}/>} />
                        <Route path="/o" element={<Options options={options} setOptions={setOptions} alphabet={alphabet} setAlphabet={setAlphabet} />}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
