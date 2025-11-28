"use client"; // Important for Next.js 13+ pages/components
import { Poppins, Great_Vibes } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import $ from "jquery";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
useEffect(() => {
  // Initially hide all text sections
  $(".fade-in-on-scroll").css("opacity", 0);

  $(window).on("scroll", function () {
    $(".fade-in-on-scroll").each(function () {
      const offset = $(this).offset(); // offset can be undefined
      if (!offset) return; // skip this element if offset is undefined

      const top_of_element = offset.top;
      const bottom_of_window = ($(window).scrollTop() ?? 0) + ($(window).height() ?? 0); // default to 0 if undefined

      if (bottom_of_window > top_of_element + 100) {
        $(this).animate({ opacity: 1 }, 1000);
      }
    });
  });

  // Trigger scroll on load to show elements already in view
  $(window).trigger("scroll");
}, []);

  return (
    <div className=" min-h-screen">

      {/* Secondary Sponsors */}
      <div className="grid grid-cols-1 gap-4 px-4 text-center">
  <div className="col-span-12 bg-white p-8 space-y-2 mt-[200px] mb-[100px]">
    <p className={`${greatVibes.className} text-8xl font-semibold text-[#F875AA] fade-in-on-scroll`}>
      You are invited.
    </p>
  </div>
</div>

      {/* Wedding Details */}
      <div className=" min-h-screen flex items-center justify-center px-4  ">

        <div className="max-w-md w-full  p-8 flex flex-col items-center text-center space-y-4 fade-in-on-scroll">
          <h2 className={`${poppins.className} text-2xl font-semibold text-[#F875AA]` }>
            Wedding Details
          </h2>
          <p className={`${poppins.className} text-gray-600`}>
            <span className="font-medium">Date & Time:</span> December 26, 2025 - 2:00 PM
          </p>
          <p className={`${poppins.className} text-gray-600`}>
            <span className="font-medium">Ceremony:</span> Espousal of Our Lady Parish Church
          </p>
          <p className={`${poppins.className} text-gray-600`}>
            <span className="font-medium">Address:</span> C. F Perfecto Street, Mandurriao, Iloilo City
          </p>
          <br></br>

          <h2 className={`${poppins.className} text-2xl font-semibold text-[#F875AA]`}>
            Reception
          </h2>
          <p className={`${poppins.className} text-gray-600`}>
            Grand Xing Imperial Hotel
          </p>
          <p className={`${poppins.className} text-gray-600`}>
            H. Montinola Corner Muelle Loney Street, Iloilo City, 5000 Iloilo
          </p>
        </div>
      </div>

      {/* Wedding Entourage */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        <p className={`${poppins.className} text-2xl font-semibold col-span-12 text-[#F875AA] fade-in-on-scroll`}>
          Wedding Entourage
        </p>

        {/* Parents of the Groom */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-right ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide`}>
            Parents of the Groom
          </h3>
          <p className={`${poppins.className}`}>Federico A. Amboy</p>
          <p className={`${poppins.className}`}>Lida G. Maguad</p>
        </div>

        {/* Parents of the Bride */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-left ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide`}>
            Parents of the Bride
          </h3>
          <p className={`${poppins.className}`}>Wilfredo B. Prudente</p>
          <p className={`${poppins.className}`}>Virginia A. Prudente</p>
        </div>
      </div>

      {/* Principal Sponsors */}
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        <div className="col-span-12 bg-white p-8 space-y-2">
          <p className={`${greatVibes.className} text-4xl font-semibold text-[#F875AA]`}>
            Principal Sponsors
          </p>
          <div className={`${poppins.className} space-y-1 mt-4`}>
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
            <p>Terisita Dumali</p>
            
          </div>
        </div>
      </div>

      {/* Secondary Sponsors */}
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center">
        <div className="col-span-12 bg-white p-8 space-y-2">
          <p className={`${greatVibes.className} text-4xl font-semibold text-[#F875AA] fade-in-on-scroll`}>
            Secondary Sponsors
          </p>
          <div className={`${poppins.className} space-y-1 mt-4 fade-in-on-scroll`}>
            <p>Ricky Prudente</p>
            <p>Rowell Prudente</p>
            <p>Christian Prudente</p>
            <p>Mechelle Prudente</p>
            <p>Era Jean Prudente</p>
            <p>Noemie Basal</p>
          </div>
        </div>
      </div>

      {/* Wedding Entourage */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        {/* Parents of the Groom */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-right ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Ring Bearer
          </h3>
          <p className={`${poppins.className}`}> Timmy Maguad</p>
        </div>

        {/* Parents of the Bride */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-left fade-in-on-scroll">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Bible Bearer
          </h3>
          <p className={`${poppins.className}`}>Shean Dwayne Gelilang</p>
          
        </div>

      </div>

      {/* Secondary Sponsors */}
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        <div className="col-span-12 bg-white p-8 space-y-2">
          <p className={`${greatVibes.className} text-4xl font-semibold text-[#F875AA]`}>
          Coin Bearer
          </p>
          <div className={`${poppins.className} space-y-1 mt-4`}>
            <p>Jaycon Prudente</p>
            
          </div>
        </div>
      </div>


      {/* Wedding Entourage */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        {/* Parents of the Groom */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-right ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Best Man
          </h3>
          <p className={`${poppins.className}`}> Tim Maguad</p>
        </div>

        {/* Parents of the Bride */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-left fade-in-on-scroll ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Maid of Honor
          </h3>
          <p className={`${poppins.className}`}>Irish Barcebal</p>
          
        </div>
      </div>

        {/* Wedding Entourage */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        {/* Parents of the Groom */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-right ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Groomsmen
          </h3>
          <p className={`${poppins.className}`}>Pat Alvin Dale Aungon</p>
          <p className={`${poppins.className}`}>Ricky Gaborno</p>
          <p className={`${poppins.className}`}>Marvic Porras</p>
          <p className={`${poppins.className}`}>Nelson Carisma Jr.</p>
          <p className={`${poppins.className}`}>Franz Angelo Amboy</p>
          <p className={`${poppins.className}`}>Rey Angelo Barcebal</p>

        </div>

        {/* Parents of the Bride */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-left fade-in-on-scroll ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Bridesmaids
          </h3>
          <p className={`${poppins.className}`}> Amerah Abdullah</p>
          <p className={`${poppins.className}`}> Gina Mae Lagunday</p>
          <p className={`${poppins.className}`}> Anna Marie Monica Flores</p>
          <p className={`${poppins.className}`}> Rowelee Custodio</p>
          <p className={`${poppins.className}`}> Jean-Jean Amante</p>
          <p className={`${poppins.className}`}> Richel May Prudente </p>
         
        </div>
      </div>

       {/* Secondary Sponsors */}
       <div className="grid grid-cols-1 gap-4 px-4 text-center fade-in-on-scroll">
        <div className="col-span-12 bg-white p-8 space-y-2">
          
          <div className={`${poppins.className} space-y-1 mt-4`}>
            <p>Louie Estaris</p>
            <p>Geo Gumarang</p>
            
          </div>
        </div>
      </div>

       {/* Wedding Entourage */}
       <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        {/* Parents of the Groom */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-right ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Flower Girls
          </h3>
          <p className={`${poppins.className}`}> Bree Basal</p>
          <p className={`${poppins.className}`}> Allysa Nicole Prudente</p>
          <p className={`${poppins.className}`}> Ellie Magdalainne Torredo</p>

        </div>

        {/* Parents of the Bride */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-left ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide text-[#F875AA]`}>
          Flower Boy 
          </h3>
          <p className={`${poppins.className}`}>Federico Amboy III </p>
          
        </div>
      </div>

        {/* Secondary Sponsors */}
        <div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        <div className="col-span-12 bg-white p-8 space-y-2">
          <p className={`${greatVibes.className} text-4xl font-semibold text-gray-800`}>
          Attire Guide
          </p>

          <div className={`${poppins.className} space-y-1 mt-4 fade-in-on-scroll`}>
            <p>Semi-Formal Attire</p>
            <p>In honor of our special day, we kindly ask our
               guests to wear these colors as part of our celebration.</p>

               <Image
                src="/images/im.png"
                alt="Father"
                width={200}     // ✅ Adjusted for a professional look
                height={200}
                className="rounded-md object-contain tex
                t-center mx-auto" 
              
              />
            
          </div>
        </div>
      </div>

       {/* Wedding Entourage */}
       <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        {/* Parents of the Groom */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-right ">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide`}>
          Gift Guide
          </h3>
          <p className={`${poppins.className}`}> With all that we have, we’ve been truly blessed. 
          Your presence and prayers are all that we request, 
          but if you desire to give nonetheless, 
          a gift in kind will do.</p>
          
        </div>

        {/* Parents of the Bride */}
        <div className="col-span-12 sm:col-span-6 bg-white p-8 space-y-4 text-center sm:text-left  fade-in-on-scroll">
          <h3 className={`${greatVibes.className} text-4xl tracking-wide`}>
          Snap and Share
          </h3>
          <p className={`${poppins.className}`}>Help us capture the moments!
Share your favorite snapshots from our ceremony
 and reception using our official hashtag.
Don’t forget to tag us when you post your photos — we’d love
 to see our special day through your eyes!</p>
          
        </div>
      </div>


      {/* Secondary Sponsors */}
<div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center">
  <div className="col-span-12 bg-white p-8 space-y-2 flex justify-center">
    <div className={`${poppins.className} space-y-1 mt-4 text-center`}>
      <p className="text-4xl tracking-wide text-[#F875AA] fade-in-on-scroll">
        #ChrisGotHisJane
      </p>
    </div>
  </div>
</div>


       {/* Secondary Sponsors */}
       <div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center fade-in-on-scroll">
        <div className="col-span-12 bg-white p-8 space-y-2">
          <p className={`${greatVibes.className} text-4xl font-semibold text-gray-800`}>
          Wedding Timeline
          </p>
          <div className={`${poppins.className} space-y-1 mt-4`}>


          <Image
                src="/images/CHRISTIAN.png"
                alt="Father"
                width={700}     // ✅ Adjusted for a professional look
                height={700}
                className="rounded-md object-contain tex
                t-center mx-auto fade-in-on-scroll" 
              
              />
            
            
          </div>
        </div>
      </div>


    

      {/* End of container*/}
    </div>
  );
}
