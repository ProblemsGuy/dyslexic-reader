import React, { useState, useEffect } from "react";
import "../css/TextDisplay.css";


const TextDisplay = ({ options, text, alphabet }) => {
    const [glitchedText, setGlitchedText] = useState(text);
    const alphabetKeys = Object.keys(alphabet);

    useEffect(() => {
        let glitchInterval;
        let jumpInterval;
        let newGlitchedText = glitchedText;
        let preserveText = glitchedText;
    
        if (options.flickering) {
            glitchInterval = setInterval(() => {
                newGlitchedText = newGlitchedText.split("").map((char, index) => {
                    if (Math.random() < 0.02 && alphabetKeys.includes(char)) {
                        return String.fromCharCode(
                            Math.floor(Math.random() * 26) + "a".charCodeAt(0)
                        );
                    } else {
                        return preserveText[index];
                    }
                });
                newGlitchedText = newGlitchedText.join("");
            }, 600);
        }
    
        if (options.jumping) {
            jumpInterval = setInterval(() => {
                const placeholderTextWordList = preserveText.split(" ");
                const textWordList = newGlitchedText.split(" ");
                textWordList.forEach((word, index) => {
                    if (Math.random() < 0.02) {
                        let charLengthForward = 0;
                        const averageLineCharLength = 38;
                        let i = index;
                        while (
                            charLengthForward < averageLineCharLength &&
                            i > 0
                        ) {
                            charLengthForward += textWordList[i].length +1;
                            i--;
                        }
                        [textWordList[i], textWordList[index]] = [
                            textWordList[index],
                            textWordList[i],
                        ];
                    } else {
                        textWordList[index] = placeholderTextWordList[index];
                    }
                });
                newGlitchedText = textWordList.join(" ");
            }, 900);
        }
        
        const setterInterval = setInterval(() => {
            setGlitchedText(newGlitchedText);
        }, 100);

        return () => {
            clearInterval(glitchInterval);
            clearInterval(jumpInterval);
            clearInterval(setterInterval);
        };
    }, [options.flickering, options.jumping]);

   

    const [distances, setDistances] = useState([]);

    const handleMouseMove = (event) => {
        const childElements = Array.from(event.target.children);
        childElements.map((element, index) => {
            //Where's the mouse?
            const cursorX = event.clientX;
            const cursorY = event.clientY;

            //Where is the mouse?
            const spanElement = document.getElementById(`letter${index}`);

            //Where is the span?
            const spanRect = spanElement.getBoundingClientRect();
            const spanX = spanRect.left + window.scrollX;
            const spanY = spanRect.top + window.scrollY;

            //What is the distance between the span and the mouse?
            const deltaX = cursorX - spanX;
            const deltaY = cursorY - spanY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            //Set the distance into state so it can be used later to encode text blur
            setDistances((prevDistances) => {
                const newDistances = [...prevDistances];
                newDistances[index] = distance;
                return newDistances;
            });
        });
    };

    const dontHandleMouseMove = (event) => {};

    const textFullStatement = glitchedText;
    const textWordList = textFullStatement.split(" ");
    const textLetterList = textWordList.map((element) => element.split(""));

    const viewRadius = 250;
    const maxBlur = 8;
    const minBlur = 1;

    //Default color, what's used if coloring isn't selected
    let letterColor = "#ffffff";
    //Gives the elements all a key
    let key = 0;
    //Sets the default blur
    let textBlur = options.hazing ? maxBlur : minBlur;
    const [mouseOut, setMouseOut] = useState(true);
    const handleMouseLeave = (event) => {
        setMouseOut(true);
    };
    const handleMouseEnter = (event) => {
        setMouseOut(false);
    };

    const displayText = textLetterList.map((word) => {
        const letters = word.map((letter) => {
            if (options.coloring) {
                //Sets the base color, if the character isn't in the alphabet.
                letterColor = "#ffffff";
                //The color is set in accordance with the coloring in the alphabet.
                if (alphabet.hasOwnProperty(letter)) {
                    letterColor = alphabet[letter];
                }
            }

            //Setting the text blur if blurring is enabled and if there is a distance assigned to a given letter.
            if (options.hazing && !mouseOut) {
                /* 
                    If the mouse is further away than the "viewRadius", the haze 
                    defaults to maxBlur (set as 8 by default). If the mouse is on 
                    top of or very close, the blur remains at minBlur to avoid 
                    redundancy and possible glitches.Otherwise, the blur is equal
                    to the proportion of distance between the mouse and the given 
                    character. This creates a nice blurring effect. 
                */
                textBlur = Math.min(
                    Math.max(maxBlur * (distances[key] / viewRadius), minBlur),
                    maxBlur
                );
            }
            //The information is wrapped in a string to be displayed using CSS
            const textShadow = `0 0 ${textBlur}px ${letterColor}`;

            //A span containing a single letter with all encoded data is returned.
            return (
                <span
                    key={key}
                    id={`letter${key++}`}
                    style={{ textShadow: textShadow }}
                >
                    {letter}
                </span>
            );
        });

        //All letters in a word are encoded, and then a space is added to the end.
        //A word here is understood to be any string of characters that ends in a space.
        return (
            <>
                {letters}
                <span key={key} id={`letter${key++}`} className="space">
                    {" "}
                </span>
            </>
        );
    });

    return (
        <>
            <div className="text-display" style={{ userSelect: "none" }}>
                <p
                    onMouseMove={
                        options.hazing ? handleMouseMove : dontHandleMouseMove
                    }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {displayText}
                </p>
            </div>
        </>
    );
};

export default TextDisplay;
