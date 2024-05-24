"use client";

import Hero from "@/components/hero-page";
import Map from "@/components/map";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";
import { Instagram, Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Contact Us - Connect with Leora",
  description:
    "Have questions or need information? Contact our team today and let's build meaningful connections together.",
};

export default function ContactUsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <main className="relative z-[1]">
      <Hero
        title="Contact Us"
        // description="Have questions or need information? Contact our team today and let's build meaningful connections together."
        description="Connect with Leora"
      />
      <section className="py-20 container relative">
        <Image
          src="/buildings_248101.svg"
          alt=""
          width={500}
          height={500}
          // data-aos="fade-in"
          className="absolute top-0 md:top-[200px] left-[-300px] md:left-[-200px] xl:left-[-400px] rotate-[60deg]"
        />
        <Image
          src="/buildings_248101.svg"
          alt=""
          width={500}
          height={500}
          // data-aos="fade-in"
          className="absolute top-[500px] right-[-200px] md:right-[-300px] xl:right-[-400px] rotate-[120deg] scale-x-[-1] scale-y-[-1]"
        />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <div className="space-y-5 mb-10">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#59b400] text-center">
              Contact Us
            </h2>
            <p className="text-center text-[#989898] max-w-[600px] mx-auto">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
          </div>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Name
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Website
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#59b400]"
            >
              Send message
            </button>
          </form>
          <div className="mt-20 space-y-10">
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#59b400] text-center">
              Our Office
            </h2>

            <p className="text-center text-[#989898] max-w-[600px] mx-auto">
              Harka Office, Alamanda Tower Lantai 2 Unit H 1, Jl. TB Simatupang
              Nomor 23-24, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan,
              Daerah Khusus Ibukota Jakarta 12430
            </p>

            <div className="space-x-2 text-center space-y-5">
              <Button size={"icon"}>
                <Phone />
              </Button>
              <Button size={"icon"}>
                <Instagram />
              </Button>
              <Button size={"icon"}>
                <Mail />
              </Button>
            </div>

            <Map />
          </div>
        </div>
      </section>
    </main>
  );
}
