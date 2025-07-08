"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";

const ServiceCard = ({ title, color, services }) => (
  <div
    className={`rounded-xl p-6 shadow-md ${color} flex-1 transition-transform hover:scale-105`}
  >
    <h3 className="text-xl font-bold mb-4 text-gray-800">{title} Package</h3>
    <ul className="space-y-2 text-sm text-gray-700">
      {services.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <FaCheck className="text-green-600 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Features() {
  const carServices = [
    {
      title: "Basic",
      color: "bg-[#f5f5f5]",
      services: [
        "Interior vacuum, dusting & trunk shampoo",
        "Interior shampoo & salt removal",
        "Interior/Exterior windows & mirrors",
        "Stain and spot treatment",
        "Leather/Upholstery conditioning",
        "Door jamb cleaning",
        "Tire shine & rim wipe",
        "Glue/Adhesive removal",
      ],
    },
    {
      title: "Standard",
      color: "bg-[#e1f3ff]",
      services: [
        "All Basic services",
        "Bug & tar removal",
        "Acid wash",
        "Frame rinse (water only)",
      ],
    },
    {
      title: "Premium",
      color: "bg-[#fff0f0]",
      services: [
        "All Standard services",
        "Pet hair removal",
        "Engine bay detailing",
        "Interior steam sanitization",
      ],
    },
  ];

  const truckServices = [
    {
      title: "Basic",
      color: "bg-[#f5f5f5]",
      services: [
        "Interior vacuum, dusting & trunk shampoo",
        "Interior shampoo & salt removal",
        "Windows & mirrors (in & out)",
        "Stain & spot treatment",
        "Glue/Adhesive removal",
        "Roof rinse (water only)",
      ],
    },
    {
      title: "Standard",
      color: "bg-[#e1f3ff]",
      services: [
        "All Basic services",
        "Interior bed clean (light wipe)",
        "Simple leather/Upholstery clean",
        "Tire shine & polish",
        "Interior polishing",
        "Roof shampoo",
        "Frame rinse (water only)",
      ],
    },
    {
      title: "Premium",
      color: "bg-[#fff0f0]",
      services: [
        "All Standard services",
        "Chrome polishing (SX finish)",
        "Iron rust removal",
        "Engine bay cleaning",
        "Pet hair removal",
        "Flatbed full cleaning",
        "Interior steam & disinfecting",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-white text-center">
      <h1 className="text-4xl font-bold mb-2 text-red-500">Packages Starts From $99</h1>
      <p className="text-gray-600 text-sm md:text-base mb-4">
        Our professional detailing covers both <strong>Cars</strong> and{" "}
        <strong>Commercial Trucks</strong> with tiered packages to suit every
        need.
      </p>
       <div className="mb-12 mt-6 border-b border-gray-300"></div>
      <div className="mb-12 mt-6">
        <h2 className="text-3xl font-bold mb-6">Car Detailing Services</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {carServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">
          Truck Detailing Services
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {truckServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <p className="mt-12 text-sm text-gray-600 max-w-3xl mx-auto">
        <strong>Note:</strong> If you choose a Basic or Standard package but
        request specific services from the Premium package (like Steam Cleaning
        or Engine Bay Detailing), **additional charges will apply based on
        vehicle condition and service type.**
      </p>
    </section>
  );
}
