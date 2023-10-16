import { React, useState } from "react";
import "./landingPage.css";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { BsFillPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
// import music from "./Achko Machko.mp3";
import albumImg from "../Rectangle 2138.png"
import logoBG from "../vibrating-headphone 1.svg";
import inner from "./list";
import NavbarSection from "./navbar";



function Landing() {
  const [play, setplay] = useState(false);

//   const [checks,setcheck] = useState(false)
  const [showAll1, setshowAll1] = useState(false);
  const [showAll2, setshowAll2] = useState(false);

  function playOn() {
    if (play) {
      setplay(false);
    } else {
      setplay(true);
    }
  }

  function showOne() {
    if (showAll1) {
      setshowAll1(false);
    } else {
      setshowAll1(true);
    }
  }

  function showTwo() {
    if (showAll2) {
      setshowAll2(false);
    } else {
      setshowAll2(true);
    }
  }



  return (
    <>
      <NavbarSection/>
    
      <div class="m-0 p-0 w-100" style={{ backgroundColor: "#121212" }}>
       <div  class="mx-5 d-flex justify-content-center">
        <div style={{fontSize:"38px", color:"white", width:"45%", height:"100%", fontWeight:"700"}} class="text-center align-self-center mx-4"><p>100 Thousand Songs, ad-free Over thousand podcast episodes</p></div>
       <img src={logoBG} alt="BG" style={{ width: "20%" }} />
       </div>

        <div>
          <div className="mx-5 d-flex justify-content-between">
            <p class="fs-4 fw-bold" style={{ color: "white" }}>
              Top Albums
            </p>

            {showAll1 ? (
              <>
                <p
                  class="fs-5 fw-bold"
                  style={{
                    color: "#3cb01c",
                    cursor: "pointer",
                    transition: "0.5s",
                  }}
                  onClick={showOne}
                >
                  Collapse
                </p>
              </>
            ) : (
              <>
                <p
                  class="fs-5 fw-bold"
                  style={{
                    color: "#3cb01c",
                    cursor: "pointer",
                    transition: "0.5s",
                  }}
                  onClick={showOne}
                >
                  Show all
                </p>
              </>
            )}
          </div>
          <div id="carouselExample" class="carousel slide">
            {showAll1 ? (
              <>
                <div class="carousel-inner">{inner()}</div>
                <div class="carousel-inner">{inner()}</div>
              </>
            ) : (
              <>
                {" "}
                <div class="carousel-inner">{inner()}</div>{" "}
                <button
                  class="carousel-control-prev buttonboth"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="lefter"
                    aria-hidden="true"
                    style={{ color: "#66c65c", fontSize: "225%" }}
                  >
                    {" "}
                    <FaCircleChevronLeft style={{ color: "#66c65c" }} />
                  </span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next buttonboth"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="lefter"
                    aria-hidden="true"
                    style={{ color: "#66c65c", fontSize: "225%" }}
                  >
                    {" "}
                    <FaCircleChevronRight style={{ color: "#66c65c" }} />
                  </span>
                  <span class="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>

          <div className="mx-5 d-flex justify-content-between">
            <p class="fs-4 fw-bold" style={{ color: "white" }}>
              New Albums
            </p>
            {showAll2 ? (
              <>
                <p
                  class="fs-5 fw-bold"
                  style={{
                    color: "#3cb01c",
                    cursor: "pointer",
                    transition: "0.5s",
                  }}
                  onClick={showTwo}
                >
                  Collapse
                </p>
              </>
            ) : (
              <>
                <p
                  class="fs-5 fw-bold"
                  style={{
                    color: "#3cb01c",
                    cursor: "pointer",
                    transition: "0.5s",
                  }}
                  onClick={showTwo}
                >
                  Show all
                </p>
              </>
            )}
          </div>
          <div id="carouselExample1" class="carousel slide">
            {showAll2 ? (
              <>
                <div class="carousel-inner">{inner()}</div>
                <div class="carousel-inner">{inner()}</div>
              </>
            ) : (
              <>
                <div class="carousel-inner">{inner()}</div>

                <button
                  class="carousel-control-prev buttonboth"
                  type="button"
                  data-bs-target="#carouselExample1"
                  data-bs-slide="prev"
                >
                  <span
                    class="lefter"
                    aria-hidden="true"
                    style={{ color: "#66c65c", fontSize: "225%" }}
                  >
                    {" "}
                    <FaCircleChevronLeft style={{ color: "#66c65c" }} />
                  </span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next buttonboth"
                  type="button"
                  data-bs-target="#carouselExample1"
                  data-bs-slide="next"
                >
                  <span
                    class="lefter"
                    aria-hidden="true"
                    style={{ color: "#66c65c", fontSize: "225%" }}
                  >
                    {" "}
                    <FaCircleChevronRight style={{ color: "#66c65c" }} />
                  </span>
                  <span class="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>

        <div
          class=" mt-3 border-top border-bottom border-success"
          style={{ color: "#66c65c" }}
        >
          <div className="mx-5 mt-3">
            <p class="fs-4 fw-bold" style={{ color: "white" }}>
              Songs
            </p>
          </div>
          <div class="overflow-hidden mx-4 text-center mb-3 d-flex" style={{width:"40%", color:"white",height:"60px"}}>
              <div class="fs-5 ms-4 me-4" id="underline" style={{width:"12%", cursor:"pointer" }}>
                <div ><b>All</b></div>
              </div>
            <div class="row fs-5 d-flex justify-content-between text-center" style={{width:"45%"}}>
              <div class="col-2 hover-underline-animation  text-center" style={{width:"18%", cursor:"pointer" }}>
                <div > <b>Rock</b></div>
              </div>
              <div class="col-2 hover-underline-animation  text-center" style={{cursor:"pointer" }}>
                <div ><b>Jass</b></div>
              </div>
              <div class="col-2 hover-underline-animation  text-center" style={{cursor:"pointer" }}>
                <div ><b>Pop</b></div>
              </div>
              <div class="col-2 hover-underline-animation  text-center" style={{width:"20%", cursor:"pointer" }} > 
                <b >Blues</b>
              </div>
            </div>
          </div>
          <div id="carouselExample2" class="carousel slide">
            <div class="carousel-inner">{inner()}</div>
            <button
              class="carousel-control-prev buttonboth"
              type="button"
              data-bs-target="#carouselExample2"
              data-bs-slide="prev"
            >
              <span
                class="lefter"
                aria-hidden="true"
                style={{ color: "#66c65c", fontSize: "225%" }}
              >
                {" "}
                <FaCircleChevronLeft style={{ color: "#66c65c" }} />
              </span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next buttonboth"
              type="button"
              data-bs-target="#carouselExample2"
              data-bs-slide="next"
            >
              <span
                class="lefter"
                aria-hidden="true"
                style={{ color: "#66c65c", fontSize: "225%" }}
              >
                {" "}
                <FaCircleChevronRight style={{ color: "#66c65c" }} />
              </span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class=" m-5">
          <h1
            class="mb-4 text-center"
            style={{ color: "white", fontSize: "60px" }}
          >
            FAQs
          </h1>

          <div class="accordion mb-3 rounded-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Will i get free membership plan on refferral credit?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  You will not only get free membership of one month but also 10$ amazon voucher as a reward bonus.
                </div>
              </div>
            </div>
          </div>

          <div class="accordion mb-3" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                 Can i download any song or playlist?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                 Yes, With our membership plans you can download your favourite playlist and can listen any song offine.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top border-primary">
          <div class="container-fluid d-flex ">
            <div class="d-flex justify-content-start">
              <img
                src={albumImg}
                class="card-img-top my-3 ms-4 me-2 round"
                style={{ width: "7rem", height: "7rem" }}
                alt="..."
              />
              <div style={{ color: "white" }} class="mt-5">
                <span style={{ fontSize: "20px" }}>Song name</span>
                <p style={{ fontSize: "15px" }}> Album name</p>
              </div>
            </div>
            <div class="d-flex justify-content-center my-1 mx-3 w-75 flex-column">
              <div
                class=" flex-column text-center"
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "50px",
                  display: "block",
                }}
              >
                {play ? (
                   < BsPauseCircleFill
                   onClick={playOn}
                   style={{ transition: "0.7s" }}
                 />
                ) : (
                 < BsFillPlayCircleFill
                  onClick={playOn}
                  style={{ transition: "0.7s" }}
                />
                )}
              </div>
              <div class=" flex-column mt-2 justify-content-center">
                {/* <audio
                  src={music}
                  controls
                  class="border-0"
                  style={{color:"black", width:"900px", height:"30px",}}
                >
                </audio> */}
                <div class="audio-player  text-center">
                  <div class="d-flex">
                    <div class="time m-1">
                      <div class="current">
                        <b>0:38</b>
                      </div>
                      <div class="length"></div>
                    </div>
                    <div class="timeline m-1 rounded-3">
                      <div class="progress"></div>
                    </div>
                    <div class="time m-1">
                      <div class="current">
                        <b>3:38</b>
                      </div>
                      <div class="length"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
