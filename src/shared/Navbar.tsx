"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import navItems from "@/constants/navItem";
import { useLenis } from "lenis/react";
import { Poppins } from "next/font/google";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import MobileNav from "./MobileNav";
import { useTheme } from "@/lib/provider/ThemeProvider";
import { GrAppsRounded } from "react-icons/gr";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const lenis = useLenis();
  const [activePath, setActivePath] = useState('#home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const currentHash = window.location.hash || '#home';
    setActivePath(currentHash);
  }, []);

  useEffect(() => {
    const handleTopCheck = () => {
      const bannerHeight = document.getElementById("home")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      setIsScrolled(scrollY > bannerHeight - 80);

      if (scrollY > lastScrollTop.current && scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    globalThis.addEventListener("scroll", handleTopCheck);
    return () => globalThis.removeEventListener("scroll", handleTopCheck);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const top = section.offsetTop - 220;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActivePath(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavScroll = useCallback((e: any, path: string) => {
    e.preventDefault();
    const section = document.getElementById(path.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActivePath(path);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0  z-50 w-full h-20 flex-center transition-all duration-500 navbar-container 
        ${isScrolled
          ? "bg-[#fff1eb] dark:bg-[#171412] mt-0"
          : "bg-transparent lg:bg-[#fff1eb] dark:bg-[#171412] md:px-8 2xl:px-0  lg:backdrop-blur-none  "
        }
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}
      `}
    >
      <div
        className={`container mx-auto transition-colors duration-300`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="shrink-0 -mt-2 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Sushi Logo"
              width={80}
              height={80}
              className="h-[35px] lg:h-[25px] w-fit"
            />
            <p className="text-xl font-semibold text-[#2C2420] dark:text-[#E2D5D0] hover:text-primary font-lora">Sushi </p>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="hidden lg:flex items-center gap-12">
              {navItems?.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    handleNavScroll(e, item.href);
                    const target = document.querySelector(item.href);
                    if (target instanceof HTMLElement) {
                      lenis?.scrollTo(target, { offset: -220 });
                    }
                  }}
                  className={`text-sm font-medium transition-all ${poppins.className}
                     ${item.href === activePath ? "text-primary" : "text-[#2C2420] dark:text-[#E2D5D0] hover:text-primary"}
                   `}
                >
                  {item.labelKey}
                </button>
              ))}
            </div>
            <div onClick={toggle} className="cursor-pointer  transition-all duration-300 text-[#2C2420] dark:text-[#E2D5D0]">
              {
                isDark ? <RiSunLine size={20} /> : <RiMoonLine size={20} />
              }
            </div>

          </div>

          {/* Right Section - Language + Download + Menu */}
          <div className="lg:hidden flex items-center gap-4">

            <div onClick={toggle}>
              {
                isDark ? <RiSunLine size={20} /> : <RiMoonLine size={20} />
              }
            </div>
            <button
              className="lg:hidden  text-xl "
              onClick={() => setDrawerOpen(true)}
            >
              <GrAppsRounded />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <MobileNav drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </nav>
  );
}
