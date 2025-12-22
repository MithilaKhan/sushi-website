"use client";
import React, { useState, useEffect, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import navItems from "@/constants/navItem";
import "aos/dist/aos.css";
import { Poppins } from "next/font/google";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const pathname = usePathname();
  const cookieLang = Cookies.get("lang");

  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      setIsScrolled(scrollY > bannerHeight - 80);

      if (scrollY > lastScrollTop.current && scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cookieLang]);

  return (
    <nav
      className={`fixed top-0  z-50 w-full h-20 flex-center transition-all duration-500 navbar-container 
        ${isScrolled
          ? "bg-[#fff1eb] mt-0"
          : "bg-transparent lg:bg-transparent md:px-8 2xl:px-0  lg:backdrop-blur-none  "
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
            <p className="text-xl font-semibold text-[#2C2420] hover:text-primary font-lora">Sushi </p>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="hidden lg:flex items-center gap-12">
              {navItems?.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={` text-sm lg:text-lg ${poppins.className} lg:text-xs 2xl:text-sm transition-all duration-300 font-medium ${item.href === pathname
                    ? "relative  text-primary"
                    : "text-[#2C2420] hover:text-primary"
                    }`}
                  style={{
                    backdropFilter:
                      item.href === pathname
                        ? "blur(10px) saturate(120%)"
                        : "none",
                    WebkitBackdropFilter:
                      item.href === pathname
                        ? "blur(10px) saturate(120%)"
                        : "none",
                  }}
                >
                  {item.labelKey}
                </Link>
              ))}
            </div>
            <div onClick={() => setIsDark(!isDark)} className="cursor-pointer  transition-all duration-300 text-[#2C2420]">
              {
                isDark ? <RiMoonLine size={20} /> : <RiSunLine size={20} />
              }
            </div>

          </div>

          {/* Right Section - Language + Download + Menu */}
          <div className="lg:hidden flex items-center gap-4">

            <div onClick={() => setIsDark(!isDark)}>
              {
                isDark ? <RiMoonLine size={20} /> : <RiSunLine size={20} />
              }
            </div>
            <button
              className="lg:hidden  text-xl"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Menu</span>
            {/* <CloseOutlined onClick={() => setDrawerOpen(false)} /> */}
          </div>
        }
        placement="right"
        width={280}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex flex-col gap-6 ">
          {navItems?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${item.href === pathname
                ? "relative font-semibold pl-4 -ml-4 py-2 rounded-lg  bg-primary! text-white! backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                : " hover:text-primary text-[#000000]!"
                } text-base   transition-all`}
              onClick={() => setDrawerOpen(false)}
            >
              {item.labelKey}
            </Link>
          ))}
        </div>
      </Drawer>
    </nav>
  );
}
