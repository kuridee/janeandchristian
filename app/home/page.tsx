"use client";

import { Poppins, Great_Vibes } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "../component/Banner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Full Width & Height Viewport Banner */}
      <Banner />

      {/* Content Container Below Banner */}
      <div className={`${poppins.className} py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 text-stone-800`}>
        
        {/* Navigation Section */}
        <div className="flex flex-col justify-center items-center text-center">
          
          <div 
            className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ease-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-12 h-[1px] bg-rose-300/60"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-rose-800 font-medium">
              We Got Married
            </span>
            <span className="w-12 h-[1px] bg-rose-300/60"></span>
          </div>

          <p 
            className={`text-stone-500 font-light text-base sm:text-lg max-w-md mx-auto mb-8 tracking-wide transition-all duration-1000 delay-300 ease-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            "Two hearts, one journey. Thank you for being part of our story and celebrating our union with us."
          </p>

          {/* Navigation Links Group */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto transition-all duration-1000 delay-500 ease-out transform ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link 
              href="/invitation" 
              className="px-6 py-2.5 bg-white text-stone-700 font-medium rounded-full border border-stone-200 shadow-sm hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 min-w-[140px] text-sm text-center"
            >
              Invitation
            </Link>

            <Link 
              href="/theday" 
              className="px-6 py-2.5 bg-white text-stone-700 font-medium rounded-full border border-stone-200 shadow-sm hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 min-w-[140px] text-sm text-center"
            >
              The Day
            </Link>

            <Link 
              href="/behind-the-scenes" 
              className="px-6 py-2.5 bg-white text-stone-700 font-medium rounded-full border border-stone-200 shadow-sm hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 min-w-[140px] text-sm text-center"
            >
              Behind The Scenes
            </Link>
          </div>

          <div className="mt-10 text-rose-300 text-2xl">❦</div>
        </div>

        {/* Bride & Groom Showcase Section */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Groom Card */}
          <div className="bg-white border border-stone-100 shadow-sm rounded-3xl p-6 text-center space-y-4 group hover:shadow-md transition-all duration-500">
            <div className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/thegroomsolo.jpg"
                alt="The Groom - Christian"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-rose-800 font-medium block mb-1">
                The Groom
              </span>
              <h3 className={`${greatVibes.className} text-4xl text-stone-800`}>
                Christian
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm font-light mt-1">
                "Forever begins today with the love of my life."
              </p>
            </div>
          </div>

          {/* Bride Card */}
          <div className="bg-white border border-stone-100 shadow-sm rounded-3xl p-6 text-center space-y-4 group hover:shadow-md transition-all duration-500">
            <div className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src="/images/thebride.jpg"
                alt="The Bride - Jane"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-rose-800 font-medium block mb-1">
                The Bride
              </span>
              <h3 className={`${greatVibes.className} text-4xl text-stone-800`}>
                Jane
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm font-light mt-1">
                "In your arms is where my heart belongs."
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Footer Symbol */}
        <div className="text-center text-rose-300 text-2xl pt-8">
          ❦
        </div>

      </div>
    </>
  );
}