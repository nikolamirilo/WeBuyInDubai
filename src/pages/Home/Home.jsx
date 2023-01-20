import React from "react";
import { Card, Hero, Map } from "../../components";
import data from "../../data.json";
import background from "../../assets/images/home/background.jpg";

const Home = () => {
  return (
    <div className="home">
      <Hero title="WE BUY IN DUBAI" subtitle="BEST PRICE FOR YOUR DEVICE" image={background} />
      <div className="categories">
        {data.categories
          ? data.categories.map((item) => {
              return (
                <Card key={item.id} title={item.title} image="https://i.ytimg.com/vi/aeQnQ-vjtuY/maxresdefault.jpg" />
              );
            })
          : null}
      </div>
      <Map />
    </div>
  );
};

export default Home;
