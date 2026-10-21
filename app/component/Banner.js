"use client";

import { useEffect, useState } from "react";
import { Poppins, Great_Vibes } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full h-screen min-h-[500px] flex items-center justify-center text-center bg-[#F6B1CE] relative overflow-hidden">
      <div className="flex flex-col items-center space-y-6 px-4 max-w-6xl mx-auto">
        
        {/* Subtitle - Immediate Fade In */}
        <p
          className={`${poppins.className} text-xl sm:text-2xl md:text-3xl tracking-wide text-gray-900 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          The Wedding of
        </p>
        

        {/* Groom / Bride with Staggered Delays */}
        <h1 className="flex flex-wrap justify-center items-center gap-2 text-center">
          {/* Groom */}
          <span
            className={`${poppins.className} text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6rem] tracking-widest text-white transition-all duration-1000 delay-300 ease-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Christian
          </span>

          {/* Slash */}
          <span
            className="px-2 py-1 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[6rem] tracking-widest text-white transition-all duration-1000 delay-500 ease-out transform"
          >
            /
          </span>

          {/* Bride */}
          <span
            className={`${poppins.className} text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6rem] tracking-widest text-white transition-all duration-1000 delay-700 ease-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Jane
          </span>
        </h1>
      </div>
    </div>
  );
}