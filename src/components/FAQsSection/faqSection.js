import React from "react";
import "./faqSection.css";

function FAQs() {
  return (
    <>
      {" "}
      <div class="m-0 p-0 w-75 " style={{ backgroundColor: "#121212" }}>
        <div class=" m-3">
          <h1
            class="mb-4 text-center"
            style={{
              color: "white",
              fontSize: "50px",
              lineHeight: "75px",
              fontWeight: "600",
            }}
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
                <div class="accordion-body text-start">
                  You will not only get free membership of one month but also
                  10$ amazon voucher as a reward bonus.
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
                  aria-expanded="false"
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
                <div class="accordion-body text-start">
                  Yes, With our membership plans you can download your favourite
                  playlist and can listen any song offine.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
