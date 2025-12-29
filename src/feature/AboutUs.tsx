import React from "react";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div id="about" className="relative overflow-hidden">
            <section className="container pb-16 md:pb-[120px]  ">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">

                    {/* Image Side - Left on Desktop */}
                    <div className="flex-1 relative w-full flex justify-center md:justify-start order-2 md:order-1">
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[400px]">
                            {/* Main Image */}
                            <Image
                                src="/assets/images/about-sushi.png"
                                alt="About Sushi"
                                fill
                                className="object-contain drop-shadow-lg "
                            />

                        </div>
                    </div>

                    {/* Text Side - Right on Desktop */}
                    <div className="flex-1 text-center md:text-left space-y-6 order-1 md:order-2">
                        <div>
                            <span className="section-title">About Us</span>
                            <h2 className="section-subtitle font-lora mt-2">
                                <span className="inline-flex items-center md:gap-3 gap-1">
                                    We Provide
                                    <div className="relative w-9 h-9 md:w-12 md:h-12 inline-block">
                                        <Image src="/assets/icons/about-sushi-title.png" alt="icon" fill className="object-contain" />
                                    </div>
                                </span> <br className="block" />
                                Healthy Food
                            </h2>
                        </div>

                        <p className="section-description max-w-lg mx-auto md:mx-0">
                            Food comes to us from our relatives, whether they have wings or roots.
                            This is how we consider food, it also has a culture. It has a history that
                            passes from generation to generation.
                        </p>

                        {/* Optional: Add a subtle decoration or button if needed, but sticking to text/image as per request */}
                    </div>

                </div>

                {/* Background Decorations */}
                <div className="absolute -right-5 md:bottom-0 bottom-[35%] w-40 h-40 md:w-[274px] md:h-[350px] opacity-16 -rotate-25">
                    <Image src="/assets/images/leaf-branch-1.png" alt="leaf" fill className="object-contain" />
                </div>
            </section>
        </div>
    );
}
