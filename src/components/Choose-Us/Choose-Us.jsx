"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export default function ChooseUs() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             WHY CHOOSE US?<br />
              <span className="text-4xl text-red-500 md:text-[6rem] font-bold mt-1 leading-none">
                WE ARE THE BEST
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/hero-bg.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
