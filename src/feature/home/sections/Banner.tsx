import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden">
      <section className="container pt-32 md:pt-32 pb-16 md:pb-24 overflow-hidden ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-0 md:gap-8">
          {/* Left Content */}
          <div className="flex-1 w-full text-center md:text-left z-10 space-y-6 md:space-y-8">
            <div className="space-y-4 font-lora">
              <h1 className="text-4xl md:text-[68px] font-medium leading-tight text-[#333333]">
                Enjoy Delicious
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <span className="relative inline-block">
                    <span className="relative z-10 w-12 h-12 md:w-[65px] md:h-[65px] inline-block align-middle md:mr-2 mr-0">
                      <Image
                        src="/assets/images/home-sushi-title.png"
                        alt="Sushi Icon"
                        fill
                        className="object-contain"
                      />
                    </span>
                  </span>
                  <span>Sushi Food</span>
                </div>
              </h1>
              <p className=" max-w-sm mx-auto md:mx-0 text-[#68544B] font-poppins text-[16px] md:text-[18px]">
                Enjoy a good dinner with the best dishes in the restaurant and improve
                your day.
              </p>
            </div>
            <button className="group bg-[var(--primary)] transition-colors text-white px-8 py-4 rounded-full flex items-center gap-2 font-medium mx-auto md:mx-0 cursor-pointer">
              Order Now
              <ArrowRight
                size={20}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              />
            </button>
          </div>

          {/* Right Content - Main Image */}
          <div className="flex-1 relative w-full flex justify-center md:justify-end z-10">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <Image
                src="/assets/images/home-sushi-rolls.png"
                alt="Delicious Sushi"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-[25%] left-14 w-32 h-32 md:w-48 md:h-48 opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image src="/assets/images/leaf-branch-2.png" alt="Leaf" fill className="object-contain rotate-[90deg]" />
          </div>
          <div className="absolute bottom-10 right-0 w-40 h-40 md:w-56 md:h-56 opacity-20 translate-x-1/3 translate-y-[2%] pointer-events-none">
            <Image src="/assets/images/leaf-branch-4.png" alt="Leaf" fill className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
