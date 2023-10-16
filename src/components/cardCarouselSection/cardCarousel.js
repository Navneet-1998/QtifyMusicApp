import React, { useState } from "react";
import "./cardCarousel.css";
import {CardListCarouels, CardList} from "./cardLIst";

function CardCarousel() {
  const [showAll1, setshowAll1] = useState(false);

  function showOne() {
    if (showAll1) {
      setshowAll1(false);
    } else {
      setshowAll1(true);
    }
  }

  return (
    <>
      <div>
        <div className="mx-5 d-flex justify-content-between positionChange" >
          <p class="fs-4 fw-bold album m-0 p-0" style={{ color: "white" }}>
            Top Albums
          </p>

          {showAll1 ? (
            <>
              <p
                class="fs-5 fw-bold showing "
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
                class="fs-5 fw-bold showing"
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
              <div class="carousel-inner">{CardList()}</div>
              <div class="carousel-inner">{CardList()}</div>
            </>
          ) : (
            <>
              {" "}
             <CardListCarouels/>
            </>
          )}
        </div>
      </div>
      
    </>
  );
}


function CardCarousel2() {
    const [showAll1, setshowAll1] = useState(false);
  
    function showOne() {
      if (showAll1) {
        setshowAll1(false);
      } else {
        setshowAll1(true);
      }
    }
  
    return (
      <>
        <div>
          <div className="mx-5 d-flex justify-content-between positionChange" >
            <p class="fs-4 fw-bold album m-0 p-0" style={{ color: "white" }}>
              New Albums
            </p>
  
            {showAll1 ? (
              <>
                <p
                  class="fs-5 fw-bold showing "
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
                  class="fs-5 fw-bold showing"
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
                <div class="carousel-inner">{CardList()}</div>
                <div class="carousel-inner">{CardList()}</div>
              </>
            ) : (
              <>
                {" "}
             <CardListCarouels/>
              </>
            )}
          </div>
        </div>
        
      </>
    );
  }

export {CardCarousel, CardCarousel2};
