import React from "react";
import "./heroImage.css"
import logoBG from "../../assets/vibrating-headphone 1.svg";

function HeroImage(){
    return (
        <>
        <div class="m-0 p-0 w-100" style={{ backgroundColor: "#121212" }}>
        <div class=" d-flex justify-content-center">
          <div
            class="align-self-center gotya m-0"
          >
            <span class="fristLine text-center">100 Thousand Songs, ad-free</span> 
            <p class="secondLine text-center">Over thousands podcast episodes</p>
          </div>
          <img src={logoBG} alt="BG" class="imageBg "/>
        </div>
        </div>
        </>
    )
}


export default HeroImage;