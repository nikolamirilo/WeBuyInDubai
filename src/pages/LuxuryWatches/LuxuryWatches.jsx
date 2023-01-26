import React, { Suspense } from "react";
import background from "../../assets/images/luxury_watches/background.webp";
import audemars_piguet from "../../assets/images/luxury_watches/WeBuyAudemarsPiguet.webp";
import blancpain from "../../assets/images/luxury_watches/WeBuyBlancpain.webp";
import breguet from "../../assets/images/luxury_watches/WeBuyBreguet.webp";
import breitling from "../../assets/images/luxury_watches/WeBuyBreitling.webp";
import cartier from "../../assets/images/luxury_watches/WeBuyCartier.webp";
import chopard from "../../assets/images/luxury_watches/WeBuyChopard.webp";
import franck_muller from "../../assets/images/luxury_watches/WeBuyFranckMuller.webp";
import hublot from "../../assets/images/luxury_watches/WeBuyHublot.webp";
import iwc from "../../assets/images/luxury_watches/WeBuyIWC.webp";
import jacob_co from "../../assets/images/luxury_watches/WeBuyJacobCo.webp";
import jaeger_le_coultre from "../../assets/images/luxury_watches/WeBuyJaegerLeCoultre.webp";
import jaquet_droz from "../../assets/images/luxury_watches/WeBuyJaquetDroz.webp";
import omega from "../../assets/images/luxury_watches/WeBuyOmega.webp";
import panerai from "../../assets/images/luxury_watches/WeBuyPanerai.webp";
import patek_philippe from "../../assets/images/luxury_watches/WeBuyPatekPhilippe.webp";
import richard_mille from "../../assets/images/luxury_watches/WeBuyRichardMille.webp";
import rolex from "../../assets/images/luxury_watches/WeBuyRolex.webp";
import tag_heuer from "../../assets/images/luxury_watches/WeBuyTAGHeuer.webp";
import ulysse_nardin from "../../assets/images/luxury_watches/WeBuyUlysseNardin.webp";
import vacheron_constantin from "../../assets/images/luxury_watches/WeBuyVacheronConstantin.webp";
import zenith from "../../assets/images/luxury_watches/WeBuyZenith.webp";
import data from "../../data.json";
const Hero = React.lazy(() => import("../../components/Hero/Hero"));
const Card = React.lazy(() => import("../../components/Card/Card"));

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
      <Suspense fallback="">
        <Hero
          title={["We buy", "authentic", "luxury", "watches", "in Dubai", "for cash."]}
          image={background}
        />
      </Suspense>
      <Suspense fallback="">
        <div className="watches-brands">
          {data.watches_brands.map((item, idx) => {
            return <Card key={idx} type="luxury-watches" title={item} image={images[idx]} />;
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default LuxuryWatches;
