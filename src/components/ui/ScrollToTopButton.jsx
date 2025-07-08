"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeDasharray = 100;
  const strokeDashoffset =
    strokeDasharray - (scrollProgress / 100) * strokeDasharray;

  return (
    isVisible && (
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          className="rotate-[-90deg]"
          width="60"
          height="60"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#ef4444"
            strokeWidth="3"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-red-500 text-white rounded-full p-3 shadow-md hover:bg-red-600 transition">
          <FaArrowUp size={16} />
        </div>
      </div>
    )
  );
}
