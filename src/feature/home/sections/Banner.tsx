import Image from "next/image";
import React from "react";

export default async function Banner() {

  return (
    <div
      id="banner"
      style={{
        backgroundImage: "url('/assets/images/home/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-32 md:pt-0  md:min-h-screen flex flex-col items-center justify-end"
    >
      <div className="lg:max-w-[700px]  2xl:max-w-[900px] mx-auto text-center lg:mt-40 2xl:mt-[260px] px-4 lg:px-5">
        <h1
          data-aos="fade-up"
          className="font-semibold mb-8 leading-[120%] text-4xl lg:text-5xl 2xl:text-6xl   "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quod.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-sm lg:text-base  2xl:text-lg lg:max-w-[900px]"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia deserunt sapiente ipsum. Sunt excepturi quod, fugit mollitia et nam minima impedit similique quos ducimus omnis voluptatem cupiditate nisi eius ex?
        </p>
        <div
          data-aos="fade-up"
          // data-aos="zoom-in"
          data-aos-delay={150}
          className="flex justify-end"
        >
          <Image
            src={"/assets/images/home/banner-phone.png"}
            alt="Phone Image"
            width={1320}
            height={600}
            draggable={false}
            className="w-full  h-full object-contain mx-auto mt-6"
          />
        </div>
      </div>
    </div>
  );
}
