import React from "react";
import "./qtify.css";
import NavbarSection from "./navbarSection/navbar";
import HeroImage from "./heroSection/heroImage";
import CardSection from "./cardSection/card";

function Qtify() {
  return (
    <>
      <body style={{backgroundColor:"#121212", width:"100%", height:"100%"}}>
        {" "}
        <NavbarSection />
        <HeroImage />
        <CardSection/>
      </body>
    </>
  );
}

export default Qtify;
