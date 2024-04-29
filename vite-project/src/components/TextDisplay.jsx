import "../css/TextDisplay.css"

const TextDisplay = () => {
    const text =
        "This is place holder text designed to be used to show the basic static display of text that I want to use. It is meant to show that the wrapping is working and that I have displayed the text more or less to my liking. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie dolor non efficitur pharetra. Integer sit amet dui eu mi facilisis semper sit amet quis velit. Cras at fringilla est, vel egestas enim. Proin sollicitudin felis orci, ac tincidunt libero auctor at. Duis nec lectus metus. Integer sit amet consectetur urna, sit amet commodo magna. Vivamus vitae augue diam. Integer massa lacus, sodales eget urna fermentum, mollis consequat elit. Donec pharetra velit ut mattis gravida. Maecenas a leo ac massa posuere efficitur in eget mauris. Phasellus efficitur mi at sapien venenatis, sit amet efficitur ante dignissim. Duis dui nisl, dictum ac sem vitae, varius molestie urna. Suspendisse potenti. Nullam id cursus nunc, congue lacinia ipsum. Proin gravida ut metus in dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;";

    const textShadow = "0 0 8px rgba(255, 255, 255, 1)"; 
    return (
        <>
            <div className="text-display" style={{textShadow:textShadow}}>
                <p>{text}</p>
            </div>
        </>
    );
};

export default TextDisplay;
