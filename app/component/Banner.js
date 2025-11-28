"use client";

import { useEffect } from "react";
import { Poppins, Great_Vibes } from "next/font/google";
import $ from "jquery";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Banner() {
  useEffect(() => {
    // Animate subtitle
    $(".subtitle").css({ opacity: 0, position: "relative", top: "20px" })
      .animate({ opacity: 1, top: "0px" }, 1000);

    // Animate groom, slash, bride with delays
    $(".groom").css({ opacity: 0, position: "relative", top: "20px" })
      .delay(300).animate({ opacity: 1, top: "0px" }, 1000);

    $(".slash").css({ opacity: 0, position: "relative", top: "20px" })
      .delay(600).animate({ opacity: 1, top: "0px" }, 1000);

    $(".bride").css({ opacity: 0, position: "relative", top: "20px" })
      .delay(900).animate({ opacity: 1, top: "0px" }, 1000);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center text-center bg-[#F6B1CE]">
      <div className="flex flex-col items-center space-y-6 px-4">
        {/* Subtitle */}
        <p
          className={`${poppins.className} text-xl sm:text-2xl md:text-3xl tracking-wide text-white subtitle`}
        >
          The Wedding of
        </p>

        {/* Groom / Bride */}
        <h1 className="flex flex-wrap justify-center items-center gap-2 text-center">
          <span className={`${poppins.className} text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6rem] tracking-widest text-white groom`}>
            Christian
          </span>

          <span className="px-2 py-1 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[4rem] tracking-widest text-gray-900 slash">
            /
          </span>

          <span className={`${poppins.className} text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6rem] tracking-widest text-white bride`}>
            Jane
          </span>
        </h1>
      </div>
    </div>
  );
}
