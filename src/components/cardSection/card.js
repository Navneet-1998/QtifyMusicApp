import React from "react";
import "./card.css"
import albumImg from "../../assets/Rectangle 2138.png"
import albumImg2 from "../../assets/Rectangle 2139.png"




function CardSection(){
    return ( 
         <>
         <div style={{width:"159px", height:"232px",gap:"6px"}} >
              <div
                class="card p-0 rounded-3"
                style={{ width: "10rem", height: "13rem" }}
              >
                <img
                  src={albumImg}
                  class="card-img-top "
                  style={{ width: "102%", height: "14rem", position:"relative",top:"-1%", left:"-1%"}}
                  alt="..."
                />
                <div class="card-body m-1 p-0 d-flex align-items-end " >
                  <a
                    href="###"
                    class="btn btn-primary btn-sm "
                    style={{width:"60%", fontSize:"11px", backgroundColor: "#121212", borderColor:"#121212", borderRadius:"12px 12px 12px 12px"}}
                  >
                    100 Follows
                  </a>
                </div>
              </div>
              <div class="m-1 text-start">
                <p id="name" style={{ color: "white",fontSize:"14px" }}>New Bollywood</p>
              </div>
              </div>
         </>
    )
}

function Card2Section(){
  return ( 
       <>
       <div style={{width:"159px", height:"232px",gap:"6px" }}>
            <div
              class="card p-0 rounded-3"
              style={{ width: "10rem", height: "13rem" }}
            >
              <img
                src={albumImg2}
                class="card-img-top "
                style={{ width: "102%", height: "14rem", position:"relative",top:"-1%", left:"-1%" }}
                alt="..."
              />
              <div class="card-body m-1 p-0 d-flex align-items-end " >
                <a
                  href="###"
                  class="btn btn-primary btn-sm "
                  style={{width:"60%", fontSize:"11px", backgroundColor: "#121212", borderColor:"#121212", borderRadius:"12px 12px 12px 12px"}}
                >
                  100 Follows
                </a>
              </div>
            </div>
            <div class="m-1 text-start">
              <p id="name" style={{ color: "white",fontSize:"14px" }}>New Bollywood</p>
            </div>
            </div>
       </>
  )
}



export {CardSection, Card2Section}