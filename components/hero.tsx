"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Konfigurasi AOS disini
    });
  }, []);

  return (
    <div className="relative h-[calc(100dvh+100px)] pt-[80px] flex items-center">
      <Image
        fill
        // src="/aerial-shot-city-skyline-orange-sky-sunset.jpg"
        src="/hero.jpg"
        alt="Hero"
        className="absolute object-cover object-top"
      />
      <div className="container relative mx-auto">
        <div className="max-w-[700px] space-y-7 md:space-y-10">
          <h1
            className=" text-4xl md:text-6xl text-white font-bold"
            data-aos="fade-up"
          >
            {`Beyond Construction, ​Life's Connection`}
          </h1>
          <p
            className="text-[#efefef] text-base md:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Leading Construction Ecosystem Transformation ​in Indonesia. we are
            committed to pioneering ​industry transformation towards a
            sustainable ​and innovative future, connecting beyond ​construction
            to life’s essential connections
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
    text-[#efefef] hover:text-white transition-all duration-150 px-10 py-3 rounded-full"
          >
            Discover Us
          </button>
        </div>
      </div>
    </div>
  );
}
