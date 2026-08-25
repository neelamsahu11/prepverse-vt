import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";

export const metadata: Metadata = {
  title: "PrepVers",
  description: "Start your prep journey today.",
  icons : {
    icon:"./images/image.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />

        <main className="pt-[72px]">
          {children}
        </main>

       
      </body>
    </html>
  );
};