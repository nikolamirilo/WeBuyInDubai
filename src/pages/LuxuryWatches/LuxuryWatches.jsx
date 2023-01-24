import React from "react";
import background from "../../assets/images/luxury_watches/background.jpg";
import audemars_piguet from "../../assets/images/luxury_watches/WeBuyAudemarsPiguet.jpg";
import blancpain from "../../assets/images/luxury_watches/WeBuyBlancpain.jpg";
import breguet from "../../assets/images/luxury_watches/WeBuyBreguet.jpg";
import breitling from "../../assets/images/luxury_watches/WeBuyBreitling.jpg";
import cartier from "../../assets/images/luxury_watches/WeBuyCartier.jpg";
import chopard from "../../assets/images/luxury_watches/WeBuyChopard.jpg";
import franck_muller from "../../assets/images/luxury_watches/WeBuyFranckMuller.jpg";
import hublot from "../../assets/images/luxury_watches/WeBuyHublot.jpg";
import iwc from "../../assets/images/luxury_watches/WeBuyIWC.jpg";
import jacob_co from "../../assets/images/luxury_watches/WeBuyJacobCo.jpg";
import jaeger_le_coultre from "../../assets/images/luxury_watches/WeBuyJaegerLeCoultre.jpg";
import jaquet_droz from "../../assets/images/luxury_watches/WeBuyJaquetDroz.jpg";
import omega from "../../assets/images/luxury_watches/WeBuyOmega.jpg";
import panerai from "../../assets/images/luxury_watches/WeBuyPanerai.jpg";
import patek_philippe from "../../assets/images/luxury_watches/WeBuyPatekPhilippe.jpg";
import richard_mille from "../../assets/images/luxury_watches/WeBuyRichardMille.jpg";
import rolex from "../../assets/images/luxury_watches/WeBuyRolex.jpg";
import tag_heuer from "../../assets/images/luxury_watches/WeBuyTAGHeuer.jpg";
import ulysse_nardin from "../../assets/images/luxury_watches/WeBuyUlysseNardin.jpg";
import vacheron_constantin from "../../assets/images/luxury_watches/WeBuyVacheronConstantin.jpg";
import zenith from "../../assets/images/luxury_watches/WeBuyZenith.jpg";
import { Card, Hero } from "../../components";
import data from "../../data.json";

const LuxuryWatches = () => {
  const images = [
    audemars_piguet,
    blancpain,
    breguet,
    breitling,
    cartier,
    chopard,
    franck_muller,
    hublot,
    iwc,
    jacob_co,
    jaquet_droz,
    jaeger_le_coultre,
    omega,
    panerai,
    patek_philippe,
    rolex,
    richard_mille,
    tag_heuer,
    ulysse_nardin,
    vacheron_constantin,
    zenith,
  ];
  return (
    <div className="luxury-watches">
      <Hero type="luxury-watches" title={["We buy", "authentic", "luxury", "watches", "in Dubai", "for cash."]} image={background} />
      <div className="watches-brands">
        {data.watches_brands.map((item, idx) => {
          return <Card key={idx} type="luxury-watches" title={item} image={images[idx]} />;
        })}
      </div>
    </div>
  );
};

export default LuxuryWatches;
