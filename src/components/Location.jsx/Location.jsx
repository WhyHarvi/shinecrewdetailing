"use client";
import { useEffect, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const pinRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pinRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full py-12 px-4 md:px-16 bg-white">
      {/* Heading */}
      <div className="mb-6 text-center md:text-left">
        <p className="text-red-600 text-sm font-semibold uppercase tracking-wider">
          WHERE TO LOCATE US
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Visit Shine Crew Detailing
        </h2>
        <p className="text-gray-700 mt-1 text-sm md:text-base">
          134 Cadillac Crescent, Brampton, Ontario
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-xl">
        {/* Map */}
        <iframe
          title="Shine Crew Location"
          src="https://www.google.com/maps?q=134+Cadillac+Crescent,+Brampton,+ON&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>

        {/* Floating Red Pin */}
        <div
          ref={pinRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10"
        >
          <FaMapMarkerAlt className="text-red-600 text-4xl drop-shadow-lg animate-bounce" />
        </div>
      </div>

      {/* Open in Google Maps Button */}
      <div className="mt-6 flex justify-center md:justify-start">
        <a
          href="https://www.google.com/maps/search/?api=1&query=134+Cadillac+Crescent,+Brampton,+ON"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-all shadow-md"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}
