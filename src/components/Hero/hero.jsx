import AppNavbar from "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";
import InteractiveHoverButton from "../ui/hover-buuton";
import { useRef } from "react";
import gsap from "gsap";
import { use, useEffect } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { scale } from "motion/react";
import ScrollToTopButton from "../ui/ScrollToTopButton";

function Hero() {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const heroSplit = new SplitType(".title", { types: "chars, words" });
    const paragrapghSplit = new SplitType(".subtext", { types: "lines" });
    const video = videoRef.current;
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.8,
      ease: "expo.out",
    });

    gsap.from(paragrapghSplit.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.8,
      ease: "expo.out",
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-bubbles", { y: -400 }, 0)
      .to(".left-bubbles", { y: 800 }, 0);
  }, []);

  return (
    <div className="hero-container" id="home">
      <AppNavbar className="absolute top-0 z-50" />
      <div className="hero-overlay">
        <img
          className="-z-10 absolute w-full opacity-50"
          src="./images/noise.png"
          alt=""
        />
      </div>
      <div className="hero-image"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1
            id="hero-title"
            className=" title gradient-text text-5xl font-bold uppercase"
          >
            SHINE CREW DETAILING
          </h1>

          <p className="subtext">"Precision, Passion, Perfection."</p>
        </div>
        
        <div className="hero-subtext">
          <p className=" justify-start flex">Best Detailing Services in Town</p>
          <h1 className="subtext">
            We Detail Every Vehicle Wheather It's a Car, Truck, <br /> or SUV
            with precision and care.
          </h1>
        </div>
        <div className="hero-buttons">
          <InteractiveHoverButton>
            <a href="#contact">Book Appointment</a>
          </InteractiveHoverButton>
        </div>
      </div>
      <div className="video w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover">
        <video
          src="./output.mp4"
          muted
          playsInline
          loop
          autoPlay
          className="video w-full h-full object-cover"
          preload="auto"
          ref={videoRef}
        ></video>
      </div>
      <div className="arrow absolute bottom-8 right-[100px] z-20 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white">
          <div className="mx-auto mt-1 h-2 w-1 animate-scroll rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
