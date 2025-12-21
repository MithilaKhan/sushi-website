"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { Lora } from "next/font/google";
import footerData from "@/constants/footerItem";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Footer() {

  return (
    <div>
      <footer className={`relative overflow-hidden ${poppins.className}`}>

        <div className="container mx-auto px-4 md:px-5 pt-20 md:pt-32 pb-12 text-[#68544B]">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 relative">

            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Sushi Logo" width={30} height={30} className="w-8 h-auto" />
                <span className={`text-2xl font-semibold text-[#2e211e] ${lora.className}`}>Sushi</span>
              </div>
              <p className="text-[#68544B] leading-relaxed max-w-[280px] text-[16px] tracking-wide ">
                Food for the body is not enough. There must be food for the soul.
              </p>

              <div className="absolute right-0 top-10 md:hidden">
                <Image src="/assets/images/spring-onion.png" alt="leaf" width={40} height={40} className="w-[40px] rotate-[-45deg]" />
              </div>

              <div className="max-w-[280px] hidden md:flex justify-center pt-3">
                <Image src="/assets/images/spinach-leaf.png" alt="leaf" width={30} height={30} className="w-[30px] rotate-[45deg] " />
              </div>
            </div>

            {/* Links Columns */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="font-medium text-[#2e211e] mb-6 text-[16px]">Main Menu</h3>
              <ul className="flex flex-col gap-2  text-[16px]">
                {footerData.mainMenu.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2 transition-all">
              <h3 className="font-medium text-[#2e211e] mb-6 text-[16px]">Information</h3>
              <ul className="flex flex-col gap-2  text-[16px]">
                {footerData.information.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address Column */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="font-medium text-[#2e211e] mb-6 text-[16px]">Address</h3>
              <div className="flex flex-col gap-2  text-[16px]">
                <p>{footerData.address.location}</p>
                <p>{footerData.address.hours}</p>
              </div>
              {/* Leaf Decoration - Mobile Only (Below Address) */}
              <div className="flex md:hidden pt-6">
                <Image src="/assets/images/spinach-leaf.png" alt="leaf" width={40} height={40} className="w-[40px] rotate-[45deg]" />

                <div className="absolute -bottom-1 right-0 pointer-events-none">
                  <Image
                    src="/assets/images/leaf-branch-4.png"
                    alt="leaf decoration"
                    width={110}
                    height={110}
                    className="w-[110px]  opacity-20"
                  />
                </div>
              </div>
            </div>

            {/* Socials Column */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="font-medium text-[#2e211e] mb-6 text-[16px]">Social Media</h3>
              <div className="flex gap-4">
                {footerData.socials.map((social, index) => (
                  <a key={index} href={social.href} className="w-10 h-10 rounded-full bg-[#f0d8cc] text-[#d36836] flex items-center justify-center hover:bg-[#d36836] hover:text-white transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
              {/* Spring Onion - Desktop Only */}
              <div className="mt-5 hidden md:flex justify-center">
                <Image src="/assets/images/spring-onion.png" alt="leaf" width={25} height={25} className="w-[25px] rotate-[-40deg] " />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between md:mt-16 mt-0 pt-8 ">
            <p className="text-sm text-[#68544B] font-medium opacity-60 mt-6 md:mt-0">© Copyright. All rights reserved</p>

            <div className="flex items-center gap-4">
              {footerData.paymentCards.map((card, index) => (
                <Image key={index} src={card} alt="Visa" width={40} height={25} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="absolute -bottom-11 right-0  left-2/3 -translate-y-1/2 -translate-x-1/2">
            <Image
              src="/assets/images/leaf-branch-4.png"
              alt="leaf decoration"
              width={190}
              height={190}
              className="w-[190px] translate-y-1/2  opacity-20 "
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
