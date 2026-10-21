"use client";

import { Poppins, Great_Vibes } from "next/font/google";
import Image from "next/image";
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

export default function InvitationPage() {
  // 1. State to trigger load animations immediately on mount
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger on-load animations
    setIsLoaded(true);

    // Pure React Scroll-Reveal for rest of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-in-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${poppins.className} min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 text-stone-800`}>
      
      {/* Hero Header with On-Load Cascading Animation */}
      <div className="flex flex-col justify-center items-center text-center py-8">
        
        {/* Top Accent Badge - Delayed 100ms */}
        <div 
          className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-12 h-[1px] bg-rose-300/60"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-rose-800 font-medium">
            We Are Getting Married
          </span>
          <span className="w-12 h-[1px] bg-rose-300/60"></span>
        </div>

        {/* Main Heading "Christian & Jane" - Delayed 300ms */}
        <h1 
          className={`${greatVibes.className} text-6xl sm:text-7xl md:text-8xl text-stone-800 leading-tight mb-2 transition-all duration-1000 delay-200 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          Christian &amp; Jane
        </h1>

        {/* Caption/Tagline - Delayed 500ms */}
        <p 
          className={`text-stone-500 font-light text-base sm:text-lg max-w-md mx-auto mb-8 tracking-wide transition-all duration-1000 delay-500 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Together with their families, invite you to celebrate their special day
        </p>

        {/* Navigation Buttons - Delayed 700ms */}
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
            className="px-6 py-2.5 bg-rose-700 text-white font-medium rounded-full shadow-md hover:bg-rose-800 transition-all duration-300 min-w-[130px] text-sm text-center"
          >
            Invitation
          </Link>

          <Link 
            href="/theday" 
            className="px-6 py-2.5 bg-white text-stone-700 font-medium rounded-full border border-stone-200 shadow-sm hover:bg-stone-50 transition-all duration-300 min-w-[130px] text-sm text-center"
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

      {/* Redesigned Formal Invitation Card */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white border border-stone-100 shadow-sm rounded-3xl p-10 sm:p-14 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-rose-800 font-medium block">
          Formal Invitation
        </span>
        <h2 className={`${greatVibes.className} text-5xl sm:text-6xl md:text-7xl text-rose-700`}>
          You are cordially invited
        </h2>
        <p className="text-stone-500 font-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed pt-2">
          to witness and celebrate the union of Christian and Jane as they exchange vows and begin their journey as husband and wife.
        </p>
      </div>

      {/* Wedding Details Card */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white border border-stone-100 shadow-sm rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
        <h2 className={`${greatVibes.className} text-5xl text-rose-700`}>
          Wedding Details
        </h2>
        
        <div className="space-y-2 text-stone-600 font-light text-sm sm:text-base">
          <p><span className="font-semibold text-stone-800">Date &amp; Time:</span> December 26, 2025 • 2:00 PM</p>
          <p><span className="font-semibold text-stone-800">Ceremony:</span> Espousal of Our Lady Parish Church</p>
          <p className="text-stone-500 text-xs sm:text-sm">C. F. Perfecto Street, Mandurriao, Iloilo City</p>
        </div>

        <div className="w-16 h-[1px] bg-rose-200 mx-auto my-4"></div>

        <h3 className={`${greatVibes.className} text-4xl text-rose-700`}>
          Reception
        </h3>
        <div className="space-y-1 text-stone-600 font-light text-sm sm:text-base">
          <p className="font-medium text-stone-800">Grand Xing Imperial Hotel</p>
          <p className="text-stone-500 text-xs sm:text-sm">H. Montinola Corner Muelle Loney Street, Iloilo City, 5000 Iloilo</p>
        </div>
      </div>

      {/* Parents Section */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-2">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700 mb-3`}>
            Parents of the Groom
          </h3>
          <p className="font-medium text-stone-700">Federico A. Amboy</p>
          <p className="font-medium text-stone-700">Lida G. Maguad</p>
        </div>

        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-2">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700 mb-3`}>
            Parents of the Bride
          </h3>
          <p className="font-medium text-stone-700">Wilfredo B. Prudente</p>
          <p className="font-medium text-stone-700">Virginia A. Prudente</p>
        </div>
      </div>

      {/* Principal Sponsors */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white border border-stone-100 shadow-sm rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h3 className={`${greatVibes.className} text-5xl text-rose-700`}>
          Principal Sponsors
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-stone-600 font-light text-sm sm:text-base">
          <p>Dr. Evan Sumido</p>
          <p>Dr. Ma. Luche Sabayle</p>
          <p>Dr. Lea Ymalay</p>
          <p>Dr. Rodney Martirez</p>
          <p>Dr. Lea Gabawa</p>
          <p>Hon. Mayor Francis Amboy</p>
          <p>Hon. Mayor Filomeno Ganzon</p>
          <p>Gian Bocario</p>
          <p>Jesus Prudente</p>
          <p>Richard Alayon</p>
          <p>Cairo Abdullah</p>
          <p>Elsa Aguadera</p>
          <p>Gladys Eslabon</p>
          <p>Starleen Macy Detoyato</p>
          <p>Jeza Mae Prudente</p>
          <p>Evelyn Alayon</p>
          <p>Lori Lacson</p>
          <p>Junaida Abdullah</p>
          <p>PCMS May Flor Gequillo</p>
          <p>Aileen Gritan</p>
          <p>Kenneth Rimpillo</p>
          <p>Nely Elisah Marcelo</p>
          <p>Marjorie Faustos</p>
          <p>Genie Rimpillo</p>
          <p>Teresita Dumali</p>
        </div>
      </div>

      {/* Secondary Sponsors */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white border border-stone-100 shadow-sm rounded-2xl p-8 text-center space-y-4">
        <h3 className={`${greatVibes.className} text-4xl text-rose-700`}>
          Secondary Sponsors
        </h3>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-stone-600 font-light text-sm sm:text-base">
          <p>Ricky Prudente</p>
          <p>Rowell Prudente</p>
          <p>Christian Prudente</p>
          <p>Mechelle Prudente</p>
          <p>Era Jean Prudente</p>
          <p>Noemie Basal</p>
        </div>
      </div>

      {/* Bearers */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 space-y-2">
          <h4 className={`${greatVibes.className} text-3xl text-rose-700`}>Ring Bearer</h4>
          <p className="text-stone-700 font-medium">Timmy Maguad</p>
        </div>

        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 space-y-2">
          <h4 className={`${greatVibes.className} text-3xl text-rose-700`}>Bible Bearer</h4>
          <p className="text-stone-700 font-medium">Shean Dwayne Gelilang</p>
        </div>

        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 space-y-2">
          <h4 className={`${greatVibes.className} text-3xl text-rose-700`}>Coin Bearer</h4>
          <p className="text-stone-700 font-medium">Jaycon Prudente</p>
        </div>
      </div>

      {/* Best Man & Maid of Honor */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-2">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700`}>Best Man</h3>
          <p className="text-stone-700 font-medium text-lg">Tim Maguad</p>
        </div>

        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-2">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700`}>Maid of Honor</h3>
          <p className="text-stone-700 font-medium text-lg">Irish Barcebal</p>
        </div>
      </div>

      {/* Groomsmen & Bridesmaids */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-3">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700 mb-2`}>Groomsmen</h3>
          <p className="text-stone-600 font-light">Pat Alvin Dale Aungon</p>
          <p className="text-stone-600 font-light">Ricky Gaborno</p>
          <p className="text-stone-600 font-light">Marvic Porras</p>
          <p className="text-stone-600 font-light">Nelson Carisma Jr.</p>
          <p className="text-stone-600 font-light">Franz Angelo Amboy</p>
          <p className="text-stone-600 font-light">Rey Angelo Barcebal</p>
          <p className="text-stone-600 font-light">Louie Estaris</p>
          <p className="text-stone-600 font-light">Geo Gumarang</p>
        </div>

        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-3">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700 mb-2`}>Bridesmaids</h3>
          <p className="text-stone-600 font-light">Amerah Abdullah</p>
          <p className="text-stone-600 font-light">Gina Mae Lagunday</p>
          <p className="text-stone-600 font-light">Anna Marie Monica Flores</p>
          <p className="text-stone-600 font-light">Rowelee Custodio</p>
          <p className="text-stone-600 font-light">Jean-Jean Amante</p>
          <p className="text-stone-600 font-light">Richel May Prudente</p>
        </div>
      </div>

      {/* Flower Girls & Flower Boy */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-2">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700 mb-2`}>Flower Girls</h3>
          <p className="text-stone-600 font-light">Bree Basal</p>
          <p className="text-stone-600 font-light">Allysa Nicole Prudente</p>
          <p className="text-stone-600 font-light">Ellie Magdalainne Torredo</p>
        </div>

        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-2">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700 mb-2`}>Flower Boy</h3>
          <p className="text-stone-600 font-light">Federico Amboy III</p>
        </div>
      </div>

      {/* Attire Guide */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white border border-stone-100 shadow-sm rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h3 className={`${greatVibes.className} text-5xl text-rose-700`}>
          Attire Guide
        </h3>
        <p className="text-stone-700 font-medium text-lg">Semi-Formal Attire</p>
        <p className="text-stone-500 font-light max-w-lg mx-auto text-sm sm:text-base">
          In honor of our special day, we kindly ask our guests to wear these color palettes as part of our celebration.
        </p>
        
        <div className="pt-2">
          <Image
            src="/images/im.png"
            alt="Attire Guide Palette"
            width={320}
            height={200}
            className="rounded-lg object-contain mx-auto shadow-sm"
          />
        </div>
      </div>

      {/* Gift Guide & Snap and Share */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-3">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700`}>Gift Guide</h3>
          <p className="text-stone-500 font-light text-sm leading-relaxed">
            With all that we have, we’ve been truly blessed. Your presence and prayers are all that we request, but if you desire to give nonetheless, a gift in monetary kind will do.
          </p>
        </div>

        <div className="bg-white border border-stone-100 shadow-sm rounded-2xl p-6 sm:p-8 space-y-3">
          <h3 className={`${greatVibes.className} text-4xl text-rose-700`}>Snap &amp; Share</h3>
          <p className="text-stone-500 font-light text-sm leading-relaxed">
            Help us capture the moments! Share your favorite snapshots from our ceremony and reception using our official hashtag. Don’t forget to tag us!
          </p>
        </div>
      </div>

      {/* Wedding Hashtag */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-rose-50/50 border border-rose-100 rounded-3xl p-8 text-center">
        <p className={`${poppins.className} text-3xl sm:text-4xl font-semibold text-rose-700 tracking-wider`}>
          #ChrisGotHisJane
        </p>
      </div>

      {/* Wedding Timeline Image */}
      <div className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-white border border-stone-100 shadow-sm rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h3 className={`${greatVibes.className} text-5xl text-rose-700`}>
          Wedding Timeline
        </h3>
        <div className="pt-2">
          <Image
            src="/images/CHRISTIAN.png"
            alt="Wedding Timeline"
            width={700}
            height={700}
            className="rounded-xl object-contain mx-auto shadow-sm"
          />
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="text-center text-rose-300 text-2xl pt-8">
        ❦
      </div>

    </div>
  );
}