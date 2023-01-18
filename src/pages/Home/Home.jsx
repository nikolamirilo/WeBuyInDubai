import React from "react";
import { Card, Hero, Map } from "../../components";
import data from "../../data.json";

const Home = () => {
  return (
    <div className="home">
      <Hero
        title="WeBuyInDubai"
        subtitle="The Leading buy&sell company from Balkan"
        image="https://rare-gallery.com/uploads/posts/380740-4k-wallpaper.jpg"
      />
      <div className="categories">
        {data.categories
          ? data.categories.map((item) => {
              return (
                <Card
                  title={item.title}
                  subtitle={item.subtitle}
                  image="https://images.immediate.co.uk/production/volatile/sites/30/2018/09/Terminice-2020-Version-High-End-Fitness-Tracker-landscape-72e8a46.jpg"
                />
              );
            })
          : null}
      </div>
      <Map />
    </div>
  );
};

export default Home;
