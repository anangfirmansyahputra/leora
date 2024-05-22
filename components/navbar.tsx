"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Project",
      url: "/project",
    },
    {
      label: "Articles",
      url: "/article",
    },
    {
      label: "Contact Us",
      url: "/contact-us",
    },
  ];

  return (
    <header
      className={`transition-all duration-200 left-1/2 fixed top-0 z-50 w-full -translate-x-1/2 ${
        isScrolled ? "bg-[#121212b6] cbackdrop-blur-xl " : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[80px]">
        <Image src="/logo.png" width={150} height={100} alt="Logo" />
        <nav className="md:block hidden">
          <ul className="flex items-center space-x-10">
            {nav.map((nav) => (
              <li
                key={nav.label}
                className="text-[#efefef] transition-all duration-150 hover:text-white"
              >
                <Link href={nav.url}>{nav.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="bg-gray-100 md:block hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100
        text-[#efefef] hover:text-white transition-all duration-150 px-6 py-3 rounded-full"
        >
          Kerja Sama
        </button>
      </div>
    </header>
  );
}
