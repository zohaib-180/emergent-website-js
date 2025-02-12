"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import About from "@/app/About/page";
import Services from "@/app/Services/page";
import Portfolio from "@/app/Portfolio/page";
import Expertise from "@/app/Expertise/page";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (optional)
      once: true,     // Animation only happens once (optional)
    });
  }, []);

  return (
    <div className="mb-28">
      <header className="w-full shadow-md fixed z-10  top-0">
        {/* Top Strip */}
        <div className="bg-[#174886] py-2 text-sm">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-3">
              <span className="text-white">Follow Us</span>
              <ul className="flex space-x-2">
                <li>
                  <a href="#" className="text-white">
                    <Icon icon="mdi:facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <Icon icon="mdi:twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <Icon icon="mdi:instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <a
                href="tel:+92515518612"
                className="flex items-center space-x-1 text-white"
              >
                <Icon icon="mdi:phone" />
                <span>+92-51-5518612</span>
              </a>
              <a
                href="mailto:info@emergentsoft.com"
                className="flex items-center space-x-1 text-white"
              >
                <Icon icon="mdi:email" />
                <span>info@emergentsoft.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-[#e5e5e5]">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <Link href="/">
              <Image
                src="/assets/images/ess-logo.svg"
                alt="Emergent Soft"
                width={150}
                height={50}
              />
            </Link>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
            <ul
              className={`$ {
              isOpen ? 'block' : 'hidden'
            } md:flex space-x-6 text-gray-700 text-lg`}
            >
              <li>
                <Link href="/" className="relative  group">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="../About" className="relative group">
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="../Services" className="relative group">
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="../Portfolio" className="relative  group">
                  Portfolio
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="../Expertise" className="relative group">
                  Expertise
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="../Methodology" className="relative group">
                  Methodology
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="../Contact" className="relative group">
                  Contact Us
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
            <a
              href="#"
              className="hidden md:block bg-[#174886] text-white px-4 py-2 rounded-md"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
