import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import BestFood from "./BestFood";
import RecentlyAdded from "./RecentlyAdded";

export default async function HomePage() {

  return (
    <>
      <Banner />
      <AboutUs />
      <BestFood />
      <RecentlyAdded />
    </>
  );
}
