"use client";

import Image from "next/image";
import { Poppins, Great_Vibes } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

// Gallery photos array
const galleryPhotos = [
  {
    id: 1,
    src: "/images/pic3.jpg",
    alt: "Wedding Ceremony",
    title: "The Bride and Groom",
    caption: "Exchanging our vows under the open sky",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/thebride.jpg",
    alt: "The Bride",
    title: "The Bride",
    caption: "The Beautiful Bride",
    span: "col-span-1",
  },
  {
    id: 3,
    src: "/images/thegroomsolo.jpg",
    alt: "The Groom",
    title: "The Groom",
    caption: "The Handsome Groom",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "/images/venue.jpg",
    alt: "Reception Venue",
    title: "The Reception",
    caption: "A night filled with laughter and toasts",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 5,
    src: "/images/pic8.jpg",
    alt: "Special Moment",
    title: "The Kiss",
    caption: "Dancing under twinkling fairy lights",
    span: "col-span-1",
  },
  {
    id: 6,
    src: "/images/bridesquad.jpg",
    alt: "Bride Squad",
    title: "The Bride Squad",
    caption: "Sweet moments shared together",
    span: "col-span-1",
  },
];

export default function TheDay() {
  // State to trigger load animations immediately on mount
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${poppins.className} min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 text-stone-800`}>
      
      {/* Hero Header with On-Load Cascading Animation */}
      <div className="flex flex-col justify-center items-center text-center py-8">
        
        {/* Top Accent Badge - Initial Fade In */}
        <div 
          className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-12 h-[1px] bg-rose-300/60"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-rose-800 font-medium">
            Memories &amp; Moments
          </span>
          <span className="w-12 h-[1px] bg-rose-300/60"></span>
        </div>

        {/* Main Heading "The Day We Said I Do" - Delayed 200ms */}
        <h1 
          className={`${greatVibes.className} text-6xl sm:text-7xl md:text-8xl text-stone-800 leading-tight mb-2 transition-all duration-1000 delay-200 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          The Day We Said I Do
        </h1>

        {/* Caption/Subtitle - Delayed 500ms */}
        <p 
          className={`text-stone-500 font-light text-base sm:text-lg max-w-md mx-auto mb-8 tracking-wide transition-all duration-1000 delay-500 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A collection of unforgettable moments from our wedding celebration
        </p>

        {/* Navigation Links Group - Delayed 700ms */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto transition-all duration-1000 delay-700 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Back to Home Button */}
          <Link 
            href="/" 
            className="px-6 py-2.5 bg-white text-stone-700 font-medium rounded-full border border-stone-200 shadow-sm hover:bg-stone-50 transition-all duration-300 min-w-[130px] text-sm text-center flex items-center justify-center gap-1.5"
          >
            <span>←</span> Home
          </Link>

          <Link 
            href="/invitation" 
            className="px-6 py-2.5 bg-white text-stone-700 font-medium rounded-full border border-stone-200 shadow-sm hover:bg-stone-50 transition-all duration-300 min-w-[130px] text-sm text-center"
          >
            Invitation
          </Link>

          {/* Active Page Button */}
          <Link 
            href="/theday" 
            className="px-6 py-2.5 bg-rose-700 text-white font-medium rounded-full shadow-md hover:bg-rose-800 transition-all duration-300 min-w-[130px] text-sm text-center"
          >
            The Day
          </Link>

          <Link 
            href="/behind-the-scenes" 
            className="px-6 py-2.5 bg-white text-stone-700 font-medium rounded-full border border-stone-200 shadow-sm hover:bg-stone-50 transition-all duration-300 min-w-[130px] text-sm text-center"
          >
            Behind The Scenes
          </Link>
        </div>

        <div className="mt-10 text-rose-300 text-2xl">❦</div>
      </div>

      {/* Photo Gallery Grid - Delayed Entrance after Hero */}
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[280px] transition-all duration-1000 delay-900 ease-out transform ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {galleryPhotos.map((photo) => (
          <div
            key={photo.id}
            className={`group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-stone-100 ${photo.span}`}
          >
            {/* Image */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover Text Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
              <h3 className={`${greatVibes.className} text-3xl sm:text-4xl text-rose-200 mb-1`}>
                {photo.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 font-light">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Footer */}
      <div className="text-center text-rose-300 text-2xl pt-8">
        ❦
      </div>

    </div>
  );
}