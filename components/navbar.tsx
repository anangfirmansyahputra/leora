"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  function redirectToWhatsApp() {
    const phoneNumber = "+6281292499946";
    const message =
      "Halo, saya tertarik dengan layanan Leora. Bisa saya dapatkan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <header
      className={`transition-all duration-200 left-1/2 fixed top-0 z-50 w-full -translate-x-1/2 ${
        isScrolled ? "bg-[#121212b6] cbackdrop-blur-xl " : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[80px]">
        <Image
          role="button"
          src="/logo.png"
          width={150}
          height={100}
          alt="Logo"
          onClick={() => router.push("/")}
          className="ml-[-25px]"
        />
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
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              className="sm:hidden bg-transparent mr-[-10px]"
            >
              <Menu className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle className="bg-black rounded">
                <SheetClose>
                  <Image
                    role="button"
                    src="/logo.png"
                    width={150}
                    height={100}
                    alt="Logo"
                    onClick={() => router.push("/")}
                  />
                </SheetClose>
              </SheetTitle>
              <SheetDescription>
                <div className="items-center space-y-5 my-5 flex flex-col pb-10">
                  {nav.map((nav) => (
                    <SheetClose
                      asChild
                      key={nav.label}
                      className={`${
                        pathname === nav.url ? "text-[#222]" : "text-[#989898]"
                      } `}
                    >
                      <Link href={nav.url}>{nav.label}</Link>
                    </SheetClose>
                  ))}
                  <button
                    className="bg-green-600 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-100
        text-[#efefef] hover:text-white transition-all duration-150 px-6 py-3 rounded-full"
                  >
                    Kerja Sama
                  </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <button
          onClick={redirectToWhatsApp}
          className="bg-gray-100 md:block hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100
        text-[#efefef] hover:text-white transition-all duration-150 px-6 py-3 rounded-full"
        >
          Collaboration
        </button>
      </div>
    </header>
  );
}
