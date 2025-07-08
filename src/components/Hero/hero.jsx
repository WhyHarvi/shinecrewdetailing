import InteractiveHoverButton from "../ui/hover-buuton";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import useMediaQuery from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars,words",
    });

    const paragraphSplit = new SplitText(".paragraph", {
      type: "lines",
    });

    gsap.from(heroSplit.words, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.1,
    });

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.1,
      delay: 1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 400 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 200 }, 0);

    const startValue = isMobile ? "top 10%" : "center 50%";
    const endValue = isMobile ? "150% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="relative w-full h-screen z-[10]">
        <h1 className="title text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 leading-tight w-[70%] z-10">
          SHINE CREW DETAILING
        </h1>
        <p className="text-md sm:text-sm md:text-md lg:text-xl font-regular text-white absolute top-[32%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 w-[70%] z-10">
          "Precision, Passion, Perfection."
        </p>
        <p className=" text-md sm:text-sm md:text-md lg:text-xl font-regular text-white absolute top-[66%] left-[0%]  transform  text-left px-4 w-[40%] z-10">
          Best Detailing Services in Town
        </p>
        <p className="paragraph text-md sm:text-sm md:text-md lg:text-xl text-white font-semibold absolute top-[70%] left-[0%]  transform  text-left px-4 w-[40%] z-10">
          We Detail Every Vehicle Wheather It's a Car, Truck, or SUV with
          precision and care.
        </p>

        <div>
          <video
            ref={videoRef}
            src="/output.mp4"
            playsInline
            preload="auto"
            muted
            className="video w-full h-full object-cover absolute inset-0"
          ></video>
        </div>
        <div className="absolute bottom-28 left-36 transform -translate-x-1/2 z-10">
          <InteractiveHoverButton   className="text-white">
            <a href="#contact">
              Contact Us
              </a>
          </InteractiveHoverButton>
        </div>
      </section>
    </>
  );
}
