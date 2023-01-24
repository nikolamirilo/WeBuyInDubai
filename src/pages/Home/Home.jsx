import React from "react";
import background from "../../assets/images/home/background.jpg";
import cameras from "../../assets/images/home/WeBuyCameras.jpg";
import laptops from "../../assets/images/home/WeBuyLaptops.jpg";
import mobile_phones from "../../assets/images/home/WeBuyMobilePhones.jpg";
import smartwatches from "../../assets/images/home/WeBuySmartwatches.jpg";
import tablets from "../../assets/images/home/WeBuyTablets.jpg";
import luxury_watches from "../../assets/images/home/WeBuyWatches.jpg";
import { Card, Hero, Map } from "../../components";
import data from "../../data.json";

const Home = () => {
  const images = [mobile_phones, tablets, laptops, cameras, smartwatches, luxury_watches];
  return (
    <div className="home">
      <Hero title={["We buy","used","mobile","phones","in Dubai","for cash."]} image={background} />
      <div className="categories">
        {data.categories
          ? data.categories.map((item, idx) => {
              return <Card key={item.id} title={item.title} image={images[idx]} />;
            })
          : null}
      </div>
      <Map />
    </div>
  );
};

export default Home;
