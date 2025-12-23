
import React from 'react';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { dishes } from '@/constants/features';

export default function BestFood() {
    return (
        <section className="container pb-16  md:pb-[120px]">
            {/* Section Header */}
            <div className="text-center mb-24">
                <span className="section-title ">The Best Food</span>
                <h2 className="section-subtitle font-lora ">Popular Dishes</h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-16 md:pt-3">
                {dishes.map((dish) => (
                    <div
                        key={dish.id}
                        className="group relative bg-[#fff5f0] rounded-[40px] p-6 pt-32 pb-8 text-center shadow-[0_8px_20px_hsla(19,64%,48%,0.08)]  transition-transform duration-300 hover:-translate-y-1"
                    >
                        {/* Floating Image */}
                        <div className="absolute -top-11 left-1/2 -translate-x-1/2 w-[230px] h-[145px] rotate-2 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src={dish.image}
                                alt={dish.title}
                                fill
                                className="object-cover drop-shadow-xl"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col items-center">
                            <h3 className="font-lora text-2xl font-medium text-foreground mb-1">
                                {dish.title}
                            </h3>
                            <p className="font-poppins text-sm text-[#68544B] mb-6">
                                {dish.description}
                            </p>

                            <div className="flex items-center justify-between w-full px-4">
                                <span className="text-xl font-medium text-primary font-lora">
                                    ${dish.price}
                                </span>
                                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary transition-colors duration-300 shadow-md cursor-pointer">
                                    <ShoppingBag size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
