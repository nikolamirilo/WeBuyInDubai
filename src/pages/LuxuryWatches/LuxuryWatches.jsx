import React from "react";
import { Card, Hero } from "../../components";
import data from "../../data.json";

const LuxuryWatches = () => {
  return (
    <div className="luxury-watches">
      <Hero
        title="We buy authentic luxury watches in Dubai for cash."
        image="https://img.freepik.com/premium-photo/black-luxury-watch-black-coals-background_158023-2038.jpg?w=2000"
      />
      <h2>Best Offer</h2>
      <div className="watches-brands">
        {data.watches_brands.map((item, idx) => {
          return (
            <Card
              key={idx}
              type="luxury-watches"
              title={item}
              image="https://dmzr5ikm7nos4.cloudfront.net/content_image/226b7a60-e6b8-11ea-aaa4-6f2e38dcf43d/origin.jpg"
            />
          );
        })}
      </div>
    </div>
  );
};

export default LuxuryWatches;
