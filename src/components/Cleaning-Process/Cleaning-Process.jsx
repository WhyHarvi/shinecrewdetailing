"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CleaningProcess() {
  const carRef = useRef(null);

  useEffect(() => {
    gsap.to(carRef.current, {
      x: -200,
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const steps = [
    {
      number: "01",
      title: "PRE WASH & RINSE",
      description:
        "We start by removing loose dirt and grime using high-pressure water and foam to prevent scratches during the wash.",
    },
    {
      number: "02",
      title: "EXTERIOR HAND WASH",
      description:
        "Using pH-balanced shampoo and microfiber mitts, we gently clean the body, wheels, windows, and trims for a spotless finish.",
    },
    {
      number: "03",
      title: "INTERIOR VACUUM & WIPE DOWN",
      description:
        "Seats, carpets, and mats are vacuumed. All interior surfaces like dashboard, console, and doors are thoroughly wiped and refreshed.",
    },
    {
      number: "04",
      title: "FINISHING TOUCH",
      description:
        "We apply tire shine, clean glass, and add a light wax or spray sealant for added protection and showroom shine.",
    },
  ];

  return (
    <div className="bg-white text-black font-sans mt-4">
      <div className="text-center py-8">
        <p className="text-red-600 font-bold tracking-widest text-sm">
          CLEANING PROCESS
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-1">
          CLEANING PROCESS IN{" "}
          <span className="text-red-600 italic">FOUR BASIC</span> STEPS
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 px-6 md:px-20 pb-12 mt-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 text-center border-t-4 border-gray-200 pt-4"
          >
            <div className="text-red-600 text-3xl font-bold mb-2">
              {step.number}
            </div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* SHINE CREW Banner */}
      <div className="relative bg-[#e63946] text-white flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
        {/* Main Heading */}
        <h1 className="text-[2.5rem] sm:text-[2rem] md:text-[6rem] lg:text-[10rem] font-bold tracking-wide z-10 text-center leading-none">
          SHINE <span className="text-red-600">CREW</span>
        </h1>

        {/* White Skew Panel */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white transform -skew-x-12 origin-left pointer-events-none z-0" />

        {/* Moving Car Image */}
        <div
          ref={carRef}
          className="
            z-10 absolute
            top-1/2
            left-1/2
            transform -translate-x-1/2 -translate-y-1/2
            w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%]
          "
        >
          <img
            src="./car.png"
            alt="Car"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
