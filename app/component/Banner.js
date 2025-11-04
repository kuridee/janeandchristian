"use client";

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
  return (
    <div className="w-full h-screen flex items-center justify-center text-center bg-[#F8F8FF]">
      <div className="flex flex-col items-center space-y-6 px-4">
        {/* Subtitle */}
        <p
          className={`${poppins.className} text-xl sm:text-2xl md:text-3xl tracking-wide text-gray-700`}
        >
          The Wedding of
        </p>

        {/* Groom */}
        <h1
          className={`${greatVibes.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-widest text-gray-900`}
        >
          Christian
        </h1>

        {/* Separator */}
        <p
          className={`${poppins.className} text-xl sm:text-2xl md:text-3xl tracking-wide text-gray-700`}
        >
          and
        </p>

        {/* Bride */}
        <h1
          className={`${greatVibes.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-widest text-gray-900`}
        >
          Jane
        </h1>
      </div>
    </div>
  );
}
