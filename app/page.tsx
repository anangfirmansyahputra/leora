import Hero from "@/components/hero";
import Project from "@/components/project";
import { ChevronDown, Search } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beyond Construction, Life's Connection - Leora",
  description:
    "Leading Construction Ecosystem Transformation in Indonesia. Discover how Leora integrates innovation and sustainability beyond construction.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container z-[2] md:mx-auto relative flex items-center justify-center">
        <div className=" absolute top-[-50px] z-30 bg-white max-w-[800px] gap-3 sm:gap-0 w-full rounded-full px-10 py-5 grid-cols-3 hidden sm:grid sm:grid-cols-4 shadow-lg">
          <div className="space-y-2">
            <div className="text-[#989898] sm:text-base text-sm flex items-center">
              City Street <ChevronDown className="ml-1" size={20} />
            </div>
            <div className="text-[#228B22] sm:text-base text-sm font-bold">
              Panjer
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[#989898] sm:text-base text-sm  flex items-center">
              Tipologi of rent <ChevronDown className="ml-1" size={20} />
            </div>
            <div className="text-[#228B22] sm:text-base text-sm font-bold">
              Vila
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[#989898] sm:text-base text-sm flex items-center">
              Price <ChevronDown className="ml-1" size={20} />
            </div>
            <div className="text-[#228B22] sm:text-base text-sm font-bold">
              Rp. 1.000.000
            </div>
          </div>
          <button className="bg-[#228B22] rounded-full col-span-3 sm:col-span-1 sm:py-0 py-3 sm:rounded-tr-full sm:rounded-br-full text-white flex items-center px-5 hover:bg-[#207521] transition-all duration-150">
            <Search className="mr-2" />
            Search
          </button>
        </div>
      </div>
      <Project />
      <div className="pb-20 relative z-[2]">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20">
          <div className="relative aspect-video">
            <Image
              src="/hero.jpg"
              fill
              alt="House"
              className="absolute z-10 rounded-lg shadow-lg"
            />
            <div className="absolute w-full h-full bg-[#0000005e] left-5 top-5 rounded-lg shadow-lg" />
          </div>
          <div className="space-y-10 flex flex-col justify-between sm:bg-white sm:p-10 sm:rounded-xl sm:shadow-lg">
            <h2 className="text-3xl sm:text-5xl max-w-[500px] text-[#228B22] font-semibold">
              The Easiest Method To Find a House
            </h2>
            <div className="space-y-5 text-[#989898]">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias eum repellat asperiores quaerat nemo eius praesentium
                incidunt earum, nam consequuntur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                eveniet iste in fugit voluptatibus aliquid nam sapiente neque
                qui voluptatem?
              </p>
            </div>
            <button className="bg-[#228B22] w-fit rounded-full py-5 text-white flex items-center px-10 hover:bg-[#207521] transition-all duration-150">
              Try now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
