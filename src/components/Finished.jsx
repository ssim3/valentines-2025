import { useEffect } from "react";
import gsap from "gsap"; // Import GSAP for animations


const Finished = () => {

    useEffect(() => {
        // Animate the text from bottom to up
        gsap.fromTo(
            ".hero-text", // Target the text elements
            { y: 50, opacity: 0 }, // Start position (50px down and invisible)
            { y: 0, opacity: 1, duration: 1 } // End position (original position and visible)
        );
    }, []); // Empty dependency array to run once on mount

    return ( 
        <section className="hero-text h-screen w-full flex flex-col gap-5 items-center justify-center">
            <h1 className="text-6xl line-height-1.5 text-[#FFB3C1] text-center font-bold">Thank you for choosing me as your Valentine!</h1>
            <p>I appreciate it even though you weren't forced at all!</p>
        </section>
    );
}
 
export default Finished;