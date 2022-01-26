import React from "react";
//import About from "/src/components/blocks/about/about";
//import FeaturesList from "/src/components/blocks/feature-list/features-list";
import Buy from "/src/components/blocks/buy/buy";

function MainPage({ features, product }) {
  return (
    <>
      <Buy product={product} />
    </>
  );
}

export default MainPage;

//      <About />
// <FeaturesList features={features} />
