import { Poppins, Great_Vibes } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className=" min-h-screen">
      {/* Wedding Details */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 flex flex-col items-center text-center space-y-4">
          <h2 className={`${poppins.className} text-2xl font-semibold text-gray-800`}>
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

          <h2 className={`${poppins.className} text-2xl font-semibold text-gray-800`}>
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
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 mt-8 text-center">
        <p className={`${poppins.className} text-2xl font-semibold text-gray-800 col-span-12`}>
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
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center">
        <div className="col-span-12 bg-white p-8 space-y-2">
          <p className={`${greatVibes.className} text-4xl font-semibold text-gray-800`}>
            Principal Sponsors
          </p>
          <div className={`${poppins.className} space-y-1 mt-4`}>
            <p>Dr. Evan Sumido</p>
            <p>Mr. Gian Bocario</p>
            <p>Mr. Jesus Prudente</p>
            <p>Mr. Richard Alayon</p>
            <p>Dr. Rodney Martirez</p>
            <p>Hon. Mayor Francis Amboy</p>
            <p>Hon. Mayor Filomeno Ganzon</p>
            <p>Mr. Cairo Abdullah</p>
            <p>Mrs. Elsa Aguadera</p>
            <p>Mrs. Gladys Eslabon</p>
            <p>Dr. Ma. Luche Sabayle</p>
            <p>Mrs. Starleen Macy Detoyato</p>
            <p>Mrs. Jeza Mae Prudente</p>
            <p>Mrs. Evelyn Alayon</p>
            <p>Dr. Lea Ymalay</p>
            <p>Dr. Lea Gabawa</p>
            <p>Mrs. Lori Lacson</p>
            <p>Mrs. Junaida Abdullah</p>
            <p>PCMS May Flor Gequillo</p>
            <p>Mrs. Aileen Gritan</p>
          </div>
        </div>
      </div>

      {/* Secondary Sponsors */}
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 text-center">
        <div className="col-span-12 bg-white p-8 space-y-2">
          <p className={`${greatVibes.className} text-4xl font-semibold text-gray-800`}>
            Secondary Sponsors
          </p>
          <div className={`${poppins.className} space-y-1 mt-4`}>
            <p>Mr. Ricky Prudente</p>
            <p>Mr. Rowell Prudente</p>
            <p>Mr. Christian Prudente</p>
            <p>Mrs. Mechelle Prudente</p>
            <p>Mrs. Era Jean Prudente</p>
            <p>Ms. Noime Basal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
