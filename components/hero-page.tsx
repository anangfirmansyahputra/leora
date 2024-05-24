"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

type HeroProps = {
  title: string;
  img?: string;
  description: string;
};

export default function Hero({ title, img, description }: HeroProps) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="relative h-dvh pt-[80px] flex items-center">
      <Image
        fill
        data-aos="fade-in"
        // src="/aerial-shot-city-skyline-orange-sky-sunset.jpg"
        src={img ? img : "/aerial-shot-city-skyline-orange-sky-sunset.jpg"}
        alt="Hero"
        className="absolute object-cover object-top"
      />
      <div className="container relative mx-auto">
        <div className="space-y-7 text-center">
          <h1
            className="text-4xl sm:text-6xl text-white font-bold"
            data-aos="fade-up"
          >
            {title}
          </h1>
          <p
            className="text-[#efefef] text-sm md:text-2xl max-w-[800px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
