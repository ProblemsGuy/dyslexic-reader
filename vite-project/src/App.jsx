import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputTextPage from "./components/InputTextPage.jsx";
import Header from "./components/Header.jsx";
import TextDisplay from "./components/TextDisplay.jsx";
import Options from "./components/Options.jsx";

function App() {
    return (
        <>
            <Router>
              
                <Header />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<InputTextPage />} />
                        <Route path="/d" element={<TextDisplay />} />
                        <Route path="/o" element={<Options />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
