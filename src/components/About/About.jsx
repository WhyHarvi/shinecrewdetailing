import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconCar,
  IconSparkles,
  IconDroplet,
  IconBrush,
  IconTools,
  IconShieldCheck,
  IconSunFilled,
  IconPaint,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <>
      <div className= "about bg-gray-50 py-10" id="services">
      <div>
        <h2 className="text-md font-bold text-center mb-6 md:text-2xl mt-10 text-red-500">
          OUR SERVICES
        </h2>
        <h1 className="text-2xl font-bold text-center mb-6 md:text-4xl">
          FULL SERVICE <span className="text-red-500">DETAILING</span> FOR CARS
        </h1>
      </div>

      <BentoGrid className="max-w-6xl mx-auto mb-5 ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      </div>
    </>
  );
}

const ImageHeader = (src) => (
  <img
    src={src}
    alt="Car Service"
    className="w-full h-full object-cover rounded-xl overflow-hidden shadow-lg "
  />
);

const items = [
  {
    title: "Exterior Wash",
    description: "Gentle hand wash and wax for a mirror-like shine.",
    header: ImageHeader("./exterior.jpg"),
    icon: <IconDroplet className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Interior Detailing",
    description: "Deep cleaning of seats, mats, and all surfaces.",
    header: ImageHeader("./interior.jpg"),
    icon: <IconBrush className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Engine Bay Cleaning",
    description: "Safe and effective engine bay degreasing and detailing.",
    header: ImageHeader("./engine.jpg"),
    icon: <IconTools className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Home Services",
    description: "Convenient on-site detailing at your location.",
    header: ImageHeader("./home.png"),
    icon: <IconShieldCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pet Hair Removal",
    description: "Remove scratches, swirls, and oxidation professionally.",
    header: ImageHeader("./pet-hair.jpg"),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Headlight Restoration",
    description: "Restore clarity and brightness to foggy headlights.",
    header: ImageHeader("./headlight.webp"),
    icon: <IconSunFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Premium Full Package",
    description: "Complete care: exterior, interior, and protective coating.",
    header: ImageHeader("./premium.png"),
    icon: <IconCar className="h-4 w-4 text-neutral-500" />,
  },
];
