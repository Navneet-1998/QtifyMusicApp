import React from "react";
import "./qtify.css";
import NavbarSection from "./navbarSection/navbar";
import HeroImage from "./heroSection/heroImage";
import {CardCarousel, CardCarousel2} from "./cardCarouselSection/cardCarousel";


function Qtify() {

  return (
    <>
      <body style={{backgroundColor:"#121212", width:"100%", height:"100%"}}>
        {" "}
        <NavbarSection />
        <HeroImage />
        <CardCarousel/>
        <CardCarousel2/>
      </body>
    </>
  );
}

export default Qtify;
