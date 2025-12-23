import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function RecentlyAdded() {
    return (
        <div className="relative overflow-hidden">
            <section className="container pb-16 md:pb-[120px] md:pt-10 pt-12 ">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
                    {/* Left Content - Text */}
                    <div className="flex-1 text-center md:text-left z-10">
                        <h3 className="section-title">Recently Added</h3>

                        <div className="flex flex-col md:block items-center md:items-start group">
                            <div className="section-subtitle leading-tight max-w-lg mx-auto md:mx-0 relative">
                                Sushi Samurai <br className="hidden md:block" />
                                <div className=" flex items-center gap-2 relative">
                                    <span>Salmón Cheese</span>
                                    <span className=" w-10 h-10 hidden md:block opacity-80 rotate-12 -mt-5">
                                        <Image
                                            src="/assets/images/spinach-leaf.png"
                                            alt="Decoration"
                                            fill
                                            className="object-contain"
                                        />
                                    </span>
                                </div>

                            </div>
                        </div>

                        <p className="section-description max-w-md mx-auto md:mx-0 mb-8">
                            Take a look at what's new. And do not deprive yourself of a good meal, enjoy and be happy.
                        </p>

                        <button className="group bg-primary  text-white px-8 py-4 rounded-full flex items-center gap-2 font-medium mx-auto md:mx-0 cursor-pointer">
                            Order Now
                            <ArrowRight
                                size={20}
                                className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                            />
                        </button>
                    </div>

                    {/* Right Content - Image */}
                    <div className="flex-1 relative w-full flex justify-center items-center">
                        <div className="relative w-[300px] h-[220px] md:w-[500px] md:h-[350px]">
                            <Image
                                src="/assets/images/recently-salmon-sushi.png"
                                alt="Sushi Samurai Salmón Cheese"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </section>
            <div className="absolute md:bottom-10 bottom-[30%] md:left-14 left-5 w-24 h-24 md:w-48 md:h-48 opacity-20 -translate-x-1/3 -translate-y-12 pointer-events-none">
                <Image src="/assets/images/leaf-branch-2.png" alt="Leaf" fill className="object-contain rotate-35" />
            </div>
            <div className="absolute md:top-10 top-0 right-0 w-28 h-28 md:w-48 md:h-48 opacity-20 translate-x-1/4 translate-y-[2%] pointer-events-none">
                <Image src="/assets/images/leaf-branch-3.png" alt="Leaf" fill className="object-contain -rotate-30" />
            </div>
        </div>
    );
}
