import React, { useState, useEffect } from "react";

const Tooltip = ({ text, children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [height, setHeight] = useState(0);
    const windowHeight = window.innerHeight;

    useEffect(() => {
        const element = document.getElementById("tooltip");
        try {
            const { height } = element.getBoundingClientRect();
            setHeight(height);
        } catch (e) {}
    }, [position]);

    const handleMouseMove = (e) => {
        let positionY =
            height + e.clientY >= windowHeight
                ? windowHeight - height - 20
                : e.clientY - height / 2;
        positionY = positionY <= 0 ? 20 : positionY;
        setPosition({ x: e.clientX, y: positionY });
    };

    const handleMouseEnter = () => {
        setTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {tooltipVisible && (
                <div
                    id="tooltip"
                    style={{
                        position: "fixed",
                        top: position.y,
                        left: position.x + 10,
                        zIndex: 9999,
                        backgroundColor: "azure",
                        color: "darkslategray",
                        fontFamily:
                            "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
                        padding: "8px",
                        margin: "4px",
                        borderRadius: "10px",
                        maxWidth: "250px",
                        minWidth: "200px",
                        textAlign: "left",
                    }}
                >
                    <div>{text}</div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
