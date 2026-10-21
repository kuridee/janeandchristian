import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Head";

export const metadata: Metadata = {
  title: "Christian & Jane Wedding",
  description: "Welcome to Christian & Jane's Wedding Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col m-0 p-0 bg-stone-50 overflow-x-hidden">
        {/* Full width main wrapper without padding or max-width constraints */}
        <main className="flex-grow w-full">{children}</main>
      </body>
    </html>
  );
}