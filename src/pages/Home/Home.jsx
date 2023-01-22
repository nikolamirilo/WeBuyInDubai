import React from "react";
import { Card, Hero, Map } from "../../components";
import data from "../../data.json";
import background from "../../assets/images/home/background.jpg";
import luxury_watches from "../../assets/images/home/WeBuyWatches.jpg";
import mobile_phones from "../../assets/images/home/WeBuyMobilePhones.jpg";
import smartwatches from "../../assets/images/home/WeBuySmartwatches.jpg";
import laptops from "../../assets/images/home/WeBuyLaptops.jpg";
import tablets from "../../assets/images/home/WeBuyTablets.jpg";
import cameras from "../../assets/images/home/WeBuyCameras.jpg";

const Home = () => {
  const images = [mobile_phones, tablets, laptops, cameras, smartwatches, luxury_watches];
  return (
    <div className="home">
      <Hero title="WE BUY IN DUBAI" subtitle="BEST PRICE FOR YOUR DEVICE" image={background} />
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
