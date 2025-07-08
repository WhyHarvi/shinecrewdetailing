"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Us() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const trigger = containerRef.current;
      const image = imageRef.current;

      if (trigger && image) {
        ScrollTrigger.create({
          trigger,
          start: "top top",
          end: "bottom bottom", // 💡 Ends exactly when text ends
          pin: image,
          pinSpacing: true,
          scrub: true,
        });
      }

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white" id="about">
      <div className="flex flex-col md:flex-row">
        {/* LEFT: Pinned Image */}
        <div
          ref={imageRef}
          className="hidden md:flex w-full md:w-1/2 h-[100vh] bg-gray-100 items-center justify-center overflow-hidden"
        >
          <img
            src="./Us.png"
            alt="Car Detailing"
            className="object-cover md:w-full h-full  shadow-lg"
          />
        </div>

        <div
          ref={textRef}
          className="w-full px-6 md:px-10 py-16 space-y-12 max-w-3xl mx-auto overflow-x-hidden"
        >
          <h2 className="text-red-500 text-sm font-semibold tracking-wider">
            ABOUT US
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            KNOW{" "}
            <span className="text-red-500 italic">SHINE CREW DETAILING</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At <strong>Shine Crew Detailing</strong>, we believe that every
            vehicle — whether it’s a car, SUV, or heavy-duty truck — deserves
            the finest care. Founded by a group of automotive enthusiasts, Shine
            Crew has grown from a humble garage operation to a premium
            full-service detailing studio known for quality, honesty, and
            results.
          </p>

          <img
            src="./truck.jpeg"
            alt="Detailing Team"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />

          <h3 className="text-xl font-semibold text-red-500">Our Story</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our journey began with a single mission — to change how people think
            about vehicle detailing. We’ve built our reputation one shine at a
            time, treating each vehicle like our own and each customer like
            family.
            <br />
            <br />
            Today, we’re proud to serve individuals, families, and commercial
            clients who trust us to protect and rejuvenate their investments.
          </p>

          <h3 className="text-xl font-semibold text-red-500">Our Mission</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We strive to be the gold standard in detailing. From eco-friendly
            practices to advanced ceramic coatings, our focus is long-term
            results — not quick fixes. Shine Crew is where passion meets
            performance.
          </p>

          <h3 className="text-xl font-semibold text-red-500">
            Why People Trust Shine Crew
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-1">
            <li>✔ 100% Hand Wash – No risky automated brushes</li>
            <li>✔ Interior steam cleaning with antibacterial treatment</li>
            <li>✔ Premium ceramic coatings & long-term paint protection</li>
            <li>✔ Experienced technicians with an eye for detail</li>
            <li>✔ Honest pricing and unmatched customer service</li>
            <li>✔ Flexible appointments and mobile detailing available</li>
          </ul>

          <img
            src="./before-after.jpg"
            alt="Before and After"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />

          <h3 className="text-xl font-semibold text-red-500">
            We Specialize in Truck Detailing
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We’re known for our deep expertise in detailing trucks of all sizes
            — pickups, work trucks, lifted rigs, and even commercial fleets.
            Trucks face more dirt, grime, and tough environments. That’s why we
            use high-end degreasers, pressure rinsing, and protective coatings
            that last.
            <br />
            <br />
            Whether you’re prepping for a show or just want your truck to look
            brand new again, we’ve got you covered — inside and out.
          </p>

          <img
            src="./truck1.jpg"
            alt="Truck Detail 1"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
          <img
            src="./truck2.jpg"
            alt="Truck Detail 2"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
          <img
            src="./truck3.jpg"
            alt="Truck Detail 3"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />

          <h3 className="text-xl font-semibold text-red-500">
            More Than a Car Wash
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We don’t rush. We restore. From swirl-free hand washing to deep
            shampooing and interior protection — we offer full detailing
            packages that enhance your vehicle's lifespan and resale value. We
            use biodegradable products, clean water systems, and
            industry-approved tools to treat your vehicle with respect.
          </p>

          <h3 className="text-xl font-semibold text-red-500">
            Let’s Shine Together
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Ready to give your car or truck the glow it deserves? Book a session
            with Shine Crew Detailing today. We promise care, clarity, and
            results you’ll love — because when your vehicle shines, so do you.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <a href="#contact">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition">
                Book Your Shine
              </button>
            </a>

            <a href="#socials">
              <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
