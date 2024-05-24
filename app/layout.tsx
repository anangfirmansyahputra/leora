import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css"; //
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WhatsappButton from "@/components/whatsapp-button";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          <Image
            src={
              "/Silhouette-city-building-in-the-morning-Graphics-3365885-1.svg"
            }
            alt=""
            width={1000}
            height={1000}
            className="absolute bottom-0 md:bottom-[-30vh] aspect-video w-full z-[0]"
          />
          <WhatsappButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
