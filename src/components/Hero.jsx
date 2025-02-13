// src/components/Hero.jsx
import { useEffect, useState } from "react"; // Import useEffect and useState for lifecycle management and state
import { Link } from "react-router-dom"; // Import Link for navigation
import gsap from "gsap"; // Import GSAP for animations
import ajy from "../assets/ajy.png";

const Hero = () => {
    const [noButtonStyle, setNoButtonStyle] = useState({}); // State to manage the style of the No button
    const [attempts, setAttempts] = useState(0); // State to track the number of attempts
    const [showMessageFive, setShowMessageFive] = useState(false); // State to control the display of the message
    const [showMessageTen, setShowMessageTen] = useState(false); // State to control the display of the message
    const [showMessageFifteen, setShowMessageFifteen] = useState(false); // State to control the display of the message

    useEffect(() => {
        // Animate the text from bottom to up
        gsap.fromTo(
            ".hero-text", // Target the text elements
            { y: 50, opacity: 0 }, // Start position (50px down and invisible)
            { y: 0, opacity: 1, duration: 1 } // End position (original position and visible)
        );
    }, []); // Empty dependency array to run once on mount

    const handleNoClick = () => {
        // Increment the attempts counter
        setAttempts((prev) => prev + 1);

        // Randomize the position of the No button
        const randomX = Math.random() * (window.innerWidth - 100); // Random X position
        const randomY = Math.random() * (window.innerHeight - 100); // Random Y position

        // Update the No button style
        setNoButtonStyle({
            position: "absolute", // Positioning to allow random placement
            left: `${randomX}px`, // Set random X position
            top: `${randomY}px`, // Set random Y position
            transform: "scale(0.8)", // Make the No button smaller
        });

        // Make the Yes button bigger
        gsap.to(".yes-button", { scale: `${1 + ((attempts + 1) * 0.1)}`, duration: 0.3 }); // Animate Yes button to scale up

        // Show message after 5 attempts
        if (attempts + 1 === 5) {
            setShowMessageFive(true); // Show the message
        }

        if (attempts + 1 === 10) {
            setShowMessageTen(true); // Show the message
        }

        // Animate the No button and Yes button on the 15th attempt
        if (attempts + 1 >= 15) {

            setShowMessageFifteen(true);

            // Animate No button to fly out of the screen
            gsap.fromTo(
                ".no-button", // Target the text elements
                { opacity: 1 }, // Start position (50px down and invisible)
                { opacity: 0, duration: 1 } // End position (original position and visible)
            );
            gsap.to(".yes-button", { scale: 1, duration: 0.3 }); // Make Yes button enormous
        }
    };

    return ( 
        <section className="hero-text h-screen w-full p-4 flex flex-col gap-5 items-center justify-center">
            <img src={ajy} alt="Ajy" className="w-20 h-20 rounded-full" />
            <h1 className="text-6xl text-[#FFB3C1] text-center font-bold">Hi Ajy!<br></br>Will you be my Valentine?</h1>
            <div className="mt-4 flex gap-10">
                <Link to="/finished">
                    <button className="yes-button mt-4 mb-4 cursor-pointer hover:scale-125 transition-transform duration-300 w-28 bg-green-400 text-white px-4 py-2 mr-2 rounded">
                        Yes
                    </button>
                </Link>
                <button 
                    className="no-button mt-4 mb-4 cursor-pointer hover:scale-125 transition-transform duration-300 w-28 bg-red-400 text-white px-4 py-2 rounded" 
                    style={noButtonStyle} 
                    onClick={handleNoClick} // Attach click handler
                >
                    No
                </button>
            </div>
            {showMessageFive && ( // Conditionally render the message
                <p className="z-100 text-xl text-red-500 mt-4">You're really still trying?</p>
            )}
            {showMessageTen && ( // Conditionally render the message
                <p className="z-100 text-xl text-red-500 mt-4">Do you even love me...</p>
            )}
            {showMessageFifteen && ( // Conditionally render the message
                <p className="z-100 text-xl text-red-500 mt-4">You know what, I give up! JUST PRESS THE DAMN YES BUTTON!!!</p>
            )}
        </section>
    );
}
 
export default Hero;