import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function RecentlyAdded() {
    return (
        <section className="container pb-16 md:pb-24 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
                {/* Left Content - Text */}
                <div className="flex-1 text-center md:text-left z-10">
                    <h3 className="section-title">Recently Added</h3>

                    <div className="flex flex-col md:block items-center md:items-start group">
                        <h2 className="section-subtitle leading-tight max-w-lg mx-auto md:mx-0 relative">
                            Sushi Samurai <br className="hidden md:block" /> Salmón Cheese
                            <div className="absolute -right-12 top-2 w-10 h-10 hidden md:block opacity-80 rotate-12">
                                <Image
                                    src="/assets/images/spinach-leaf.png"
                                    alt="Decoration"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </h2>
                    </div>

                    <p className="section-description max-w-md mx-auto md:mx-0 mb-8">
                        Take a look at what's new. And do not deprive yourself of a good meal, enjoy and be happy.
                    </p>

                    <button className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium mx-auto md:mx-0 transition-all hover:bg-orange-700 hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-primary/20">
                        Order Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Right Content - Image */}
                <div className="flex-1 relative w-full flex justify-center items-center">
                    <div className="relative w-[300px] h-[220px] md:w-[500px] md:h-[350px]">
                        <Image
                            src="/assets/images/about-sushi.png"
                            alt="Sushi Samurai Salmón Cheese"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>



                </div>
            </div>
        </section>
    );
}
