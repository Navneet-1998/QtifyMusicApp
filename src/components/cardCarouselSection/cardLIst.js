import React from "react";
import "./cardLIst.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/less/pagination";
import "swiper/css/navigation";
import { CardSection, Card2Section } from "../cardSection/card";


function CardList(){
    return (
        <>
         <div class="d-flex flex-row justify-content-between" style={{margin:"0px 30px"}}>
            <div class="p-3">
              <CardSection />
            </div>
            <div class="p-3">
              <Card2Section />
            </div>
            <div class="p-3">
              <Card2Section />
            </div>
            <div class="p-3">
              <Card2Section />
            </div>
            <div class="p-3">
              <Card2Section />
            </div>
            <div class="p-3">
              <Card2Section />
            </div>
            <div class="p-3">
              <Card2Section />
            </div>
          </div>
        </>
    )
}


function CardListCarouels(){
  return (
    <>
    <Swiper
    style={{ "--swiper-navigation-size": "15px" }}
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    // breakpoints='{"768": {"slidesPerView": 3}}'
    navigation={true}
    modules={[Pagination, Navigation]}
  >
    <SwiperSlide>
     {CardList()}
    </SwiperSlide>
    <SwiperSlide>
    {CardList()}
    </SwiperSlide>
  </Swiper>
        </>
  )
}

export {CardListCarouels, CardList};
