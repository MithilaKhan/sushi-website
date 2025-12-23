import React from "react";
import ReactLenis from "lenis/react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import BestFood from "./BestFood";
import RecentlyAdded from "./RecentlyAdded";
import NewsLetter from "./NewsLetter";

export default async function HomePage() {

  return (
    <>
      <ReactLenis root />
      <Banner />
      <AboutUs />
      <BestFood />
      <RecentlyAdded />
      <NewsLetter />
    </>
  );
}
