"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

type HeroProps = {
  title: string;
  img?: string;
};

export default function Hero({ title, img }: HeroProps) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="relative h-dvh pt-[80px] flex items-center">
      <Image
        fill
        // src="/aerial-shot-city-skyline-orange-sky-sunset.jpg"
        src={img ? img : "/hero.jpg"}
        alt="Hero"
        className="absolute object-cover object-top"
      />
      <div className="container relative mx-auto">
        <div className="space-y-10 text-center">
          <h1 className="text-6xl text-white font-bold" data-aos="fade-up">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
