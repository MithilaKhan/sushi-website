"use client";

import navItems from "@/constants/navItem";
import { useLenis } from "lenis/react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const MobileNav = ({
    drawerOpen,
    setDrawerOpen,
}: {
    drawerOpen: boolean;
    setDrawerOpen: (open: boolean) => void;
}) => {
    const lenis = useLenis();

    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setDrawerOpen(false)}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* Top Drawer */}
            <div
                className={`fixed top-0 left-0 z-50 w-full h-[420px] ease-in  bg-[#fff1eb] dark:bg-[#171412] dark:text-[#E2D5D0]
        transform transition-transform duration-300 dark:border-b dark:border-[#2c2b2a] border-[#2c2b2a] dark:shadow-lg dark:shadow-[#2c2b2a] shadow-lg
        ${drawerOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                {/* Decorative leaves */}
                <Image
                    src="/assets/images/leaf-branch-2.png"
                    alt="leaf"
                    width={80}
                    height={80}
                    className="absolute top-6 left-4 opacity-40 pointer-events-none rotate-90"
                />

                <Image
                    src="/assets/images/leaf-branch-3.png"
                    alt="leaf"
                    width={60}
                    height={60}
                    className="absolute bottom-6 right-4 opacity-40 pointer-events-none -rotate-45"
                />

                {/* Header */}
                <div className="flex items-center justify-center relative h-16">
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col items-center gap-6 mt-6">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const target = document.querySelector(item.href);
                                if (target instanceof HTMLElement) {
                                    lenis?.scrollTo(target, { offset: -120 });
                                }
                                setDrawerOpen(false);
                            }}
                            className={`text-base font-medium transition-colors hover:text-primary ${poppins.className}`}
                        >
                            {item.labelKey}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-8">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm">
                        Order Now →
                    </button>
                </div>
            </div>
        </>
    );
};

export default MobileNav;
