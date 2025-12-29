import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";

export default function NewsLetter() {
    return (
        <section id="newsletter" className="container py-10 ">
            <div className="bg-[#2A1E17] dark:bg-[#1C1917] dark:border-2 dark:border-[#292625] rounded-4xl md:rounded-[4.5rem] p-5 md:p-10 relative  flex flex-col md:flex-row items-center justify-between gap-00 md:gap-20">

                {/* Decorative Leaf */}
                <div className="absolute md:-bottom-8 -bottom-8 md:right-8 right-0 w-16 h-16 md:w-[85px] md:h-[85px] rotate-45 z-20">
                    <Image
                        src="/assets/images/spinach-leaf.png"
                        alt="Leaf"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Left Image Section (Sushi) */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-center">
                    <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[290px]">
                        <Image
                            src="/assets/images/newsletter-sushi.png"
                            alt="Sushi"
                            fill
                            className="object-contain -rotate-16"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6 z-10">
                    <div>
                        <h4 className="section-title">
                            Newsletter
                        </h4>
                        <h2 className="section-subtitle text-white dark:text-white! font-lora md:pb-4">
                            Subscribe For <br /> Offer Updates
                        </h2>
                    </div>

                    <form className="flex flex-row gap-4 w-full max-w-md mx-auto md:mx-0">
                        <div className="flex-1 bg-white dark:bg-[#171412] dark:border-2 dark:border-[#292625] rounded-full px-6 py-4 flex items-center">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder:text-gray-700 dark:placeholder:text-[#B4A197] font-poppins text-sm md:text-base"
                            />
                        </div>
                        <button
                            type="button"
                            className="bg-primary transition-colors text-white md:px-8 px-4 py-4 rounded-full flex items-center justify-center gap-2 font-medium cursor-pointer"
                        >

                            <Send size={24} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
