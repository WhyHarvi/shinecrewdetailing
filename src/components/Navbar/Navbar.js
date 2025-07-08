"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "top top",
        scrub: true,
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#000000d0", // black with 80% opacity
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md text-white shadow-md transition-all duration-500">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-4 py-4 px-6 md:px-10 max-w-[1440px] mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 cursor-pointer text-nowrap"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <p className="text-2xl font-bold tracking-wide">
            Shine Crew Detailing
          </p>
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-red-400 transition">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
